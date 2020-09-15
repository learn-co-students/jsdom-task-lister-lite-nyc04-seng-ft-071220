document.addEventListener("DOMContentLoaded", () => {
});
// your code here
   const toDoList = document.querySelector("ul#tasks");
   const createTaskForm = document.querySelector("form#create-task-form");

   createTaskForm.addEventListener("submit", function(evt){
     evt.preventDefault(); //not to trigger the action
     const inputFormElement = evt.target;
     let userInput = inputFormElement["new-task-description"].value;

     let blankLi = document.createElement("li");
     blankLi.innerText = userInput;
     toDoList.append(blankLi);

     let deleteButton = document.createElement("button");
     deleteButton.setAttribute("data-description", userInput);
     deleteButton.innerText = "X";
     blankLi.append(deleteButton);

     deleteButton.addEventListener("click", function() {
       blankLi.remove();
     })
   })


