// function one (){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();
// setTimeout(()=>{
//     console.log("apna college");
// },2000);
// console.log("hello...")

// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3) {
//                 reject("promise was rejected")
//             };
//             h1.style.color = color;
//             console.log(`color change to:${color}`)
//             resolve("color change!")
//         }, delay);
//     });
// }
// async function demo() {
//     try {
//         await changeColor("red", 1000)
//         await changeColor("green", 1000)
//         await changeColor("blue", 1000)
//         await changeColor("violet", 1000)
//         changeColor("aqua", 1000)
//     }catch(err)
// {
//     console.log("error caught");
//     console.log(err)
// }    
//     let a = 5;
//     console.log(a)
//     console.log("new number =",a+3)
// }
// demo();
// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//      .then(() => {
//         console.log("green color was completed");
//         return changeColor("yellow", 1000);
//     })
//      .then(() => {
//         console.log("yellow color was completed");
//         return changeColor("pink", 1000);
//     })
//      .then(() => {
//         console.log("pink color was completed");
//         return changeColor("blue", 1000);
//     })
//      .then(() => {
//         console.log("blue color was completed");

//     })
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000);
// });
// });
// function savetoDb(data){
//     return new Promise((success,failure)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             success();
//         }else{
//             failure();
//         }
//     });

// }

// async function greet(params) {

//     return "hello world";
// }
// greet()
// .then((result)=>{
//     console.log("promise was resoled");
//     console.log("the result is:",result);
// })
// .catch((err)=>{
// console.log("promise gives an error")
// })

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000)
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     getNum();

// }
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async ()=>{
// let link = await getImage();
// let img  = document.querySelector("#result");
// img.setAttribute("src",link)
// console.log(link)
// });


// async function getImage() {
//   try {
//     let res = await axios.get(url2);
//     return res.data.message // ✅ actual image URL
//   } catch (e) {
//     console.log("error", e);
//     return "no image found";
//   }
// }




// let url = "https://catfact.ninja/fact";
// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e) {
//         return " no result found";
//     }
// }


// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//    let  colleges = await getColleges(country);

//    Show(colleges);
// });

// function Show(colleges){
//     let list = document.querySelector("#list")
//     list.innerText="";
//     for(col of colleges){
//         console.log(col.name)
//         let li = document.createElement("li");
//         li.innerText =col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country) {
//     try {
//         let res = await axios.get(url + country)
//        return res.data;
//     } catch (e) {
//         console.log("error", e);
//         return [];
//     }
// }
let n = 5;
for(let i=0;i<=n; i++){
    console.log("hello",i);
}