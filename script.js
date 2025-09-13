// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.




// script.js
// Section 2: App State Variables
let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

function handleSubmission(event) {
    event.preventDefault(); // this function stops our form from reloading the page
    // TODO: Get form input values
    const
taskName = document.getElementById('taskName').value
const taskDeadline = document.getElementById('taskDeadline').value
const taskDescription = document.getElementById('taskDescription').value
    // TODO: Validate input fields
    // if statement to check if the task name and deadline are not filled out. 
    if (taskName == "" || taskDeadline == "") {
    alert('Task name and deadline are required!')
    return;
    } else {
        console.log("Task name and deadline is added: ", taskName, taskDeadline)
    }
    // TODO: Update the tasks array
    tasks.push({ name:
        taskName, description: taskDescription, deadline: taskDeadline })
    render();
    }
    // Function to render tasks in the table
    function render() {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map(task => `
        <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
        `).join('');
}

function markTaskComplete(button) {
    const row = button.parentElement.parentElement;
    row.style.textDecoration = "line-through";
}

function removeTask(button) {
    const row = button.parentElement.parentElement;
    const index = row.rowIndex - 1; // adjust if you add a header later
    tasks.splice(index, 1);
    render();
}

    // Function to initialize the table
    function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
    }
    // Event listener for form submission
    taskForm.addEventListener('submit', handleSubmission);

    // Call the init function to set up the initial state of the app
init();