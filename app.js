//запускаем игру
document.getElementById("game__area__startButton").addEventListener("click", startGame, false);
// запускает события по кнопке "Submit guess"
document.getElementById("game__area__button").addEventListener("click", getTurns, false);
document.getElementById("game__area__button").addEventListener("click", checkGuess, false);
document.getElementById("game__area__button").addEventListener("click", addGuess, false);
document.getElementById("game__area__button").addEventListener("click", showGuesses, false);

// число меньше 100
document.querySelector('input').addEventListener("change", oneHundred, false);
function oneHundred() {
	if( document.querySelector('input').value > 100 ){
		alert ("Число не может быть больше 100");
  	document.querySelector('input').value = ""
  }
}
// ввод только цифр
function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue = false;
}


// получаем случайное число
function getRandomNumber(){
		return Math.floor(Math.random() * 100);
}
// записываем значение случайного числа в переменную
var randomNumber;

// сравниваем случайное число и число игрока из input
function checkGuess() {
  let currentNumber = document.querySelector('input').value; // получаем число игрока из input
  if (currentNumber == "") {
  	return alert("Enter the number, please")}
  if(randomNumber == currentNumber) {
  	document.getElementById("game__area__results").innerHTML = "Excellent! It`s: " + randomNumber + "!" + " Turns: "+ turn;
 	document.getElementById("game__area__results").classList.add("game__area__results__win");
       	document.getElementById("game__area__input").disabled = true;
       	document.getElementById("game__area__button").disabled = true;
  	document.getElementById("game__area__startButton").classList.add("game__area__startButton__animation")
  } else if (randomNumber < currentNumber) {
    			document.getElementById("game__area__results").innerHTML = "Too high";
  } else {
      			document.getElementById("game__area__results").innerHTML = "Too low";
  }
}

// создаем строку для хранения чисел игрока
var allGuesses = "";

// записываем новое число игрока
function addGuess() {
	allGuesses = allGuesses.concat(" " + document.querySelector('input').value); // добавляем к строке хранения чисел игрока - число игрока из input
  document.querySelector('input').value = "";
  return allGuesses
}

// выводим строку для игрока
function showGuesses() {
	document.getElementById("game__area__guesses").innerHTML = allGuesses;
}

//записываем попытку в массив
var turn = 1;
function getTurns() {
  turn++;
  if(turn == 10) {
  	document.getElementById("game__area__results").innerHTML = "Game over! Right answer: " + randomNumber;
    document.getElementById("game__area__input").disabled = true;
		document.getElementById("game__area__button").disabled = true;
    turn = 1;
  }
  console.log(turn);
 }

// при победе защищаем input от дальнейших попыток, показываем поздравление и создаем кнопку для новой игры
function win() {
  document.getElementById("game__area__input").disabled = true;
	document.getElementById("game__area__button").disabled = true;
}

// Старт игры: делаем поле ввода доступным, очищаем результаты и догадки, обнуляем попытки, задаем новое случайное число
function startGame () {
  allGuesses = "";
  randomNumber = getRandomNumber();
  document.getElementById("game__area__guesses").innerHTML = "";
  document.getElementById("game__area__results").innerHTML = "";
  document.querySelector('input').value = "";
  document.getElementById("game__area__input").disabled = false;
  document.getElementById("game__area__button").disabled = false;
  turn = 0;
  document.getElementById("game__area__startButton").classList.remove("game__area__startButton__animation");
  document.getElementById("game__area__results").classList.remove("game__area__results__win");
}

/* 




// строка с полученными из input значениями
var gamerGuesses = "";

// число с последним полученным из input значениями
var lastGuess;

// случайное число
var randomNumber;

// 
var guess;

// получает значение из input
function getGuess() {
    var inputValue = parseInt(document.querySelector('input').value);
     return inputValue;    
}

// добавляет в массив новое значение input
function addGuess() {
  var guess = getGuess();
  gamerGuesses = gamerGuesses.concat(" " + guess);

  function showGuesses() {
  var placeForGuesses = document.getElementById("game__area__guesses");
  placeForGuesses.innerHTML = gamerGuesses;
  }
  showGuesses();
  console.log("Сейчас все догадки игрока выглядят так: " + gamerGuesses);

// число с последним полученным из input значениями
var lastGuess = parseInt(gamerGuesses.substr(-3));
console.log("Сейчас последняя догадка игрока выглядит так: " + lastGuess);
  return gamerGuesses;
}

 //сейчас не используется нигде
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}
 
// проверка совпадения догадки и случайного числа
function checkGuess() {
  console.log(randomNumber);
  let newGuess = parseInt(gamerGuesses.substr(-2));
  console.log(randomNumber);
  if (newGuess == randomNumber) {
    console.log("yes");
  }
} */