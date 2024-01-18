const connection = require('./connection');

const getAll = async () => { /* é assincrona pois é bom esperar que a função seja
executada por completo para prosseguir. */
    const tasks = await connection.execute('SELECT * FROM tasks'); // espera um comando sql
    /* função que servirá para selecionar todas as tasks do banco de dados(MYSQL) */
    // o await é para esperar o término da execução deste método p/ prosseguir.
    return tasks;
}; // função irá percorrer todas as tasks disponíveis e exportá-las.

module.exports = {
    getAll
};