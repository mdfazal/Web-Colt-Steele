var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){
    if(isPurple){
        document.body.style.background = "white";
        
    } else {
        document.body.style.background = "purple";
        
    }
    isPurple = !isPurple;
    //if white
    //make it purple
    //else
    //make it white
});