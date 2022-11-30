const usersList = []
const passwordsList = []

function cadastro() {
  let input1 = document.querySelector('#nomeDigitado')
  let nomeDigitado = input1.value

  let input2 = document.querySelector('#senhaDigitada')
  let senhaDigitada = input2.value

  let input3 = document.querySelector('#confirmacaoSenha')
  let confirmacaoSenha = input3.value

  if (senhaDigitada == confirmacaoSenha) {
    //realizar cadastro
    usersList.push(nomeDigitado)
    passwordsList.push(senhaDigitada)
    let mensagem = document.getElementById('cadastroOK')
    mensagem.style.display = 'block'
  } else {
    //mostrar mensagem dizendo que não rolou o cadastro
    let mensagem = document.getElementById('cadastroFalhou')
    mensagem.style.display = 'block'
  }
}

