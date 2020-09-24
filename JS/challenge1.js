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