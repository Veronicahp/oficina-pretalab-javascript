let id = 0

function adicionarTarefa() {
    id++
    const tarefa = document.getElementById('tarefa').value
    document.getElementById('lista-tarefas').innerHTML += `<label id='${id}'>${tarefa}</label> <input type="checkbox" /> <br>`
}