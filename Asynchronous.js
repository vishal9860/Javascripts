var readlineSync = require('readline-sync');
// let promise=new Promise((resolve,reject)=>{
    
//     if(true){
//         const person={name:"vishal"};
//         resolve(person);
//     }
//     else{
//         const error={errorcode:404};
//         reject(error);
//     }
// })
// promise.then((ele)=>{
//    console.log(ele.name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Clean Up");
// })

// let asyncss=(time)=>{
//     return new Promise((resolve,reject)=>{
       
//            setTimeout(()=>{
//                resolve("This API Is ExeCuated in :"+time);
//            },time);
//     })
// }
// asyncss(2000).then((ele)=>{
// console.log(ele);
// }).then((err)=>{
//    console.log(err); 
// }).finally(()=>{
//     console.log("Clean up");
// })
// let makeApiCall=(time)=>{
//     return new Promise((resolve,reject)=>{
       
//            setTimeout(()=>{
//                resolve("This API Is ExeCuated in :"+time);
//            },time);
//     })
// }
// let multiApiCall=[makeApiCall(1000),makeApiCall(500),makeApiCall(2000)]
// Promise.all(multiApiCall).then((data)=>{
//     console.log(data);
// })


// function who() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('🤡');
//     }, 200);
//   });
// }

// function what() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('lurks');
//     }, 300);
//   });
// }

// function where() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('in the shadows');
//     }, 500);
//   });
// }

//  async function msg() {
//   const a =  await who();
//   const b =  await what();
//   const c = await where();

//   console.log(`${ a } ${ b } ${ c }`);
// }

// msg(); // 🤡 lurks in the shadows <-- after 1 second
// async function msg() {
//   const [a, b, c] = await Promise.all([who(), what(), where()]);

//   console.log(`${ a } ${ b } ${ c }`);
// }

// msg();

const userlogin=()=>{
   let name=readlineSync.question("Enter The Name");
   let pass=readlineSync.question("Enter The Name");
   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
       if(name==="vishal"&&pass=="vishal@123")
       {
           resolve(`User ${name}Authenticated`);
       }else{
           reject("Authentication Failed");
       }
       },1000);
   })
}
function gotoHomepage(userAuthentication){
        return Promise.resolve(`GO TO Home Page ${userAuthentication}`);
}
let performTask=async()=>{
    try{
          let response=await userlogin();
    console.log("Validate User");
    let userAuth=await gotoHomepage(response);
    console.log(userAuth);
    }catch(err){
        console.log(err);
    }
}
performTask();