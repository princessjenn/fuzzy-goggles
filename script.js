var timeLeft = 90;
var score = 0;
var currentQuestion = 0;

let questions = [{ question:"What does Javascript programming language add onto websites?", 
                   answers:["Style","Text structure","Pictures of kittens", "Interactivity"], correctAnswer: "Interactivity" },

                 { question:"Which programming interface is considered a Third Party API?",
                   answers:["Twitter", "DOM", "Web Audio", "Fetch"], correctAnswer: "Twitter" },

                 { question:"What does API stand for in Javascript?",
                    answers:["Accepted Principle Ideas","Application Programming Interfaces","Arrayed Potential Instructions","Apple Pineapple Igloo"], correctAnswer: "Application Programming Interfaces" },

                 { question:"Which is the correct tag to use when linking Javascript into to an HTML file?",
                 answers:["link","script","head","style"], correctAnswer: "script" },

                 { question:"Which location is best practice for linking Javascript into an HTML file so that the HTML runs first?", 
                  answers:["In the header after the closing </body> tag","just before the closing </body> tag","In the <h1> tags","After the closing </html> tag"], correctAnswer: "just before the closing </body> tag" },

                 { question:"What does the method querySelector() do?",
                   answers:[ "It returns the value of a specified attribute on the element.", "It sets up a function that will be called whenever the specified event is delivered to the target.", "It returns the first element within the document that matches the specified selector", "It returns a live HTML collection which contains every descendant element which has the specified class name or names"], correctAnswer: "It returns the first element within the document that matches the specified selector" },

                 { question:"In the statement  let x = 50 , which part of the statement is the declaration?",
                   answers:[ "x = 50","let x","50","="], correctAnswer: "let x" },

                 { question:"Which type of declarations always require an initializer?",
                   answers:["const", "let", "var", "if"], correctAnswer: "const" },

                 { question:"Which iteration statement repeats an action some number of times?",
                   answers:["done", "next", "return", "loop"], correctAnswer: "loop" },

                 { question:"Which data type is used to represent textual data?",
                   answers:["number", "boolean", "string","Undefined"], correctAnswer: "string" },



]

document.querySelector("start-button").addEventListener("click", startQuiz);
document.querySelector("submit-button").addEventListener("click", saveScore);

function startQuiz(){
let timer = 90
let timerId =  setInterval(function(){ 
  timeLeft--;  
  document.querySelector("time-left").textContent = timeLeft;
  if (timeLeft <= 0 || currentQuestion >= questions.length) {

    clearInterval(timerInterval);
    endQuiz();
  }

}, 1000)};




renderQuestion();

function renderQuestion(){

  questions[currentQuestion].question
  questions[currentQuestion].answers [1]
  questions[currentQuestion].answers [2]
  questions[currentQuestion].answers [3]
  questions[currentQuestion].correctAnswer

  "correct answer:" = questions[currentQuestion].correctAnswer
}

document.querySelector("question-text").textContent = question.question;

var choicesHtml = "";
  for (var i = 0; i < question.choices.length; i++) {
    choicesHtml += "<li><button class='choice-button'>" + question.choices[i] + "</button></li>";
  }
  document.querySelector("answer-choices").innerHTML = choicesHtml;

  var choiceButtons = document.getElementsByClassName("choice-button");
  for (var i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", handleChoice);
  }







