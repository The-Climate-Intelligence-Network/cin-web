"use client";
import Image from "next/image";
import { motion } from "motion/react";

// Pin positions as % of container — tuned to Sri Lanka map shape
const MAP_PINS = [
  { top: "16%", left: "78%", delay: 0.2, y: [0, -10, 0] as number[], duration: 4.5 }, // North
  { top: "28%", left: "32%", delay: 0.6, y: [0, 10, 0]  as number[], duration: 5.0 }, // West
  { top: "25%", left: "40%", delay: 1.2, y: [0, 10, 0]  as number[], duration: 5.0 }, // West
  { top: "38%", left: "53%", delay: 2.0, y: [0, -8, 0]  as number[], duration: 4.0 }, // Center
  { top: "53%", left: "24%", delay: 3.0, y: [0, 9, 0]   as number[], duration: 5.5 }, // South-west
  { top: "75%", left: "54%", delay: 4.0, y: [0, -10, 0] as number[], duration: 4.8 }, // South-east
];

export default function HeroMap() {
  return (
    <div className="flex-1 w-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
      <Image
        src="/graphics/map1.svg"
        alt="Sri Lanka climate network map"
        fill
        className="object-contain drop-shadow-sm"
        priority
      />

      {MAP_PINS.map((pin, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: pin.top, left: pin.left }}
          initial={{ opacity: 0, scale: 0, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: pin.y }}
          transition={{
            // Entrance: fade + springy pop-in, staggered per pin
            opacity: { delay: pin.delay, duration: 0.4, ease: "easeOut" },
            scale:   { delay: pin.delay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            // Levitate: starts after entrance, loops forever, desynchronized
            y: {
              delay: pin.delay + 0.5,
              repeat: Infinity,
              duration: pin.duration,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/graphics/mappin.svg"
            alt="Map pin"
            width={28}
            height={45}
            className="drop-shadow-md"
          />
        </motion.div>
      ))}
    </div>
  );
}
