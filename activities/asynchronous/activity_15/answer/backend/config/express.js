require('dotenv').config()
var express = require('express')
var cors = require('cors')
var load = require('express-load')
var methodOverride = require('method-override')
const mongoose = require('mongoose')
//Todas as configurações específicas da nossa aplicação
//serão concentradas neste arquivo
module.exports = function () {
	//iniciando o framework express
	var app = express()

	//criando uma variavel de contexto global 
	//para a porta de rede que vamos usar para 
	//testes
	app.set('port', 3333)

	//configurando o express e suas dependências,
	//como a política de controle de acesso externo
	//aos recursos do servidor (cors)
	//e também a conversão automática de parâmetros de requisição para JSON (express.json)
	app.use(methodOverride())
	app.use(cors())
	app.use(express.json())
	app.use(express.urlencoded())

	//Conexão com banco de dados mongoDb
	const uri = process.env.MONGO_URL;
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

	//configurando o carregamento automático de controladores e models
	//da aplicação, na ordem correta
	load('models', { cwd: 'app' })
		.then('controllers')
		.then('routes')
		.into(app);

	//retornando aplicação configurada e acessivel
	return app;
}