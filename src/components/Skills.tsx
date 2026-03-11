import Reveal from './Reveal'

const skills = [
  {
    name: 'Backend',
    level: 'Stack principal',
    icon: '⚙️',
    accent: '#3b82f6',
    tags: ['Node.js', 'Express.js', 'FastAPI', 'JWT', 'REST APIs'],
  },
  {
    name: 'Frontend',
    level: 'UI y SPA',
    icon: '🎨',
    accent: '#8b5cf6',
    tags: ['React 18', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Bases de Datos',
    level: 'Persistencia',
    icon: '🗄️',
    accent: '#10b981',
    tags: ['MySQL', 'PostgreSQL'],
  },
  {
    name: 'DevOps',
    level: 'Infra y despliegue',
    icon: '🚀',
    accent: '#f59e0b',
    tags: ['Docker', 'Vercel', 'Railway'],
  },
  {
    name: 'Herramientas',
    level: 'Dev tools',
    icon: '🛠️',
    accent: '#ec4899',
    tags: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    name: 'IA & Microservicios',
    level: 'Integración avanzada',
    icon: '🤖',
    accent: '#06b6d4',
    tags: ['FastAPI', 'Microservicios', 'APIs IA'],
  },
]

function Skills() {
  return (
    <div className="section">
      <Reveal>
        <h2 className="section-title">Skills</h2>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 80}>
            <div
              className="card p-5 h-full"
              style={{ borderTop: `3px solid ${s.accent}` }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{s.name}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{s.level}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(tag => (
                  <span key={tag} className="badge">{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Skills
