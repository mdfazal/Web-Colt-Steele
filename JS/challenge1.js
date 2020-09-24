console.log("Connected");
function printReverse(arr){
    for(var i = arr.length-1; i>=0; i--){
        console.log(arr[i]);
    }
}
printReverse([3,6,2,5]);

//****isUniform() */
function isUniform(arr){
    var first = arr[0];
    for(var i = 0;i<arr.length;i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}

function sumArray(arr){
    var total =0;
    arr.forEach(function(element){
        total = total + element;
    });
    return total;
}

function max(arr){
    var ele = arr[0];
    for (var i= 1;i<arr.length;i++){
        if(ele<arr[i]){
            ele = arr[i];
        }
    }
    return ele;
}
var movies = [
    {
        title:"In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    }, 
    {
        title: "Les Miserable",
        hasWatched: false,
        rating: 3.5
    }
]
movies.forEach(function(movie){
    var result = "You Have ";
    if(movie.hasWatched){
        result += "watched";
    } else {
        result += "not seen";
    }
    result += "\""+movie.title+"\" - ";
    result += movie.rating + " stars";
    console.log(result)
    }
);