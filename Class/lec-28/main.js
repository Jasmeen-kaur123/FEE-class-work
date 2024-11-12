//promisses represents a future events. Technically they are objects . By default proises are in pending states.promises state:-pensing,fullfilled,reject:
// how to cretae promisses!!:
let p=new Promise((resolve,reject)=>{
    let like=true;
 setTimeout(()=>{
  if(like){
    resolve("yeah,she like you");
  }else{
    reject("naah!! your ugly");
  }
 },2000);
});
//1.1
p.then((value)=>{
  console.log(value)
}),(err)=>{
  console.log("Rejected");
}
// console.log(p)
//1.2 catch catch the error
p.then(
  (value)=>{
    console.log(value);
  })
  .catch((err)=>{
    console.log("Rejected"+err);
  })

//promise 2 channing
let p1=new Promise((resolve,reject)=>{
},2000);
p1.then((value)=>{
  console.log(value);
  let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("promises 2 working");
    },2000);
  }).then((value)=>{
    console.log(value);
  });
  return p2;
})

.then((value)=>{
  console.log("work done ")
})