"use client"

import Image from "next/image"
import { motion } from "framer-motion" 

interface ServiceCardProps {
    img: string,
    title: string,
    paragraph: string
}

const ServiceCard = ({ img, title, paragraph }: ServiceCardProps) => {
  return (
    <motion.div 
        initial={{ y: 0 }}
        whileHover={{ y: 4 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col justify-center bg-backgroundCard border border-border_color border-t-8 rounded-lg overflow-hidden hover:border-t-primary cursor-pointer transition-colors duration-300 ease-in-out"
    >
        <div className="relative min-h-44 p-4 text-justify flex flex-col">
            <div className="flex justify-center">
                <Image
                    src={img}
                    alt={"Icône pour " + title}
                    width={64}
                    height={64}
                    className="object-contain"
                />
            </div>
            <h4 className="souligne relative text-color_bali text-base text-center m-4 pb-2">
                {title}
            </h4>
            <p className="flex-grow">{paragraph}</p>
        </div>
    </motion.div>
  )
}

export default ServiceCard