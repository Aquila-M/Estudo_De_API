/* Importamos a tasksModels, resposável por selecionar todas as taskss
do banco de dados, e criamos uma função assíncrona (o termo async para caracterizar
    a função junto com a função await para fazer com q espere toda a execução da const tasks).
    Basicamente, a const tasks irá acessar a função getAll das tasksModels que foi importada,
    após isso, a const getAll local irá retornar uma resposta para nós, que mostrando todas as
    tasks do banco de dados.*/
const tasksModel = require('../models/taksModels')

const getAll = async (req, res) => {
    const tasks =  await tasksModel.getAll();
    return res.status(200).json(tasks);
};

module.exports ={
    getAll
};
/*basicamente criamos um getAll para poder exportar
todo mundo depois. */