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


/*------------------------------------
Задача
Ваша задача состоит в том, чтобы выполнить функцию в строке, чтобы суммировать все числа в массиве,
используя функцию стиля стрелки.
ПРИМЕЧАНИЕ:

Поскольку eval не догнал и не может оценить функции стиля стрелки, мне приходится делать это вручную. 
Ваше решение должно содержать функцию в стиле Arrow, фигурные скобки внутри сокращения и оператор return,
поскольку его необходимо вручную преобразовать в старый стиль функции, чтобы проверить правильность самой
функции.Ваша функция будет возвращена вам, когда она будет преобразована, если она выйдет из строя(что 
весьма вероятно), если возникнут какие - либо проблемы, отправьте сообщение в обсуждение и предоставьте 
свое решение, помеченное как спойлер, спасибо.

var arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38]]

var Sum = (arr) => {return arr.reduce((acc, item) => acc + item);}
console.log(Sum(arr[0]))


var Sum = (arr) => arr.flat().reduce((acc, item) => acc + item);
console.log(Sum(arr))
--------------------------------------------*/


/*----------------------------
Завершите функцию power_of_two/ powerOfTwo(или эквивалентную, в зависимости от 
вашего языка), которая определяет, является ли заданное неотрицательное целое число степенью двойки 

isPowerOfTwo = (n) => (n != 0) && ((n & (n - 1)) == 0)  ? true : false;

console.log(isPowerOfTwo(0))

Codewars

function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
}
--------------------------------*/


/*--------------------------------
   Входными данными будет массив словарей.

Возвращает значения в виде предложения, разделенного строками, в порядке 
целочисленного эквивалента их ключей(в порядке возрастания).

Ключи не повторяются, и их диапазон равен - 999 < key < 999. Ключи и значения 
словарей всегда будут строками и не будут пустыми.


let List = [{ '4': 'dog' }, { '2': 'took' }, { '3': 'his' }, { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }]

function sentence(List) {
   let list = List.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0]).map(obj => Object.values(obj)[0]).join(' ')
   console.log(list)
}
sentence(List)
--------------------------------*/


/*-------------------------------
Напишите функцию, которая принимает строку и выводит строки из 1 и 0,
где гласные становятся 1, а не гласные — 0.
Должны быть включены все негласные, включая небуквенные символы
(пробелы, запятые и т.д.).

let s = "123, arou";
function vowelOne(s) {
   let vowel = ['a', 'e', 'i', 'o', 'u'];
   let arr = [];

   for (let i = 0; i < s.length; i++) {
      if (vowel.indexOf(s.toLowerCase()[i]) !== -1) {
         arr.push(1)
      } else {
         arr.push(0)
      }
   }
   return arr.join('')
}

console.log(vowelOne(s))

Codewars

function vowelOne(s){
   return s.split('').map(x => ('aeiouAEIOU'.includes(x)) ? 1 : 0).join('');
}
 
function vowelOne(s){
   s = s.toLowerCase()
   const arr = ['a', 'e', 'i', 'o', 'u']
   let result = ''
   for (el of s) {
     arr.includes(el) ? result += '1' : result += '0'
   }
   return result
 }
 ---------------------------------*/


/*----------------------
Поток данных получен и должен быть реверсирован.
Каждый сегмент имеет длину 8 бит, что означает, что порядок этих сегментов должен быть обратным

const data = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
function dataReverse(data) {
   let size = 8;
   let result = [];
   for (i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
   }
   return result.reverse().flat()
}
console.log(dataReverse(data))

Codewars
const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
----------------------*/



/*-------------------
Ваша задача — написать функцию, которая принимает два или более 
объектов и возвращает новый объект, объединяющий все входные объекты.
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }


const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 4 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...obj) {
   console.log(obj)
   let result = {}

   for (var i = 0; i < obj.length; i++) {
      for (let key in obj[i]) {
         if (result[key] == undefined) {
            result[key] = obj[i][key];
         } else {
            result[key] = result[key] + obj[i][key];
         };
      };
   };
   console.log(result)
}

Codevars
function combine() {
   var obj = {}

    for (var i = 0; i < arguments.length; i++) {
         for (var key in arguments[i]) {
           obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
         }
   }
    return obj;
 }

combine(objA, objB, objC, objD)
---------------*/

/*----------------
Вы должны создать функцию spread, которая принимает функцию и список аргументов, 
которые должны быть применены к этой функции. Вы должны заставить эту функцию возвращать 
результат вызова данной функции/лямбды с заданными аргументами.

function spread(func, args) {
  return func.apply(this, args)
}

---------------*/


/*----------------------
Вам удалось сузить круг подозреваемых до нескольких человек. 
К счастью, вы знаете всех, кого подозреваемые видели в день убийства.
Задача.
Дан словарь со всеми именами подозреваемых и всех, кого они 
видели в тот день, который может выглядеть так:
вернуть имя одного убийцы, в нашем случае, 'James'потому что 
он единственный человек, который видел и то, 'Lucas'и другое.'Bill'

let suspectInfo = { 'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': [] };
let dead = ['Ben'];

function killer(suspectInfo, dead) {
   for (let key in suspectInfo) {
      let a = []
      let b = []
      for (let i = 0; i < dead.length; i++) {
         a = suspectInfo[key].filter(item => item === dead[i])
         b += a
      }
      if (b === dead.join('')) {
         console.log(key)
      }
   }
}
killer(suspectInfo, dead)


Codewars
function killer(obj, dead) {
   for (let i in obj) 
     if (obj[i].filter(i => dead.includes(i)).length == dead.length) return i
 }
-------------------------*/


