function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskInput.value;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editTask(taskSpan);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.onclick = () => li.remove();

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(removeButton);

        li.appendChild(taskSpan);
        li.appendChild(buttonContainer);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

function editTask(taskSpan) {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
    }
}
