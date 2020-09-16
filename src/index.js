// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });




let formbuttom = document.querySelector("#create-task-form")
let theListUL = document.querySelector("#tasks")


formbuttom.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let theForm = evt.target
  let theinput = evt.target["new-task-description"]
  let taskDescription = evt.target["new-task-description"].value
  
  let listLi = document.createElement("li")
  listLi.innerText = taskDescription
  theListUL.append(listLi)
  theForm.reset() 

  let xButton = document.createElement("button")
  xButton.id = "deleteButton"
  xButton.innerText = "X"
  listLi.append(xButton)
  
  xButton.addEventListener("click", (evt)=> {
    evt.preventDefault()
    listLi.remove()
  })

})

