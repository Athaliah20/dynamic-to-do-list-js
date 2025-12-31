document.addEventListener('DOMContentLoaded', () => {
    // All subsequent code will be inside this callback function
    
    ### Step 2: Select DOM Elements
    
    // Select the "Add Task" button
    const addButton = document.getElementById('add-button');
    // Select the input field
    const taskInput = document.getElementById('task-input');
    // Select the unordered list
    const taskList = document.getElementById('task-list');

    ### Step 3: Create the addTask Function

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create new list item (li)
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function() {
                li.remove(); // Remove the parent list item when clicked
            };

            // Append delete button to the list item
            li.appendChild(deleteBtn);
            
            // Append the list item to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        }
    }

    // Add event listener to the add button to call addTask function
    addButton.addEventListener('click', addTask);

    // Optional: Allow adding tasks by pressing Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
const addButton = document.getElementById('add-task-button');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
function addTask() {
  const taskText = taskInput.value.trim();
    if (taskText === '') {
    alert('Please enter a task.');
    return;
  }
    // Inside the addTask function, after the empty check
  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
    // Add event listener to the remove button
  removeBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  // Append button to the list item, and list item to the list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear the input field for the next task
  taskInput.value = '';
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
// Assume the following elements exist in the HTML document
// const addButton = document.getElementById('addButton');
// const taskInput = document.getElementById('taskInput');

// Function to handle adding a task (as specified in the image instructions)
function addTask() {
    // Your task adding logic goes here
    console.log("Task added or data fetched!");
}

// 5. Attach Event Listeners:

// Add event listener to addButton for the 'click' event
addButton.addEventListener('click', addTask);

// Add event listener to taskInput for the 'keypress' event
taskInput.addEventListener('keypress', function(event) {
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
        addTask();
    }
});

// Invoke the addTask function on DOMContentLoaded - Outside addTask
document.addEventListener('DOMContentLoaded', addTask);
