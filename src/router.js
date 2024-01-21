/* criamos o router.js para questão de organização.
é aqui onde estará todas as rotas da api.
então começaremos importanto o express. */
const express = require('express');
const tasksController = require('./controllers/tasksController');


const router = express.Router();
// instanciamos o router na variável router.

/* router.get('/', (req, res) => res.status(200).send('O router tá prestando')); /* basicamente, este método get()
irá retornar a mensagem "Olá!" na tela, quando for usar o / no endereço.
isso abre várias possibilidades: /tasks para mostrar as tasks;
/models para mostrar os modelos dos objetos.
*/
router.get('/tasks', tasksController.getAll); /*assim o código fica mais organizado
pois além de criarmos uma variável tasksController para chamar o script que irá
controlar as rotas, conseguimos acessar estas funções pelo getAll. */

router.post('/tasks', tasksController.createTask);
/* o post é usado para poder enviar dados para o banco de dados, diferente do get que pega do bd */

// nunca esqueça de exportar o script:
module.exports = router;