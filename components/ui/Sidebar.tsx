"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../Navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative flex">
      {/* Sidebar animé */}
      <motion.div
        initial={{ width: "18vw" }}
        animate={{ width: isOpen ? "18vw" : "6vw" }}
        transition={{ duration: 0.3 }}
        className="h-screen bg-side_bar_color text-foreground shadow-lg flex flex-col items-center"
      >
        <Navigation isOpen={isOpen} />
      </motion.div>

      {/* Bouton pour plier/déplier */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        transition={{ duration: 0.3 }}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </motion.button>
    </div>
  );
}
