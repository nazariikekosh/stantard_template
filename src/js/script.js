//-----------Генератор випадкових чисел-------------
function randomInt() {
  const min = 100;
  const max = 200;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}
randomInt();

// --------------------------------------------------

let min = 1000;
let max = 2000;

function numberRand() {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
}
numberRand();

// --------------------------------------------------------------------


function could() {
  let c = 9;
  c++;
  console.log(c);
}

could();