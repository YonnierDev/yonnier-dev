import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio" className="pt-20">
          <Hero />
        </section>
        <section id="sobre-mi" className="py-20">
          <About />
        </section>
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/40">
          <Skills />
        </section>
        <section id="proyectos" className="py-20">
          <Projects />
        </section>
        <section id="contacto" className="py-20 bg-slate-50 dark:bg-slate-900/40">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
