import './styles.css'

function Section(props) {
  return (
    <section id={props.issue}>
      <h2>{props.title}</h2>
      <p>{props.description}
      </p>
      <div className="cards">
        {
          props.cards.map((card, index) => (
            <div key={`card_${index}`} className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h4 className="card-title">
                  {card.title}
                </h4>
                <p className="card-text">
                  {card.description}
                </p>
                <a href={card.to} className="btn btn-primary">Ver mais</a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Section
