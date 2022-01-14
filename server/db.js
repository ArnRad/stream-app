const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host: '78.63.247.251',
//   port: 3306,
//   user: 'root',
//   database: 'stream_app',
//   password: 'mbdDarbas'
// })

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'stream_app',
  password: ''
})

connection.connect()
module.exports = connection