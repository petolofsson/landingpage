import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Looking for Work</h5>
              <small>Let's talk</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Work In Progress</small>
            </article>
          </div>
          <p>
              I'm a 39 year old journalist that decided to change career to pursuit my life long passion for computers. I'm a social and extrovert problem solver that loves digging into new tech solutions.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About