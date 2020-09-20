document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let newTaskForm = document.querySelector("#create-task-form")
  let tasksUL = document.querySelector("ul#tasks")


  newTaskForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let whatUserTyped = evt.target["new-task-description"].value
    

    let taskLi = document.createElement("li")
    taskLi.innerText = whatUserTyped
    tasksUL.append(taskLi)

    let btn = document.createElement("Button")
    btn.innerText = "X"
    taskLi.appendChild(btn)

    btn.addEventListener("click", function(evt){
      taskLi.remove()
    })


  })

});
