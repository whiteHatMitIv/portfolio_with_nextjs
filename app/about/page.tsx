import ImageSection from '@/components/ui/section/ImageSection'
import Title from '@/components/ui/Title'
import React from 'react'

const About = () => {
  return (
    <div className='p-11'>
      <div>
        <Title title='Qui suis-je?' span='Qui suis-je?' />
        <ImageSection  />
      </div>
    </div>
  )
}

export default About