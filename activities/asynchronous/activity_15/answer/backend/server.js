//chamada das dependências
var express = require('./config/express')
var app = express()

//criando o servidor
app.listen(app.get('port'), (err)=>{
    if(err)
        console.log('Servidor com problemas: ')
    else
        console.log('Servidor OK')
})