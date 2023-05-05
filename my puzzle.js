var score=10;

function tips(){
  alert("1.A very popular fairy drama.");
  alert("2.A palace drama.");
  alert("3.A drama with a modern sequel.");
  alert("4.A movie about mother and daughter.");
  alert("5.A drama about time loops.");
  alert("6.A drama about getting rid of evil.");
}


function answer(){
  var response=prompt("write down your answer");
  if(response=="花千骨"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function answer1(){
  var response=prompt("write down your answer");
  if(response=="如懿传"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function answer2(){
  var response=prompt("write down your answer");
  if(response=="周生如故"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function answer3(){
  var response=prompt("write down your answer");
  if(response=="你好，李焕英"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function answer4(){
  var response=prompt("write down your answer");
  if(response=="开端"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function answer5(){
  var response=prompt("write down your answer");
  if(response=="狂飙"){
    alert("right answer!");
    score+=15;
  }
  else {
    alert("wrong answer");
  }
}
function sayhello(){
  if(score==100){
    alert("Your score is "+score+" ,you rock!!!");
  }
  if(score>25&score<=99){
    alert("Your score is "+score+" ,keep fighting!");
  }
  if(score==25){
    alert("Your score is "+score+" ,you still have a long way to go");
  }
}
