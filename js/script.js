var person = prompt("Meow! Please enter your cat's name(s)", "");
var quant = prompt('Please tell us how many cats live with you');

function addName () {
 
  var txt;
  if (person == null || person == "") {
    txt = "";
  } else {
    txt = "That's a adorable name! Here you will find the best for " + person + " <3";
  } 
  return '<h3>' + txt + '</h3>'
} 

function howManyCats (){
  var txt = '';

  for(var i = 0;i < quant;i = i + 1) {
    txt = "<li>Here\'s a treat!</li>" + txt
  }

  return '<ul>' + txt + '</ul>'
}

function sayMeow (){
  var audio = document.getElementById("purr");
  audio.play();
}