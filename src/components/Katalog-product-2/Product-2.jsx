import React from 'react'
import ProductOne from '../../assets/img/product-1.png';
import ProductTwo from '../../assets/img/product-2.png';
import ProductThree from '../../assets/img/product-3.png';
import Like from '../../assets/img/like.png';
import Container from '../Container/Container';
import './Product-2.scss'

function Product2() {
    return (
        <section className='product-groups'>
            <Container>
                <div className="group-1">
                    <div className="cards">
                        <div className="card-1">
                            <img className='img' src={ProductOne} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-2">
                            <img className='img' src={ProductTwo} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-3">
                            <img className='img' src={ProductThree} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-2">
                    <div className="cards">
                        <div className="card-1">
                            <img className='img' src={ProductOne} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <button className='sale'>Sale</button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-2">
                            <img className='img' src={ProductTwo} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-3">
                            <img className='img' src={ProductThree} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-3">
                    <div className="cards">
                        <div className="card-1">
                            <img className='img' src={ProductOne} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <button className='sale'>Sale</button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-2">
                            <img className='img' src={ProductTwo} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                        <div className="card-3">
                            <img className='img' src={ProductThree} alt="" />
                            <button className='like-btn'>
                                <img className='like' src={Like} alt="" />
                            </button>
                            <div className="info">
                                <p className='text'>Медный чайник с фарфоровой ручкой</p>
                                <span className='price'>1 953 грн</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Product2;
