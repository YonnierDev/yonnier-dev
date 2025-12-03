import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
      <div className="section flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-300">
        <p>© {year} Yonnier Leon — Desarrollador Full Stack | Backend</p>
        <a className="text-primary-600 hover:underline" href="https://github.com/YonnierDev" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}

export default Footer
