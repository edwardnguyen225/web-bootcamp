let todoList = [];
let inputFunc, inputTodo;
let msgAskWhatToDo = "What would you like to do?";
console.clear();

function newTodo() {
  let msg = "What you want to add?";
  inputTodo = prompt(msg);
  todoList.push(inputTodo);
  console.log(`Added todo: ${inputTodo}`);
}

function listTodo() {
   if (todoList.length === 0) {
      alert("List is empty");
      return;
   }

   console.log("Here your list");
   for (let i = 0; i < todoList.length; i++) {
      console.log(`${i + 1}: ${todoList[i]}`);
   }
}

function deleteTodo() {
   let msg = "What todo to delete?";
   inputTodo = prompt(msg);
   index = todoList.indexOf(inputTodo);
   if (index === -1) {
      alert("Todo not found");
      return;
   }

   todoList.splice(index,1);
   console.log(`Deleted todo: ${inputTodo}`);
}

function main() {
  while (inputFunc !== "quit") {
    inputFunc = prompt(msgAskWhatToDo);
    if (inputFunc === "new") {
      newTodo();
    } else if (inputFunc === "list") {
      listTodo();
    } else if (inputFunc === "delete") {
       deleteTodo();
    }
  }
  let msgQuit = "OK. Bye :)))";
  console.log(msgQuit);
}
