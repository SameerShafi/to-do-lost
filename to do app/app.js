document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Array to store the todo items
    let todos = [];

    // Function to render the todo items in the list
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function (todo, index) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const deleteButton = document.createElement('button');

            span.textContent = todo;
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteTodo(index);
            });

            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    }

    // Function to add a new todo item
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            todos.push(todoText);
            renderTodos();
            todoInput.value = '';
        }
    }

    // Function to delete a todo item
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodos();
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });
});
