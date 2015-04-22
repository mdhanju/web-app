/*
 *DB Connector
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'my_host',
    user: 'userId',
    password: 'password'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});