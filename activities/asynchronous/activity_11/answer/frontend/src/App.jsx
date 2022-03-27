import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Contact from './components/Contact'
import { api } from './services/API';

function App() {
  const [sections, setSections] = useState([])
  const [me, setMe] = useState({})

  useEffect(async () => {
    const { data: responseMe } = await api.get('/me')
    setMe(responseMe.data)

    const { data: responseSections } = await api.get('/sections', { params: { hasItems: true } })
    setSections(responseSections.data)
  });

  return (
    <>
      <Header me={me} />
      <div className='container d-flex flex-column justify-content-center'>
        {
          sections.map((section) => (
            <Section
              key={section.name}
              name={section.name}
              title={section.title}
              description={section.description}
              items={section.items}
            />
          ))
        }
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
