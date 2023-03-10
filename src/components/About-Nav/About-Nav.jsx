import React from 'react'
import Container from '../Container/Container';
import './About-Nav.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'
import Like from '../../assets/img/likee.png'
import User from '../../assets/img/userr.png'
import Save from '../../assets/img/shopping-cart.png'

function Header() {
  return (
    <header >
      <nav className='about-nav'>
      <Container>
        <div className='nav'>
          <div className="nav-right">
            <img className='logo' src={Logo} alt="" />
          </div>
          <div className="nav-center">
            <ul className='list'>
              <li className='item'>
                <Link className='link'>Каталог</Link>
                <Link className='link'>Новости</Link>
                <Link className='link'>Доставка</Link>
                <Link className='link'>О нас</Link>
                <Link className='link'>Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="nav-left">
            <button className='btn-like'><img src={Like} alt="" /></button>
            <button className='btn-user'><img src={User} alt="" /></button>
            <button className='btn-save'><img src={Save} alt="" /></button>
          </div>
        </div>
      </Container>
    </nav>
    </header>
  )
}

export default Header;