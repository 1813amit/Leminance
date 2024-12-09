import React from 'react'
import { Route, Routes } from 'react-router';
import Layout from './Component/ProductListing/Layout';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import { Canvas } from '@react-three/fiber';
import "./App.css"
import Loder from './Component/Loder/Loder';
import Lodersoo from './Component/Loder/Lodersoo';
import Landingpagess from './Component/Home/Landingpagess';



function App() {
  return (

    <>
      {/* <Lodersoo /> */}
    
    <Routes>
      <Route path='/' element={<Lodersoo/>} />
      <Route path='/LAyout' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/LAyout:slug' element={<Detail/>} />
      </Route>
    </Routes>

    </>
    
  );
}

export default App;




