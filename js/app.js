// // ================================
// //        OSON MASALALAR (7 ta)
// // ================================

// // 1-masala
// // Berilgan arrayga bitta qiymat qoвЂshing.
// // Foydalanish: push()
// const arrPush = [1, 2, 3, 4]
// function addToEnd(arr) {
//   return arr.push(3);
// }

// addToEnd(arrPush);
// console.log(arrPush);

// // 2-masala
// // Arrayning oxirgi elementini olib tashlang.
// // Foydalanish: pop()
// const arrPop = [1, 2, 3, 4, 5];
// function removeLast(arr) {
//   return arr.pop();
// }

// removeLast(arrPop);
// console.log(arrPop);

// // 3-masala
// // Array boshiga yangi element qoвЂshing.
// // Foydalanish: unshift()
// const arrunshift = [1, 2, 3, 4];
// function addToStart(arr) {
//  return arr.unshift(6);
// }

// addToStart(arrunshift);
// console.log(arrunshift);

// // 4-masala
// // Arrayning birinchi elementini olib tashlang.
// // Foydalanish: shift()
// const arrshift = [1, 2, 3, 4];
// function removeFirst(arr) {
//  return arr.shift("aslom");
// }

// removeFirst(arrshift);
// console.log(arrshift);

// // 5-masala
// // Stringdagi boвЂsh joylarni olib tashlang.
// // Foydalanish: trim()
// const strtrim = "      Abdullatif     ";
// function cleanString(str) {
//   return str.trim();
// }

// cleanString(strtrim);
// console.log(strtrim);

// // 6-masala
// // Berilgan string katta harflarga oвЂtkazilsin.
// // Foydalanish: toUpperCase()
// const strShout = "salom";
// function shout(str) {
//   return str.toUpperCase();
// }

// shout(strShout);
// console.log(strShout);

// // 7-masala
// // Massivda qiymat bor-yoвЂqligini tekshiring.
// // Foydalanish: includes()
// const arrIncludes = "Abdullatif, Ali, Vali";
// function hasValue(arr) {
//   return arr.includes("Abdullatifs");
// }

// hasValue(arrIncludes);
// console.log(arrIncludes);

// // ================================
// //     OвЂRTACHA DARAJADAGI MASALALAR (7 ta)
// // ================================

// 8-masala
// Berilgan soвЂz "a" harfi bilan boshlanishini tekshiring.
// Foydalanish: startsWith()
const strStartsWidth = "abdulla";
function startsWithA(str) {
  return str.startsWith("a");
}
startsWithA(strStartsWidth);
console.log(strStartsWidth);

// 9-masala
// Berilgan array ichida "apple" borligini aniqlang.
// Foydalanish: includes()
const arrIncludes = ["olma", "shaftoli", "banan"];
function containsApple(arr) {
  return arr.includes("olma");
}
containsApple(arrIncludes);
console.log(arrIncludes);

// 10-masala
// Object ichidagi barcha kalitlarni arrayga aylantiring.
// Foydalanish: Object.keys()
const objObjectkeys = {
  name: "Ali",
  age: 20,
};
function getKeys(obj) {
  return Object.keys(objObjectkeys);
}

const keysArray = getKeys(objObjectkeys);
console.log(keysArray);

// 11-masala
// Object ichidagi barcha qiymatlarni arrayga oвЂtkazing.
// Foydalanish: Object.values()
const objObjectkeys11 = {
  name: "Ali",
  age: 21,
};
function getValues(obj) {
  return Object.values(objObjectkeys);
}

const valuesArray = getValues(objObjectkeys);
console.log(valuesArray);

// 12-masala
// String ichidagi barcha boвЂsh joylarni olib tashlang.
// Foydalanish: replaceAll(" ", "")
const removeFirst = "salom alik";
function removeSpaces(str) {
  return replaceAll(" ", "");
}
const result = removeSpaces(removeFirst);
console.log(result);

// 13-masala
// Arrayning teskari koвЂrinishini qaytaring.
// Foydalanish: reverse()
const arrReserve = []
function reverseArray(arr) {
  return arr.reserve()
}

// 14-masala
// Object.entries orqali objectni key-value arrayga aylantiring.
// Foydalanish: Object.entries()
function objectToEntries(obj) {
  // Har bir kalit-qiymatni juftlab oling рџ‘Ї
}

// ================================
//         QIYIN MASALALAR (7 ta)
// ================================

// 15-masala
// Object ichida "admin" degan key bormi?
// Foydalanish: hasOwnProperty()
function hasAdmin(obj) {
  // Hali ham yashirinib yurgan adminni toping рџ”ђ
}

// 16-masala
// Stringning oxirgi 3 ta harfini ajrating.
// Foydalanish: slice()
function lastThree(str) {
  // Oxirgi uchlikni e'tiborsiz qoldirmang рџЋЇ
}

// 18-masala
// Stringni ichidagi har bir boвЂshliqdan keyin vergul qoвЂshing.
// Masalan: "salom dunyo" => "salom, dunyo"
function addComma(str) {
  // Gaplar orasiga chiroyli nuqta-vergullar qoвЂshamiz вњ’пёЏ
}

// 19-masala
// Massivda oxirgi boвЂlib qayerda "banana" turganini toping.
// Foydalanish: lastIndexOf()
function lastBananaIndex(arr) {
  // Oxirgisi qayerda? Bananalardan shubhalanamiz рџЌЊ
}

// 20-masala
// Massivda 2-dan 5-gacha boвЂlgan elementlarni kesib oling.
// Foydalanish: slice()
function sliceMiddle(arr) {
  // OвЂrtadagi boвЂlimni ajratib oling рџ“¦
}

// 21-masala
// String ichida "javascript" soвЂzini "JS" bilan almashtiring.
// Foydalanish: replaceAll()
function shortenJS(str) {
  // Uzun soвЂzlardan qutulamiz, qisqacha ayting рџ§
}
