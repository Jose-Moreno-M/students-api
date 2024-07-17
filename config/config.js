const mysql2 = require('mysql2');

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database:'college'
    }
)

db.connect(function(err){
    if(err) throw err;
    console.log('Database connected');
});

module.exports = db;