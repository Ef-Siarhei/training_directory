/*
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
*/




/*
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
*/


/*Возьмите целое число n (n >= 0)и цифру d (0 <= d <= 9)как целое число.
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
*/