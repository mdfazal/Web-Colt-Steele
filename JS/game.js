var secretNumber = 4;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if (guess === secretNumber) {
    alert("You got it right");
}

else if (guess > secretNumber) {
    alert("Too High. Guess Again");
}

else {
    alert("Too low. Guess Again");
}

console.log("PRINTING ALL NUMBERS BETWEEN -10 TO 19");
var counter = -10;

while(counter < 20){
    console.log(counter);
    counter++;
}

console.log("All EVEN NUMBERS BW 10 AND 40");
var counter = 10;
while (counter<=40){
    console.log(counter);
    counter+=2; 
}

//var counter = 10;
//while (counter<=40){
//    if(counter%2 === 0){
//    console.log(counter);
//}
//    counter++; 
//}



