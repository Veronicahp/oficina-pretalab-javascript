const alunas = [
  {
  	nome: 'Nath',
    nota: 5.5
  },
  {
  	nome: 'Joyce',
    nota: 9,
  },
  {
  	nome: 'Vera',
    nota: 9,
  }
]


alunas.filter ((aluna) => {
    if (aluna.nota >= 7) {
        console.log(`${aluna.nome} aprovada`)
    } else {
        console.log(`${aluna.nome} reprovada`)
    }
})

console.log(alunas[0].nome, alunas[1].nome, alunas[2].nome)

