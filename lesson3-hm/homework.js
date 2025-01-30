const word = "İngilis dilini inkişaf etdirmək istəyirəm";
const word2 = "İngilis.";

//* cumlede nece herf
const lengthOf = (n) => {
  console.log(n.trim().length);
};
lengthOf(word);
lengthOf(word2);

// *cumlede inkisaf var mi
const check = (i) => {
  console.log(
    i.includes("inkişaf")
      ? i.replace("inkişaf", "təkmilləşmə")
      : "Cümlədə 'inkişaf' sözü yoxdur"
  );
};
check(word);
check(word2);

// *arraya ayirmag
splitWords = (w) => {
  console.log(w.split(" "));
};
splitWords(word);

// * soz uzunlugu
// const sentenceLength = (y) => {
//   console.log(lengthOf(splitWords(y) > 10));
// };
const wordLength = (c) => {
  console.log(lengthOf(c) > 10 ? c.slice(0, 4) : c.charAt(0));
};
wordLength(word);
wordLength(word2);

// *ingilis necenci index
const whichIndex = (z) => {
  console.log(z.indexOf("İngilis"));
};
whichIndex(word);
whichIndex(word2);

// *ilk 15 herf böyük
const upper15 = (f) => {
  console.log(f.toUpperCase(f.slice(0, 14)));
};
upper15(word);
upper15(word2);
