//GIVING THE MALE AND FAMALE NAMES A VARIABLE
const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

const sub = document.getElementById("btn1");

sub.addEventListener("click", function (event) {
  event.preventDefault();
//GIVE DAY A VARIABLE

  const DD = parseInt(document.getElementById("BirthDay").value);

  //GIVE MONTH A VARIABLE
  const MM = parseInt(document.getElementById("BirthMonth").value);

  //GIVE YEAR A VARIABLE
  const YEAR = parseInt(document.getElementById("BirthYear").value);

  //GIVE GENDER A VARIABLE
  const gender = document.getElementById("gender").value;

  const resultDisplay = document.getElementById("resultDisplay");
//VALIDATION FOR DAY
  if (!DD || DD < 1 || DD > 31) {
    resultDisplay.innerHTML = "Please enter a valid birth day (1–31)";
    return;
  }
// VALIDATION FOR MONTH
  if (!MM || MM < 1 || MM > 12) {
    resultDisplay.innerHTML = "Please enter a valid birth month (1–12)";
    return;
  }

  // VALIDATION FOR YEAR
  if (!YEAR) {
    resultDisplay.innerHTML = "Please enter a valid birth year";
    return;
  }

  const birthDate = new Date(YEAR, MM - 1, DD);

  const day = birthDate.getDay();
//VARIABLE FOR DAYS
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const akanName =
    gender === "male" ? maleNames[day] : femaleNames[day];

    //DISPLAY RESULTS
   resultDisplay.innerHTML =
    `You were born on <strong>${days[day]}</strong>.<br>
     Your Akan name is <strong>${akanName}</strong>.`;
});
