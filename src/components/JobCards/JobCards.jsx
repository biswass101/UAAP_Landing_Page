import React from 'react'

const JobCards = ({title, desc}) => {
  return (
    <div className='job-card flex flex-col bg-[#FFFFFF] px-6 py-4 border border-[#26B5B7] rounded-xl'>
        <h2 className='job-title font-bold text-[20px] text-[#367D7E]'>{title}</h2>
        <ul className='list-disc ml-6 text-xl'>
            <li className=''>{desc}</li>
        </ul>
    </div>
  )
}

export default JobCards