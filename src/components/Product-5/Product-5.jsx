import React from 'react'
import './Product-5.scss'
import ProductOne from '../../assets/img/product-1.png'
import ProductTwo from '../../assets/img/product-2.png'
import ProductThree from '../../assets/img/product-3.png'
import ProductLike from '../../assets/img/card-like.png'
import Container from '../Container/Container'

const Product = () => {
    return (
        <section className='products-5'>
            <Container>
                <div className="inner">
                    <h3 className='center'>Скидки</h3>
                    <div className="cards">
                        <div className="card-1">
                            <img className='img' src={ProductOne} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={ProductLike} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-2">
                            <img className='img' src={ProductTwo} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={ProductLike} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-3">
                            <img className='img' src={ProductThree} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={ProductLike} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                    </div>
                    <button className='btn'>Перейти в каталог</button>
                </div>
            </Container>
        </section>
    )
}

export default Product;
