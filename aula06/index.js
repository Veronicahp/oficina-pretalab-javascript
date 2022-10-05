//const nome = 'Verônica'

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(resposta => resposta.json())
// .then(dados => console.log(dados))

// fetch('https://cep.awesomeapi.com.br/21340070')
// .then(resposta => resposta.json())
// .then(dados => console.log(dados.address_name, dados.district, dados.city))


document.querySelector('#aula').innerHTML = 'Trabalhando com DOM no JS'

const novaDiv = document.createElement('div')
novaDiv.innerHTML = 'Div criada com o DOM'
document.getElementById('aula').appendChild(novaDiv)