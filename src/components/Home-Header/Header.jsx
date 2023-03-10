import React from 'react'
import Container from '../Container/Container'
import './Header.scss'
import Logo from '../../assets/img/logo.png'
import Like from '../../assets/img/like.png'
import User from '../../assets/img/user.png'
import Save from '../../assets/img/save.png'
import { Link, Outlet } from 'react-router-dom'

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
        <Link className='link active' to='/katalog'>Каталог</Link>
        <Link className='link' to='/novocti'>Новости</Link>
        <Link className='link' to='/dostavka'>Доставка</Link>
        <Link className='link' to='/about'>О нас</Link>
        <Link className='link' to='/kontakt'>Контакты</Link>
        </li>
        <Outlet/>
      </ul>
      </div>
        <div className="nav-left">
        <button className='btn-like'><img src={Like} alt="" /></button>
        <button className='btn-user'><img src={User} alt="" /></button>
        <button className='btn-save'><img src={Save} alt="" /></button>
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
