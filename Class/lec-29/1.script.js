let url="https://swapi.dev/api/people/1/"
let container=document.querySelector(".container");
let name=document.getElementsByClassName("name");
let gender=document.getElementsByClassName("gender");
let height=document.getElementsByClassName("height");
fetch(url)
.then((data) =>{
  data.json().then(data) =>{
    console.log(data);
  }
});
