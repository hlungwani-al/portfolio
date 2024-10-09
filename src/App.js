import './App.scss';
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact';
import Skills from './pages/skills';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import NavBar from './components/navbar';
import particlesConfig from './utils.js/particles';
import Portfolio from './pages/portfolio';
import Bonus from './pages/bonus';
import Certificates from './pages/certificates';
import Footer from './components/pagefooter';

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
    {/* particles*/}
    {renderParticleJsInHomePage && (
      <Particles id='particles' options={particlesConfig} init={handleInit} />
    )}

    {/* NavBar-Content*/}
    <NavBar />

    {/* MainPage-Content*/}
    <div className='App-main-page-content'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/certificates' element={<Certificates />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/bonus' element={<Bonus />} />
    </Routes>
    </div>
    {/* Footer-Content*/}
    <Footer />
    </div>
  );
}

export default App;
