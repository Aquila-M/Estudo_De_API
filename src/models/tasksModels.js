const connection = require('./connection');

const getAll = async () => { /* é assincrona pois é bom esperar que a função seja
executada por completo para prosseguir. */
    const tasks = await connection.execute('SELECT * FROM tasks'); // espera um comando sql
    /* função que servirá para selecionar todas as tasks do banco de dados(MYSQL) */
    // o await é para esperar o término da execução deste método p/ prosseguir.
    return tasks[0];
}; // função executa uma query e irá percorrer todas as tasks disponíveis e exportá-las.
/* return tasks[0] irá retornar só as tasks que foram selecionas, sem mostrar o buffer inteiro*/

const createTask = async (tasks) => {
    const { title } = tasks;

    const dataUTC = new Date(Date.now()).toUTCString();
    
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)'

    const [createdTasks] = await connection.execute(query, [title, 'pendente', dataUTC]);
    return {insertedId: createdTasks.insertId};
};
/* creatTasks
é uma função q vai receber um objeto, no caso as tasks que serão cadastradas.
irá pegar o title (título) da tasks e salvar no banco de dados;
depois é criado uma const createdTasks que será para retornar essa função,
nessa const será realizado a execução lá no bd, e irá inserir um novo elemento na tabela.

Primeiramente, foi criado uma const query, só para questão de organização mesmo,
onde tem a query que irá adicionar. os ? é usado justamente como parâmetro para colocar os values.
Após isso, a função execute é preenchido com a query e em seguida com uma lista com os elementos a serem colocados
no VALUES respectivamente. Esta função é atribuída a const createdTasks em formato de lista.
Outra coisa, é que msm que o createdTasks seja usado para retornar a função, será retornado
especificamente, o Id da task cadastrada. Então abre chaves e especifique:
{insertedId: createdTasks.insertId}.

Sobre o const dataUTC:

um dos elementos é uma data em formato de String, e para adicionar uma data, logicamente,
tem que ser o momento em que a task foi cadastrada, ou seja, a data atual.

Para isso, é usado uma sequência de métodos do tipo Date.
Criamos um new Date (formato do JS de datas) e usamos o método Date.now() como valor a ser
manipulado pelo new Date().
O Date.now() pega uma sequência de segundos desde uma data da década de 70 até atualmente, é um número grande.
Após pegar esse valor e armazenar na new Date(), é usado outro método chamado
.toUTCString(), que é o formato necessário para armazenar no bd;
Aí só colocar lista que será posto na query.
*/
module.exports = {
    getAll,
    createTask // importante sempre exportar.
};