'use strict';

function Emp(emp,na,dep,lev,img)
{
    this.employee_ID=emp;
    this.full_name=na;
    this.department=dep;
    this.level=lev;
    this.image=img;
    this.calc();
}
Emp.prototype.calc=function()
{
    if(this.level=="Senior")
        {
         this.salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
        }
    else if(this.level=="Mid-Senior")
        {
         this.salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
        }
    else if(this.level=="Junior")
        {
        this.salary=Math.floor(Math.random() * (1000 - 500) + 500);
        }
}
Emp.prototype.render=function()
{
    document.write(`<h1>employeee id is ${this.employee_ID} and his salary is ${this.salary}</h1><br>`);
}

let con1=new Emp(1000,"Ghazi Samer",	"Administration","Senior");
let con2=new Emp(1001,"Lana Ali","Finance","Mid-Senior");
let con3=new Emp(1002,"Tamara","marketing","Junior");
let con4=new Emp(1002,"obada","marketing","Senior");

con1.render();
con2.render();
con3.render();
con4.render();


// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )

// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:

// You are given an object that contains name and age of some customers
// Write a function that returns an array of strings that follow the below structure
//
// the string format is "Customer Name :* * , Age :**"

// Input:
// {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]
/*
const customerAndAge = (obj) => {
  // write your code here
  let text=" ";
  let array=[];
for (let keys in obj) 
{
 text+=["Customer name : " +keys+ " , age : "+obj[keys]+";"];
}
console.log(text);
array=text.split(";");
//console.log(array);
console.log(array);

};
customerAndAge({
         "Romio Joliat": 35,
         "Mario Ristrova": 39,
         "Sofia firnando": 50,
    });
    */