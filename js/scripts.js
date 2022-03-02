var nameOfDay;
var gender;
var akanName;
var gender;
function myFunction(){
    document.getElementById("myGender").innerHTML(id="gender");
}
//let gender = prompt("enter gender", "Female/Male");
// function myFunction()
// {
//     var gender;
//     if(gender=="Male"){
//         document.getElementById("myGender").innerHTML=gender;
//     }else if(gender=="Female")
//     {
//          document.getElementById("myGender").innerHTML=gender;
//     };
// // let gender= document.getElementById("myGender").value;
// // document.getElementById("genderr").innerHTML=gender;
// };
//var dayOfWeekNumbers = (day+(2.6*month-0.2)-2*century+year+(year/4)+(century/4)) % 7;

//console.log("day of week number:",dayOfWeekNumber);


const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date("June 15, 2001");
let day = d.getDate();
let month= d.getMonth();
let year = d.getFullYear();
let dayOfWeekNumber= d.getDay();
let century= year/100;

 var dayOfWeekNumbers = (day+(2.6*month-0.2)-2*century+year+(year/4)+(century/4)) % 7;

console.log("day of week number:",dayOfWeekNumber);
console.log("Gender:",gender);

if (dayOfWeekNumber===0 && gender==="F")
{
    console.log( nameOfDay = "DAY OF WEEK:",'Sunday');
  console.log("Your akan name is:",akanName="Akosua");
}
else if(dayOfWeekNumber===0 && gender==="M")
{
    console.log( nameOfDay = "DAY OF WEEK:",'Sunday');
    console.log("Your akan name is:",akanName="kwasi");
}
else if(dayOfWeekNumber===1 && gender==="F")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Monday');
  console.log("Your akan name is:",akanName="adwoa");
}
else if(dayOfWeekNumber===1 && gender==="M")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Monday');
  console.log("Your akan name is:",akanName="kwadwo");
}
else if(dayOfWeekNumber===2 && gender==="F")
{
  console.log(nameOfDay = "DAY OF WEEK:",'Tuesday');
  console.log("Your akan name is:",akanName="abenaa");
}
else if(dayOfWeekNumber===2 && gender==="M")
{
  console.log(nameOfDay = "DAY OF WEEK:",'Tuesday');
  console.log("Your akan name is:",akanName="kwabena");
}
else if(dayOfWeekNumber===3 && gender==="F")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Wednesday');
  console.log("Your akan name is:",akanName="akua");
}
else if(dayOfWeekNumber===3 && gender==="M")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Wednesday');
  console.log("Your akan name is:",akanName="kwaku");
}
else if(dayOfWeekNumber===4 && gender==="F")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Thursday');
  console.log("Your akan name is:",akanName="yaa");
}
else if(dayOfWeekNumber===4 && gender==="M")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Thursday');
  console.log("Your akan name is:",akanName="yaw");
}
else if(dayOfWeekNumber===5 && gender==="F")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Friday');
  console.log("Your akan name is:",akanName="afua");
}
else if(dayOfWeekNumber===5 && gender==="M")
{
  console.log( nameOfDay = "DAY OF WEEK:",'Friday');
  console.log("Your akan name is:",akanName="kofi");
}
else if(dayOfWeekNumber===6 && gender==="F")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Saturday');
  console.log("Your akan name is:",akanName="ama");
}
else if(dayOfWeekNumber===6 && gender==="M")
{
   console.log(nameOfDay = "DAY OF WEEK:",'Saturday');
  console.log("Your akan name is:",akanName="kwame");
}
else{
    console.log("invalid details!");
  }
  
  function newFunction(){
    var akanName;
    console.log("The name",akanName);
}