import React from 'react'
import Footer from '../../components/Katalog-Footer/Footer';
import Header from '../../components/Katalog-Header/Katalog-Header';
import Product1 from '../../components/Katalog-Product-1/Product-1';
import Product2 from '../../components/Katalog-product-2/Product-2';

function Каталог() {
  return (
    <div>
      <Header />
      <Product1 />
      <Product2 />
      <Footer />
    </div>
  )
}

export default Каталог;
