function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;

    if (taskText.trim() !== "") {
        var tasksContainer = document.getElementById("tasks-container");

        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML = '<input type="checkbox">' + taskText;

        tasksContainer.appendChild(taskElement);

        // Clear the input field after adding a task
        taskInput.value = "";
    }
}
