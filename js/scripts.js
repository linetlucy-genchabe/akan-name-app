var nameOfDay;
var gender;
var akanName;
var year;
var dayOfWeekNumber;
var CC;
var YY;
var MM;
var DD;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function validate() {
    dayOfWeek();
    getGender();
    var gender = document.getElementsByName("gender");
    if (document.myForm.year.value == "" || document.myForm.year.value.length != 4 || document.myForm.year.value > 2100 || document.myForm.year.value <= 1900) {
        alert("Enter a valid year of birth");
        document.myForm.year.focus();
        return false;
    } else if (document.myForm.month.value == "" || isNaN(document.myForm.month.value) ||
        document.myForm.month.value.length != 2 || document.myForm.month.value > 12 || document.myForm.month.value <= 0) {
        alert("Enter valid month of birth");
        document.myForm.month.focus();
        return false;
    } else if (document.myForm.date.value == "" || isNaN(document.myForm.month.value) ||
        document.myForm.month.value.length != 2 || document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
        alert("Enter a valid date");
        document.myForm.day.focus();
        return false;
        // } else if (gender["Female"].checked == false && gender["Male"].checked == false) {
        //     alert("Select male or female");
        //     return false;
    } else {
        return true;
    }

}

function dayOfWeek() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);
    dayOfWeekNumber = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(dayOfWeekNumber);
    num = Math.floor(dayOfWeekNumber);
    console.log(num);
    nameOfDay = weekday[num];
    return (Math.floor(dayOfWeekNumber));
}


function getGender() {
    if (document.getElementById("Female").checked == true) {
        console.log("your gender is:", gender = "Female");
    } else if (document.getElementById("Male").checked == true) {
        console.log("your gender is:", gender = "Male");
    } else {
        console.log("invalid");
    }
}


function getName() {

    if (dayOfWeekNumber === 0 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK:Sunday");
        alert("Your akan name is: Akosua");
    } else if (dayOfWeekNumber === 0 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK:Sunday");
        alert("Your akan name is: kwasi");
    } else if (dayOfWeekNumber === 1 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK:", 'Monday');
        alert("Your akan name is: adwoa");
    } else if (dayOfWeekNumber === 1 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Monday");
        alert("Your akan name is: kwadwo");
    } else if (dayOfWeekNumber === 2 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Tuesday");
        alert("Your akan name is: abenaa");
    } else if (dayOfWeekNumber === 2 && gender(document.getElementById("Male").checked == true)) {
        alert(nameOfDay = "DAY OF WEEK: Tuesday");
        alert("Your akan name is: kwabena");
    } else if (dayOfWeekNumber === 3 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Wednesday");
        alert("Your akan name is:", akanName = "akua");
    } else if (dayOfWeekNumber === 3 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Wednesday");
        alert("Your akan name is: kwaku");
    } else if (dayOfWeekNumber === 4 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Thursday");
        alert("Your akan name is: yaa");
    } else if (dayOfWeekNumber === 4 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Thursday");
        alert("Your akan name is: yaw");
    } else if (dayOfWeekNumber === 5 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Friday");
        alert("Your akan name is: afua");
    } else if (dayOfWeekNumber === 5 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Friday");
        alert("Your akan name is: kofi");
    } else if (dayOfWeekNumber === 6 && document.getElementById("Female").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Saturday");
        alert("Your akan name is: ama");
    } else if (dayOfWeekNumber === 6 && document.getElementById("Male").checked == true) {
        alert(nameOfDay = "DAY OF WEEK: Saturday");
        alert("Your akan name is: kwame");
    } else {
        alert("invalid details!");
    }
}


function akanApp() {
    dayOfWeekNumber = dayOfWeek();
    alert(nameOfDay);
    alert(dayOfWeekNumber);
    getName();
}