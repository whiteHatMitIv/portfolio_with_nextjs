"use client"

import { motion } from "framer-motion";

interface ProgressBarProps {
    title: string;
    width: string;
    text: string;
}

const ProgressBar = ({ title, width, text }: ProgressBarProps) => {
  return (
    <div className="w-full mb-4">
        <div className="flex justify-between mb-2">
            <h6 className="font-medium">{title}</h6>
            <p className="text-sm">{text}</p>
        </div>
        <div className="h-2 bg-gray-600 rounded-full">
            <motion.div 
                className="h-full bg-primary rounded-full"
                style={{ width: "0%" }}
                initial={{ width: "0%" }}
                animate={{ width: width }}
                transition={{ duration: 1, ease: "easeOut" }}
                role="progressbar" 
                aria-valuenow={parseInt(width)} 
                aria-valuemin={0} 
                aria-valuemax={100}
            />
        </div>
    </div>
  );
};

export default ProgressBar;