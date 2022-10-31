import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from "./container/About/About"
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import "./App.scss"
const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
  </div>
);

export default App;
