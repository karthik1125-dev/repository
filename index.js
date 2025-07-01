// // // console.log("Hello world");
// // // function sayHello() {
// // //     console.log("Hello from sayHello function");
// // // }
// // // sayHello();
// // // console.log("This is a simple JavaScript program");
// // // console.log("one");
// // // console.log("two");
// // // setTimeout(()=>{
// // //     console.log("Helloworld");
// // // },5000);
// // // console.log("three");
// // // console.log("four");
// // // function sum(a,b) {
// // //     console.log(a+b);
// // // }

// // // function calculator(a,b,ds){
// // //     ds(a,b);
// // // }
// // // calculator(5,10,sum);
// // // calculator(5,10,(a,b)=>{
// // //     console.log(a+b);
// // // });

// // // console.log("one");
// // // console.log("two");
// // // const hello = ()=>{
// // //     console.log("Hello World");
// // // }
// // // setTimeout(hello,5000);
// // // console.log("three");
// // // console.log("four");


// // // function getData(dataid){
// // //     setTimeout(()=>{
// // //         console.log("Ferching data for id:",dataid);
// // //     },5000);
// // // }
// // getData(1);
// // getData(2);
// // getData(3);

// // function getData(dataid,getnextdata){
// // setTimeout(() => {
// //    console.log("Fetching data for id:",dataid);
// //    if(getnextdata){
// //     getnextdata();
// //    } 
// // }, 2000);
// // }

// // getData(1,()=>{
// //     console.log("getting data 2..........")
// // getData(2,()=>{
// //     console.log("getting data 3..........")
// //     getData(3);
// // });
// // });

// // promise Syntax
// // const myPromise = new Promise((reslove,reject)=>{
// //     setTimeout(())=> {
// //         const success = false;{
// //         if (success){
// //         reslove("Data fetched successfully");
// //         } else {reject("Error fetching data");
// //         }
// //         },2000};
// //     });


// const myPromise=new Promise((resolve,reject)=>{
//     //Asynchronous operation
//     setTimeout(()=>{
//         const success= true;
//         //Simulatr success or failure
//         if(success){
//             resolve("Data fetched successfully");

//         }else{
//             reject("Error fetching data");

//         }
//     },2000);

// });

// myPromise
// .then((data)=>{
//     console.log("Promise resolved with data:",data);

// })
// .catch((error)=>{
//     console.error("Promise rejected with  error:",error);
// });

// let promise = new Promise((resolve,reject)=>{
//     console.log("i am a promise");
//     if(1<0){
//         resolve(123);
//     }
//     reject("Something went wrong");
// });

function getData(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
            console.log("Fetching data for id:",dataid);
            resolve("success");
            },2000);
        });
    }
let result=getData(123);
result;
getData(101)
.then(result =>{
    console.log("First fetch:",result);
    return getData(102);
})
.then(result => {
    console.log("Second fetch:",result);
    return getData(103);
})
.then(result => {
    console.log("Third fetch:",result);
    return getData(104);
})


