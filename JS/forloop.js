console.log("numbers between -10 and 19");

for(var i = -10; i < 20; i++){
    console.log(i);
}

console.log("even numbers between 10 and 40");

//for(var i = 10; i <= 40; i+=2){
 //   console.log(i);
//}

for (var i = 11; i<=40; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

console.log("Printing all odd numberd between 300 and 333");

for(var i = 300; i<=333; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

console.log("Printing all the numbers between 5 and 50 that are divisible by 5 and 3");

for (var i = 5; i <= 50;i++ ){
    if(i%5 === 0 && i%3 === 0){
        console.log(i);
    }
}