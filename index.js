// // console.log("Hello World");
// // // alert("Hellow guys chai peelo");
// // console.warn("this is a warning");
// // console.error("this is a error");
// // // console.clear();
// // // console.assert(4==3);
// // console.assert(4 == 4);

// var num1 = 12;
// var num2 = 15;
// // console.log(num1+num2);

// var str1 = "This is a string";
// var str2 = "This is another string";
// // console.log(str1);
// // console.log(str1+" "+str2);

// //this is object variable which stores key value pairs
// var marks = {
//     suraj: 80,
//     karar: 90,
//     trigu: 100,
//     upol: 200
// };
// console.log(marks);

// //boolean datatypes
// var bool1 = true;
// var bool2 = false;
// // console.log(bool1,bool2);

// var x = 20;
// var y = 30;
// // console.log(x == y);

// var a = 12;
// var b = a;
// b += 3;
// // console.log(b);

// var b1 = true;
// var b2 = false;
// // console.log(b1 && b2);

// function avg(a, b){
//     // var c;
//     c = (a+b)/2;
//     return c;
// }
// // var ans;
// ans = avg(4,8);
// console.log("Average is : "+ ans);
// // That means we may or may not decalre the variable, it doesnt matter

// //conditional statement
// //if else ladder
// var x = 12;
// if(x>=23) console.log("You can drive");
// else if(x>=18 && x<23) console.log("You cant drive");
// else console.log("Padhai karle bhai");

// //loops
// var arr = [2, 3, 4, 5];
// // console.log(arr);
// // for(var i=0; i<arr.length; i++){
// //     console.log(arr[i]);
// // }

// //for each
// function iterate(item,index){
//     console.log(item +" has index "+ index);
// }
// // arr.forEach(iterate);

// //while loop
// let i = 0;
// while(i<arr.length){
//     // console.log(arr[i]);
//     i++;
// }

// //do while loop
// let j = 0;
// do{
//     // console.log(arr[j]);
//     j++;
// } while (j<arr.length);

// //Array methods
// let arr2 = [1,3,10,11,2,22,21];
// // let str = arr2.toString();
// // console.log(str);
// // console.log(arr2.sort());
// // console.log(arr2.pop());
// // console.log(arr2);
// // arr2.push("suraj");
// // console.log(arr2);
// // arr2.shift();
// // console.log(arr2);
// // arr2.unshift("karar");
// // console.log(arr2);
// // console.log(arr2.unshift("trigu"));

// //string methods
// let str = "sonu is a good good boy";
// // console.log(str.length);
// // console.log(str.indexOf("good"));
// // console.log(str.lastIndexOf("good"));
// // console.log(str.slice(0,5));
// // let str3 = str.replace("sonu", "karar");
// // console.log(str3);
// // let str4 = str.replace("good", "honest");
// // console.log(str4);

// //date function in js
// let date = new Date();
// // console.log(date.getTime());
// // console.log(date.getFullYear());
// // console.log(date.getDay());
// // console.log(date.getMinutes());
// // console.log(date.getHours());

// // firstcontainer.innerHTML
// // document.getElementsByTagName("div")
// // document.getElementsByClassName("container")
// // document.getElementById("firstcontainer")
// // document.getElementsByClassName("container")[1]


// // DOM manipulation
// // console.clear();
// let el;
// el = document.getElementById("click");
// console.log(el);
// el.click();
// // document.getElementById("click").style.border = "2px solid black";
// el.style.border = "2px solid blue";
// let classEle = document.getElementsByClassName("container");
// classEle[1].style.background = "Yellow";

// let ele2 = classEle[0].getElementsByTagName("p");
// console.log(ele2);

// //adding a class to an element:
// classEle[0].classList.add("txt-color");

// //removing a class from an element:
// classEle[0].classList.remove("txt-color");

// //innerText will give only the string representation of the texts of that element
// console.log(classEle[0].innerText);

