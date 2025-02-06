const number = 7.65;
const numbers = [0, 2, 4, 5, 7];

// !Verilmiş ədədi yuvarlaqlaşdır
// const makeGivenNumberRound = (givenNumber) => {
//   const round = Math.round(givenNumber);
//   const floor = Math.floor(givenNumber);
//   const ceilling = Math.ceil(givenNumber);

//   return { round, floor, ceilling };
// };
// console.log(makeGivenNumberRound(number));
// const example = { round: 8, floor: 7, ceilling: 8 };
// console.log(example.floor);
// const max = Math.max(...numbers);
// console.log(max);

// !
const randomNumber = (max) => {
  const random = Math.random() * max;
  return random.toFixed(0);
};
console.log(randomNumber(10));

// !
const writeSquareOfTheGivenNumber = (givenNumber) => {
  if (givenNumber >= 0) {
    return Math.sqrt(givenNumber);
  } else {
    console.log("Menfi ededin koku olmur");
  }
};
writeSquareOfTheGivenNumber(-9);
console.log(writeSquareOfTheGivenNumber(9));
const word = "Menfi ededin koku olmur";

const Menfi = word.slice(0, 5);
console.log(Menfi.toUpperCase());

switch (word) {
  case "Ramal":
    console.log("Salam");
    break;
  case "Anar":
    console.log("Necesen");
    break;
  default:
    console.log("Yaxsi");
}
