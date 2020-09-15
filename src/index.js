document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.querySelector('#create-task-form')
  let taskList = document.querySelector('#tasks')

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let userInput = event.target['new-task-description'].value 
    
    addUserInputToTaskList(userInput)
  })

  function addUserInputToTaskList(userInput) {
    let blankLi = document.createElement('li')
    blankLi.innerText = userInput
    taskList.append(blankLi)

    blankLi.addEventListener("click", function(e){
      // blankLi is accessible here because of closure
      blankLi.remove()
  })
  }

})