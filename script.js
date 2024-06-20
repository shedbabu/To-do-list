document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const reminderInput = document.getElementById('reminderInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        const reminderTime = reminderInput.value;
        if (taskText !== '') {
            const li = document.createElement('li');

            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            // Create a span for the timestamp
            const timestampSpan = document.createElement('span');
            timestampSpan.classList.add('timestamp');
            timestampSpan.textContent = getCurrentDateTime();

            // Create a span for the reminder
            const reminderSpan = document.createElement('span');
            reminderSpan.classList.add('reminder');
            if (reminderTime) {
                reminderSpan.textContent = `Reminder: ${new Date(reminderTime).toLocaleString()}`;
                setReminder(taskText, new Date(reminderTime));
            }

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(taskSpan);
            li.appendChild(timestampSpan);
            if (reminderTime) {
                li.appendChild(reminderSpan);
            }
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            taskInput.value = '';
            reminderInput.value = '';
        }
    }

    function getCurrentDateTime() {
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        return `${date} ${time}`;
    }

    function setReminder(taskText, reminderTime) {
        const now = new Date();
        const delay = reminderTime - now;

        if (delay > 0) {
            setTimeout(() => {
                alert(`Reminder: ${taskText}`);
            }, delay);
        }
    }
});
