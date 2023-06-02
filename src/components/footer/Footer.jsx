import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <p className='footer__logo'>The Polestar Shell</p>

      <ul className='permalinks'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer