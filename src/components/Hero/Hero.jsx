import React from "react";
import { jobCategories } from '../../constants/index'
import JobCards from "../JobCards/JobCards";
import { calendar, heroGirl } from '../../assets/index'
const Hero = () => {
  return (
    <div className="hero-container flex items-center px-14 w-full bg-[#F9F3EF] min-h-[680px]">
      <div className="hero-contents flex justify-between items-center  max-w-7xl mx-auto mt-1 relative z-0">
        {/* <div className="vertical flex flex-col gap-10 w-full absolute z-1">
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
          <div className="line bg-[#045D5E] h-[1px] w-full" />
        </div>
        <div className="horizontal flex gap-10 absolute w-full z-2">
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />
            <div className="line bg-[#045D5E] min-h-[680px] w-[1px]" />          
        </div> */}
        <div className="section-1 flex flex-col gap-5">
          <h3 className='text-5xl font-bold text-[#045D5E]'>Begin a rewarding remote career as a freelance Sales Representative.</h3>
          <p className="text-[#252525] text-2xl">Shape student's futures while earning competitive commissions. Join &nbsp;
            <span className="text-[#045D5E]"><a href="#">uapp.uk</a></span> today!</p>
          <div className="job-cards flex flex-wrap justify-center items-center gap-4">
            {jobCategories.map((jobCategorie, idx) => (
              <JobCards key={idx} {...jobCategorie}/>
            ))}
          </div>
          <div className="apply-deadline flex gap-1">
            <img src={calendar} alt="icon" />
            <p className="date text-2xl font-[450] text-[#252525]">Application Deadline: 28/02/2025</p>
          </div>
        </div>
        <div className="section-2">
          <div className="hero-image w-[40vw]">
            <img 
              src={heroGirl} alt="heroGirl" 
              className="w-full h-auto"  
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
