let year = 2022;
let birthday = (`16 may ${year} 12:03:00`);
let birthYear = 2001;
let age = year - birthYear;

function countdown() {
var days = document.querySelector("#days"),
		hours = document.querySelector("#hours"),
		mins = document.querySelector("#min"),
		sec = document.querySelector("#seconds"),
		showAge = document.querySelector("#age");

let birthdayDate = new Date(birthday);
let curentDate = new Date();
let totalSeconds = (birthdayDate - curentDate ) / 1000;

if(birthdayDate < curentDate){
	year = year + 1;
	totalSeconds = totalSeconds + 31536000;
}else{
	year = year;
	totalSeconds = totalSeconds;
};
showAge.innerHTML = "Olumide is " + age + " years old";
const exactDays = Math.floor(totalSeconds /3600 /24);
const exactHours = Math.floor(totalSeconds /3600) % 24;
const exactMins = Math.floor(totalSeconds /60) % 60;
const exactSecs = Math.floor(totalSeconds) % 60;

let addZero = (time) =>  time < 10 ? "0"+time	 : time;
days.textContent = exactDays;
hours.textContent = addZero(exactHours);
mins.textContent = addZero(exactMins);
sec.textContent = addZero(exactSecs);		
}; 
setInterval(countdown, 1000);



