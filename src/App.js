import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Listings from './components/Listings'
import Login from './components/Login'
import Register from './components/Register'
import Search from './components/Search'


function App() {
  return (
 <>

 <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/listings" element={<Listings />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/search" element={<Search />}></Route>
           
            </Routes>
        </BrowserRouter>
 </>
  );
}

export default App;
