import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import { useRef, useState } from "react";
import { supabase } from "../supabase";
import {
  Bold,
  Italic,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Minus,
  Link2,
  Unlink,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
} from "lucide-react";

const BUCKET = "uploads";

export default function Editor({ value, onChange }) {
  const fileInputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: { class: "rounded-xl my-4 max-w-full" },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-lime-600 underline" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  // ===== UPLOAD ẢNH VÀO NỘI DUNG =====
  const uploadImage = async (file) => {
    const cleanName = file.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9.]/g, "-");
    const fileName = `content-${Date.now()}-${cleanName}`;

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(fileName, file);
    if (error) throw error;

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleImagePick = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      console.error(err);
      alert("Chèn ảnh thất bại.");
    } finally {
      setUploading(false);
      e.target.value = ""; // reset để chọn lại cùng ảnh được
    }
  };

  const addLink = () => {
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("Nhập đường dẫn (URL):", previous || "https://");
    if (url === null) return; // bấm huỷ
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  // Nút toolbar: gọn, có trạng thái active
  const Btn = ({ onClick, active, disabled, title, children }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`w-9 h-9 flex items-center justify-center rounded-lg border transition disabled:opacity-40 ${
        active
          ? "bg-lime-600 text-white border-lime-600"
          : "bg-white text-gray-600 border-gray-200 hover:border-lime-400 hover:text-lime-600"
      }`}
    >
      {children}
    </button>
  );

  const Divider = () => <div className="w-px bg-gray-200 mx-1" />;

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* TOOLBAR */}
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 p-2 bg-gray-50">
        <Btn
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
          title="In đậm"
        >
          <Bold size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
          title="In nghiêng"
        >
          <Italic size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleStrike().run()}
          active={editor.isActive("strike")}
          title="Gạch ngang"
        >
          <Strikethrough size={16} />
        </Btn>

        <Divider />

        <Btn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
          title="Tiêu đề 2"
        >
          <Heading2 size={16} />
        </Btn>
        <Btn
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
          title="Tiêu đề 3"
        >
          <Heading3 size={16} />
        </Btn>

        <Divider />

        <Btn
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
          title="Danh sách chấm"
        >
          <List size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
          title="Danh sách số"
        >
          <ListOrdered size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
          title="Trích dẫn"
        >
          <Quote size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          title="Đường kẻ ngang"
        >
          <Minus size={16} />
        </Btn>

        <Divider />

        <Btn
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          active={editor.isActive({ textAlign: "left" })}
          title="Canh trái"
        >
          <AlignLeft size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          active={editor.isActive({ textAlign: "center" })}
          title="Canh giữa"
        >
          <AlignCenter size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          active={editor.isActive({ textAlign: "right" })}
          title="Canh phải"
        >
          <AlignRight size={16} />
        </Btn>

        <Divider />

        <Btn
          onClick={addLink}
          active={editor.isActive("link")}
          title="Chèn liên kết"
        >
          <Link2 size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          title="Bỏ liên kết"
        >
          <Unlink size={16} />
        </Btn>

        {/* CHÈN ẢNH */}
        <Btn
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          title="Chèn ảnh"
        >
          {uploading ? (
            <span className="w-4 h-4 border-2 border-lime-500/40 border-t-lime-600 rounded-full animate-spin" />
          ) : (
            <ImageIcon size={16} />
          )}
        </Btn>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImagePick}
        />

        <Divider />

        <Btn
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Hoàn tác"
        >
          <Undo size={16} />
        </Btn>
        <Btn
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Làm lại"
        >
          <Redo size={16} />
        </Btn>
      </div>

      {/* CONTENT */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-60 prose max-w-none focus:outline-none [&_.ProseMirror]:outline-none [&_.ProseMirror]:min-h-55"
      />
    </div>
  );
}