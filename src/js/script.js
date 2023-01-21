// let slider = $(document).ready(function () {
//   $('.your-class').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: true
//   });
// });



let fruits = [
  "apple",
  "banana",
  "orange",
  "pear",
  "grape",
  "pineapple",
  "strawberry",
  "watermelon",
  "kiwi",
  "mango",
  "peach",
  "lemon",
  "lime",
  "blueberry",
  "raspberry",
  "blackberry",
  "apricot",
  "cherry",
  "coconut",
  "fig",
  "pomegranate",
  "plum",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
  "longan",
  "dragonfruit",
  "clementine",
  "satsuma",
  "mandarin",
  "tangelo",
  "yuzu",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
  "longan",
  "dragonfruit",
  "clementine",
  "satsuma",
  "mandarin",
  "tangelo",
  "yuzu",
  "nectarine",
  "persimmon",
  "tangerine",
  "papaya",
  "guava",
  "jackfruit",
  "lychee",
  "starfruit",
  "cantaloupe",
  "honeydew",
  "mangosteen",
  "pawpaw",
  "durian",
  "tamarind",
  "mulberry",
  "currant",
  "gooseberry",
  "rambutan",
];

// // const position = fruits.indexOf("kiwi");
// // console.log(position);
// // if(position >= 0){
// //   console.log(`I like a ${fruits[position]}`)
// // }else{
// //   console.log('Error')
// // }
// let someVar = "aPPle";
// let target = someVar.toLowerCase();
// const firstLetter = target[0].toUpperCase();
// let newWord = firstLetter + target.slice(1, target.length);

// console.log(newWord);

// ----------------------------------

let counter = 0;
fruits.forEach(function (item) {
  if (item[0] == "a") {
    console.log(item);
    counter++;
  }
});

while (fruits.length > 0) {
  let item = fruits.pop();
  if (item[0] == "a") {
    console.log(item);
    counter++;
  }
}

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i][0] == "a") {
    console.log(fruits[i]);
    counter++;
  }
}

console.log(counter);

// -----------------------------

let familyList = [
  {
    name: "John Doe",
    age: 25,
  },
  {
    name: "Jane Doe",
    age: 24,
  },
  {
    name: "Jack Doe",
    age: 18,
  },

  {
    name: "Janifer Doe",
    age: 14,
  },
  {
    name: "Sem Doe",
    age: 24,
  },
];

console.log(familyList[0].name + " " +familyList[0].age);
