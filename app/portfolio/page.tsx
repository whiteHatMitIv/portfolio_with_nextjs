"use client"

import React, { useState } from 'react'
import { easeInOut, motion } from 'framer-motion'
import { GitHub } from '@mui/icons-material'
import { ExternalLink } from 'lucide-react'
import Title from '@/components/ui/Title'
import projects from "@/lib/projects.json"
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 6

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = projects.slice(indexOfFirstCard, indexOfLastCard)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  return (
    <div className='p-11'>
      <Title title='Portfolios' span='Portfolios' />

      <div className='mt-16'>
        <motion.div
          key={currentPage}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ amount: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'
        >
          {currentCards.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className='flex flex-col relative border border-border_color border-t-8 h-[60vh] rounded-lg transition-all duration-500 ease-in-out hover:border-t-[#1E90FF] hover:shadow-2xl hover:shadow-[#1E90FF]/20 overflow-hidden group hover:translate-y-2 hover:cursor-pointer'
            >
              <div className='h-[50%] relative overflow-hidden border-b border-b-border_color'>
                <Image
                  src={project.image}
                  alt={"image pour " + project.title}
                  fill={true}
                  sizes='(max-width: 768px) 90vw, 35vw'
                  priority
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>

              <div className='relative flex flex-col flex-grow bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-2xl px-6 py-3'>
                <h2 className='text-2xl font-semibold text-start text-[#007BFF] mb-2'>{project.title}</h2>
                <p className='mb-4 flex-grow text-justify'>{project.text}</p>

                <div className='flex absolute right-4 bottom-2 space-x-4 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {project.viewLink.length !== 0 && (
                    <Link
                      href={project.viewLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center px-2 py-2 bg-[#1E90FF] text-white rounded-full hover:bg-teal-600 transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                  {project.githubLink.includes('github.com') && (
                    <Link
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center px-2 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300'
                    >
                      <GitHub fontSize='small' />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className='flex justify-center mt-10 space-x-4'
        >
          {Array.from({ length: Math.ceil(projects.length / cardsPerPage) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-[#1E90FF] text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              } transition-colors duration-300`}
            >
              {i + 1}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;