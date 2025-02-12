"use client"

import Image from "next/image"
import Title from "../Title"
import technologies from "@/lib/framework.json"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    }
  }
};

const Technology = () => {
  return (
    <div className="p-11">
      <section className="relative z-10">
        <Title title="Framework" span="Framework" subTitle={true} />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {technologies.map((tech) => (
            <motion.div 
              key={tech.id}
              variants={cardVariants}
              className="relative flex items-center justify-center h-32 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <Image 
                src={tech.icon} 
                alt={tech.alt}
                height={80}
                width={80}
                className="h-12 w-12 object-contain filter drop-shadow-glow hover:drop-shadow-glow-hover transition-all duration-300"
              />
              <h4 className="ml-4 text-lg font-semibold">
                {tech.title}
              </h4>
              <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Technology