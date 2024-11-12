// function dukan(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let open=true;
//       if (open){
//         resolve("shop open")
//       }else{
//         reject("not open")
//       }
//     },2000)
//   })
// }
// dukan().then((val)=>{
//   console.log(val);
// })
// .catch((err)=>{
//   console.log(val);
// })

function Downloadmovie(url){
  setTimeout(function(){
    var a=url.split("/").pop()
    console.log(a)
  },2000);
}
let p=new Promise((resolve,reject)=>{
  let a=true;
setTimeout(()=>{
if(a=="mp3"){
  resolve("mp3");
}else{
  reject("not mp3");
}
},2000);
});
Downloadmovie("http://example.com/movie.mp4")
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.log(error); 
  });


