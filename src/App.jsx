// import { useState } from 'react'
// import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResultPage from './components/ResultPage';
import Gallery from './components/Gallery';
import About from './components/About';
import './styles/index.css'

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  )
}
