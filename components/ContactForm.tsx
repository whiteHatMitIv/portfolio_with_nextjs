"use client"

import { motion } from 'framer-motion'
import Title from '@/components/ui/Title'
import { MailOutlineOutlined, Phone, PlaceOutlined } from '@mui/icons-material'
import contacts from '@/lib/contacts.json'
import { useForm } from 'react-hook-form'
import { FormData } from '@/types/mail-form'
import { zodResolver } from '@hookform/resolvers/zod'
import mailFormSchema from '@/lib/utils/validation/mail-validator'
import toast from 'react-hot-toast'

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

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>({
        resolver: zodResolver(mailFormSchema)
    })

    const onSubmit = async (formData: FormData) => {
        console.log(formData)
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
    
            const result = await response.json()
    
            if (!result.success) {
                console.log('Erreur lors de l’envoi de l’e-mail:', result.error)
                toast.error(result.error, {
                    position: 'bottom-center'
                })
            } else {
                console.log('E-mail envoyé avec succès !')
                toast.success('Message sent successfully!', {
                    position: 'bottom-center'
                })
                reset()
            }
        } catch (error) {
            console.log('Erreur de requête:', error)
        }
    }    

    const contactIcons = {
        "phone": <Phone fontSize='medium' />,
        "email": <MailOutlineOutlined fontSize='medium' />,
        "address": <PlaceOutlined fontSize='medium' />
    }

    return (
        <motion.div 
        className='p-6 max-md:pt-14 w-full'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        >
        <Title title='Contact' span='Contact' />
        
        <section>
            <div className='pt-16 flex flex-col w-full md:flex-row justify-between'>
            <motion.div 
                className='flex flex-col md:w-1/2'
                variants={containerVariants}
            >
                <motion.h4 
                className='text-color_bali mb-9 text-2xl'
                variants={itemVariants}
                >
                Prenez Contact
                </motion.h4> 
                
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 items-center justify-center w-full'>
                <motion.div 
                    variants={containerVariants}
                    className='flex flex-col gap-5 w-full'
                >
                    <motion.input 
                        type="text" 
                        id="name" 
                        placeholder='Votre nom' 
                        required
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02 }}
                        {...register('name')}
                    />
                    {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                    <motion.input 
                        type="email" 
                        id="email" 
                        placeholder='Votre email' 
                        required
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02 }}
                        {...register('email')}
                    />
                    {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    <motion.textarea 
                        id="msg" 
                        cols={30} 
                        rows={10} 
                        placeholder='Votre message' 
                        required
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02 }}
                        {...register('message')}
                    ></motion.textarea>
                    {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    type="submit"
                    aria-label="Envoyer l'email"
                    className="w-2/3 text-white bg-gradient-to-br from-cyan-300/80 via-blue-500 to-indigo-600 relative inline-block px-8 py-3 font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow items-center justify-center gap-2 md:w-1/2"
                >
                    {isSubmitting ? "Envoi de l'email..." : "Envoyer l'email"}
                </motion.button>

                </form>
            </motion.div>

            {/* Cartes de contact */}
            <motion.div 
                className='flex flex-col w-full md:w-1/2 items-center'
                variants={containerVariants}
            >
                {contacts.map((contact, index) => (
                <motion.div 
                    key={contact.id}
                    className='flex w-full md:w-4/5 items-center rounded-xl px-6 py-5 gap-8 bg-backgroundCard mb-6 first-of-type:mt-12 last-of-type:mb-0'
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

export default ContactForm