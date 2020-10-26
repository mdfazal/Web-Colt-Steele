var lis = document.querySelectorAll("li");

for(var i =0; i<lis.length;i++){
  lis[i]addEventListener("mouseover", function(){
    this.style.color = "green";
  });
}

firstLI.addEventListener("mouseover", function(){
  firstLI.style.color = "green";
});

firstLI.addEventListener("mouseout", function(){
  firstLI.style.color = "black";
});