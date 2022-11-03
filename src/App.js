import React from 'react';
import Navbar from "../src/app/components/Navbar/Navbar"
import Footer from "../src/app/components/Footer/Footer"
import Testimonial from './app/components/Testimonial/Testimonial';
import About from '../src/app/components/About/About'
import Work from "../src/app/components/Work/Work"
import Skills from './app/components/Skills/Skills';
import "./App.scss"
import Header from './app/components/Header/Header';
const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
