import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Каталог from './pages/Katalog/Katalog';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/katalog' element={<Каталог />} />
      </Routes>
    </div>
  );
}

export default App;
