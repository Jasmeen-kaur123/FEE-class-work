// slice:array ko cut krta ha jis position tak krna ha 
// let arr=[1,2,3,4] 
// arr[1]=5
// console.log(arr)
// console.log(arr.slice(1,3))//starting index and ending index-1
// console.log(arr.slice(-2))
// console.log(arr.slice(10))

// splice : (startingindex ,deletion ,insertion1,insertion2,------) 
// update the origin value but slice cannot
// console.log(arr.splice(1))
// console.log(arr.splice(1,2)) //deleting the value
// console.log(arr) //printing the value left after deletion 
// console.log(arr.splice(1,3,5,6,10))   //(startingindex ,deletion ,insertion1,insertion2,------) 
// console.log(arr)

// constructor
// const obj=new Object();
// obj.name="Jass"
// console.log(typeof obj)
// console.log(obj)
 
// literals
// const users={
//   name: 'Jass',
//   rollno :2310992025,
//   subject : 'fee',
// }
// console.log(users)
// console.log(users.name)
// console.log(users['name'])

// let users={
//   user1 :{
//   name:'Jass',
//   age:18
//   },
//   user2 :{
//   name:'jasmeen',
//   age:19
//   }
//   }
//   console.log(users.user2.age)

  // let users={
  //   user1 :{
  //   name:'Jass',
  //   age:18
  //   },
  //   user2 :{
  //   name:'jasmeen',
  //   age:
  //   {
  //     user3:{
  //       age:20
  //     }
  //   }    
  //   }
  // }
  //   console.log(users.user2.age.user3.age)
  

  // object inside an array
  let arr={
    {
      name:'Jass'
    },
    {
      name:'jasmeen',
      rollno:2310992025
    }
  }