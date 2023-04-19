        // ФУНКЦИЯ 1
//Повертає масив випадкових цілих чисел.
const arrRandom = [];

const getRandomArray = (length,min,max) => {

  for(let i = 0; i < length; i++) {
 arrRandom.push(Math.round (Math.random() * (max-min) + min)); 
  }
}
getRandomArray(15,10,100)

console.log("ФУНКЦИЯ 1 - массив случайных целых чисел",(arrRandom)); 


            // ФУНКЦИЯ 2
// вираховує моду всіх переданих в неї аргументів,НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
const getModa = (...numbers) => numbers.filter((e, index) => numbers.indexOf(e) !== index)              

console.log('ФУНКЦИЯ 2 - мода чисел',getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 



                // ФУНКЦИЯ 3
//Рахує середнє арифметичне всіх переданих в неї аргументів,НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
const getAverage = (...numbers) => numbers.reduce((a,b) => a+b) / numbers.length  

console.log("ФУНКЦИЯ 3 - среднее арифметическое",getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)); 


                // ФУНКЦИЯ 4
// Рахує медіану всіх переданих в неї аргументів.НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.
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
// Фільтрує парні числа передані як аргументи функції.
const randomNumbers = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = randomNumbers.filter(num => {

  if (num%2 !== 0) {
    return num;
  }
});

console.log("ФУНКЦИЯ 5 - фильтрует парные числа",filterEvenNumbers);


                // ФУНКЦИЯ 6
// Рахує кількість чисел більших 0
const someNumbers = [1, -2, 3, -4, -5, 6];
let sum = 0; 

const countPositiveNumbers = someNumbers.filter(num => {
  
  if (num > 0) {
   return sum += 1;
  }
});

console.log("ФУНКЦИЯ 6 - показывакет кол-во чисел больше 0 ",sum);


                // ФУНКЦИЯ 7
// Відфільтрує усі елементи в масиві та залишить тільки ті,які діляться на ціло на 5. 
const someMoreNumbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

const getDividedByFive = someMoreNumbers.filter(num => num%5==0);

console.log("ФУНКЦИЯ 7 - показывает числа, которые делятся нацело на 5 ", getDividedByFive);


                // ФУНКЦИЯ 8
// 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
const badWords = /fuck|shit/gi;

const replaceBadWords = (string) => string.replace(badWords,"****" );

console.log("ФУНКЦИЯ 8 - заменяет плохие слова",replaceBadWords("Are you fucking  kidding?"),replaceBadWords("It's bullshit!"),replaceBadWords("Holy shit!"));

// let badWords = /fuck|shit/gi;
// let replaceBadWords = (string) => string.split(" ").replace(badWords,"****" ).join(" ") 
// console.log(replaceBadWords("Are you fucking  kidding?"));


                // ФУНКЦИЯ 9
// Розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. 
// Пробіли завжди видаляються. Рядок приводится до нижнього регістру.

const divideByThree = (word) => word.toLowerCase().trim().match(/.{1,3}/g);

console.log ("ФУНКЦИЯ 9 - разбивает слово по три слога",divideByThree("Commander"),divideByThree("live"));


                // ФУНКЦИЯ 10
// Видасть всі можливі перестановки(унікальні, без повторень) букв в слові.
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
        

               




