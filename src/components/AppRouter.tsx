import React from 'react'
import { Routes, Route } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<HomePage/>} path='/'></Route>
        <Route element={<AboutPage/>} path='/about'></Route>
    </Routes>
  )
}

export default AppRouter