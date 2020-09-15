document.addEventListener("DOMContentLoaded", () => {
  
  let taskUL = document.querySelector("ul#tasks")

  let newForm = document.querySelector("#create-task-form")
  newForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let theFormElement = evt.target
    debugger
    let userInput = theFormElement["new-task-description"]
    let whatUserTyped = userInput.value

    let blankLi = document.createElement("Li")
    blankLi.innerText = whatUserTyped
    taskUL.append(blankLi)

 
    let btn = document.createElement("Button")
    btn.innerText = "X"
    blankLi.appendChild(btn)

    btn.addEventListener("click", function(e){
    blankLi.remove()

})


  })













});
