import React from 'react'
import './About-Hero.scss'
import Container from '../Container/Container';
import HeroBg from '../../assets/img/about-hero-img.png'
import Imzo from '../../assets/img/imzo.png'

function AboutHero() {
  return (
    <section className="about-hero">
      <Container>
      <p className='text'>Главная / О нас</p>
      <div className="hero-inner">
        <div className="info">
          <h2 className='sub-title'>О нас</h2>
          <div className="liner"></div>
          <h3 className='title'>Мы любим все, что сделано из меди</h3>
          <div className="signature">
            <div className="info">
              <p>Иван Иванов</p>
            </div>
            <div className="img">
              <img src={Imzo} alt="" />
            </div>
          </div>
        </div>
        <div className="img">
          <img src={HeroBg} alt="" />
        </div>
      </div>
      </Container>
    </section>
  )
}

export default AboutHero
