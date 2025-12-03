import React from 'react'

type Project = {
  name: string
  desc: string
  stack: string[]
  demo?: string
  code?: string
}

const projects: Project[] = [
  {
    name: 'Popayán Nocturna – Backend',
    desc:
      'Backend completo en Node.js/Express con autenticación JWT, verificación por correo, recuperación de contraseña, roles y permisos, sistema de calificaciones, reportes y notificaciones. Integración con Cloudinary, Nodemailer y despliegue en Railway + Vercel.',
    stack: ['Node.js', 'Express', 'JWT', 'Cloudinary', 'Nodemailer', 'Railway', 'Vercel'],
    demo: '#',
    code: '#',
  },
  {
    name: 'Popayán Nocturna – React Frontend',
    desc:
      'Interfaz en React 18 con rutas protegidas, consumo de API REST, validación con React Hook Form + Yup, gestión de datos con React Query y panel de SuperAdmin (usuarios, eventos, lugares y solicitudes).',
    stack: ['React 18', 'TypeScript', 'React Router', 'React Hook Form', 'Yup', 'React Query', 'Vite'],
    demo: '#',
    code: '#',
  },
  {
    name: 'Red Sentinel – Full Stack con IA',
    desc:
      'Sistema inteligente de monitoreo de red con backend en Node.js, frontend en React, microservicio de IA en FastAPI, base de datos y app móvil. Detecta patrones sospechosos y genera acciones de mitigación.',
    stack: ['Node.js', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    demo: '#',
    code: '#',
  },
]

function Projects() {
  return (
    <div className="section">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((p) => (
          <div key={p.name} className="card p-5 flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.name}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 flex-1">{p.desc}</p>
            <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Stack: {p.stack.join(' · ')}
            </div>
            <div className="mt-4 flex gap-3">
              {p.name === 'Popayán Nocturna – Backend' && (
                <>
                  <button type="button" className="btn btn-primary" onClick={() => alert("La API sí está desplegada... pero no tiene vista 😅🧑‍💻")}>Demo</button>
                  <a href="https://github.com/YonnierDev/popnocturna" target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                </>
              )}
              {p.name === 'Popayán Nocturna – React Frontend' && (
                <>
                  <a href="https://frontendpopa.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>
                  <a href="https://github.com/YonnierDev/frontendpopa" target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                </>
              )}
              {p.name === 'Red Sentinel – Full Stack con IA' && (
                <>
                  <button type="button" className="btn btn-primary" onClick={() => alert('Ups... aún no tenemos este proyecto desplegado 😅')}>Demo</button>
                  <a href="https://github.com/YonnierDev/red-sentinel" target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
