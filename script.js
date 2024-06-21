function addTask() {
    const taskDate = document.getElementById('taskDate').value;
    const taskTime = document.getElementById('taskTime').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskDate === '' || taskTime === '' || taskDescription === '') {
        alert('Please fill in all fields');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
        <span>${taskDate} ${taskTime} - ${taskDescription}</span>
        <div>
            <button onclick="completeTask(this)">Completed</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    clearFields();
}

function clearFields() {
    document.getElementById('taskDate').value = '';
    document.getElementById('taskTime').value = '';
    document.getElementById('taskDescription').value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