// //innerHTML will give string representation of the whole html content of an element
// console.log(classEle[0].innerHTML);
// console.clear();

// //to create and add a html element in an existing dom:
// let ele = document.getElementsByTagName("div");
// console.log(ele);
// let newEl = document.createElement("p"); //this will create a paragarph element
// newEl.innerText = "wefewfqwefqwefefefi hweufhwqefoiqwejfoipqwejf[qiwejf"; //adding text inside p element
// ele[0].appendChild(newEl); // finally add this new element after last element of firts div element

// //create and replace a element
// let newEl2 = document.createElement("b"); //this will create a bold element
// newEl2.innerText = "This is a bold element"; //adding text inside b element
// ele[0].replaceChild(newEl2, newEl); // finally this new element will replace the previous  paragraph element

// //removing child element
// ele[0].removeChild(newEl2); //it will remove the newly added element from first div

// //query selector: we can give query format used in css to target elements
// let button1 = document.querySelector("div#firstcontainer button");
// console.log(button1);
// let p = document.querySelectorAll(".container p"); //it will select all p elements in container calss
// console.log(p);
// let e1 = document.querySelectorAll("div");
// console.log(e1);
// console.log(e1[0]);

// //events

// //onclick event which is added in the tag level in our dom
// function clicked(){
//     // console.log("button clicked");
// }

// //onload event
// window.onload = function(){
//     console.log("The document is loaded");
// }

// //click event
// function containerClicked(){
//     // console.log("Conatiner is clicked");
// }
// document.getElementById("firstcontainer").addEventListener("click", containerClicked);

// //mouseover event
// function mouseOver(){
//     console.log("mouse over");
// }
// // document.getElementById("firstcontainer").addEventListener("mouseover", mouseOver);
// let l = document.querySelector("#firstcontainer p");
// // l.addEventListener("mouseover",mouseOver);

// //mouseout event
// function mouseOut(){
//     console.log("mouse out");
// }
// // l.addEventListener("mouseout", mouseOut);

// //mouseup event
// function mouseUp(){
//     // console.log("mouse up when clicked on p");
// }
// // l.addEventListener("mouseup",mouseUp);

// //mousedown event
// function mouseDown(){
//     // console.log("mouse down when clicked on p");
// }
// // l.addEventListener("mousedown",mouseDown);

// //perform something when clicked on some element
// function clickFun(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>this is bold when clicked</b>"
// }
// let element = document.getElementById("click");
// // element.addEventListener("click",clickFun);

// let n1 = document.querySelector(".container");
// let oldStr = document.querySelectorAll(".container")[1].innerHTML;
// function mouseUp1(){
//     document.querySelectorAll(".container")[1].innerHTML = oldStr;
// }
// // n1.addEventListener("mouseup",mouseUp1);

// //mousedown event
// function mouseDown1(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>this is bold when clicked</b>"
// }
// // n1.addEventListener("mousedown",mouseDown1);


// //setTimeout
// let funTime = () => {
//     document.querySelectorAll(".container")[1].innerHTML = "<b>setTimeout fired</b>";
//     console.log("setTimeout fired");
// };
// // clr = setTimeout(funTime, 3000);
// // clearTimeout(clr);

// //setInterval
// // setInterval(funTime, 3000);

// //clearInterval
// // let clr = setInterval(funTime, 3000);
// // clearInterval(clr);

// //local storage
// localStorage.setItem('sports','cricket');
// console.log(localStorage.getItem('sports'));

// //JSON
// //coverting a js obj into json string
// let obj = {name:'sur"aj', sport:"football", food:{indian:"rice-curry", chinese:"chowmein"}};
// let jso = JSON.stringify(obj);
// console.log(jso);
// console.log(typeof(jso));

// //converting a json string back to js obj
// let par = JSON.parse(jso);
// console.log(par);
// let parsed = JSON.parse(`{"name":"John", "age":"30", "car":"BMW"}`);
// console.log(parsed);
// console.log(typeof(parsed));


