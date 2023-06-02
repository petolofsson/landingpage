import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Innovative Problem Solver with JavaScript React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid understanding of PHP and MySql</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to reason with and explain web solutions to customer in an understandable way</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Knowledgable about CI/CD with Git and Gitlab</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Run my own Linux Server (The Polestar Shell)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Extrovert coffee drinker and a team worker.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Game Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced with Unity Engine and C# programming.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience of working in teams with game designers and visuals artists.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>A huge love for gaming and game design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Actually likes debugging and optimizing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Been gaming since childhood.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Multiple years of experience of building brands through work and my own projects.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Understand the need for marketing in order to sell a product.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Ability to create marketing material like ads, videos and text with the Adobe Bundle</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Well versed in writing through severals years of working as a journalist</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Good at networking</p>
            </li>
          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services