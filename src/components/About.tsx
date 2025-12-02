import React from 'react'

function About() {
  return (
    <div className="section">
      <h2 className="section-title">Sobre mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        <div className="md:col-span-3 text-slate-700 dark:text-slate-300 space-y-4">
          <p>
            Soy un desarrollador frontend enfocado en construir interfaces limpias, accesibles y de alto rendimiento usando React y TypeScript.
          </p>
          <p>
            Disfruto transformar ideas en productos reales con atención al detalle, buenas prácticas y una base sólida de testing y performance.
          </p>
          <p>
            Me mantengo al día con el ecosistema web moderno y me gusta colaborar en equipos donde el diseño y la experiencia del usuario son prioridad.
          </p>
        </div>
        <aside className="md:col-span-2">
          <div className="card p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Datos rápidos</h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center justify-between"><span>Años de experiencia</span><span className="font-medium">3+</span></li>
              <li className="flex items-center justify-between"><span>Stack principal</span><span className="font-medium">React, TS, Tailwind</span></li>
              <li className="flex items-center justify-between"><span>Ciudad</span><span className="font-medium">Tu ciudad</span></li>
              <li className="flex items-center justify-between"><span>Disponibilidad</span><span className="font-medium">Freelance / Remoto</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default About
