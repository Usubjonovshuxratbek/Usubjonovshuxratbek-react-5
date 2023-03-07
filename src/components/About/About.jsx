import React from 'react'
import './About.scss'
import Container from '../Container/Container'
import Avatar from '../../assets/img/avatar.png'
import Union from '../../assets/img/union.png'

function About() {
  return (
    <section className='about'>
        <Container>
            <div className="about-inner">
                <h2 className='center'>Что думают о нас</h2>
                <div className="cards">
                <div className="card">
                        <div className="photo">
                        <img className='user' src={Avatar} alt="" />
                        <img className='union' src={Union} alt="" />
                        </div>
                        <h3 className='title'>Иван Иванов</h3>
                        <p className='text'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                        <span className='date'>20.10.21</span>
                    </div>
                    <div className="card">
                    <div className="photo">
                        <img className='user' src={Avatar} alt="" />
                        <img className='union' src={Union} alt="" />
                        </div>
                        <h3 className='title'>Иван Иванов</h3>
                        <p className='text'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                        <span className='date'>20.10.21</span>
                    </div>
                    <div className="card">
                    <div className="photo">
                        <img className='user' src={Avatar} alt="" />
                        <img className='union' src={Union} alt="" />
                        </div>
                        <h3 className='title'>Иван Иванов</h3>
                        <p className='text'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                        <span className='date'>20.10.21</span>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About
