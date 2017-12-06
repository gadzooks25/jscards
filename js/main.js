
var question= [
    {question: "q1", answer: 'a1'},
    {question: "q2", answer: "a2"},
    {question:"q3", answer:"a3"}
  ]
//document.getElementById("questions").innerHTML = question();   
var number = 0
//var randomize = Math.floor(Math.random() * 3)
function randomNumber(){
    number = Math.floor(Math.random() * 3);
}

function clear() {
    document.getElementById("questions").clear();
}
function myFunction1() {
    randomNumber()
    document.getElementById("questions").innerHTML = question[number].question;
}
function myFunction2() {
    document.getElementById("answers").innerHTML = question[number].answer;
}