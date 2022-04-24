const mongoose = require('mongoose')

//criando o esquema do mongo para representar um contato
//no banco de dados
const ContatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String
})

//expondo nosso esquema para se tornar
//acessivel a outras parter do programa via importação
module.exports = function () {
  
  //aqui o esquema e compilado pela primeira vez e fica pronto para uso
  return mongoose.model('Contato', ContatoSchema)

}
