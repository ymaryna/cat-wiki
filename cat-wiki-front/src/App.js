import './App.css';
import Home from './components/Home';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SpecificCat from './components/SpecificCat';
import TopTen from './components/TopTen';

function App() {
  return (
    <>
    <Navbar />
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:cat' element={<SpecificCat/>} />
        <Route path='/top-ten' element={<TopTen />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
