function escreverMensagem() {
  const textoDigitado = document.getElementById('nome').value

  const bemvinda = document.getElementById('bemvinda').innerHTML
  if(bemvinda.split(':')[1].length > 1) {
    document.getElementById('bemvinda').innerHTML = `Bem vinda: ${textoDigitado}`
  } else {
    document.getElementById('bemvinda').innerHTML += textoDigitado
  }
}
