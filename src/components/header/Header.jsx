import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export const Header = () => {
  return (
   <header>
      <div id='home' className='container header__container'>
        <h1>Peter Olofsson</h1>
        <h5 className='text-light'>Junior Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="Peter Olofsson" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
   </header>
  )
}

export default Header