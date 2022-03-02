var nameOfDay;
var gender;
var akanNameMale;
var akanNameFemale;

var gender= prompt("gender: F/M");
var dayOfWeekNumbers = (day+(2.6*month-0.2)-2*century+year+(year/4)+(century/4)) % 7;

console.log("day of week number:",dayOfWeekNumber);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date("June 15, 2001");
let day = d.getDate();
let month= d.getMonth();
let year = d.getFullYear();
let dayOfWeekNumber= d.getDay();
let century= year/100;
if (dayOfWeekNumber===0 && gender==="F")
{
    console.log( nameOfDay = "DAY OF WEEK:",'Sunday');
  console.log("Your akan name is:",akanNameFemale="Akosua");
}
else if(dayOfWeekNumber===0 && gender==="M")
{
    console.log( nameOfDay = "DAY OF WEEK:",'Sunday');
    console.log("Your akan name is:",akanNameMale="kwasi");
}
else if(dayOfWeekNumber===1 && gender==="F")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Monday');
  console.log("Your akan name is:",akanNameFemale="adwoa");
}
else if(dayOfWeekNumber===1 && gender==="M")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Monday');
  console.log("Your akan name is:",akanNameMale="kwadwo");
}
else if(dayOfWeekNumber===2 && gender==="F")
{
  console.log(nameOfDay = "DAY OF WEEK:",'Tuesday');
  console.log("Your akan name is:",akanNameFemale="abenaa");
}
else if(dayOfWeekNumber===2 && gender==="M")
{
  console.log(nameOfDay = "DAY OF WEEK:",'Tuesday');
  console.log("Your akan name is:",akanNameMale="kwabena");
}
else if(dayOfWeekNumber===3 && gender==="F")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Wednesday');
  console.log("Your akan name is:",akanNameFemale="akua");
}
else if(dayOfWeekNumber===3 && gender==="M")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Wednesday');
  console.log("Your akan name is:",akanNameMale="kwaku");
}
else if(dayOfWeekNumber===4 && gender==="F")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Thursday');
  console.log("Your akan name is:",akanNameFemale="yaa");
}
else if(dayOfWeekNumber===4 && gender==="M")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Thursday');
  console.log("Your akan name is:",akanNameMale="yaw");
}