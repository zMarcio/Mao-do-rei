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

app.get('/animes', function (req, res) {
  res.end(fs.readFileSync('htmls/aime-final.html'))
})

app.get('/series', function (req, res) {
  res.end(fs.readFileSync('htmls/series.html'))
})

app.get('/filmes', function (req, res) {
  res.end(fs.readFileSync('htmls/Filme.html'))
})

app.get('/TaxiDriver', function (req, res) {
  res.end(fs.readFileSync('htmls/descriçãoTaxiDriver.html'))
})

app.get('/Cruella', function (req, res) {
  res.end(fs.readFileSync('htmls/descriçãoCruella.html'))
})

app.get('/Agua', function (req, res) {
  res.end(fs.readFileSync('htmls/descriçãoFormaDaÁgua.html'))
})

app.get('/play', function (req, res) {
  res.end(fs.readFileSync('htmls/play.html'))
})

app.get('/favoritos', function (req, res) {
  res.end(fs.readFileSync('htmls/favoritos.html'))
})

app.get('/cadastro', function (req, res) {
  res.end(fs.readFileSync('htmls/cadastro.html'))
})
