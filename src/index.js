document.addEventListener("DOMContentLoaded", () => {
  // console.log("loaded!");
});


let clickFormButton = document.querySelector("#create-task-form");
let todoList = document.querySelector("ul#tasks");


clickFormButton.addEventListener('submit', todoEvent = (e) => {
  e.preventDefault()
  let theFormElement = e.target;
  let userInput = theFormElement["new-task-description"].value;
  console.log(userInput);

  let newList = document.createElement("li");
  newList.innerText = userInput;
  todoList.append(newList);

  let deleteButton = document.createElement("button");
  deleteButton.setAttribute('data-description',userInput);
  deleteButton.innerText="X";
  newList.append(deleteButton);

  
  deleteButton.addEventListener("click", removeList = (e) =>{
    newList.remove(deleteButton);
  })
})