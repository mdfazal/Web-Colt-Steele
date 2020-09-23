//version 1
//var answer = prompt("are we there yet?");

//while(answer !== "yes" && answer !== "yeah" && answer !== "Yes" && answer !== "YES"  && answer !== "Yeah"  && answer !== "YEAH"){
  //  var answer = prompt("are we ther yet?");
//}
//alert("Yay we made it ");



//if(answer === "yes") {
//    alert("Yes we are there ");
//} else {
//}

//VERSION 2
var answer = prompt("are we there yet?");

while(answer.indexOf("yes") === -1) {
    var answer = prompt("are we ther yet?");
}

alert("Yay we made it ");