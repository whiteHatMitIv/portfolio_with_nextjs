"use client"

import { motion } from "framer-motion"

interface TitleProps {
    title: string,
    span: string,
    subTitle?: boolean
}

const Title = ({ title, span, subTitle=false }: TitleProps) => {
  return (
    <>
      {subTitle 
        ? 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay:0.20 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <h2 
              className='styleh2 font-heading text-color_bali text-5xl font-semibold uppercase tracking-[2px] pb-1'
            >
              {title} <span className='absolute font-bold text-titleSpanColor text-6xl left-0 top-1/4 -z-1 opacity-40'>{span}</span>
            </h2>
          </motion.div>
        :
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='relative'
          >
            <h2 
              className='styleh2 font-heading text-color_bali text-5xl font-semibold uppercase tracking-[2px] pb-1'
            >
              {title} <span className='absolute font-bold text-titleSpanColor text-6xl left-0 top-1/4 -z-1 opacity-40'>{span}</span>
            </h2>
          </motion.div>
      }
    </>
  )
}

export default Title