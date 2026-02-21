// Select DOM Elements
const addButton = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Create the addTask Function
function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Task Creation and Removal
    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new button element for removing the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    // Assign an onclick event to the remove button
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append the remove button to the li element, then append the li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
}

// Attach Event Listeners
// Add an event listener to addButton that calls addTask when the button is clicked
addButton.addEventListener('click', addTask);

// Add an event listener to taskInput for the 'keypress' event
taskInput.addEventListener('keypress', (event) => {
    // Check if event.key is equal to 'Enter'
    if (event.key === 'Enter') {
        addTask();
    }
});
