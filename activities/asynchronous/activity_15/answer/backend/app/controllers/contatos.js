//Aqui temos a implementação da interface de manipulação do banco 
//de dados Mongo. Podemos entender esse mapeamento como um 
//DAO (Data Access Object)

var ContatoModel = require('../models/Contato')
var model = ContatoModel()

// já começamos a decrição do controller expondo no formato de uma
//função, que no final, retornará um objeto com funções internas
//para ações de leitura, gravação, atualização e deleção de dados
module.exports = function () {

	var ContatosController = {}

	//primeiro, tratamos a consulta geral de dados do banco,
	//sempre retornando um JSON com o resultado
	ContatosController.get = async function (req, res) {
		const contato = await model.find();
		res.json(contato)
	}

	//tratamos também as consultas parametrizadas com o ID de 
	//um registro em particular do nosso banco de dados
	ContatosController.getById = async function (req, res) {
		try {
			const contato = await model.findById(req.params.id);

			return res.json(contato);

		} catch (err) {
			console.log(err);
			res.status(404).send('Contato não encontrado');
		}

	}

	//Também tratamos as deleção de dados, usando o ID do registro
	//para encontrá-lo e apagá-lo
	ContatosController.delete = async function (req, res) {
		model.findByIdAndRemove(req.params.id);

		console.log("Contato deletado!")

		return res.send();

	}

	//criar um novo registro requer receber parametros dos 
	//novos dados que serão gravados no Mongo, sempre
	//compatíveis com o esquema que criamos no Modelo correspondente
	ContatosController.add = async function (req, res) {
		var { nome, email, telefone } = req.body

		let contato = await model.create({ nome, email, telefone })

		return res.json(contato);

	}

	//Aqui devolvemos o Controller com seus 'métodos' implementados
	return ContatosController

}