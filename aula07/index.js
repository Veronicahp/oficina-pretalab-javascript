function bemVinda() {
  if (!document.querySelector("#bemvinda")) {
    const mensagem = document.createElement("h1");
    mensagem.innerHTML = "Bem vinda, Verônica";
    mensagem.id = "bemvinda";
    document.querySelector("#mensagem").appendChild(mensagem);
  }
}

function mudarCor() {
    let corFonte = document.querySelector('#bemvinda').style.color
    if (corFonte == '' || corFonte == 'rgb(0, 0, 0)') {
        document.querySelector('#bemvinda').style.color = '#a020f0';
    } else {
        document.querySelector('#bemvinda').style.color = '#000'
    }
}
