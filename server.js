//npm init
// npm install  express

const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use( express.static('public'))

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, "/html/index.html"))
})
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, "/html/about.html"))
})
app.get('/sum',(req, res) =>{
    res.sendFile(path.join(__dirname, "/html/sum.html"))
})
app.get('/valuta', (req,res) =>{
    res.sendFile(path.join(__dirname,"/html/valuta.html"))
})

app.listen(port, () =>{
    console.log('Listening on port', port)
})
