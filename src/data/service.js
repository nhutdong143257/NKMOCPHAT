// ===== IMPORT =====
import namecard from "../assets/image/service/namecard.jpg";
import flyer from "../assets/image/service/toroi.jpg";
import catalog from "../assets/image/service/catalog.jpg";
import poster from "../assets/image/service/poster.jpg";
import baobi from "../assets/image/service/baobi.jpg";
import sticker from "../assets/image/service/sticker.png";

import brochure from "../assets/image/service/brochure.jpg";
import profile from "../assets/image/service/profile.jpg";
import folder from "../assets/image/service/folder.jpg";
import thiep from "../assets/image/service/thiep.jpg";
import menu from "../assets/image/service/menu.jpg";
import giaytieude from "../assets/image/service/giaytieude.jpg";

import banner from "../assets/image/service/banner.jpg";
import standee from "../assets/image/service/standee.jpeg";
import backdrop from "../assets/image/service/backdrop.jpg";
import banghieu from "../assets/image/service/banghieu.jpg";

import hopgiay from "../assets/image/service/hopgiay.jpg";
import tuigiay from "../assets/image/service/tuigiay.jpg";
import hopcung from "../assets/image/service/hopcung.jpg";
import lygiay from "../assets/image/service/lygiay.jpg";
import tuizip from "../assets/image/service/tuizip.jpg";
import hopnhua from "../assets/image/service/hopnhua.jpg";
import nhanhop from "../assets/image/service/nhanhop.jpg";
import nhanbaobi from "../assets/image/service/nhanbaobi.jpg";

import decal from "../assets/image/service/decal.jpeg";
import temnhan from "../assets/image/service/temnhan.webp";
import tembaohanh from "../assets/image/service/tembaohanh.webp";
import decalkinh from "../assets/image/service/decalkinh.jpg";
import decaltuong from "../assets/image/service/decaltuong.jpg";
import decalxe from "../assets/image/service/decalxe.webp";
import temqr from "../assets/image/service/temqr.jpg";
import temchonggia from "../assets/image/service/temchonggia.jpg";

import sach from "../assets/image/service/insach.jpg";
import tapchi from "../assets/image/service/tapchi.webp";
import kyyeu from "../assets/image/service/kyyeu.jpg";
import photobook from "../assets/image/service/photobook.jpg";
import luanvan from "../assets/image/service/luanvan.jpg";
import giaotrinh from "../assets/image/service/giaotrinh.jpg";
import truyen from "../assets/image/service/truyen.jpg";
import tailieu from "../assets/image/service/tailieu.jpg";
import sotay from "../assets/image/service/sotay.jpg";

import phongbi from "../assets/image/service/phongbi.jpg";
import hoadon from "../assets/image/service/hoadon.jpg";
import bieumau from "../assets/image/service/bieumau.jpg";
import sotayvp from "../assets/image/service/sotayvp.jpg";
import thenhanvien from "../assets/image/service/thenhanvvien.png";
import theten from "../assets/image/service/theten.jpeg";

import lich from "../assets/image/service/lich.jpg";
import quatang from "../assets/image/service/quatang.png";
import tuivai from "../assets/image/service/tuivai.jpg";
import hiflex from "../assets/image/service/hiflex.jpg";

// ===== TEMPLATE DESC =====
const makeDesc = (title) =>
  `${title} chuyên nghiệp, chất lượng cao với công nghệ in hiện đại. 
Chúng tôi đảm bảo màu sắc sắc nét, độ bền cao và phù hợp nhiều mục đích sử dụng. 
Hỗ trợ thiết kế theo yêu cầu, đáp ứng nhanh chóng với chi phí tối ưu.`;

