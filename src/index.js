document.addEventListener("DOMContentLoaded", () => {
  const myTodos = document.querySelector("#tasks");
  const form = document.querySelector("#create-task-form");
   
  form.addEventListener("submit", function(event){
    event.preventDefault();
    let formElement = event.target;
    let input = formElement["new-task-description"];
    let userInput = input.value;
    
    let button = document.createElement("BUTTON");
    button.className = "buttons";
    button.innerText = "X";
    
    let newListItem = document.createElement('li')
    newListItem.className ="newListItemClass";
    
    newListItem.innerText = userInput;
    myTodos.append(newListItem);
    newListItem.append(button);
    
    
    button.addEventListener("click", function(e){
      newListItem.remove();
    });
    
    
  });
});