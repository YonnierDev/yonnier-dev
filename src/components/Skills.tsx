import React from 'react'

const skills = [
  { name: 'HTML', level: 'Avanzado', desc: 'Semántica, accesibilidad, SEO base.' },
  { name: 'CSS', level: 'Avanzado', desc: 'Flexbox, Grid, responsive, Tailwind.' },
  { name: 'JavaScript', level: 'Avanzado', desc: 'ES6+, asincronía, testing.' },
  { name: 'TypeScript', level: 'Intermedio/Avanzado', desc: 'Tipos, generics, buenas prácticas.' },
  { name: 'React', level: 'Avanzado', desc: 'Hooks, context, performance, SPA.' },
  { name: 'Git', level: 'Intermedio', desc: 'Flujos git, PRs, CI/CD básico.' },
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
