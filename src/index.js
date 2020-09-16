let taskForm = document.querySelector("#create-task-form")
let taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(event){
  event.preventDefault()

  const newTask = document.querySelector("#new-task-description").value
  
  taskList.innerHTML += `
  <li>${newTask}
  <button data-action="delete"> X for delete</button>
  </li>
  `
taskForm.reset()
})
taskList.addEventListener("click", function(e){
  console.log(e.target)
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})
