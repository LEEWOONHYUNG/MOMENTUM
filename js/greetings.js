let btn = document.querySelector('#login-form input');
let form = document.querySelector('form');
let greeting = document.querySelector('h2');

const HIDDEN_CLASSNAME = 'hidden';

function paintGreetings(){
  let username = localStorage.getItem('username');
  greeting.innerHTML=`How are you!!! ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}



function submitEvent(e){
  e.preventDefault();
  localStorage.setItem('username',btn.value);
  paintGreetings();
  form.classList.add(HIDDEN_CLASSNAME);
}



form.addEventListener('submit',submitEvent);



if(localStorage.getItem('username') === null){
}else{
 paintGreetings(); 
 form.classList.add(HIDDEN_CLASSNAME);
}