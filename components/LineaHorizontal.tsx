import { motion } from "framer-motion";

export default function LineaHorizontal() {
  return (
    <>
      <motion.div
        initial={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        whileInView={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
        className="w-full h-[1px] bg-white relative opacity-50"
      />
    </>
  );
}
