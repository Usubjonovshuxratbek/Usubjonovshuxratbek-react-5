import React from 'react'
import './Product-3.scss'
import Container from '../Container/Container'
import ProductOne from '../../assets/img/product-1.png'
import ProductTwo from '../../assets/img/product-2.png'
import ProductThree from '../../assets/img/product-3.png';
import ProductLike from '../../assets/img/card-like.png'

function Product() {
    return (
        <section className='product'>
            <Container>
                <div className="product-inner">
                    <h2 className='center'>новинки</h2>
                    <div className="cards">
                        <div className="card-1">
                            <img className='img' src={ProductOne} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={ProductLike} alt="" />
                            </button>
                            <div className="info">
                                <div className="info-text">
                                    <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                </div>
                                <div className="info-price">
                                    <span className='old-price'>1 953 грн</span>
                                    <span className='new-price'>1 953 грн</span>
                                </div>
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

export default Product
