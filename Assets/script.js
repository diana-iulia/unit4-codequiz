// grabs button from html and names it startButton
var startButton = document.querySelector("#button")

//creates empty div(html) and gets it to populate(js)
var startBox = document.querySelector(".box");
var greeting = document.createElement('h1');
greeting.textContent = "HELLO!";
var instructions = document.createElement('p');
instructions.textContent = "This quiz will test your knowledge of stuff. Are you ready????"
 //var startButton = document.createElement('button');
 //startButton.textContent = "START"

startBox.appendChild(greeting);
startBox.appendChild(instructions);

// the function emptyStartBox clears content of startbox and removes start button
function emptyStartBox() {
    startBox.innerHTML = "";
    document.querySelector("#button").style.display="none";

}
// adds click event listener to startButton to call function emptyStartBox ^^
startButton.addEventListener("click", emptyStartBox)


function displayQuestion() { 
    // creates question text header
    var question = document.createElement("h2")
    question.textContent = ///??????
    // for loop to repeat q&a display
    for(var i=0; i<questions.length; i++) {
        var choices = document.createElement("button")
        
        choices.addEventListener("click",displayQuestion)
    }


}
//// SAMPLE FROM W4A16///////////////////////////

// function navigate(direction) {
//     index = index + direction;
//     if (index < 0) { 
//       index = images.length - 1; 
//     } else if (index > images.length - 1) { 
//       index = 0;
//     }
//     currentImage = images[index];
//     carousel.style.backgroundImage = "url('" + currentImage + "')";
//   }
// W4A28 mini project
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  


///////////////////////////////////////////

var questions = [
    {question: "q1 text",
    answer1: "answer1text", 
    answer2: "answer2text",
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"}, // put in text of question or variable name of correct answer?
    {question: "q2 text",
    answer1: "answer1text", 
    answer2: "answer2text", 
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"},
    {question: "q3 text",
    answer1: "answer1text", 
    answer2: "answer2text", 
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"},
    {question: "q4 text",
    answer1: "answer1text", 
    answer2: "answer2text", 
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"},
    {question: "q5 text",
    answer1: "answer1text", 
    answer2: "answer2text", 
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"},
    {question: "q6 text",
    answer1: "answer1text", 
    answer2: "answer2text", 
    answer3: "answer3text", 
    answer4: "answer4text", 
    answer: "answer text"},
    
]    

// var questionsIndexNumber = 0
// questions[questionIndexNumber]
// answer1[questionIndexNumber]
// answer2[questionIndexNumber]
// answer3[questionIndexNumber]
// answer4[questionIndexNumber]

//when user chooses answer add 1 to questionIndexNumber

// questions[0]
// answer1[0], answer1[1], answer1[2], answer1[3]
//when user chooses answer add 1 to questions and then populate all of answer2


function displayCurrentQuestion() {
    var currentQuestion = quizQuestion(questionIndex)
    console.log(quizQuestion(questionIndex))
}


// var currentQuestion = "IT WORKS!"
// var questionDivEl = document.createElement('div')
// questionDivEl.textContent = currentQuestion
// console.log(questionDivEl.textContent)

// 