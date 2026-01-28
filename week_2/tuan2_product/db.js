const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "260504",
    database: "product_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log("MariaDB connected");
});

module.exports = connection;
