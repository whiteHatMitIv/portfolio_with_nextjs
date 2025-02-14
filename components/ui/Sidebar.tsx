"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "../Navigation";
import { Menu } from "@mui/icons-material";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  if (isMobile === null) return null;

  return (
    <div className="relative flex">
      {isMobile && isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={isMobile ? { x: '-100%' } : { width: '7vw' }}
        animate={isMobile ? 
          { x: isOpen ? 0 : '-100%', width: '16rem' } : 
          { width: isOpen ? '18vw' : '7vw' }
        }
        transition={{ duration: 0.3 }}
        className={`h-screen bg-side_bar_color text-foreground shadow-lg flex flex-col items-center ${
          isMobile ? 'fixed left-0 top-0 z-50' : 'relative'
        }`}
        style={isMobile ? { width: '16rem' } : undefined}
      >
        <Navigation isOpen={isOpen} toggleOpen={isMobile ? toggleOpen : () => {} } />
      </motion.div>

      {!isMobile && (
        <motion.button
          onClick={toggleOpen}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 ml-2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-50"
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </motion.button>
      )}

      {isMobile && (
        <div className="md:hidden relative flex-1 px-3 py-3">
          <div className="absolute inset-0 flex justify-evenly pointer-events-none z-[-1]">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-px h-full bg-border_color"
              />
            ))}
          </div>
          <button 
            aria-label="Ouvrir le menu"
            className="flex bg-backgroundCard items-center justify-center w-12 h-12 p-2 rounded-full text-white z-[60] text-2xl"
            onClick={toggleOpen}
          >
            <Menu fontSize="inherit" />
          </button>
        </div>
      )}
    </div>
  );
}