import React from 'react'

const skills = [
  { name: 'Backend', level: 'Stack principal', desc: 'Node.js · Express.js · FastAPI · JWT · APIs REST · MySQL / PostgreSQL' },
  { name: 'Frontend', level: 'UI y SPA', desc: 'React 18 · JavaScript · HTML · CSS' },
  { name: 'DevOps / Deployment', level: 'Infra y despliegue', desc: 'Docker · Vercel · Railway' },
  { name: 'Otros', level: 'Herramientas y soporte', desc: 'Soporte técnico · Git / GitHub · Postman' },
]

function Skills() {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {skills.map((s) => (
          <div key={s.name} className="card p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{s.name}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{s.level}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
