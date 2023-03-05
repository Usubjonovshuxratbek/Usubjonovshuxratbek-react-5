import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Product1 from './components/Product-1/Product';
import Rek from './components/Rek/Rek';
import Product10 from './components/Product-10/Product-10';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Product1 />
      <Rek />
      <Product10 />
      <Footer />
      <Routes>
        <Route path='/' element={Home} />
      </Routes>
    </div>
  );
}

export default App;
