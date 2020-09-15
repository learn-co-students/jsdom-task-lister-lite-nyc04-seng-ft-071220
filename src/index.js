// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// this is the form
let newTaskForm = document.querySelector("form")
// this is the to do list
let tasksUL = document.querySelector("#tasks")

// we need to get the user input
// to do that we  need to addEventListener to the form so that when the user "submit", the callback function executes
// in the callback function we are first stopping the form from refreshing (request/response)
// then we get the form, the user's input from the form, and finally the value of the user's input
// after getting the user input, we add their input as an element to the todo list
newTaskForm.addEventListener("submit", function(evt) {
  evt.preventDefault()
  let formElement = evt.target
  let userInput = formElement["new-task-description"]
  let whatUserTyped = userInput.value

  turnStringIntoTask(whatUserTyped)
  
})

// takes the user's input and creates the task on the todo list *extra was adding a remove button next to task*
// 1. create an "li" element on the document that will go under the to do task list
// 2. have the content be the user's input
// 3. add the li to the to do task list
function turnStringIntoTask(newTaskStr) {
  let blankLi = document.createElement("li")
  blankLi.innerText = newTaskStr
  tasksUL.append(blankLi)

  let button = document.createElement("Button")
  button.innerText = "remove"
  blankLi.appendChild(button)

  button.addEventListener("click", function(evt) {
    blankLi.remove()
  })

}