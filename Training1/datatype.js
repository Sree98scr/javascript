//primitive datatypes

//string
let colour="Red";
console.log(colour);

//boolean
let x,y;
x=true;
y=false;
console.log(x , y) ;

//number
let a=2;
console.log(a);

//null
let b=null;
if(b){
    console.log(b);
}
else{
    console.log("hi");
}

//undefined
let a;
console.log(a);

//bigInt
let x=BigInt(522222222222);
console.log(typeof x);


//non primitive datatypes

//object
const name={'r':'sree','l':'ramya'};
console.log(name.r);
console.log(name.r  +" "+  name.l);

//array
const no=[1,2,3,4,5];
console.log(no[1]);
no[2]=8;
console.log(no);

//function
let x="sree";
function name(d){
    return `hello , ${d}!`;
}
console.log(name(x));