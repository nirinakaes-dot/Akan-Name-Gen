//Give variable to male names
 const maleNames = 
[Kwasi,Kwadwo,	Kwabena ,Kwaku, Yaw,Kofi,Kwame]

//Give a variable to all Female Names
const femaleNames=
[ Akosua,Adwoa,Abenaa,Akua,Yaa,	Afua,Ama]

const sub = document.getElementById("btn1")

sub.addEventListener("submit", function(event)  {
    event.preventDefault();
    
    //Assign variables to Days
let DD= parseInt(document.getElementById("Birth Day"))

//Assign Variables to Months
let MM=parseInt(document.getElementById("Birth Month"))

//Assign Variable to Years
let YEAR=parseInt(document.getElementById("Birth Year"))

//Assign Variable to Display
let Display=( document.getElementById("resultDisplay"))

//Split the Year into two

let CC= parseInt(YEAR.slice
    (0,2));

let YY= parseInt(YEAR.slice(2,4));

 
 //Validate date
 if(DD <=0 || DD  >31){
    alert(Enter a valid date between 1-31)
 }


//Validate month
if(MM <=0 || MM>12){
    alert(Enter a valid month between 1-12)
}
//Add a variable for days
const dayOfTheWeek=[
    Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
]
//Calculate day
 const Day=((4CC ​− 2× CC − 1)+(45 × YY​)+(1026 × (MM +1 )​)+DD ) %7

//  document.querySelector(`[data-action="generate"]`).addEventListener
//  (`click`, "akanName")


//Determining the day
let akanName=""

if ( gender=="male") {
    akanName = maleNames[Day] 
} else {
    akanName = femaleNames[Day]
}

//Display result
document.querySelector("#resultDisplay").innerText= `Your AkanName is"+ ${akanName}`;
 
});


