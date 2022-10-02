const frutas = ["Banana", "Laranja", "Maçã", "Uva", "Manga", "Abacaxi"]
frutas.sort()
console.log(frutas)

const numeros = [30, 0, 40, 20, 70, 50]
numeros.sort(function(a, b){return b-a}) // para fazer decrescente usar {return b-a}
console.log(numeros)

const sobrinhas = ["Marina", "Catarina", "Ariela", "Letycia"]
let separacao = sobrinhas.join(" / ")
console.log(separacao)

const estados = ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"]
let sudeste = estados.join(" - ")
console.log(sudeste)

