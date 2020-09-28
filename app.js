//Selectors
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const clearButton = document.querySelector(".clear-button");

//Event Listeners
clearButton.addEventListener("click", clearCompleted);

//Functions
function addTodo(todo, id) {
    const item = `<div class="item">
                    <input type="checkbox"/>
                    <label class="strikethrough"> ${todo}</label>
                    </div>`;
    const position = "beforeend";
    //Place right before the end inside todo-list element
    todoList.insertAdjacentHTML(position, item);
}

document.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        const todo = todoInput.value;
        if (todo) {
            addTodo(todo);
        }
        todoInput.value = "";
    }
});

function clearCompleted() {
    var doc = document.querySelectorAll(".item");
    doc.forEach(x => {
        // Check <input> element inside all of item elements
        if (x.querySelector("input").checked) {
            x.remove()
        }
    })
}
