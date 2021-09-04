// מערך של משימות : שם, האם הושלם(isCompleted) לפחות 5 משימות
// הצג את האובייקטים על המסך(לא למחוק את הקודם)
var randomNum = Math.floor(Math.random() * 2000);
var mission = [
  { name: "drink", isCompleted: true },
  { name: "peace", isCompleted: false },
  { name: "love", isCompleted: true },
  { name: "happy", isCompleted: false },
  { name: "pen", isCompleted: true },
];

// for (let i = 0; i < mission.length; i++) {
//     document.write(`${mission[i].name} ${mission[i].isCompleted}`)
// }

buttonId.onclick = () => {
  var addObject = {
    name: inputId.value,
    isCompleted: true,
  };
  mission.push(addObject);
  console.log(mission);
  for (let i = 0; i < mission.length; i++) {
    document.write(`<br>${mission[i].name} ${mission[i].isCompleted}`);
  }
};

// צור טופס של אדם: שם מלא, מדינת מוצא, דגל מדינת מוצא(כתובת של תמונה), גיל
// צור אובייקט של אדם עם השדות המתאימים
// הדפס את האובייקט על המסך כולל תמונת דגל המדינה
var listOfObject = [];

buttonIdContry.onclick = () => {
  var objectOfPeople = {
    name: nameInput.value,
    country: countryInput.value,
    flag: countryImg.value,
  };
  // console.log(objectOfPeople);
  showOfDiv.innerHTML += `<div>${objectOfPeople.name} ${objectOfPeople.country} <img src="${objectOfPeople.flag}">
    </div>`;
  listOfObject.push(objectOfPeople);
  console.log(objectOfPeople);
};

// ================================================================================================================================
const nameTwoInput = document.getElementById("nameTwoInput");
const lastNameInput = document.getElementById("lastNameInput");
const ageInput = document.getElementById("ageInput");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// function ageEnter() {
//   if (ageInput.value < 18) {
//     return false;
//   }

//   function mustFillString() {
//     if (nameTwoInput.value === "" || lastNameInput === "") {
//       alert("must fill name.");
//       return true;
//     }
//     return false;
//   }

//   function classOfAge() {
//     if (ageInput.value <= 11) {
//       divOfError.innerText = "You are student in elementary school";
//     }
//     if (ageInput.value <= 16) {
//       divOfError.innerText = "You are student in Middle School";
//     }
//     if (ageInput.value <= 18) {
//       divOfError.innerText = "You are student in High school";
//     }
//   }

// formSubmit.onsubmit = (e) => {
//   e.preventDefault();
//   if (password.value != confirmPassword.value) {
//     //   alert("password are not the same")
//     password.style.border = "3px solid red";
//     confirmPassword.style.border = "3px solid red";
//     divOfError.innerText = "Password are not the same";
//   }

//   if (ageEnter()) {
//     divOfError.innerText = `You are underAge`;
//     return true;
//   }

//   if (mustFillString()) {
//     return true;
//   }

//   if (classOfAge()) {
//     return true;
//   }
// };

//
// myForm.onsubmit = (event) => {
//   event.preventDefault()
//   if (checkPassword() && checkAge()) {
//       return true
//   }
//   return false
// }

// function checkAge(event) {
//   if (age.value > 18) {
//       return true
//   }
//   ageLabel.innerHTML += "*"
//   ageLabel.style.color = "red"
//   pi.innerHTML= "try again age"
//   return false
// }

// function checkPassword() {
//   if (password.value == ConfirmPassword.value){
//       alert("good")
//       return true
//   }
//   ConfirmPasswordLabel.innerHTML += "*"
//   labelPassword.innerHTML += "*"
//   ConfirmPasswordLabel.style.color = "red"
//   labelPassword.style.color = "red"
//  pi.innerHTML+= "try again password"
//   return false
// }
// =============================================================================================
// צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק.
// הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק.
// הפונקציה מדפיסה לחלון את אובייקט הרכב שנוצר.

// var arrayOfObject =[];
// function makeingObjects(color , brand , smk) {
//     var carObject = {
//         carColor : color,
//         carBrand : brand,
//         carSmk : smk,
//     }
//     divOfObject.innerText += `${carObject.carColor} ${carObject.carBrand} ${carObject.carSmk}`

// }

// makeingObjects(prompt("Enter car color"),prompt("Enter car brand"),prompt("Enter car smk"));

// =============================================================================================

// צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק.
// הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק, שנת ייצור (השנה שהאובייקט נוצר).

