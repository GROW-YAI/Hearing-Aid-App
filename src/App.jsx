import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Solution from './components/Solution';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="solution"><Solution /></section>
      <section id="contact"><Contact /></section>
      <Footer/>
    </div>
  );
};

export default App;
