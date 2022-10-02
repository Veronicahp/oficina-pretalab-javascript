const p = document.querySelector('.container')

const senha = "123456"
const senhaCerta = false

let senhaDigitada = prompt('Digite sua senha:')

while (senhaDigitada != senha) {
    console.log(senhaDigitada)
    senhaDigitada = prompt('Digite a senha novamente:')
}

const resposta = () => {
    return "Parabéns, vc digitou a senha certa!"
}

p. innerHTML = resposta()




