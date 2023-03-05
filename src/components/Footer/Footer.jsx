import React from 'react'
import Container from '../Container/Container'
import './Footer.scss'
import FooterLogo from '../../assets/img/logo.png'
import Instagiram from '../../assets/img/instagiram.png'
import Facebook from '../../assets/img/facebook.png'
import Twitter from '../../assets/img/twitter.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <div className="footer-inner">
                    <div className="block-1">
                        <img className='logo' src={FooterLogo} alt="" />
                        <p className='text'>© 2021 “Copper Pro” Все права защищенны</p>
                        <Link className='link' to=''>Политика конфиденциальности</Link>
                    </div>
                    <div className="block-2">
                        <ul className='list'>
                            <li className='item'>
                                <h3 className='title'>Навигация</h3>
                                <Link className='link active' to=''>Каталог</Link>
                                <Link className='link' to=''>Новости</Link>
                                <Link className='link' to=''>Доставка</Link>
                                <Link className='link' to=''>О нас</Link>
                                <Link className='link' to=''>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block-3">
                        <ul className='list'>
                            <li className='item'>
                                <h3 className='title'>Каталог</h3>
                                <Link className='link' to=''>Для эфирных масел</Link>
                                <Link className='link' to=''>Для гидролатов</Link>
                                <Link className='link' to=''>Медная посуда</Link>
                                <Link className='link' to=''>Аксессуары из меди</Link>
                                <Link className='link' to=''>Индивидуальный заказ</Link>
                                <Link className='link' to=''>Скидки и предложения</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="block-4">
                        <ul className='list'>
                            <li className='item'>
                                <h3 className='title'>Контакты</h3>
                                <p className='text'>Бажана 8-Б, Киев, 02132 Украина</p>
                                <span className='phone'>+38 (096) 990 67 56</span>
                                <Link className='mail' to=''>a.alambik@gmail.com</Link>
                                <div className="social-media">
                                    <img src={Twitter} alt="" />
                                    <img src={Facebook} alt="" />
                                    <img src={Instagiram} alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;