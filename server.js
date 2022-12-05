const express = require('express')
const app = express()
const fs = require('fs')

const usersList = []
const passwordsList = []

function getUsersList() {
  return usersList
}

function getPasswordsList() {
  return passwordsList
}

exports = {
  getUsersList,
  getPasswordsList
}

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

app.get('/lancamentos', function(req,res){
  res.end(fs.readFileSync('htmls/Lancamentos.html'))
})

app.get('/filmeslancamentos', function (req,res){
  res.end(fs.readFileSync('htmls/filmeLancamento.html'))
})

app.get('/animelancamentos', function(req,res){
  res.end(fs.readFileSync('htmls/animelancamento.html'))
})

app.get('/serielancamentos', function(req,res){
  res.end(fs.readFileSync('htmls/serielancamento.html'))
})

app.get('/Destaques', function (req,res){
  res.end(fs.readFileSync('htmls/destaques.html'))
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

app.get('/funcoes.js', function (req, res) {
  res.end(fs.readFileSync('./funcoes.js'))
})

app.get('/login', function (req, res) {
  res.end(fs.readFileSync('htmls/login.html'))
})

app.get('/consulta/', function (req, res) {
  var usuario = req.query['usuario']
  if (usuario == 1) {
    res.end(fs.readFileSync('htmls/userPage1.html'))
  }
  if (usuario == 2) {
    res.end(fs.readFileSync('htmls/userPage2.html'))
  }
  if (usuario == 3) {
    res.end(fs.readFileSync('htmls/userPage3.html'))
  } else {
    res.send('Não foram recebidos parâmetros')
  }
})
