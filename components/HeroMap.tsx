"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { 
  ThermometerSun,
  WavesArrowUp,
  Bird,
  FishSymbol,
  TreeDeciduous,
  Droplet,
  Construction, 
  type LucideIcon
} from "lucide-react";

// Pin positions as % of container — tuned to Sri Lanka map shape
const MAP_PINS = [
  { label: "Heat", top: "10%", left: "78%", delay: 0.2, y: [0, -10, 0], duration: 4.5, icon: ThermometerSun }, // North
  { label: "Bioacoustics", top: "28%", left: "27%", delay: 0.6, y: [0, 10, 0], duration: 5.0, icon: Bird }, // West
  { label: "Water Quality", top: "25%", left: "35%", delay: 1.2, y: [0, 10, 0], duration: 5.0, icon: Droplet }, // West
  { label: "Natural Disasters", top: "38%", left: "53%", delay: 2.0, y: [0, -8, 0], duration: 4.0, icon: WavesArrowUp }, // Center
  { label: "Deforestation", top: "56%", left: "22%", delay: 3.0, y: [0, 9, 0], duration: 5.5, icon: TreeDeciduous }, // South-west
  { label: "Illegal Constructions", top: "73%", left: "46%", delay: 4.0, y: [0, -10, 0], duration: 4.8, icon: Construction }, // South-east
  { label: "Invasive Species", top: "55%", left: "84%", delay: 4.5, y: [0, -8, 0], duration: 4.2, icon: FishSymbol }, // Center
];

interface PinProps {
  icon: LucideIcon;
  label: string;
}

const MapPin = ({ icon: Icon, label }: PinProps) => (
  <div className="group relative flex flex-col items-center overflow-visible">
    {/* Tooltip */}
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
      <div className="bg-[#3F664F] text-[#F0EAFF] text-xs font-bold py-1.5 px-3 rounded shadow-lg flex items-center gap-2">
        {label}
      </div>
      {/* Tooltip arrow */}
      <div className="w-2 h-2 bg-[#3F664F] rotate-45 absolute left-1/2 -translate-x-1/2 -bottom-1"></div>
    </div>

    <div className="relative w-[42px] h-[66px] drop-shadow-md overflow-visible transition-transform duration-200 group-hover:scale-110">
      {/* Pin Shape */}
      <svg 
        viewBox="0 0 40 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible translate-x-[1px] translate-y-[1px]"
      >
        <path 
          fill="#6E5A9E" 
          stroke="#662D91" 
          strokeMiterlimit="10" 
          strokeWidth="0.5px" 
          d="M39.9,20C39.9,31,20,64,20,64S0.1,31,0.1,20C0.1,9,9,0.1,20,0.1s19.9,8.9,19.9,19.9Z"
        />
        <circle fill="#F0EAFF" cx="20" cy="20" r="12.3"/>
      </svg>
      
      {/* Icon Layer — centered in the white circle */}
      <div className="absolute top-[33%] left-[53%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Icon 
          size={14} 
          strokeWidth={2.5} 
          style={{ color: '#46A6A8' }} 
        />
      </div>
    </div>
  </div>
);

export default function HeroMap() {
  return (
    <div className="flex-1 w-full min-h-[400px] flex items-center justify-center relative overflow-visible">
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
          style={{ top: pin.top, left: pin.left, zIndex: 10 + i }}
          initial={{ opacity: 0, scale: 0, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: pin.y as number[] }}
          whileHover={{ zIndex: 100 }}
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
          <MapPin icon={pin.icon} label={pin.label} />
        </motion.div>
      ))}
    </div>
  );
}
