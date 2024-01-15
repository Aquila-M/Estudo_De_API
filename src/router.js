/* criamos o router.js para questão de organização.
é aqui onde estará todas as rotas da api.
então começaremos importanto o express. */
const express = require('express');

const router = express.Router();
// instanciamos o router na variável router.

/* router.get('/', (req, res) => res.status(200).send('O router tá prestando')) /* basicamente, este método get()
irá retornar a mensagem "Olá!" na tela, quando for usar o / no endereço.
isso abre várias possibilidades: /tasks para mostrar as tasks;
/models para mostrar os modelos dos objetos.
*/
router.get('/tasks', (req, res) => {
    
});



// nunca esqueça de exportar o script:
module.exports = router;