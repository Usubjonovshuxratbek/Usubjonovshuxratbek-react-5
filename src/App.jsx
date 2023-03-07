import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Product1 from './components/Product-1/Product-1';
import Product2 from './components/Product-2/Product-2';
import Product3 from './components/Product-3/Product-3';
import Rek from './components/Rek/Rek';
import Product4 from './components/Product-4/Product-4';
import Product5 from './components/Product-5/Product-5';
import About from './components/About/About';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
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
      <Routes>
        <Route path='/' element={Home} />
      </Routes>
    </div>
  );
}

export default App;
