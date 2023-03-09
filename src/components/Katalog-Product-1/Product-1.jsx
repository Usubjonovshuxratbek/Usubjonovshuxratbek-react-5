import React from 'react'
import './Product-1.scss'
import Container from '../Container/Container'
import newProductOne from '../../assets/img/product-10.png'
import newProductTwo from '../../assets/img/product-11.png'
import newProductThree from '../../assets/img/product-12.png'
import newProductFour from '../../assets/img/product-13.png'
import Search from '../../assets/img/search.png'

function Product1() {
  return (
    <section className='product-1'>
        <Container>
        <div className="inner">
        <p className='sub-title'>Главная / Каталог</p>
        <h2 className='title'>Каталог</h2>
        <div className="new-products">
        <div className="product">
                <img src={newProductOne} alt="" />
            </div>
            <div className="product">
                <img src={newProductTwo} alt="" />
            </div>
            <div className="product">
                <img src={newProductThree} alt="" />
            </div>
            <div className="product">
                <img src={newProductFour} alt="" />
            </div>
        </div>
        <div className="search-box">
            <div className="right">
                <form action="#" className='form'>
                    <input className='inp' type="text" placeholder='Поиск' />
                    <img className='search' src={Search} alt="" />
                </form>
                <div className="liner"></div>
            </div>
            <div className="left">
                <p className='text'>Сортировка:</p>
                <select className='select'>
                <option value="По цене">По цене</option>
                <option value="По цене">По цене</option>
                <option value="По цене">По цене</option>
                </select>
            </div>
        </div>
        </div>
    </Container>
    </section>
  )
}

export default Product1
