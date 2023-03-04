import React from 'react'
import './Product-1.scss'
import ProductOne from '../../assets/img/product-1.png'
import ProductTwo from '../../assets/img/product-2.png'
import ProductThree from '../../assets/img/product-3.png'
import Container from '../Container/Container'

const Product1 = () => {
    return (
        <div>
            <Container>
                <section className='product'>
                    <div className="block-1">
                        <h2 className='center'>Наша продукция</h2>
                        <div className="cards">
                            <div className="card-1"></div>
                            <div className="card-2"></div>
                            <div className="card-3"></div>
                            <div className="card-4"></div>
                            <div className="card-5"></div>
                            <div className="card-6"></div>
                        </div>
                    </div>
                    <div className="block-2">
                        <h2 className='center'>Лучшие продажи</h2>
                        <div className="cards">
                            <div className="card-1">
                                <img src={ProductOne} alt="" />
                                <div className="info">
                                    <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                    <span className='price'>1 953 грн</span>
                                </div>
                            </div>
                            <div className="card-2">
                                <img src={ProductTwo} alt="" />
                                <div className="info">
                                    <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                    <span className='price'>1 953 грн</span>
                                </div>
                            </div>
                            <div className="card-3">
                                <img src={ProductThree} alt="" />
                                <div className="info">
                                    <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                    <span className='price'>1 953 грн</span>
                                </div>
                            </div>
                        </div>
                        <button className='btn'>Перейти в каталог</button>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Product1
