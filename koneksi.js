mysql = require('mysql');
db = mysql.createConnection ({
    host = 'localhost',
    username ='root',
    password = '',
    // database : 'db_web',
});

db.connect(function(err)){
    if(errr) throw err;
    console.log('berhasil';)
}
