// function somar (num1, num2) { 
//     const resultado = num1 + num2
//     console.log(resultado)
// }

// function bemVinda(nome, idade) {
//     console.log('Bem vinda ' + nome + '. Parabéns pelos ' + idade + ' de idade.')

// }

// bemVinda('Nath', '32')

function votar (idade, nome) {
    if (idade >= 18 && idade < 70) {
        console.log(`${nome} seu voto é obrigatório`) 
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        console.log(`${nome} seu voto é facultativo`)
    } else {
        console.log(`${nome} você não pode votar`)
    }
}

votar(42, 'Verônica')
votar(14, 'Letycia')
votar(90, 'Vó Marina')
votar(17, 'Marininha')
