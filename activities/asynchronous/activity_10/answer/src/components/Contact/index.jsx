import { useState } from 'react'
import './styles.css'

function ContactForm() {
  const [openClass, setOpenClass] = useState('')

  function handleToggleForm() {
    if (openClass === '') {
      setOpenClass('open')
    } else {
      setOpenClass('')
    }
  }

  return (
    <>
      <aside id="contact-form" className={openClass}>
        <h4>Envie uma proposta de projeto</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descrção</label>
            <textarea className="form-control" id="description"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </aside>
      <button
        onClick={handleToggleForm}
        className="btn btn-primary"
      >
        Novo Projeto
      </button>
    </>
  )
}

export default ContactForm
