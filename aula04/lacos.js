let i = 0;

while (i < 11) {
    console.log("7 x " + i + " = " + (7 * i));
    i++;
}

console.log ('--------------------');

let salario = 1000;

while (salario < 5000) {
    salario += 500;

    console.log("O salário é R$" + salario.toFixed(2));
}

console.log ('--------------------');

const alunas = [
    { aluno: 'Amanda', nota: 10},
    { aluno: 'Simara', nota: 8},
    { aluno: 'Nathy', nota: 9},
    { aluno: 'Vera', nota: 10},
];

let index = 0;
let somaDasNotas = 0;
let totalAlunas = alunas.length;

do {
    somaDasNotas += alunas[index].nota;
    index++;
} while (index < totalAlunas);
let media = somaDasNotas / totalAlunas;

console.log (media);