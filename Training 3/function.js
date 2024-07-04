//function
function get(){
    console.log("hello world");
}
get();

//function 1
function average(a,b){
    console.log((a+b)/2);
}
average(8,4);


//return 1

function get1(){
    return("hello");
}
var str= get1();
console.log(str);


//return 2

function average1(b,c){
    return((b+c)/2);
}
console.log(average1(6,3));



function average1(b,c){
    return((b+c)/2);
}
var result= average1(6,3);
console.log(result);

var n="sree";
var e=123;
function object(name,email){
    return `${name} ${email}`;
}
var result=object(n,e);
console.log(result);


//from user
function colour(ab){
    return `bright ${ab}`;
}
let red= prompt("enter the user name")
let blue = colour(red);
console.log(blue);


//anonymous function
var sampletext= function(){
    console.log("anonymous function");
}
sampletext();


//callback function

function myfunction1(){
    console.log("first");
}
function myfunction2(){
console.log("second");

}
myfunction1();
myfunction2();

