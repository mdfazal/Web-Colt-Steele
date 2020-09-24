var todo = ["Buy new Turtle"];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    if(input === "list"){
        console.log("*******");
        todo.forEach(function(todo, i){
            console.log(i + ": "+todo);
        });
        console.log("*******");
        
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todo.push(newTodo);
        console.log("Added Todo");
    } else if (input === "delete") {
        var index = prompt("Enter index of todo to delete");
        todo.splice(index, 1);
        console.log("Deleted Todo");
    }
    input = prompt("What would you like to do?");
}
console.log("ok you quit "); 