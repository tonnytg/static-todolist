var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var clearElement = document.getElementById('limpar');
var aboutElement = document.getElementById('sobre');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function SobreMim() {
    alert("Olá, obrigado por visitar esse site se tiver mais interesse, me ache no Linkedin Antonio Thomacelli Gomes! ");
    window.confirm("sometext");
  }

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

function saveToStorage () {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function clearToStorage () {
    localStorage.clear('list_todos');
    renderTodos();
    location.reload();
}

function addTodo() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo;
clearElement.onclick = clearToStorage;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

renderTodos();