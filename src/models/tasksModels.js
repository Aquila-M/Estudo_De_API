const connection = require('./connection');

const getAll = async () => { /* é assincrona pois é bom esperar que a função seja
executada por completo para prosseguir. */
    const tasks = await connection.execute('SELECT * FROM tasks');
    /* função que servirá para selecionar todas as tasks do banco de dados */
    return tasks;
}; // função irá percorrer todas as tasks disponíveis e exportá-las.

module.exports = {
    getAll
};