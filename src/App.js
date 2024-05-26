import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PopularBooks from './components/PopularBooks';
import About from './components/About';
import Programmes from './components/Programmes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'animate.css/animate.min.css';
import './App.css'; // Add your custom CSS here

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <PopularBooks />
      <About />
      <Programmes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
