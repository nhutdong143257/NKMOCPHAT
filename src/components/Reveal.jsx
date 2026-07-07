import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Reveal({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  // MOBILE: hiện luôn, không hiệu ứng, không cần cuộn
  if (isMobile) {
    return <div>{children}</div>;
  }

  // DESKTOP: giữ hiệu ứng cuộn tới đâu hiện tới đó
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
