import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Pages/Home'
import About from './Component/Pages/About'
import Skills from './Component/Pages/Skills'
import Certifications from './Component/Pages/Certification'
import Projects from './Component/Pages/Project'
import Experience from './Component/Pages/Experience'
import Contact from './Component/Pages/Contact'
import Footer from './Component/Pages/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <main className='main-content'>
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App