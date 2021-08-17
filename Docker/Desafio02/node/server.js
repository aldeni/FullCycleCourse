const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const mysql = require('mysql')
const config = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'dockerdesafio02'
};

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const cnn = mysql.createConnection(config)
    const sqlinsert = `INSERT INTO people (name) VALUES ('Aldeni');`

    cnn.query(sqlinsert)

    const sqlselect = `SELECT * FROM people;`

    cnn.query(sqlselect, (err, data, fields) => {
        if (err) throw err
            res.render('../views/home', {nomes: data})
    })
    cnn.end()
})

app.listen(port,() => {
    console.log('Running on port ' + port)
})