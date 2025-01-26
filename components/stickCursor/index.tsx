"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickyCursor() {
  const cursorSize = 400;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 100, stiffness: 300, mass: 1 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []); // Empty dependency array ensures the effect runs only once.

  return (
    <motion.div
      className="cursor z-10"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    >
      <div className="gradient_transitions"></div>
    </motion.div>
  );
}
