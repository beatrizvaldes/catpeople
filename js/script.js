var person = prompt("Mew! Please enter your cat's name", "");
var txt;

if (person == null || person == "") {
  txt = "";
} else {
  txt = "That's a adorable name! Here you will find the best for " + person + " <3";
}

document.write('<h3>' + txt + '</h3>')