const express = require('express')
const app = express()
const fs = require('fs')

app.listen(4000, function (erro) {
  if (erro) {
    console.log('Erro ao iniciar')
  } else {
    console.log('Servidor iniciado')
  }
})

app.get('/', function (req, res) {
  res.end(fs.readFileSync('paginaInicial.html'))
})

app.get('/series', function (req, res) {
  res.end(fs.readFileSync('series.html'))
})
