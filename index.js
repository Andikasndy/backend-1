const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./contection')
const response =require('./response')

app.use (bodyParser.json())
//select all data
app.get('/', (req, res) => {
  const mysql = "SELECT * FROM masiswa"

  db.query(mysql,(error,ressult) =>{
    // hasil dari mysql
    response(200, ressult , "get all data from mahasiswa",res )
  })
  
})


//select nama dengan id
app.get('/find',(req, res) => {
  const mysql = `SELECT nama FROM masiswa WHERE id = ${req.query.id}`
  db.query(mysql,(error, ressult)=>{
    response(200, ressult, "find mahasiswa id", res)
  })
})



app.post('/login',(req, res) =>{
  console.log ( req.body )
  res.send ('login berhasil')
})
app.put('/username',(req,res) =>{
  console.log(req.body)
  res.send('username berhasil di ubah')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})