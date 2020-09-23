var todo = ["Buy new Turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit"){
    if(input === "list"){
        console.log("*******");
        todo.forEach(function(todo, i){
            console.log(i + ": "+todo);
        });
        
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todo.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("ok you quit "); 