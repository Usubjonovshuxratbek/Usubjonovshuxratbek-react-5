import React from 'react'
import './Product-1.scss'
import Container from '../Container/Container'

const Product1 = () => {
    return (
        <div>
            <section className='product'>
            <Container>
                <div className='product-inner'>
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
                </div>
            </Container>
            </section>
        </div>
    )
}

export default Product1
