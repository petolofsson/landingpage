import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Test 1 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Test 2 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Test 3 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Test 4 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Test 5 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Test 6 Project',
    github: 'https://github.com',
    demo: 'http://polestar.sh'
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div  className='portfolio__item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio