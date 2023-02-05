import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Events from './Components/Events/Events'
import Footer from './Components/Footer/Footer'
import Hackathon from './Components/Hackathon/Hackathon'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import Team from './Components/Team/Team'
import Contact from './Components/ContactUs/Contact'
import PageNotFound from './Components/404/PageNotFound'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/hackathon' element={<Hackathon />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App