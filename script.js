//Give variable to male names
 const maleNames = 
[Kwasi,Kwadwo,	Kwabena ,Kwaku, Yaw,Kofi,Kwame]

//Give a variable to all Female Names
const femaleNames=
[ Akosua,Adwoa,Abenaa,Akua,Yaa,	Afua,Ama]

//Validate date
 if(date <=0 || >31){
    alert(Enter a valid date)
 }


//Validate month
if(month <=0 || >12){
    alert(Enter a valid month)
}

//Assign variables to Days
let DD= parseInt(document.getElementById("Birth Day"))

//Assign Variables to Months
let MM=parseInt(document.getElementById("Birth Month"))

//Assign Variable to Years
let YEAR=parseInt(document.getElementById("Birth Year"))

//Split the Year into two
let CC= parseInt(YEAR. slice
    (0,2)
)

let YY=parseInt(YEAR. slice(0,4)
 )

 const d=((4CC​−2×CC−1)+(45×YY​)+(1026×(MM+1)​)+DD)mod7







 9

