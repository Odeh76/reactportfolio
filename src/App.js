import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import styled from 'styled-components';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}



export default App;
