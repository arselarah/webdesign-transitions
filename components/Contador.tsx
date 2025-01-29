import React from "react";
import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

function Contador() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 3 });
    return () => controls.stop();
  }, []);
  return <motion.div className="text-white head_text">{rounded}</motion.div>;
}

export default Contador;
