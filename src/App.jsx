import React from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Solution from './components/Solution'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Services/>
      <Solution/>
      <Footer/>
    </div>
  )
}

export default App