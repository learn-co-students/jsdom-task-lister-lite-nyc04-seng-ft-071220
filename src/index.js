
document.addEventListener("DOMContentLoaded", () => {
  //Define all 'stable' DOM elements at top.  

  let newTaskForm = document.querySelector ("#create-task-form") 
  //console.log(newTaskForm)

  let newTaskDescription = document.querySelector("#new-task-description")
  let newTaskPriority = document.querySelector("#new-task-priority")
  let newTaskUl = document.querySelector("ul#tasks")
  console.log(newTaskUl)

  // Event Listeners ALWAYS take in a string and a callback function 

  newTaskForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    //applies only to forms - anything with a submit event.
   // console.log("hello") 
 
  let theFormElement = evt.target
  let userInput = theFormElement[0].value

// must access input field from listener event. 

        
        let blankLi = document.createElement("li")
        blankLi.innerText = userInput 
        newTaskUl.append(blankLi)
        
    })
})