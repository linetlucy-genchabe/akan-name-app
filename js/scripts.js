var gender = ("Female");

var nameOfDay;
var gender;
var akanName;
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date("February 27, 2022");
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let dayOfWeekNumber = d.getDay();
let century = year / 100;

var dayOfWeekNumbers = (day + (2.6 * month - 0.2) - 2 * century + year + (year / 4) + (century / 4)) % 7;

console.log("day of week number:", dayOfWeekNumber);
console.log("Gender:", gender);

function newFunction() {
    if (document.getElementById("Female").checked == true) {
        console.log("your gender is:", gender = "Female");
    } else if (document.getElementById("Male").checked == true) {
        console.log("your gender is:", gender = "Male");
    } else {
        console.log("invalid");
    }
}

function myFunction() {

    if (dayOfWeekNumber === 0 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK:Sunday");
        alert("Your akan name is: Akosua");
    } else if (dayOfWeekNumber === 0 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK:Sunday");
        alert('Your akan name is: "kwasi"');
    } else if (dayOfWeekNumber === 1 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Monday');
        console.log("Your akan name is:", akanName = "adwoa");
    } else if (dayOfWeekNumber === 1 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Monday');
        console.log("Your akan name is:", akanName = "kwadwo");
    } else if (dayOfWeekNumber === 2 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Tuesday');
        console.log("Your akan name is:", akanName = "abenaa");
    } else if (dayOfWeekNumber === 2 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Tuesday');
        console.log("Your akan name is:", akanName = "kwabena");
    } else if (dayOfWeekNumber === 3 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Wednesday');
        console.log("Your akan name is:", akanName = "akua");
    } else if (dayOfWeekNumber === 3 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Wednesday');
        console.log("Your akan name is:", akanName = "kwaku");
    } else if (dayOfWeekNumber === 4 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Thursday');
        console.log("Your akan name is:", akanName = "yaa");
    } else if (dayOfWeekNumber === 4 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Thursday');
        console.log("Your akan name is:", akanName = "yaw");
    } else if (dayOfWeekNumber === 5 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Friday');
        console.log("Your akan name is:", akanName = "afua");
    } else if (dayOfWeekNumber === 5 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Friday');
        console.log("Your akan name is:", akanName = "kofi");
    } else if (dayOfWeekNumber === 6 && document.getElementById("Female").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Saturday');
        console.log("Your akan name is:", akanName = "ama");
    } else if (dayOfWeekNumber === 6 && document.getElementById("Male").checked == true) {
        console.log(nameOfDay = "DAY OF WEEK:", 'Saturday');
        console.log("Your akan name is:", akanName = "kwame");
    } else {
        console.log("invalid details!");
    }
}