const addButton = window.document.getElementById("addTask");
const taskInput = window.document.getElementById("taskInput");
const taskList = window.document.getElementById("taskList");
window.onload = function () {
    loadTasks()
    const tasks = window.document.querySelectorAll("li");
    tasks.forEach(function (item) {
        item.setAttribute("data-aos", "zoom-out-down");
    })
}
function addTask() { 
    const task = taskInput.value.trim();
    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        saveTasks(task);
    } else {
        alert("Please enter a task valid");
    }
}
addButton.addEventListener("click", addTask)
function createTaskElement(task) {
    const listItem = window.document.createElement("li");
    listItem.textContent = task;
    const deleteButton = window.document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteTask";
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
        saveTasks();
    })
    const tasks = window.document.querySelectorAll("li");
    tasks.forEach(function (item) {
        item.setAttribute("data-aos", "zoom-out-down");
    })
}
function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll("li").forEach(function (item) {
        tasks.push(item.textContent.replace("Delete", "").trim());
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}