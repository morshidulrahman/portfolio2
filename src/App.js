import React from 'react';
import Navbar from '../src/app/components/Navbar/Navbar';
import Header from '../src/app/container/Header/Header';
import About from "../src/app/container/About/About"
import Work from '../src/app/container/Work/Work';
import Skills from '../src/app/container/Skills/Skills';
import Testimonial from './app/container/Testimonial/Testimonial';

import "./App.scss"
const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
  </div>
);

export default App;
