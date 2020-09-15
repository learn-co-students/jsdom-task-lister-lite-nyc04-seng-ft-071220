document.addEventListener("DOMContentLoaded", () => {

  // STABLE COMPONENTS 
  let createTaskForm = document.querySelector('#create-task-form')

  // PLACEMENT: NEW TODOS WILL GO HERE
  let newtaskUl = document.querySelector("#tasks")

  //EVENT LISTENER
  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log('the button has been clicked')
    let theFormElement = event.target
    let userInput = theFormElement['new-task-description']
    let whatUserTyped = userInput.value

    newTodos(whatUserTyped)
  })

  //NewLiElement is just a placeholder for the callback function 
  //later on to use -whatUserTyped 
  function newTodos(newLiElement) {
    let blankLi = document.createElement("Li")
    blankLi.className = "newTask"
    blankLi.innerText = newLiElement
    newtaskUl.append(blankLi)

    let deleteAction = document.createElement('button')
    deleteAction.innerText = 'DELETE'
    blankLi.append(deleteAction)

    // EVENT LISTENER ACTS WHEN CLICKING THE DELETE ACTION BUT DELETES THE BLANKLI
    deleteAction.addEventListener("click", function(e){
    
    // deleteAction is accessible here because of closure
    blankLi.remove()
})

}

});
