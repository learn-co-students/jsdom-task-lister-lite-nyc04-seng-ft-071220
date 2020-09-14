document.addEventListener("DOMContentLoaded", () => {
  const myTodos = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  const newListItem = document.createElement('li'); 
  form.addEventListener("click", function(event){
    let taskDescription = document.getElementById("new-task-description").value;
    newListItem.textContent = taskDescription
    myTodos.appendChild(newListItem);
    event.preventDefault()

  });
});
