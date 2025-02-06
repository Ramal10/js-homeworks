const user = {
  name: "Ramal",
  age: "15",
  email: "ramal@mail.ru",
};
const location = {
  city: "Baku",
  region: "Xetai",
  street: "Tusi",
};
const newObject = Object.assign(user, location);

// !2 obyekt yarat, 2sini birləşdir
Object.assign(user, location);

// !Sonra birləşdirilən obyektin keylərini və dəyərlərini console.log-da yazdırt.
console.log(Object.entries(newObject));

// !Sonra həmin birləşdirilən bu obyekti .json formatına çevir. Sonra da localstorage-də əlavə et
const newObjectJSON = JSON.stringfy(newObject);
localstorage.setItem("Ramal haqqinda melumatlar", newObjectJSON);

// !Sonra da localstoragedən həmin .json-u obyekt şəklində və string şəklində console.log-da göstər.
console.log(
  "Object:",
  JSON.parse(localStorage.getItem("Ramal haqqinda melumatlar"))
);

console.log("String:", localStorage.getItem("Ramal haqqinda melumatlar"));

// !Göstərəndə isə mesaj dinamik olaraq görsənəcək, mesaj aşağıdadı, 🤔 işarələri yerini doldurassan dinamik şəkildə:
//  *  - Hal-hazırda saat 🤔 -dir. 🤔 ildəyik və 🤔 aydayıq. Localstorage-dəki datanın string halı isə budur: 🤔
//  * - Hal-hazırda saat 🤔 -dir. 🤔 ildəyik və 🤔 aydayıq. Localstorage-dəki datanın obyekt halı isə budur: 🤔
const stringNewObject = localStorage.getItem("Ramal haqqinda melumatlar");
const JSONNewObject = JSON.parse(
  localStorage.getItem("Ramal haqqinda melumatlar")
);

const today = new Date();
const hour = today.getHours();
const year = today.getFullYear();
const month = today.getMonth();

const dateTime = `Hal-hazırda saat ${hour})-dir. ${year} ildəyik və ${month} aydayıq.`;

console.log(
  dateTime,
  "Localstorage-dəki datanın string halı isə budur:",
  stringNewObject
);
console.log(
  dateTime,
  "Localstorage-dəki datanın obyekt halı isə budur:",
  JSONNewObject
);
