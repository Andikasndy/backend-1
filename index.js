const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.use (bodyParser.json())
app.get('/', (req, res) => {
  console.log( req.query )
  res.send('Hello World!')
})

app.get('/subindo',(req, res) => {
  res.send('Halo Dunia! ')
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