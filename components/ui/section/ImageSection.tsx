"use client"

import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { motion } from 'framer-motion'

const ImageSection = () => {
  return (
    <div className='flex gap-8 mt-12'>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='w-2/3'
      >
        <Image
          src="/img/Me.jpg"
          alt='Mon profil'
          width={720}
          height={1280}
          className='w-full h-full rounded-2xl'
        />
      </motion.div>
      <div className='flex flex-col justify-between w-full pt-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className='text-3xl text-color_bali'>
            Je suis <motion.span 
              className='spans text-3xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Ivan NTEUMI
            </motion.span>
          </h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='py-3 text-justify'
        >
          <p>
            Etudiant en Génie Logiciel passionné par le développement informatique et la création de solutions innovantes. Mon parcours académique, combiné à mes projets personnels, m&rsquo;a permis d&rsquo;acquérir des compétences solides en conception logicielle, développement web et mobile, ainsi qu&rsquo;en gestion de données.
            Ce portfolio est une vitrine de mon travail, où je partage mes projets, mes compétences et ma passion pour l&rsquo;univers du développement. N&rsquo;hésitez pas à explorer mes réalisations et à me contacter pour toute question ou collaboration.
            Merci de votre visite et bonne découverte !
          </p>
        </motion.div>

        <motion.div 
          className='flex pb-6'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className='pr-8'>
            {["Nom", "Age", "Nationalité", "Langue", "Localisation"].map((label, index) => (
              <motion.p
                key={label}
                className='font-semibold py-3'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {label}
              </motion.p>
            ))}
          </div>
          <div>
            {["Ivan NTEUMI", "19", "Camerounais", "Français, Anglais", "Douala-Yassa, Cameroun"].map((value, index) => (
              <motion.p
                key={value}
                className='py-3'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                : {value}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className='flex gap-8 pb-2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button 
            variant="contact" 
            href="/contact" 
            className='button-gradient text-white'
            whileHover={{ scale: 1.05, rotate: -1 }}
          />
          <Button 
            variant="cv" 
            download 
            fileName="mon-cv.pdf"
            className='button-gradient text-white'
            whileHover={{ scale: 1.05, rotate: 1 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ImageSection