/*-----------------------------------
Ваша задача — добавить новое свойство usersAnswerк каждому объекту в массиве questions.
Значение usersAnswerдолжно быть установлено равным null.
Решение должно работать для массива любой длины.
*/
/*
var questions = [{
   question: "What's the currency of the USA?",
   choices: ["US dollar", "Ruble", "Horses", "Gold"],
   corAnswer: 0
}, {
   question: "Where was the American Declaration of Independence signed?",
   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
   corAnswer: 0
}];

questions.map(item => item.usersAnswer = null);

console.log(questions);
---------------------------------------*/




/*-------------------------------------
Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации 
в каждом элементе массива. Функция, которую вы напишете, должна возвращать 
цвет как «ключ» и ассоциацию как «значение».
*/
/*
Мое решение

let array = [["white", "goodness"], ["blue", "tranquility"]];
let arr = [];
for (let i = 0; i < array.length; i++) {
   let obj = {};
   let key = array[i][0];
   obj[key] = array[i][1];
   arr.push(obj);
}
console.log(arr);


Решение с Codewars

const colourAssociation = array =>
   array.map(([colour, association]) => ({ [colour]: association }))


console.log(colourAssociation(array));
------------------------------------*/


/*------------------------------------
Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.
Возведите в квадрат все числа k (0 <= k <= n)от 0 до n.
Подсчитайте количество цифр, d использованных при написании всех k**2.
Вызовите nb_dig(или nbDig или...) функцию, принимающую nи dв качестве
 параметров и возвращающую это количество.
*/
/*
Мое решение

function nbDig(n, d) {
   let arr = [];
   let sum = 0;
   for (k = 0; k <= n; k++) {
      arr.push(k ** 2);
   }
   console.log(arr)

   let arr2 = arr.join('').split('');
   console.log(arr2)

   for (let i = 0; i < arr2.length; i++) {

      if (arr2[i] == d) {
         sum = sum + 1;
      }
   }
   return sum
}

console.log(nbDig(10, 0))


Решение с Codewars

function nbDig(n, d) {
   var res=0;
       for (var g=0;g<=n;g++){
         var square=(g*g+"").split("");
         square.forEach((s)=>s==d?res++:null)
       }return res;
   }
---------------------------------*/


/*--------------------------------
Даны два целочисленных массива, где второй массив представляет собой перетасованный дубликат 
первого массива с отсутствующим одним элементом, найдите отсутствующий элемент.

Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового 
значения в одном, а не в другом, не является допустимым решением.

let arr1 = [4, 3, 3, 61, 8, 8];
let arr2 = [8, 61, 8, 3, 4];
function findMissing(arr1, arr2) {
   arr1.sort();
   arr2.sort();
   for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
         return arr1[i]
      }
   }
}
   /*let c = Number(arr1.filter(item => arr2.indexOf(item) === -1));
----------------------------------*/


/*---------------------------------
Напишите функцию, которая возвращает только десятичную часть заданного числа.

Вам нужно обрабатывать только действительные числа, а не Infinity, NaN или подобные.
Всегда возвращайте положительную десятичную часть.

My
getDecimal = (n) => Math.abs(n - Math.trunc(n))

Codewars
function getDecimal(n){
   return Math.abs(n%1);
 }
 ---------------------------------*/


/*---------------------------------
Как тройка , максимизирующая сумму {6,8,3} в порядке , их сумма равна (17)

Примечание : повторения не учитываются при суммировании ,
(т.е. числа добавляются только один раз) .

My
let numbers = [2, 9, 13, 10, 5, 2, 9, 5];
function maxTriSum(numbers) {
   num = [... new Set(numbers)].sort((a, b) => a - b).splice(-3);
   console.log(num);

   let c = num.reduce((acc, item) => acc + item, 0);
   console.log(c);
}
maxTriSum(numbers)

Codewars
const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}

function maxTriSum(numbers){
  return ([...new Set(numbers)]).sort((a,b) => a-b).slice(-3).reduce((a,b) => a+b);
}
-----------------------------------*/



