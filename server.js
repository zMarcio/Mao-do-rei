const express = require('express')
const app = express()
const fs = require('fs')

app.listen(4040, function (erro) {
  if (erro) {
    console.log('Erro ao iniciar')
  } else {
    console.log('Servidor iniciado')
  }
})

app.use(express.static('imgs'))

app.get('/', function (req, res) {
  res.end(fs.readFileSync('paginaInicial.html'))
})

<<<<<<< HEAD
app.get('/animes', function (req, res) {
  res.end(fs.readFileSync('anime.html'))
=======
app.get('/series', function (req, res) {
  res.end(fs.readFileSync('htmls/series.html'))
})

app.get('/filmes', function (req, res) {
  res.end(fs.readFileSync('htmls/Filme.html'))
>>>>>>> 7972288cf5f02a81c84dcea986cfd1866f7d5f39
})
