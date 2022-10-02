// const alunas = ['Thais', 'Veronica', 'Carolina']
// console.log(alunas[2])

// alunas.push('Drika', 'Vera', 'Paula', 'Nadja')
// console.log(alunas)

// alunas.pop()
// console.log(alunas.length)


// const notas = [1, 2, 3]

// notas.forEach((nomes) => {
//     console.log(nomes)
// })

const linguagens = ['JS', 1, 2, 3, 'HTML', 'CSS']

linguagens.forEach((i) => {
    if (isNaN(i)) {
    console.log(i)
    }
})

const alunas = ['Thais', 'Veronica', 'Carolina']
const cursos = ['JS', 'CSS', 'HTML']
const pretalab = [alunas, cursos]
const cursosLivres = ['MinasProgramam', pretalab, 'Programaria']

console.log(cursosLivres[1][1][2])
