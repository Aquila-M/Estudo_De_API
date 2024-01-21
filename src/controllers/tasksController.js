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

module.exports ={
    getAll,
    createTask
};
/*basicamente criamos um getAll para poder exportar
todo mundo depois. */