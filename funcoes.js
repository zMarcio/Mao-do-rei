//import { getUsersList, getPasswordsList } from '/server.js'

// const localUsersList = getUsersList
// const localPasswordsList = getPasswordsList

let url = new URL('http://localhost:4040/consulta?')

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
      logar(nomeDigitado)
    } else {
      loginFalhou.style.display = 'block'
      console.log('Usuário ou senha incorretos')
    }
  } else {
    loginFalhou.style.display = 'block'
    console.log('Usuário ou senha incorretos')
  }
}

function logar(nomeDigitado) {
  if (nomeDigitado == 'teste 1') {
    window.location.href = 'http://localhost:4040/consulta?usuario=1'
    // url.searchParams.set('usuario', 1)
  }
  if (nomeDigitado == 'teste 2') {
    window.location.href = 'http://localhost:4040/consulta?usuario=2'
    // url.searchParams.set('usuario', 2)
  }
  if (nomeDigitado == 'teste 3') {
    window.location.href = 'http://localhost:4040/consulta?usuario=3'
    // url.searchParams.set('usuario', 3)
  }

  adicionarFoto()
}

function adicionarFoto() {
  let a = document.getElementById('notLogado')
  let b = document.getElementById('logado')

  a.style.display = 'none'
  b.style.display = 'block'

  // if (getLogado() == true) {
  //   a.style.display = 'none'
  //   b.style.display = 'block'
  // } else {
  //   a.style.display = 'block'
  //   b.style.display = 'none'
  // }
}

function expandirMenu() {
  let menuUsuario = document.getElementById('menuUsuario')
  menuUsuario.style.display = 'block'
}

function fecharMenu() {
  let menuUsuario = document.getElementById('menuUsuario')
  menuUsuario.style.display = 'none'
}

function sair() {
  let a = document.getElementById('notLogado')
  let b = document.getElementById('logado')

  a.style.display = 'block'
  b.style.display = 'none'

  // if (getLogado() == false) {
  //   a.style.display = 'block'
  //   b.style.display = 'none'
  // } else {
  //   a.style.display = 'none'
  //   b.style.display = 'block'
  // }
}
