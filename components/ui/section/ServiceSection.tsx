"use client";

import { motion } from "framer-motion";
import ServiceCard from '../ServiceCard';
import Title from '../Title';
import services from '@/lib/services.json';

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
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    }
  }
};

const ServiceSection = () => {
  return (
    <div className='pt-16'>
      <Title title='Services' span='Services' subTitle={true} />
    
      <motion.div
        className='grid mt-12 grid-cols-1 gap-8 md:gap-5 auto-rows-fr md:grid-cols-3'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
          >
            <ServiceCard 
              img={service.image}
              title={service.title}
              paragraph={service.paragraph}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSection;