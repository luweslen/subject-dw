import React from 'react'
import './App.css';
import axios from 'axios'

//criando a classe principal do site, que controla o conteúdo
//mostrado na única página do site (é uma aplicação SPA - Single Page Application)
class App extends React.Component {    

  //construtor da classe com seus parâmetros
  constructor(props){
    super(props)    
    this.state = {}     //o state guardará as variáveis que serão atualizadas no decorrer da execução do programa

    //configurando o loop de eventos do JS e vinculando métodos que vamnos construir abaixo como
    //parte da cadeia de execução de eventos da linguagem
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //configurando a que deve ser carregado enquanto a página é montada no navegador do cliente
  async componentDidMount(){
    const response = await axios.get('http://localhost:8080/mensagens')   //fazemos a requisição ao servidor e aguardamos
    this.setState({mensagens:response.data})    //aqui a requisição já retornou, é só atualizar o State

  }

  //configurando a atualização em tempo real do State de nova mensagem
  //cada letra digitada pelo usuário no formulário vem para este método
  handleChange(event){
    this.setState({novaMensagem: event.target.value});
  }

  //configurando o envio de dados do formulário para o servidor Node
  async handleSubmit(event){
    
    //aguardamos o retorno do servidor, para então proceguir com a atualização da página
    //note que para aguardar, preciamos declarar a função com assíncrona (async) e ordenar
    //que a linha abaixo espero o retorno da requisção (await) antes de seguir em frente
    const response = await axios.post('http://localhost:8080/mensagens', {novaMensagem : this.state.novaMensagem})

    //encerra a cadeia de eventos
    event.preventDefault();
  }

  //configurando a construção da listagem de mensagems que aparece na página
  loadMessages(){
    let listaMensagens = []
    
    //só vamos atualizar o conteúdo da página quanto houver alguma coisa
    //dentro do State de Mensagens
    if(this.state["mensagens"]){
      listaMensagens.push(<h2>Mensagens do Sistema</h2>)

      this.state.mensagens.data.forEach(mensagem => {
        listaMensagens.push(<p>{mensagem.descricao}</p>)
      });
    }

    return listaMensagens
  }

  //configurando o que deve aparecer dentro da página principal do site
  //note que temos aqui um formulário seguido de uma listagem de mensagens
  render(){
      return (
        <section>                  

          <article>
            <h2>Nova Mensagem </h2>

            <form onSubmit={this.handleSubmit}>  
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <input type="text" className="form-control" name="mensagem" value={this.state.novaMensagem} onChange={this.handleChange} />
              </div>
              <div className="enviar">
                <button type="submit" className="btn btn-success">Enviar</button>
              </div>
            </form>

          </article>


          <article className="listaMensagens">
              {this.loadMessages()}
          </article>

        </section>
      );
  }


}

export default App;
