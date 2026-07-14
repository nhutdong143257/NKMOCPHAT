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
    threshold: isMobile ? 0 : 0.15,
    rootMargin: isMobile ? "0px 0px -50px 0px" : "0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: isMobile ? 0.35 : 0.6,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
