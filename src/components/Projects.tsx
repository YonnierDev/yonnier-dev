import Reveal from './Reveal'

type Project = {
  name: string
  desc: string
  stack: string[]
  accent: string
  demo?: string
  code?: string
}

const projects: Project[] = [
  {
    name: 'Popayán Nocturna – Backend',
    desc: 'Backend completo en Node.js/Express con autenticación JWT, verificación por correo, recuperación de contraseña, roles y permisos, sistema de calificaciones, reportes y notificaciones. Integración con Cloudinary, Nodemailer y despliegue en Railway + Vercel.',
    stack: ['Node.js', 'Express', 'JWT', 'Cloudinary', 'Nodemailer', 'Railway'],
    accent: '#3b82f6',
    code: 'https://github.com/YonnierDev/popnocturna',
  },
  {
    name: 'Popayán Nocturna – Frontend',
    desc: 'Interfaz en React 18 con rutas protegidas, consumo de API REST, validación con React Hook Form + Yup, gestión de datos con React Query y panel de SuperAdmin (usuarios, eventos, lugares y solicitudes).',
    stack: ['React 18', 'TypeScript', 'React Router', 'React Hook Form', 'React Query', 'Vite'],
    accent: '#8b5cf6',
    demo: 'https://frontendpopa.vercel.app/',
    code: 'https://github.com/YonnierDev/frontendpopa',
  },
  {
    name: 'Red Sentinel – Full Stack con IA',
    desc: 'Sistema inteligente de monitoreo de red con backend en Node.js, frontend en React, microservicio de IA en FastAPI, base de datos y app móvil. Detecta patrones sospechosos y genera acciones de mitigación.',
    stack: ['Node.js', 'React', 'FastAPI', 'PostgreSQL', 'Docker'],
    accent: '#10b981',
    code: 'https://github.com/YonnierDev/red-sentinel',
  },
]

function Projects() {
  return (
    <div className="section">
      <Reveal>
        <h2 className="section-title">Proyectos Destacados</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div
              className="card p-5 flex flex-col h-full"
              style={{ borderTop: `3px solid ${p.accent}` }}
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{p.name}</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 flex-1 leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map(tech => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>
                )}
                {p.code && (
                  <a href={p.code} target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                )}
                {!p.demo && !p.code && (
                  <span className="text-xs text-slate-500">Pronto</span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Projects
