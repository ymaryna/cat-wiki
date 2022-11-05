import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpecificCat from './components/SpecificCat';

function App() {
  return (
    <>
    <Navbar />
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<SpecificCat/>} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
