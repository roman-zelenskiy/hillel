let main = document.querySelector('.main');
let headerTodo = document.querySelector('#header');
let descriptionTodo = document.querySelector('#description');
let submitTodod = document.querySelector('#submit');
submitTodod.addEventListener('click', () => {
    let todoList = document.createElement('div');
    todoList.classList.add('todo_list');
    let checkboxDone = document.createElement('input');
    checkboxDone.type = 'checkbox';
    checkboxDone.classList.add('checkbox_done');
    let styleDone = document.createElement('div');
    styleDone.classList.add('style_done');
    let textHeader = document.createElement('h4');
    textHeader.innerText = headerTodo.value;
    textHeader.classList.add('todo_list_head');
    let textDescrip = document.createElement('p');
    textDescrip.innerText = descriptionTodo.value;
    textDescrip.classList.add('todo_list_desc');
    let buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'DELETE TODO'
    buttonDelete.classList.add('button_delete');
    todoList.prepend(styleDone, checkboxDone, textHeader, textDescrip, buttonDelete);
    main.append(todoList);
    headerTodo.value = '';
    descriptionTodo.value = '';
    buttonDelete.addEventListener('click', () => {
        if (checkboxDone.checked == true) {
            todoList.remove();
        }
    })
    checkboxDone.addEventListener('click', () => { 
        styleDone.classList.toggle('width');
    })
})




