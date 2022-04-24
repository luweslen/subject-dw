//Aqui vamos implementar o controle de rotas da nossa aplicação
//sempre vinculando um padrão de URL com as funções que devem ser executadas
//em cada caso, e de acordo com o tipo de requisição que foi enviada pelo cliente

module.exports = function(app) {
	
	var controller = app.controllers.contatos
	
	//requisições sem parametrização
	app.route('/contatos')
	.get(controller.get)
	.post(controller.add)
	
	//requisições com parametrização
	app.route('/contatos/:id')
	.get(controller.getById)
	.delete(controller.delete)
	
}