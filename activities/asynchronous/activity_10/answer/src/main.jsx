import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Contact from './components/Contact'
import { SectionsMock } from './mocks/SectionsMock'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className='container d-flex flex-column justify-content-center'>
      {
        SectionsMock.map((section) => (
          <Section
            key={section.issue}
            issue={section.issue}
            title={section.title}
            description={section.description}
            cards={section.cards}
          />
        ))
      }
      <Contact />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
