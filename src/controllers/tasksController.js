/* Importamos a tasksModels, resposável por selecionar todas as taskss
do banco de dados, e criamos uma função assíncrona (o termo async para caracterizar
    a função junto com a função await para fazer com q espere toda a execução da const tasks).
    Basicamente, a const tasks irá acessar a função getAll das tasksModels que foi importada,
    após isso, a const getAll local irá retornar uma resposta para nós, que mostrando todas as
    tasks do banco de dados.*/
const tasksModel = require('../models/tasksModels.js')

const getAll = async (req, res) => {
    const tasks =  await tasksModel.getAll();
    return res.status(200).json(tasks);
};
/* Função getAll:
irá retornar o status 200 (ok) e em seguida a lista de tasks do bd, após
o término da execução do método getAll criado lá no tasksModel.
*/

const createTask = async (req, res) => {
    const createdTask = await tasksModel.createTask(req.body);

    return res.status(201).json(createdTask);
};
/* Função createTask:
irá chamar o método createTask do tasksModel pela variável const createdTask local.
Fará com que seja recebida do usuário os dados para o bd, por isso o .body

Após isso, irá retornar, em formato JSON, essa task cadastrada pelo usuário junto com o status 201.
*/

const deleteTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.deleteTask(id);
    return res.status(204).json();
};
/* Função deleteTask:
Uma peculiaridade do deleteTask, é que o URL não o mesmo jeito que o createTask.
precisamos acessar o id no endereço. ou seja, /tasks/id. 
É criada uma const que pegará do req somente o id. Por isso, é preciso
expôr req.params para ter acesso ao id. Após isso, é instanciado a
função deleteTask do Model e jogar o id lá dentro para ser executada por completo
a exclusão de tal task
Por fim, só retornar um status como resposta sem, necessariamente, ter nada escrito*/

const updateTask = async (req, res) => {
    const { id } = req.params;
    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
};
/* updateTask:
Possui a mesma sintaxe da função que deleta posts, a leve diferença
é q a função agora está pedindo não só o id, como tbm o corpo do req que irá ser
alterado. */

module.exports ={
    getAll,
    createTask,
    deleteTask,
    updateTask
};
/*basicamente criamos um getAll para poder exportar
todo mundo depois. */