const number = 7.65;
const numbers = [0, 2, 4, 5, 7];

// ! Verilmiş ədədi yuvarlaqlaşdır
// const makeNumberRound = (givenNumber, n) => {
//   return givenNumber.toFixed(n);
//   console.log(givenNumber.toFixed(n));
// };
// makeNumberRound(number, 0);

// ! Minimum və maksimum ədədi tap
// console.log(...numbers);

// !Təsadüfi ədəd yaradan dinamik funksiya yaz
// const createRandomNumber = (max) => {
//   return Math.floor(Math.random() * max);
// };
// createRandomNumber(100);

// ! Kvadrat kökü tapan dinamik funksiya yaz
const WriteSquareOfTheNumber = (GivenNumber) => {
  console.log(
    GivenNumber < 0
      ? "Menfi ededi kvadrat koke almaq olmur"
      : Math.sqrt(GivenNumber)
  );
};

// !Verilən ədədi kök altına alıb, cavabı return edən dinamik funksiya yaz
const ReturnSquareOfTheNumber = (GivenNumber) =>{
    if (GivenNumber>0){
        return Math.sqrt(GivenNumber);
    }
    else{
        console.log(isNaN(GivenNumber)=Nan ?"Nan" :"Menfi ededi kvadrat koke almaq olmur")
    }
}

// !Verilən dəyərin tipini yoxlayıb, başqa tipə çevirən dinamik funksiya yaz
?