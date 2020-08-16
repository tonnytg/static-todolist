var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var clearHistoryElement = document.getElementById('limparhistory');
var aboutElement = document.getElementById('sobre');

// Se o banco não existir ele é criado vazio
var todones = JSON.parse(localStorage.getItem('list_todones')) || [];

function rendertodones() {
    listElement.innerHTML = '';

    for (todone of todones) {
        var todoneElement = document.createElement('li');

        // Icone Lixeira
        var linkTrash = document.createElement('i');
        var linkElement = document.createElement('a');
        var pos = todones.indexOf(todone);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deletetodone('+ pos +')');
        linkTrash.setAttribute("class", "fa fa-trash");
        todoneElement.setAttribute("class", "list-group-item");
        //var linkTrash = document.createTextNode('Excluir');
        linkElement.appendChild(linkTrash);

        // Valor da Lista
        var todoneText = document.createTextNode(todone);

        // Corpo da lista
        todoneElement.appendChild(linkElement);
        todoneElement.appendChild(todoneText);
        listElement.appendChild(todoneElement);
    }
}
// Salva no banco local - todone
function saveToHistory () {
    localStorage.setItem('list_todones', JSON.stringify(todones));
}
// Limpa o banco local
function clearItemsHistory() {
    for (todone of todones) {
        // todos.splice(todo);
        console.log(todones.splice(todone));
        saveToHistory();
    }
}
function clearToHistory () {
    //localStorage.clear('list_todos');
    clearItemsHistory();
    rendertodones();
    location.reload();
}
// Adiciona um item no banco local
function addtodone() {
    var todoneText = inputElement.value;
    //envia um text para o banco
    todones.push(todoneText);
    inputElement.value = '';
    console.log(todoneText);
    rendertodones();
    saveToHistory();
}
// Evento para clicar nos botões
buttonElement.onclick = addtodone;
clearHistoryElement.onclick = clearToHistory;

function deletetodone(pos) {
    // Deleta o item naquela posição
    todones.splice(pos, 1);
    rendertodones();
    saveToHistory();
}
// Atualiza toda a lista
rendertodones();