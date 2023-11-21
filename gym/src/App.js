import React from 'react'
import HomePage from './Pages/HomePage';
import Mission from './Pages/Mission';
import NoPage from './Pages/NoPage';
import NavBar from './components/homepage/NavBar';
import Career from './Pages/Careers';
import CareerCreate from './Pages/CareerCreate';

import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route index element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/mission" element={<Mission />}/>
            <Route path="/career" element={<Career />}/>
            <Route path="/contract" element={<CareerCreate />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
