var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var clearElement = document.getElementById('limpar');
var aboutElement = document.getElementById('sobre');

// Se o banco não existir ele é criado vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
var todones = JSON.parse(localStorage.getItem('list_todones')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');

        // Icone Lixeira
        var linkTrash = document.createElement('i');
        var linkElement = document.createElement('a');
        var pos = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        linkTrash.setAttribute("class", "fa fa-trash");
        todoElement.setAttribute("class", "list-group-item");
        //var linkTrash = document.createTextNode('Excluir');
        linkElement.appendChild(linkTrash);

        // Valor da Lista
        var todoText = document.createTextNode(todo);

        // Corpo da lista
        todoElement.appendChild(linkElement);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
// Salva no banco local - todo
function saveToStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
function saveToHistory () {
    localStorage.setItem('list_todones', JSON.stringify(todones));
}
// Limpa o banco local
function clearItemsStorage() {
    for (todo of todos) {
        // todos.splice(todo);
        console.log(todos.splice(todo));
        saveToStorage();
    }
}
function clearToStorage () {
    //localStorage.clear('list_todos');
    clearItemsStorage();
    renderTodos();
    location.reload();
}
// Adiciona um item no banco local
function addTodo() {
    var todoText = inputElement.value;
    //envia um text para o banco
    todos.push(todoText);
    inputElement.value = '';
    console.log(todoText);
    renderTodos();
    saveToStorage();
}
// Evento para clicar nos botões
buttonElement.onclick = addTodo;
clearElement.onclick = clearToStorage;

function deleteTodo(pos) {
    // Deleta o item naquela posição
    todones.push(todos[pos]);
    todos.splice(pos, 1);
    renderTodos();
    saveToHistory();
    saveToStorage();
    
}
// Atualiza toda a lista
renderTodos();
console.log("Deu tudo certo, ocê pode descançar agora!")