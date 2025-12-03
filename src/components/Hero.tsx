import React from 'react'

function Hero() {
  return (
    <div className="section flex min-h-[80vh] items-center">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex justify-center">
          <div className="aspect-[16/9] w-56 sm:w-72 md:w-96 lg:w-[28rem] rounded-xl overflow-hidden shadow-sm">
            <img
              src="/logodev.png"
              alt="Logo Yonnier Leon"
              className="h-full w-full object-contain bg-transparent"
            />
          </div>
        </div>
        <div className="mx-auto mb-6 w-fit rounded-full border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 px-3 py-1 text-xs text-slate-600 dark:text-slate-300 backdrop-blur">
          Disponible para oportunidades
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hola, soy <span className="text-primary-600">Yonnier Leon</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6">Desarrollador Full Stack | Backend | Soporte Técnico</p>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Tecnólogo en ADSO con experiencia práctica en desarrollo full stack, APIs REST, JWT, bases de datos (MySQL/PostgreSQL), microservicios con IA y despliegues en la nube (Vercel, Railway). Construyo soluciones con Node.js, Express, React y FastAPI, aprendiendo rápido y aportando en backend, frontend y soporte técnico.
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
