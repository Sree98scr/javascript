//object

var person={
    name : "sree",
    age : 21,
    email :"sree123",
    haircolour :"black" 
}
person.nationality= "indian";


console.log(person);
console.log(person.age);
console.log(person['haircolour']);
console.log (person.name + "is" +person.age+  "years old");
console.log (person.name + "is" + person.nationality+"."); //adding new property

// deleting the property
delete person. age;
console.log(person);

//nested object
var fruit={
    a:"apple",
    b:"orange",
    veg:{                     //new object insideitself
    c:"carrot",
        d:"beans"}
    
    
}
console.log( fruit.veg);
console.log( fruit ["veg"]["d"]);//method1
console.log( fruit.veg.c);  //method2


//function
var person={
    name : "sree",
    age : 21,
    studentdetail :function(){
        return this.name +" "+this.age+" ";
        }
};
console.log(person.studentdetail());

//construct

function student(name,age,num){
    this.name= name;
    this.age= age;
    this.num= num;

}
var x = new student("sree",21,123);
var y = new student("san",23,193);
console.log("student name is"+ " "+ x.name+ " ");














