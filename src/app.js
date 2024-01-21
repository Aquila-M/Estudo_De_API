/* vamos usar o express para a construção da api
contém recursos necessários tipo a definição de rotas
tratamento de requisições e respostas, middlewares e mais. */

const express = require("express");
/* o require() é usado para importação de módulos
em seus scripts, fornecendo funcionalidades específicas.
nesse caso, atribuímos as funcionalidades do express à
varíavel express. */
const router = require('./router');

const app = express() // instaciamos a variável.

app.use(express.json()); //nossa api será capaz de trabalhar com dados em json.
app.use(router); /* faz com que toda requisição que acontecer
na nossa api, ela vai cair no router.*/



module.exports = app; // exportar o script para uso em outros scripts.