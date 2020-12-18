// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

let todoUl = document.querySelector("ul#tasks")
let newTaskForm = document.querySelector("#create-task-form")

newTaskForm.addEventListener("submit", (event) => {
  event.preventDefault()
  
  let theFormElement = event.target;
  let userInput = theFormElement["new-task-description"].value

  // let blankLi = document.createElement("li")
  // blankLi.innerText = userInput
  // todoUl.append(blankLi)

  turnStringIntoText(userInput)

})

function turnStringIntoText(textString) {
  let blankLi = document.createElement("li")
  blankLi.innerText = textString

  todoUl.append(blankLi)

  blankLi.addEventListener("click", function(event) {
    blankLi.remove()
  })
}