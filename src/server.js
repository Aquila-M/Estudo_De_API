require('dotenv').config();
const app = require('./app'); //importando o script app q tem o express
 /* todas as vaiáveis que foram colocadas
no .env vai estar disponíveis para uso*/

const PORT = process.env.PORT || 3333 // pegará a PORT no .env e atribuir a const PORT ou atribuirá o valor 3333

app.listen(PORT, () => console.log(`Server está rodando na porta ${PORT}`));
/* o listen() inicia um servidor web, e faz com que ele escute um endereço ip e porta. */
/* isso no segundo parâmetro é chamado de callback, basicamente uma função que somente irá rodar quando 
a porta 3333 for inicializada,
ou seja, precisa que se cumpra(seja true) a porta. Uma função que irá rodar depois de outra. */

/* após isso, usa-se o comando: node src/index.js; para iniciar a conexão e mostrar a mensagem
de que foi realizado a inicialização. Porém, para tornar mais prático, ao invés de digitar este código a todo momento
é melhor criar um script no próprio npm la no package.json.
"start": "node src/index.js" */

