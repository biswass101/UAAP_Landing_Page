import React from 'react'
import { overView, reposibility, appyIf } from '../../constants/index'
import { team } from '../../assets/index'

const TermsCard = ({title, conditions}) => {
  return(
    <div className='terms-card p-4 bg-white flex flex-col gap-5'>
      <h1>{title}</h1>
      <ul>

      </ul>
    </div>
  )
}

const JobOverview = () => {
  return (
    <div className='overview-container bg-[#F9F3EF] px-14 py-12 flex flex-col items-center'>
      <div className="contents-1 flex items-center max-w-7xl mx-auto">
        <div className="section-1 flex flex-col gap-5">
          {overView.map((ele) => (
            <>
              <h1 className='text-4xl font-bold'>{ele.title}</h1>
              <p className='text-2xl text-[#515151]'>{ele.desc}</p>
            </>
          ))}
        </div>
        <div className="section-2">
          <div className="image-container w-[40vw]">
            <img src={team} alt="team" className='w-full h-auto'/>
          </div>
        </div>
      </div>
      {/* <div className="contents-2 max-w-7xl mx-auto flex items-center">
          <TermsCard key={1} {...reposibility}/>
          <TermsCard key={2} {...appyIf}/>
      </div> */}
    </div>
  )
}

export default JobOverview