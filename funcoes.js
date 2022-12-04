//import { getUsersList, getPasswordsList } from '/server.js'

// const localUsersList = getUsersList
// const localPasswordsList = getPasswordsList

const localUsersList = []
const localPasswordsList = []

function cadastro() {
  let input1 = document.querySelector('#nomeDigitado')
  let nomeDigitado = input1.value

  let input2 = document.querySelector('#senhaDigitada')
  let senhaDigitada = input2.value

  let input3 = document.querySelector('#confirmacaoSenha')
  let confirmacaoSenha = input3.value

  let cadastroOK = document.getElementById('cadastroOK')
  let cadastroFalhou = document.getElementById('cadastroFalhou')

  let nomeNaoDisponivel = document.getElementById('nomeNaoDisponivel')
  let senhaNaoDisponivel = document.getElementById('senhaNaoDisponivel')

  if (
    localUsersList.includes(nomeDigitado) ||
    localPasswordsList.includes(senhaDigitada)
  ) {
    if (localUsersList.includes(nomeDigitado)) {
      cadastroOK.style.display = 'none'
      cadastroFalhou.style.display = 'none'
      nomeNaoDisponivel.style.display = 'block'
    }
    if (localPasswordsList.includes(senhaDigitada)) {
      cadastroOK.style.display = 'none'
      cadastroFalhou.style.display = 'none'
      senhaNaoDisponivel.style.display = 'block'
    }
  } else {
    if (senhaDigitada == confirmacaoSenha) {
      localUsersList.push(nomeDigitado)
      localPasswordsList.push(senhaDigitada)
      cadastroOK.style.display = 'block'
      cadastroFalhou.style.display = 'none'
      senhaNaoDisponivel.style.display = 'none'
      nomeNaoDisponivel.style.display = 'none'
      console.log('Users list: ' + localUsersList)
      console.log('Passwords list: ' + localPasswordsList)
    } else {
      cadastroFalhou.style.display = 'block'
      cadastroOK.style.display = 'none'
      senhaNaoDisponivel.style.display = 'none'
      nomeNaoDisponivel.style.display = 'none'
    }
  }
}

function verificarLogin() {
  const localUsersList = ['teste 1', 'teste 2', 'teste 3']
  const localPasswordsList = ['123', '1234', '12345']

  let input1 = document.querySelector('#nomeDigitadoLogin')
  let nomeDigitado = input1.value

  let input2 = document.querySelector('#senhaDigitadaLogin')
  let senhaDigitada = input2.value

  let loginFalhou = document.getElementById('loginFalhou')

  if (
    localUsersList.includes(nomeDigitado) &&
    localPasswordsList.includes(senhaDigitada)
  ) {
    let indexNome = localUsersList.indexOf(nomeDigitado)
    let indexSenha = localPasswordsList.indexOf(senhaDigitada)
    if (indexNome == indexSenha) {
      logar()
    } else {
      loginFalhou.style.display = 'block'
      console.log('Usuário ou senha incorretos')
    }
  } else {
    loginFalhou.style.display = 'block'
    console.log('Usuário ou senha incorretos')
  }
}

function logar() {
  //adicionar fotinha de perfil em todas as rotas
  //"personalizar" userPage?
}

function sair() {}