// ===== CATEGORY DATA =====
const categories = [
  {
    name: "Danh thiếp & giấy tờ",
    base: [
      { slug: "in-namecard", title: "In Namecard", img: namecard },
      { slug: "in-to-roi", title: "In Tờ rơi", img: flyer },
      { slug: "in-brochure", title: "In Brochure", img: brochure },
      { slug: "in-catalogue", title: "In Catalogue", img: catalog },
      { slug: "in-profile", title: "In Profile", img: profile },
      { slug: "in-folder", title: "In Folder", img: folder },
      { slug: "in-thiep", title: "In Thiệp", img: thiep },
      { slug: "in-menu", title: "In Menu", img: menu },
      { slug: "in-giay-tieu-de", title: "In Giấy tiêu đề", img: giaytieude },
    ],
  },

  {
    name: "Quảng cáo khổ lớn",
    base: [
      { slug: "in-poster", title: "In Poster", img: poster },
      { slug: "in-banner", title: "In Banner", img: banner },
      { slug: "in-standee", title: "In Standee", img: standee },
      { slug: "in-backdrop", title: "In Backdrop", img: backdrop },
      { slug: "in-bang-hieu", title: "In Bảng hiệu", img: banghieu },
      { slug: "in-hiflex", title: "In Hiflex", img: hiflex },
    ],
  },

  {
    name: "Bao bì & thương hiệu",
    base: [
      { slug: "in-bao-bi", title: "In Bao bì", img: baobi },
      { slug: "in-hop-giay", title: "In Hộp giấy", img: hopgiay },
      { slug: "in-tui-giay", title: "In Túi giấy", img: tuigiay },
      { slug: "in-hop-cung", title: "In Hộp cứng", img: hopcung },
      { slug: "in-ly-giay", title: "In Ly giấy", img: lygiay },
      { slug: "in-tui-zip", title: "In Túi zip", img: tuizip },
      { slug: "in-hop-nhua", title: "In Hộp nhựa", img: hopnhua },
      { slug: "in-nhan-hop", title: "In Nhãn hộp", img: nhanhop },
      { slug: "in-tem-bao-bi", title: "In Tem bao bì", img: nhanbaobi },
    ],
  },

  {
    name: "Tem & decal",
    base: [
      { slug: "in-sticker", title: "In Sticker", img: sticker },
      { slug: "in-decal", title: "In Decal", img: decal },
      { slug: "in-tem-nhan", title: "In Tem nhãn", img: temnhan },
      { slug: "in-tem-bao-hanh", title: "In Tem bảo hành", img: tembaohanh },
      { slug: "in-decal-kinh", title: "Decal kính", img: decalkinh },
      { slug: "in-decal-tuong", title: "Decal tường", img: decaltuong },
      { slug: "in-decal-xe", title: "Decal xe", img: decalxe },
      { slug: "in-tem-qr", title: "Tem QR", img: temqr },
      { slug: "in-tem-chong-gia", title: "Tem chống giả", img: temchonggia },
    ],
  },

  {
    name: "Xuất bản & sách",
    base: [
      { slug: "in-sach", title: "In Sách", img: sach },
      { slug: "in-tap-chi", title: "In Tạp chí", img: tapchi },
      { slug: "in-ky-yeu", title: "In Kỷ yếu", img: kyyeu },
      { slug: "in-photobook", title: "In Photobook", img: photobook },
      { slug: "in-luan-van", title: "In Luận văn", img: luanvan },
      { slug: "in-giao-trinh", title: "In Giáo trình", img: giaotrinh },
      { slug: "in-truyen", title: "In Truyện", img: truyen },
      { slug: "in-tai-lieu", title: "In Tài liệu", img: tailieu },
      { slug: "in-so-tay", title: "In Sổ tay", img: sotay },
    ],
  },

  {
    name: "Văn phòng",
    base: [
      { slug: "in-phong-bi", title: "In Phong bì", img: phongbi },
      { slug: "in-hoa-don", title: "In Hóa đơn", img: hoadon },
      { slug: "in-bieu-mau", title: "In Biểu mẫu", img: bieumau },
      { slug: "in-so-tay-vp", title: "Sổ tay văn phòng", img: sotayvp },
      { slug: "in-the-nhan-vien", title: "Thẻ nhân viên", img: thenhanvien },
      { slug: "in-the-ten", title: "Thẻ tên", img: theten },
    ],
  },

  {
    name: "Quà tặng & khác",
    base: [
      { slug: "in-lich", title: "In Lịch", img: lich },
      { slug: "in-qua-tang", title: "In Quà tặng", img: quatang },
      { slug: "in-tui-vai", title: "In Túi vải", img: tuivai },
    ],
  },
];

// ===== BUILD SERVICES =====
export const services = categories.flatMap((cat, i) =>
  cat.base.map((item, j) => ({
    id: i * 10 + j + 1,
    slug: item.slug,
    title: item.title,
    desc: makeDesc(item.title),
    img: item.img,
    category: cat.name,
  })),
);
