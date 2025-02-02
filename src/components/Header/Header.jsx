import React from 'react'
import logo from '../../assets/logo/Logo.svg'
const Header = () => {
  return (
    <header className='px-14 py-4 bg-[#045D5E] w-full'>
        <div className="logo-container max-w-7xl mx-auto">
            <img src={logo} alt={"logo"} />
        </div>
    </header>
  )
}

export default Header