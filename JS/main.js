
               // ФУНКЦИЯ 1
// Створіть функцію getRandomArray(length, min, max)
//  – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву,
//  min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа.
//  Приклад: getRandomArray(15, 1, 100) –>
// [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const arrRandom = [];

const getRandomArray = (length,min,max) => {

  for(let i = 0; i < length; i++) {
 arrRandom.push(Math.round (Math.random() * (max-min) + min)); 
  }
}
getRandomArray(15,10,100)
console.log("ФУНКЦИЯ 1 - массив случайных целых чисел",(arrRandom)); 



            // ФУНКЦИЯ 2
// Створіть функцію getModa(...numbers) – 
// яка вираховує моду всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. 
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = (...numbers) => numbers.filter((e, index) => numbers.indexOf(e) !== index)                //!!!!!!!!!!!!!!!!!!!
console.log('ФУНКЦИЯ 2 - мода чисел',getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 



                // ФУНКЦИЯ 3
// Створіть функцію getAverage(...numbers) – 
// яка рахує середнє арифметичне всіх 
// переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
//  Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => numbers.reduce((a,b) => a+b) / numbers.length  //НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ??.!!!!!!!!!!!!!!!!!!!!
console.log("ФУНКЦИЯ 3 - среднее арифметическое",getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 


                // ФУНКЦИЯ 4
// Створіть функцію getMedian(...numbers) – 
// яка рахує медіану всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = (...numbers) => {
 numbers.sort((a, b) => a - b);
  
  if (numbers.length % 2) {
   return numbers[Math.floor(numbers.length / 2)];
  
  } else {
      return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
    }
}
console.log("ФУНКЦИЯ 4 - медиана переданных аргументов",getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2),getMedian(1, 2, 3, 4),getMedian(1, 2, 3, 4, 5));


                // ФУНКЦИЯ 5
// Створіть функцію filterEvenNumbers(...numbers)
//  – яка фільтрує парні числа передані як аргументи функції.
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const randomNumbers = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = randomNumbers.filter(num => {

  if (num%2!==0) {
    return num;
  }
});
console.log("ФУНКЦИЯ 5 - фильтрует парные числа",filterEvenNumbers);



                // ФУНКЦИЯ 6
// Створіть функцію countPositiveNumbers(...numbers) –
//  яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const someNumbers = [1, -2, 3, -4, -5, 6];

let sum = 0; 

const countPositiveNumbers = someNumbers.filter(num => {
  
  if (num > 0) {
   return sum += 1;
  }
});
console.log("ФУНКЦИЯ 6 - показывакет кол-во чисел больше 0 ",sum);



                // ФУНКЦИЯ 7
// Створіть функцію getDividedByFive(...numbers)
//  – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
// -> [55, 55]

const someMoreNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

const getDividedByFive = someMoreNumbers.filter(num => num%5==0);
console.log("ФУНКЦИЯ 7 - показывает числа, которые делятся нацело на 5 ", getDividedByFive);


                // ФУНКЦИЯ 8
// Створіть функцію replaceBadWords(string) – яка 
// 1) розіб'є фразу на слова, 2) замінить погані слова на
// зірочки (*). При вирішенні цього завдання необхідно 
// розбити масив на слова за допомогою функції .split(" "),
// після чого масив необхідно буде склеїти .join(" ")
// Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ing kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy !"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const badWords = /fuck|shit/gi;

const replaceBadWords = (string) => string.replace(badWords,"****" );
console.log("ФУНКЦИЯ 8 - заменяет плохие слова",replaceBadWords("Are you fucking  kidding?"),replaceBadWords("It's bullshit!"),replaceBadWords("Holy shit!"));


// let badWords = /fuck|shit/gi;
// let replaceBadWords = (string) => string.split(" ").replace(badWords,"****" ).join(" ") 
// console.log(replaceBadWords("Are you fucking  kidding?"));


                // ФУНКЦИЯ 9
// Створіть функцію divideByThree(word), 
// яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. 
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

const divideByThree = (word) => word.toLowerCase().trim().match(/.{1,3}/g);
console.log ("ФУНКЦИЯ 9 - разбивает слово по три слога",divideByThree("Commander"),divideByThree("live"));


                // ФУНКЦИЯ 10
// Створіть функцію generateCombinations(word), 
// яка видасть всі можливі перестановки(унікальні,
//   без повторень) букв в слові. 
//   Для тестів не передавайте слова в яких більше 10 букв.
//   Краще взагалі обмежити работу функції 10 буквами.
//   Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
//   Приклад: generateCombinations("ol") -> ["ol", "lo"]

const generateCombinations = (word,result) => {

   if (word.length == 0) {
    console.log(result);
   }
    
   for (let i = 0; i < word.length;  i++) {
        let rest = word.substring(0,i) + word.substring(i+1)
        generateCombinations(rest,result + word[i])
    }
}
    console.log('ФУНКЦИЯ 10 - генерирует уникальные слова'),generateCombinations("man",'');
        




