// // 1. Persinal data of users
const USER_DATA = [
  {
    name: "John",
    age: 17,
    surname: "Doe",
    fatherName: "Smith",
  },
  {
    name: "Jane",
    age: 30,
    surname: "Doe",
    fatherName: "Sarah",
  },
  {
    name: "Jack",
    age: 28,
    surname: "Doe",
    fatherName: "John",
  },
  {
    name: "Jill",
    age: 32,
    surname: "Doe",
    fatherName: "Monica",
  },
]

function isAdult(age){
  if (age>=18){
    return true 
  }else{
    return false
  }
}


USER_DATA.forEach((user)=>{
  const ADULT = isAdult(user.age);
  if(ADULT){
    console.log('Ви повнолітні',user.age );
  }else{
    console.log("Ви не повнолітні",user.age);
  }
})

// let counter = 0;

// function getInitialsUser(surname, name, fatherName) {
//   counter++;
  
//   if (counter <= 3) {
//     return surname + " " + name[0] + "." + fatherName[0] + ".";
//   } else {
//     return "Functiom is called more than 3 times";
//   }
// }

// const sayHello = (someText) => {
//     console.log(someText);
// };


// function displayAlertInputText(text) {
//   alert(text);
// }

// // Do something with data

// USER_DATA.forEach((user) => {
//   const userInitials = getInitialsUser(
//     user.surname,
//     user.name,
//     user.fatherName
//   );
//   console.log(userInitials + " " + user.age);
// });

// // Input data to diplay in alert
// // const inputText = prompt("Enter text to display in alert");
// // displayAlertInputText(inputText);

// sayHello("Hello World");

