const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');


const TODOS_KEY = 'todos'
let toDos = [];


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}

function deleteToDo(e){
    const li = e.target.parentElement;
    const btn = e.target.id;
    li.remove();
    toDos = toDos.filter(data=>{
        return parseInt(data.id) != btn;
    })

    saveToDos();
}

function paintToDo(newTodo) {
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerHTML='❌';
    button.id=newTodo.id;

    button.classList.add('todo-button');
    span.classList.add('todo-text');

    span.innerHTML=newTodo.text;
    
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value='';
    const newTodoObj = {id:Date.now(),text:newTodo};
    toDos.push(newTodoObj);
   
    paintToDo(newTodoObj);
    saveToDos();
}

function open(){
    if(localStorage.getItem(TODOS_KEY)===null){
        return;
    }
    const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
   
    
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



open();









toDoForm.addEventListener('submit',handleToDoSubmit);


