import './styles.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="title">
          <h1>Luciano Weslen</h1>
          <h4>Desenvolvedor Web</h4>
        </div>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="bx bx-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#about">Sobre mim</a></li>
            <li className="nav-item"><a className="nav-link active" href="#academic">Formação</a></li>
            <li className="nav-item"><a className="nav-link active" href="#work">Experiências</a></li>
            <li className="nav-item"><a className="nav-link active" href="#projects">Projetos</a></li>
            <li className="nav-item"><a className="nav-link active" href="#contact">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
