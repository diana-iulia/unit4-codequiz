// grabs button from html and names it startButton
var startButton = document.querySelector("#button")

//create empty div(html) and get it to populate(js)
var startBox = document.querySelector(".box");
var greeting = document.createElement('h1');
var instructions = document.createElement('p');
 //var startButton = document.createElement('button');
 //startButton.textContent = "START"

greeting.textContent = "HELLO!";
instructions.textContent = "This quiz will test your knowledge of stuff. Are you ready????"

startBox.appendChild(greeting);
startBox.appendChild(instructions);

// the function emptyStartBox clears content of startbox and removes start button
function emptyStartBox() {
    startBox.innerHTML = "";
    document.querySelector("#button").style.display="none";

}
// adds click event listener to startButton to call function emptyStartBox ^^
startButton.addEventListener("click", emptyStartBox)



var questions = [
    "question1", 
    "question2", 
    "question3", 
    "question4", 
    "question5"
]    
var answer1 = ["answer1a", 'answer1b', 'answer1c']
var answer2 = ["answer2a", "answer2b", "answer2c"]
var answer3 = ["answer3a", "answer3b", "answer3c"]
var answer4 = ["answer4a", "answer4b", "answer4c"]

// var questionIndexNumber = 0
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
}

//var welcome = document.createElement("h2");
//welcome.textContent = "Welcome to the state capitals quiz!";
//contentContainerEl.appendChild(welcome);



// var currentQuestion = "IT WORKS!"
// var questionDivEl = document.createElement('div')
// questionDivEl.textContent = currentQuestion
// console.log(questionDivEl.textContent)