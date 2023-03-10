import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Katalog from './pages/Katalog/Katalog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import { useEffect } from 'react';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=> {
    if(window.localStorage.getItem('key')) {
      console.log(window.localStorage.getItem('key'));
    }else {
      navigate('./login')
    }
  },[])
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/katalog' element={<Katalog />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;