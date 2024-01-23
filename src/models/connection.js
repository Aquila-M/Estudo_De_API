
const mysql = require('mysql2/promise');
/* aqui vamos criar um banco de dados na própria máquina,
para podermos manusear na api */
const connection = mysql.createPool({//cria uma fila de conexões
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
}); // os dados adquiridos são pegos do env, onde está os dados do meu banco de dados;

module.exports = connection; /* é exportada para
que possa ser trabalhada lá na tasksModel, pois lá será
executada querys de comando, e pra isso a conection é exportada para levar
conexão com o banco de dados usado. */