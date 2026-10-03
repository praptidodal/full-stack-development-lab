var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;

    var completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}
