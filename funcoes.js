const usersList = []
const passwordsList = []

function cadastro() {
  let input1 = document.querySelector('#nomeDigitado')
  let nomeDigitado = input1.value

  let input2 = document.querySelector('#senhaDigitada')
  let senhaDigitada = input2.value

  let input3 = document.querySelector('#confirmacaoSenha')
  let confirmacaoSenha = input3.value

  if (usersList.includes(nomeDigitado)) {
    console.log('Nome de usuário não disponível')
  } if (passwordsList.includes(senhaDigitada)) {
    console.log("Senha não disponível")
  } else {
    if (senhaDigitada == confirmacaoSenha) {
      usersList.push(nomeDigitado)
      passwordsList.push(senhaDigitada)
      let cadastroOK = document.getElementById('cadastroOK')
      cadastroOK.style.display = 'block'
      let cadastroFalhou = document.getElementById('cadastroFalhou')
      cadastroFalhou.style.display = 'none'
      console.log(usersList, passwordsList)
    } else {
      let cadastroFalhou = document.getElementById('cadastroFalhou')
      cadastroFalhou.style.display = 'block'
      let cadastroOK = document.getElementById('cadastroOK')
      cadastroOK.style.display = 'none'
    }
  }
}

function login() {
  let input1 = document.querySelector('#nomeDigitadoLogin')
  let nomeDigitado = input1.value

  let input2 = document.querySelector('#senhaDigitadaLogin')
  let senhaDigitada = input2.value

  if (usersList.includes(nomeDigitado) && (passwordsList.includes(senhaDigitada))) {
    let indexNome = usersList.indexOf(nomeDigitado)
    let indexSenha = usersList.indexOf(senhaDigitada)
    if (indexNome == indexSenha) {
      //realizar login
    } else {
      console.log("Usuário ou senha incorretos")
    }
  } else {
    console.log("Usuário ou senha incorretos")
  }
}
