let inputElement = document.querySelector('.input-element');
let addBtn = document.querySelector('.add-items');
let todoList = document.querySelector('.todo-list');

let addTodo = () => {
    let pElem = document.createElement('p');
    pElem.textContent = inputElement.value;
    todoList.append(pElem);
    let span = document.createElement("span");
    span.innerHTML = "&#215;";
    pElem.appendChild(span);
    inputElement.value = '';
    span.addEventListener('click', () => {
        todoList.removeChild(pElem);
    })
}

addBtn.addEventListener('click', () => {
    
    if(inputElement.value == '') {
        alert("Enter valid input");
        return false;
    } else {
        addTodo(); 
    }
    
})

todoList.addEventListener