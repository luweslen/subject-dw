import React from 'react'
import './App.css';
import axios from 'axios'

class App extends React.Component {    
  constructor(props){
    super(props)    
    this.state = {
      contatos: [],
      nome: '',
      telefone: '',
      email: ''
    }

    this.handleChangeNome = this.handleChangeNome.bind(this);
    this.handleChangeTelefone = this.handleChangeTelefone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    const response = await axios.get('http://localhost:3333/contatos')
    this.setState({ contatos: response.data })   

  }

  handleChangeNome(event){
    this.setState({nome: event.target.value});
  }
  handleChangeTelefone(event){
    this.setState({telefone: event.target.value});
  }
  handleChangeEmail(event){
    this.setState({email: event.target.value});
  }

  async handleSubmit(event){
    const response = await axios.post('http://localhost:3333/contatos', {
      nome: this.state.nome,
      telefone: this.state.telefone,
      email: this.state.email,
    })
    
    event.preventDefault();
  }

  loadMessages(){
    let listaContatos = []
    
    if(this.state["contatos"]){
      listaContatos.push(<h2>Contatos do Sistema</h2>)

      this.state.contatos.forEach(contato => {
        listaContatos.push(<p>{contato.nome} | {contato.email} | {contato.telefone}</p>)
      });
    }

    return listaContatos
  }

  render(){
      return (
        <section>                  

          <article>
            <h2>Novo contato</h2>

            <form onSubmit={this.handleSubmit}>  
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" className="form-control" name="nome" value={this.state.nome} onChange={this.handleChangeNome} />
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.handleChangeEmail} />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" className="form-control" name="telefone" value={this.state.telefone} onChange={this.handleChangeTelefone} />
              </div>
              <div className="enviar">
                <button type="submit" className="btn btn-success">Enviar</button>
              </div>
            </form>

          </article>


          <article className="listaContatos">
              {this.loadMessages()}
          </article>

        </section>
      );
  }


}

export default App;
