var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {

    listElement.innerHTML = '';

    for (todo of todos) {
        console.log(todo);
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var pos = todos.indexOf(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);

        // Corpo da lista
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

function saveToStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

renderTodos();