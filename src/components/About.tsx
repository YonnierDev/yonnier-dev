import React from 'react'

function About() {
  return (
    <div className="section">
      <h2 className="section-title">Sobre mí</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        <div className="md:col-span-3 text-slate-700 dark:text-slate-300 space-y-4">
          <p>
            Tecnólogo en ADSO (SENA) con experiencia práctica en desarrollo full stack, creación de APIs REST y trabajo con bases de datos. Me enfoco en construir soluciones funcionales y mantenibles que aporten valor real.
          </p>
          <p>
            He desarrollado proyectos reales usando <strong>Node.js</strong>, <strong>Express</strong>, <strong>React</strong> y <strong>FastAPI</strong>, integrando <strong>JWT</strong> para autenticación, y bases de datos <strong>MySQL</strong> y <strong>PostgreSQL</strong>.
          </p>
          <p>
            También he trabajado con microservicios con IA y despliegues en la nube (<strong>Vercel</strong>, <strong>Railway</strong>). Aprendo rápido, resuelvo problemas y puedo aportar en backend, frontend y soporte técnico.
          </p>
        </div>
        <aside className="md:col-span-2">
          <div className="card p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Datos rápidos</h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center justify-between"><span>Perfil</span><span className="font-medium">Tecnólogo en ADSO – SENA</span></li>
              <li className="flex items-center justify-between"><span>Rol</span><span className="font-medium">Full Stack | Backend | Soporte Técnico</span></li>
              <li className="flex items-center justify-between"><span>Backend</span><span className="font-medium">Node.js, Express, FastAPI</span></li>
              <li className="flex items-center justify-between"><span>Bases de datos</span><span className="font-medium">MySQL / PostgreSQL</span></li>
              <li className="flex items-center justify-between"><span>Frontend</span><span className="font-medium">React 18</span></li>
              <li className="flex items-center justify-between"><span>Despliegue</span><span className="font-medium">Vercel / Railway</span></li>
              <li className="flex items-center justify-between"><span>Idiomas</span><span className="font-medium">Español (Nativo), Inglés (Intermedio)</span></li>
              <li className="flex items-center justify-between"><span>Ubicación</span><span className="font-medium">Popayán, Colombia</span></li>
              <li className="flex items-center justify-between"><span>Contacto</span><span className="font-medium">yonnierleon@gmail.com</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default About
