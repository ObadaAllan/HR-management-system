'use strict';
let allemp=[];
function Emp(emp,na,dep,lev,img,sal)
{
    this.employee_ID=emp;
    this.full_name=na;
    this.department=dep;
    this.level=lev;
    this.image=img;
    this.salary=sal
    allemp.push(this);
    
}
function getdata()
{
    //taking string and convert it to array
    let retr=localStorage.getItem("Emp");
    let arrdata=JSON.parse(retr);
    if(arrdata!=null)
    {
    for (let i = 0; i < arrdata.length; i++) 
        {
            new Emp(arrdata[i].employee_ID,arrdata[i].full_name,arrdata[i].department,arrdata[i].level,arrdata[i].image,arrdata[i].salary);
        }
    }
}
getdata();
let sum1=0,sum2=0,sum3=0,avg1=0,avg2=0,avg3=0,total1=0,total2=0,total3=0;

function empdata(arr)
{
    for (let index = 0; index < arr.length; index++) 
    {
            if(arr[index]["department"]=="Administration")
                {
                    sum1++;
                    total1+=arr[index]["salary"];
                }

            if(arr[index]["department"]=="Finance")
            {
                sum2++;
                total2+=arr[index]["salary"];
            }
            if(arr[index]["department"]=="marketing")
            {
                sum3++;
                total3+=arr[index]["salary"];
            }
              
    }
    avg1=total1/sum1;  
    avg2=total2/sum2;  
    avg3=total3/sum3;  
}


console.log(allemp);
empdata(allemp);
let adminEL=document.getElementById("AdminEL");
let FinanceEL=document.getElementById("FinanceEL");
let MarketingEL=document.getElementById("MarketingEL");
function renderTable()
{
    let tablerow=document.createElement("tr");
    adminEL.appendChild(tablerow);
    let td=document.createElement("td");
    td.textContent=sum1;
    tablerow.appendChild(td);
    let td2=document.createElement("td");
    td2.textContent=total1;
    tablerow.appendChild(td2);
    let td3=document.createElement("td");
    td3.textContent=avg1;
    tablerow.appendChild(td3);
}
function renderTable2()
{
    let tablerow=document.createElement("tr");
    FinanceEL.appendChild(tablerow);
    let td=document.createElement("td");
    td.textContent=sum2;
    tablerow.appendChild(td);
    let td2=document.createElement("td");
    td2.textContent=total2;
    tablerow.appendChild(td2);
    let td3=document.createElement("td");
    td3.textContent=avg2;
    tablerow.appendChild(td3);
}
function renderTable3()
{
    let tablerow=document.createElement("tr");
    MarketingEL.appendChild(tablerow);
    let td=document.createElement("td");
    td.textContent=sum3;
    tablerow.appendChild(td);
    let td2=document.createElement("td");
    td2.textContent=total3;
    tablerow.appendChild(td2);
    let td3=document.createElement("td");
    td3.textContent=avg3;
    tablerow.appendChild(td3);
}
renderTable();
renderTable2();
renderTable3();