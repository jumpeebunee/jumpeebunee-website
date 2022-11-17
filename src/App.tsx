import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;