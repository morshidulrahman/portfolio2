import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from "./container/About/About"
import "./App.scss"
const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
  </div>
);

export default App;
