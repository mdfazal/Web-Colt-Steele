var todo = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

if(input === "list"){
    console.log(todo);
} else if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todo.push(newTodo);
}