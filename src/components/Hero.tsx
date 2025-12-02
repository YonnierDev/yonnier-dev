import React from 'react'

function Hero() {
  return (
    <div className="section flex min-h-[80vh] items-center">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 w-fit rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 backdrop-blur">
          Disponible para trabajar / freelance
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hola, soy <span className="text-primary-600">Yonnier Leon</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6">Desarrollador de software Full Stack </p>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Me apasiona crear interfaces limpias y experiencias de usuario modernas y buenas prácticas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#proyectos" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('proyectos'); if(el){ const y = el.getBoundingClientRect().top + window.scrollY - 72; window.scrollTo({top:y, behavior:'smooth'})}}} className="btn btn-primary w-full sm:w-auto">Ver proyectos</a>
          <a href="#" className="btn btn-outline w-full sm:w-auto">Descargar CV</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
