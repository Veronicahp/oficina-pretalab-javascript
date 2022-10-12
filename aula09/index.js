function escreverLista() {
  const aluna = document.getElementById('aluna').value
  document.getElementById('listaAlunas').innerHTML += `<p>${aluna}</p>`
}
