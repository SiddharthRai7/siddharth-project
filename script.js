// const max =prompt("Enter maximum number");
// const random = Math.floor(Math.random()*max)+1;
// console.log(random);
// let guess = prompt("guess the number");
// while(true){
//    if(guess=="quit"){
//       console.log("user quit");
//       break;
//    }
//    if(guess==random){
//       console.log("you are right your random number is", random);
//       break;
//    }
//    else if(guess<random){
//       guess= prompt("hint:your guess was too small, please try again");
//    }else{
//       guess= prompt("hint:your guess was too large, please try again");
//    }
// }
// function rollDice() {
// let random = Math.floor(Math.random()*6)+1;
// console.log(random) ;
// }
// rollDice();
// let str = ["hii", "hello", "bye", "!"];
// function concat(str){
//     let result;
//     for(let i =0; i<=str.length; i++){
//         result+=str[i]
//     }
//     return result;
// }
// let nums =[1,24,25,26,65,78,14];
// let ans = nums.filter((el)=>{
//     return el<5;                     
// })
// let getMin = function (nums) {
//     let min = num.reduce((min, el) => {
//         if (min < el) {
//             return min;
//         }
//         else {
//             return el;
//         }
//     });
//    return min;
// }
// let num = [1, 2, 3, 4, 25, 36, 18, 19, 16, 216, 26];


// function sum (a,b=3){{
//     return a+b;
// }}
// sum(1);
// const data ={
//     email: "sidd@gmail.com",
//     password:"abcd"
// };
// const dataCopy ={...data,id:123};
// let obj1 = {...}
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para = document.createElement("p");


// h1.innerText="i am in a div";
// para.innerText="me too";

// div.append(h1);
// div.append(para);
// div.classList.add('box')
// document.querySelector("body").append(div)
// let btns = document.querySelectorAll("button");
//  for (btn of btns){

//     btn.addEventListener("dblclick",function(){
//         console.log("double clickrd me")
//     });

//      }

//  function sayHello(){
//     alert("Hello");
//  }

//  function sayName(){
//     alert("Apna college");
//  }
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText =randomColor;
//     let div =document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("color updated")
// })
// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color =`rgb(${red},${green},${blue})`;
//     return color;
// }
// let input = document.querySelector("input");
// input.addEventListener("keydown",function(){
//     console.log("key was pressed")
// })