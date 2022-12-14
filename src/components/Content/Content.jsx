import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';
import Error404 from '../../pages/Error';

export default class Content extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/projects" element={ <Projects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Error404 /> } />
      </Routes>
    );
  }
}
