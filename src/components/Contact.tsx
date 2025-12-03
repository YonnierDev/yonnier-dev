import React from 'react'

function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Contacto</h2>
      <p className="text-slate-700 dark:text-slate-300 mb-6">¿Tienes una oportunidad laboral, proyecto o colaboración? Hablemos.</p>

      <ul className="space-y-2 mb-10">
        <li><a className="text-primary-600 hover:underline" href="https://wa.me/573138754025" target="_blank" rel="noreferrer">WhatsApp: 313 875 4025</a></li>
        <li><a className="text-primary-600 hover:underline" href="mailto:yonnierleon@gmail.com">Email: yonnierleon@gmail.com</a></li>
        <li><a className="text-primary-600 hover:underline" href="https://github.com/YonnierDev" target="_blank" rel="noreferrer">GitHub: YonnierDev</a></li>
      </ul>

    </div>
  )
}

export default Contact
