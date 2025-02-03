import React from 'react'
import { aboutUaap } from '../../constants/index'
const UappSection = ({title, desc}) => {
  return (
    <div className='max-w-[620px] flex flex-col gap-5'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <p className='text-2xl text-[#515151]'>{desc}</p>
    </div>
  )
}

const AboutUapp = () => {
  return (
    <div className='ab-company-container px-14 py-12'>
      <div className="cntnts flex justify-between max-w-7xl mx-auto">
        {aboutUaap.map((ele, idx) => (
          <UappSection key = {idx} {...ele}/>
        ))}
      </div>
    </div>
  )
}

export default AboutUapp