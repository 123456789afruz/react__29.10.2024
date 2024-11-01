import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog/Catalog'
import Oli from './components/OLi/Oli'
import About from './components/About/About'
import Where from './components/Where/Where'



const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Catalog/>
      <Oli/>
      <About/>
      <Where/>
      
    </>
  )
}

export default App