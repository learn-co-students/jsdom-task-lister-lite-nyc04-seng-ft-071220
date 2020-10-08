// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// using defer instead

let taskForm = document.querySelector("#create-task-form")
let taskUl = document.querySelector("#tasks")
// console.log(taskUl)
// console.log(taskForm) //checks that form was selected properly
taskForm.addEventListener("submit", (event)=> {
  event.preventDefault()
  // console.log("hello")
  let input = event.target[0].value
  displayTodo(input)
})

let displayTodo = (input) => {
  console.log(input)
  let taskLi = document.createElement("li")
  // console.log(taskLi)
  taskLi.innerText = input
  console.log(taskLi)
  taskUl.append(taskLi)
}





