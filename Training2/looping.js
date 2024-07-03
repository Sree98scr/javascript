//for looping

for(i=1;i<5;i++){
    console.log(i);
    console.log("<br>");
}

//while loop

x=1
while(x<10){
    console.log(x)
    x++;
   
}

//do while
x=2
do{
    console.log(x);
    x++
}
while(x<=6)


//for in loop
const employee  ={
    id :"125",
    name : "sree",
    age :25,
}
for(key in employee){
    console.log(key,employee[key]);
}

//for of loop

const array= "aa,bb,cc";
for(element of array){
    console.log(array);
}

//break
for(let i=1;i<6;i++){
    if(i==4){
        break;
    
    }
    console.log(i);
  }
//continue loop
for(let i=1;i<6;i++){
    if(i==4){
        continue;
    
    }
    console.log(i);
}



   
