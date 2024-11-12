var a=document.getElementById("heading");
console.log(a);
console.dir(a);
a.style.color="pink";
a.style.backgroundColor="aqua";
a.style.border="2 px solid red";
a.style.padding="20px";

var b=document.getElementsByClassName("items");
console.log(b);
for (Let lists  of b){
  lists.style.color="green";
  lists.style.fontWeight="bold";
}

var c=document.getElementsByTagName("h2");
c[0].style.textDecoration="line-through";
c[0].style.backgroundColor="yellow"; 

var 