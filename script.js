function addTask () {
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list')
    const noticfication = document.getElementById('noticfication');
    // trim white space
    let newTask = taskInput.value.trim();

    if (newTask !== '') {

        noticfication.innerText !== '' ? noticfication.innerHTML = '' : null;
        
        // Create elements for new task
        const li = document.createElement('li');
        const span = document.createElement('span');
        const editELement = document.createElement('button');
        const deleteElement = document.createElement('button');

        // Setup list element
        span.innerText = newTask;

        editELement.textContent = 'Edit';
        editELement.onclick = () => editTask(span)

        deleteElement.textContent = 'Delete';
        deleteElement.onclick = () => deleTask(li)

        li.appendChild(span);
        li.appendChild(editELement);
        li.appendChild(deleteElement);

        // Append to Ul elements
        todoList.appendChild(li);

        // Reset Input
        taskInput.value = ''
    } else {
        // let lists = todoList.children.length;
        noticfication.innerText = 'Pleas enter valid task.';
        return false;
    }
}

function editTask(task) {
    const inputEditTask = prompt('Edit your task : ')
    let editedTask = inputEditTask.trim();

    if (editedTask !== '') {
        // change to new edited task
        task.innerText = editedTask;
    } else {
        alert('อย่าเหลี่ยมไอสัส')
    }
    
}

function deleTask(task) {
    task.remove()
}

var a = new String('hI')
var b = 'hi'
console.log(a === b)
console.log(b)