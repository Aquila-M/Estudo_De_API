
const mysql = require('mysql2/promise');
/* aqui vamos criar um banco de dados na própria máquina,
para podermos manusear na api */
const connection = mysql.createPool({//cria uma fila de conexões
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

module.exports = connection;