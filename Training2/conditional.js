// conditions in javascript
//if condition

var age =21
if(age>+18){
    console.log(
        "eligible to vote"
    );
}
if(age<=18){
        ("not  eligible to vote");
}

//if else condition
var age = 22
if(age>18){
    console.log("eligible to vote");
}
else{
    console.log("not eligible to vote");
}

// else if condition

var passmark =35
var science =20, tamil =25

if(science>=passmark){
    console.log("science fail");
}
else if(tamil<=passmark)
    {
    console.log("tamil pass");
}
else{
    console.log("allpass");
}

//switch statement

var floor=3;
switch(floor){
    case 1:
        console.log("floor1");
    break;
    case 2:
        console.log("floor2");
    break;
    case 3:
        console.log("floor3");
    break;
    case 4:
        console.log("floor4");
    break;
    case 5:
        console.log("floor5");
    break;
    default:
        console.log(groundfloor);
}
    

var floor=5;
switch(floor){ 
case 1:
console.log("floor1");
break;
case 2:
    console.log("floor2");
break;
case 3:
    console.log("floor3");
break;
case 4:
    console.log("floor4");
break;
default:
    console.log("groundfloor");}


var a=2;
var b=3;
var c =2;
switch(c){
    case 1:
        c = a+b;
        console.log(c);
        break;
     case 2:
         c = a*b;
        console.log(c);
        break;
    default:
        console.log(c);

}
//ternary
var age = 10;
(age>=5)? console.log("big"):console.log("small");

//nested if 
var num=5
if(num>=0){

if(num==0){
    console.log("num is 0");
}
else if(num>=0){ 
    console.log("numis greater than 0");
}
}

else if (num<=0){
    console.log("num is smaller than 0");}
else{
    console.log("greater");
}


                                                                