/*----------------------------------
Напишите функцию, nicknameGeneratorкоторая принимает имя строки в качестве аргумента
и возвращает первые 3 или 4 буквы в качестве псевдонима.
Если 3-я буква согласная, верните первые 3 буквы.
Если строка содержит менее 4 символов, вернуть "Ошибка: имя слишком короткое".

function nicknameGenerator(name){
  let vowel = ['a', 'e', 'i', 'o', 'u'];
  if (name.length < 4) return "Error: Name too short";
  if (vowel.indexOf(name[2]) === -1) return name.slice(0, 3);
  return name.slice(0, 4);
}

nicknameGenerator("Jiyrfhfh")

const nicknameGenerator = (name) => name.length > 3 
  ? name.slice(0,  3 + 'aeiou'.includes(name[2])) 
  : 'Error: Name too short'
---------------------------------------*/

/*-----------------------------
Дана строка s. Вы должны вернуть другую строку, чтобы символы s с четным и 
нечетным индексом были сгруппированы, а группы разделены пробелами
Четные индексы 0, 2, 4, 6, поэтому у нас есть «CdWr», так как первая группа
нечетная — 1, 3, 5, 7, поэтому вторая группа — «oeas».
И последняя возвращаемая строка — «Cdwr oeas».

let S = "XL5ATbH823NQGtFxSLpvglO2bnC50pPvwgunNAWEqFW"
function sortMyString(S) {
   let a = "";
   let b = "";
   for (i = 0; i < S.length; i += 2) {
      a = a + S[i];
      if (i < S.length - 1) {
         b = b + S[i + 1];
         console.log(b)
      }
   }
   console.log(`${a} ${b}`);
}
sortMyString(S)

const sortMyString = s => {
   let even = s.split('').filter((v, i) => i % 2 === 0).join('')
   let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
   return even + ' ' + odd
}
-----------------------------*/







/*--------!!!!!!!!!!!!!!!!!!!!!!!!!!
let diary1 = { 'algebra': 1, 'history': 7, 'physics': 8, 'geography': 9, 'chemistry': 10 };
let diary2 = { 'algebra': 2, 'history': 7, 'physics': 8, 'geography': 9, 'chemistry': 10 };
let diary3 = { 'algebra': 3, 'history': 7, 'physics': 8, 'geography': 9, 'chemistry': 10 };

const ageTable = { 'firstSonAge': 14, 'secondSonAge': 9, 'thirdSonAge': 8 };

function whoseBicycle(diary1, diary2, diary3) {
   let sumD = whoseBicycle.map(item => Object.values(item).reduce((a, b) => a + b));
   console.log(sumD);
   /*
   d1 = sumD(diary1);
   d2 = sumD(diary2);
   d3 = sumD(diary3);
   if (d1 > d2 && d1 > d3) { console.log('I need to buy a bicycle for my first son.') };
   if (d2 > d1 && d2 > d3) { console.log('I need to buy a bicycle for my second son.') };
   if (d3 > d2 && d3 > d1) { console.log('I need to buy a bicycle for my third son.') };
   if (d1 = d2) { console.log('I need to buy a bicycle for my second son.') };
   if (d1 = d3) { console.log('I need to buy a bicycle for my third son.') };
   if (d1 = d2 = d3) { console.log('I need to buy a bicycle for my third son.') };




   console.log(d1);
   console.log(d2);
   console.log(d3);

}
whoseBicycle(diary1, diary2, diary3)
---------------------!!!!!!!!!!!!!!!!!!*/



/*----------------------------
Завершите функцию power_of_two/ powerOfTwo(или эквивалентную, в зависимости от 
вашего языка), которая определяет, является ли заданное неотрицательное целое число степенью двойки 

isPowerOfTwo = (n) => (n != 0) && ((n & (n - 1)) == 0)  ? true : false;

console.log(isPowerOfTwo(0))


function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}
--------------------------------*/