//configurações iniciais no terminal de comandos
//npm init
//npm install express  --save
//npm install cors --save

var express = require('express')
var app = express()
var cors = require('cors')

//simulando BD
var mensagens = [
  { descricao: 'ola mundo!' }
]

const messagesToUpperCase = () => mensagens.map((msg) => ({ descricao: msg.descricao.toUpperCase() }))

//configurações
app.use(cors())
app.use(express.json())
app.use(express.urlencoded());

//rotas
app.get('/mensagens', (req, res) => {
  const data = messagesToUpperCase()
  console.log(data)
  res.send({ data })
})

//rotas
app.post('/mensagens', (req, res) => {
  let novaMensagem = req.body.novaMensagem

  mensagens.push({ descricao: novaMensagem })

  const data = messagesToUpperCase()

  res.send({ data })
})



//ligar servidor
app.listen(8080, () => {
  console.log('Servidor Rodando!')
})