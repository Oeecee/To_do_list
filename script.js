function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">X</button>
      `;
      taskList.appendChild(li);
      input.value = "";
    }
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  