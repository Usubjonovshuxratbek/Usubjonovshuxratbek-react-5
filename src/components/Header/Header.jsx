import React from 'react'
import Container from '../Container/Container'
import './Header.scss'
import Logo from '../../assets/img/logo.png'
import Like from '../../assets/img/like.png'
import User from '../../assets/img/user.png'
import Save from '../../assets/img/save.png'

function Header() {
  return (
    <header className='header'>
      <Container>
      <nav className='nav'>
      <div className="nav-right">
      <img className='logo' src={Logo} alt="" />
      </div>
      <div className="nav-center">
      <ul className='list'>
        <li className='item'>
          <a className='link active' href="/">Каталог</a>
          <a className='link' href="/">Новости</a>
          <a className='link' href="/">Доставка</a>
          <a className='link' href="/">О нас</a>
          <a className='link' href="/">Контакты</a>
        </li>
      </ul>
      </div>
        <div className="nav-left">
        <img src={Like} alt="" />
        <img src={User} alt="" />
        <img src={Save} alt="" />
        </div>
      </nav>
      <div className="hero">
        <h2 className='title'>Хит продаж</h2>
        <div className="liner"></div>
        <h4 className='text'>Дистиллятор для эфирных масел </h4>
        <div className="price">
          <span className='span-1'>Цена</span>
          <span className='span-2'>4 906 грн</span>
        </div>
        <button className='btn'>Купить</button>
      </div>
      </Container>
    </header>
  )
}

export default Header
