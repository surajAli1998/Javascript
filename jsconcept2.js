// function a(){
//     var g = 5;
//     function c(){
//         console.log(g);
//     }
//     c();
// }
// a();

// console.log(h);
// let h = 12;
// console.log('the value of h is: '+h);

//block scope
// {
//     let t = 10;
//     console.log(t);
// }
// console.log(t);

//illegal shadowing
// var g = 12;
// {
//     let g = 15;
//     console.log(g);
// }
// console.log(g);

//closures
// console.log(v);
// var v = function fun3(){
//     console.log(2);
// }
// v();

// function x(){
//     var v = 110;
//     function y(){
//         console.log(v);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();

// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         }, i*1000);
//     }
// }
// x();


// var b2 = function fun(param1){
//     console.log(param1);
// }
// b2(function(){});

// function xyz(param1){
//     console.log(param1);
// }
// xyz(function(){console.log("Hellow ali")});

// function fc(param){
//     console.log(param);
// }
// function fc2(){};
// fc(fc2);

// var b3 = function(){
//     return function xyz(){

//     }
// }
// console.log(b3());

//callback function and settimeout

setTimeout(function () {
    console.log("Timer")
}, 5000);

function a(param) {
    console.log("this is function a");
    param();
}

a(function b() {
    console.log("this is callback function")
});

function countClick() {
    let count = 0;
    document.getElementById("click").addEventListener("click", function fun() {
        count++;
        console.log("Button clicked", count);
    });
}
countClick();