// function addingDate(color , brand , smk) {
//     var newObject ={
//         carColor : color,
//         carBrand : brand,
//         carSmk : smk,
//         date: new Date().getfullyear(),
//     }
//     divOfObject.innerText += `color: ${newObject.carColor}   brand: ${newObject.carBrand}   Smk: ${newObject.carSmk} date:${newObject.date}`
// }

// addingDate(prompt("Enter car color"),prompt("Enter car brand"),prompt("Enter car smk"));

// =============================================================================================
// צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק.
// הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק.
// הפונקציה מדפיסה לאלמנט div את אובייקט הרכב שנוצר.

// function addingToDiv() {
//   var newObject ={
//       carColor : carColor.value,
//       carBrand : carBrand.value,
//       carSmk : carSmk.value
//   }
//   divOfObject.innerText += `${newObject.carColor} ${newObject.carBrand} ${newObject.carSmk}`
// }

// sendButtonID.onclick=()=>{
//   addingToDiv()
// }
// =============================================================================================

// צרו פונקציה שמקבלת מהמשתמש צבע רכב, חברה וסמק.
// הפונקציה יוצרת אובייקט של car עם השדות צבע רכב, חברה, סמק, שנת ייצור (השנה שהאובייקט נוצר).

// function addingToDiv() {
//   var newObject ={
//       carColor : carColor.value,
//       carBrand : carBrand.value,
//       carSmk : carSmk.value,
//       date: new Date().getFullYear()
//   }
//   divOfObject.innerText += `${newObject.carColor} ${newObject.carBrand} ${newObject.carSmk} ${newObject.date}`
// }

// sendButtonID.onclick=()=>{
//   addingToDiv()
// }

// =============================================================================================
// מערך של משימות : שם, האם הושלם(isCompleted) לפחות 5 משימות

var arrayOfMission = [
  {
    id: Math.floor(Math.random() * 2000),
    name: "mission One",
    isCompleted: true,
  },
  {
    id: Math.floor(Math.random() * 2000),
    name: "mission Two",
    isCompleted: false,
  },
  {
    id: Math.floor(Math.random() * 2000),
    name: "mission three",
    isCompleted: false,
  },
  {
    id: Math.floor(Math.random() * 2000),
    name: "mission four",
    isCompleted: true,
  },
  {
    id: Math.floor(Math.random() * 2000),
    name: "mission five",
    isCompleted: false,
  },
];

// וסף אלמנט INPUT וכפתור בלחיצה על הכפתור צור אובייקט חדש מסוג משימה
addToArray.onclick = () => {
  var newMissionPush = {
    name: missionNme.value,
    isCompleted: isCompletedInput.value,
    id: Math.floor(Math.random() * 2000),
  };
  arrayOfMission.push(newMissionPush);
  // console.log(arrayOfMission);
  for (let i = 0; i < arrayOfMission.length; i++) {
    if (arrayOfMission[i].isCompleted == true) {
      showingArrayOfMission.innerHTML += `<p style="background:red">id: ${arrayOfMission[i].id} name : ${arrayOfMission[i].name} is Completed?: ${arrayOfMission[i].isCompleted}</p>`;
    } else {
      showingArrayOfMission.innerHTML += `<p>id: ${arrayOfMission[i].id} name : ${arrayOfMission[i].name} is Completed?: ${arrayOfMission[i].isCompleted}</p>`;
    }
  }
};

// =============================================================================================
// נתון מערך של גילאים:
//  מצא את הגיל המינימאלי
// debugger
// var arrayOfNumber = [22, 5, 4, 78, 100, 52, 32, 200, 6, 88, 11];
// var min = arrayOfNumber[0];
// for (let i = 0; i < arrayOfNumber.length; i++) {
//   if (min > arrayOfNumber[i]) {
//     min = arrayOfNumber[i];
//   }
// }
// console.log(min);


// var arrayOfNumbertwo = [22, 5, 4,11, 78, 1, 52, 32, 500,100];
// var max = arrayOfNumbertwo[0] ;

// for (let i = 0; i < arrayOfNumbertwo.length; i++) {
//   if (max < arrayOfNumbertwo[i]) {
//     max = arrayOfNumbertwo[i];
//   }
// }
// console.log(max);


// כתוב תוכנית המדפיסה את כל המספרים השלמים הזוגיים מ2-50.

// for (let i = 2; i <= 50 ; i++) {
//   if(i %2 == 0){
//     console.log(i);
//   }
// }
// כתוב תוכנית המדפיסה את כל המספרים השלמים מ1-50 בקפיצות של 3 ז"א 1,4,7,...
