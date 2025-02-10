import React from 'react'

interface TitleProps {
    title: string,
    span: string
}

const Title = ({ title, span }: TitleProps) => {
  return (
    <div className=''>
        <h2>{title} <span className='spans'>{span}</span></h2>
    </div>
  )
}

export default Title