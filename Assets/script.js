

//create question, multiple choices, and answer arrays (of arrays)
var questions = [
  {question: "What animal is said to produce the world's most expensive cheese?",
  choiceOptions: [
    "Dolphin",
    "Bear",
    "Pigeon",
    "Donkey"],
    correct: "Donkey",
  },
  {question: "Approximately how many living languages are there?",
  choiceOptions: [
    "~30",
    "~600",
    "~1400",
    "~7500"],
    correct: "~7500",
  },

  {question: "What Hebrew word means 'so be it'?",
  choiceOptions: [
    "Chanukah",
    "Mashugana",
    "Amen",
    "Hallelujah"],
    correct: "Amen",

  },

  {question: "Which book begins with the words 'It was five o'clock on a winter's morning in Syria'?",
  choiceOptions: [
    "Murder on the Orient Express",
    "Mediterranean Life",
    "The Bible",
    "Polar Express"],
    correct: "Murder on the Orient Express",
  },

  {question: "How many stars are on New Zealand's flag?",
  choiceOptions: [
    "2",
    "4",
    "40",
    "51"],
    correct: "4",
  },

  {question: "How many canine teeth does an adult human have",
  choiceOptions: [
    "2",
    "4",
    "6",
    "10"],
    correct: "4",
  },

  {question: "Captain Nemo is a character in which book?",
  choiceOptions: [
    "Finding Nemo",
    "20,000 Leagues Under the Sea",
    "La Sirenita",
    "Daughters of the Sea"],
    correct: "20,000 Leagues Under the Sea",
  },


]
var index = 0;
var choices;

//grab button from html and label it startButton
var startButton = document.querySelector("#button");

//set win condition to false
var isWin = false;

//create var box to surround start game prompt and append greeting, instructions, and startButton
var box = document.querySelector(".box");


var greeting = document.createElement("h1");
var instructions = document.createElement("p");
greeting.textContent = "WELCOME TO THE QUIZ";
instructions.textContent = "This quiz will test your knowledge of stuff. Are you ready???";
startButton.textContent = "BEGIN!!"
//startButton.setAttribute = ("style", "border: 10px blue solid"); why does the border only show up when it's a button in html and not div??

box.appendChild(greeting);
box.appendChild(instructions);
box.appendChild(startButton);

//some (minimal) ~flair~ for .box
box.setAttribute("style", "margin:5%; padding: 1em; font-family: Optima, sans-serif; text-align: center; border: groove 5px blue");

//grab timer div from html and label it timerEl
var timerEl = document.querySelector(".timer");

//create empty timer and secondsLeft
var timer;
var secondsLeft;

//why does my start button break when I add these in ??
// define fx countdown ??
// timerEl.appendChild(secondsLeft);
// timerEl.appendChild(timer);

function countdown(){
    //sets timer
    secondsLeft = 600;
    timer = setInterval(function() {
      timerEl.textContent = secondsLeft;
      secondsLeft--;
      if (secondsLeft > 0) {
        // Tests if win condition is met
        if (isWin && secondsLeft > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (secondsLeft <= 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
      // ?? if answer is incorrect, subtract 10 seconds from timer
    }, 1000);
  }

// fx startGame clears content of box, adds timer starting count, calls fx countdown
function startGame() {
    isWin = false;
    countdown();
    nextQuestion();
    //document.querySelector("#button").style.display="none;"
}


// dynamically displays questions until quiz is completed or timer runs out
function nextQuestion() {
  console.log(index)
    //TODO: if at length of question array, end game
     if (index >= questions.length) {
       winGame();
     } else if (timer <= 0) {
       loseGame();
     } else {

    //empty box at the start of quiz and at the beginning of each new question
    box.innerHTML= "";

    //create question var (h2), add text content, and append to box
    var question = document.createElement("h2");
    box.appendChild(question);
    question.textContent = questions[index].question;

    //for loop to create buttons = questions[index].choiceOptions.length
    for(var i=0; i<questions[index].choiceOptions.length; i++) {
      choices = document.createElement("button")
      choices.textContent = questions[index].choiceOptions[i];
      box.appendChild(choices);
      //choices.addEventListener("click", nextQuestion);
      choices.addEventListener("click", ifCorrect);
    }
  }
}


function ifCorrect(event) {
  //scores.innerHTML = "";
  console.log(event.target.innerHTML)
  //console.log(questions[index].correct)
  console.log(index)
  var result = document.createElement("p")
  result.classList.add("scoreStyle")
  //scores.appendChild(result);
  if (event.target.innerHTML === questions[index].correct) {
    result.classList.add("correct")
    result.textContent = "CORRECT";
    index++;
    nextQuestion();
  }
  else {
    result.classList.add("incorrect")
    result.textContent = "W R O N G!!!"
    secondsLeft = secondsLeft - 100;
    index++;
    nextQuestion();
  }

}
var scores = document.querySelector(".scores");
// create scoreboard var and populate it with 
var scoreboard = document.querySelector(".scoreboard")
var initials = document.createElement("input")
var saveInitials = document.createElement("button")
saveInitials.textContent = "SAVE"

// The winGame function is called when the win condition is met
function winGame() {
  box.innerHTML="";
  var winText = document.createElement("p");
  winText.textContent = "Congratulations!! You did it!! WOW!" ;
  initials.setAttribute("placeholder", "Your Initials Here "); 
  box.appendChild(winText);
  timerEl.innerHTML = "SCORE: " + secondsLeft;
  isWin = true;
  box.appendChild(initials);
  box.appendChild(saveInitials);
  saveInitials.addEventListener("click", function(){
    //input and text area HTML elements found with .value
    var initialsInput = initials.value
    var initialsAndScore = {
      initials: initialsInput, 
      score: secondsLeft
    }
    //before you set it in there save it somewhere 
  localStorage.setItem("scoreData", JSON.stringify(initialsAndScore))
  window.location.href = "scoreboard.html"
  })
  }

// The loseGame function is called when timer reaches 0
function loseGame() {
    timerEl.innerHTML = "SCORE: " + secondsLeft;
    box.textContent = "WOW u lost... better luck next time, buddy";
  }


// listens for click on startButton to call fx startGame and fx countdown
startButton.addEventListener("click", startGame);

// c
//localStorage.getItem("scoreData")
//create a variable again and set it to JSON.parse((localStorage.getItem("scoreData"))
//the way it's set up now is we're only saving 1 object over and over. it's going to rewrite itself
//before you set to localStorage save your object somewhere
