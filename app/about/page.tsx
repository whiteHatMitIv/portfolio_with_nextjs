import ImageSection from '@/components/ui/section/ImageSection'
import ServiceSection from '@/components/ui/section/ServiceSection'
import Title from '@/components/ui/Title'
import React from 'react'

const About = () => {
  return (
    <div className='p-6 max-md:w-screen md:p-11'>
      <div>
        <Title title='Qui suis-je?' span='Qui suis-je?' />
        <ImageSection  />
        <ServiceSection />
      </div>
    </div>
  )
}

export default About