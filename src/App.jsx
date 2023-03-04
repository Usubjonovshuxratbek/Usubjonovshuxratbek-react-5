import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Product1 from './components/Product-1/Product-1';

function App() {
  return (
    <div className="App">
      <Header />
      <Product1 />
      <Routes>
        <Route path='/' element={Home} />
      </Routes>
    </div>
  );
}

export default App;
