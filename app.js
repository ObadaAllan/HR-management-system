'use strict';
let allemp=[];

function Emp(emp,na,dep,lev,img)
{
    this.employee_ID=emp;
    this.full_name=na;
    this.department=dep;
    this.level=lev;
    this.image=img;
    this.calc();
    allemp.push(this);
    savedata(allemp);
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

let con1=new Emp(1000,"Ghazi Samer","Administration","Senior");
let con2=new Emp(1001,"Lana Ali","Finance","Mid-Senior");
let con3=new Emp(1002,"Tamara","marketing","Junior");
let con4=new Emp(1002,"obada","Finance","Senior");
let con5=new Emp(1002,"obada","Administration","Junior");
let con6=new Emp(1002,"obada","marketing","Junior");
let con7=new Emp(1002,"obada","marketing","Senior");

for (let index = 0; index < allemp.length; index++) 
{
   allemp[index].render();   
}

function savedata(data)
{
    //taking array and convert it to string
    let datatosting=JSON.stringify(data)
    localStorage.setItem("Emp",datatosting);
}