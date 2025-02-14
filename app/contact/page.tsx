"use client"

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Title from '@/components/ui/Title'
import { MailOutlineOutlined, Phone, PlaceOutlined } from '@mui/icons-material'
import contacts from '@/lib/contacts.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'tween', duration: 0.3, ease: 'easeOut' }
  }
}

const Contact = () => {
  const contactIcons = {
    "phone": <Phone fontSize='medium' />,
    "email": <MailOutlineOutlined fontSize='medium' />,
    "address": <PlaceOutlined fontSize='medium' />
  }

  return (
    <motion.div 
      className='p-11'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title title='Contact' span='Contact' />
      
      <section>
        <div className='pt-16 flex justify-between'>
          <motion.div 
            className='flex flex-col w-1/2'
            variants={containerVariants}
          >
            <motion.h4 
              className='text-color_bali mb-9 text-2xl'
              variants={itemVariants}
            >
              Prenez Contact
            </motion.h4> 
            
            <form className='flex flex-col gap-5 items-center justify-center w-full'>
              <motion.div 
                variants={containerVariants}
                className='flex flex-col gap-5 w-full'
              >
                <motion.input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder='Votre nom' 
                  required
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder='Votre email' 
                  required
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea 
                  name="message" 
                  id="msg" 
                  cols={30} 
                  rows={10} 
                  placeholder='Votre message' 
                  required
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </motion.div>
              <Button
                variant={"contact"}
                className='button-gradient text-white'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer l&rsquo;email
              </Button>
            </form>
          </motion.div>

          {/* Cartes de contact */}
          <motion.div 
            className='flex flex-col w-1/2 items-center'
            variants={containerVariants}
          >
            {contacts.map((contact, index) => (
              <motion.div 
                key={contact.id}
                className='flex w-4/5 items-center rounded-xl px-6 py-5 gap-8 bg-backgroundCard mb-6 first-of-type:mt-12 last-of-type:mb-0'
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className='border border-border_color p-3'
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  {contactIcons[contact.icon as keyof typeof contactIcons]}
                </motion.div>
                <div className='flex flex-col gap-1'>
                  <h6 className='text-color_bali text-lg'>{contact.title}</h6>
                  <p>{contact.contact1}</p>
                  <p>{contact.contact2}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact