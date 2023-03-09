import React from 'react'
import Header from '../../components/Home-Header/Header';
import Product1 from '../../components/Home-Product-1/Product-1';
import Product2 from '../../components/Home-Product-2/Product-2';
import Product3 from '../../components/Home-Product-3/Product-3';
import Rek from '../../components/Home-Rek/Rek';
import Product4 from '../../components/Home-Product-4/Product-4';
import Product5 from '../../components/Home-Product-5/Product-5';
import About from '../../components/Home-About/About';
import Work from '../../components/Home-Work/Work';
import Footer from '../../components/Home-Footer/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Product1 />
      <Product2 />
      <Product3 />
      <Rek />
      <Product4 />
      <Product5 />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default Home;
