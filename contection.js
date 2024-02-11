// sebelum menggunakan ini instal dulu libray mysql dengan npm
const mysql = require ('mysql')
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"",
    database :"ujicoba"
})

module.exports = db