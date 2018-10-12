var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?");
var pet = prompt("What is your pet's name?");
alert("Thank you for the information");

//Four conditions which need to be true for the spy alert
var namecond = null
var agecond = null
var heightcond = null
var petcond = null

//Check if first character in firstname matches first character in lastname
if (firstname[0] == lastname[0]) {
  namecond = true;
  console.log("First name test passed")
}else {
  namecond = false;
  console.log("namecond test failed")
}

//Check is age > 20 but < 30
if (age > 20 && age < 30) {
  agecond = true;
  console.log("Age test passed")
}else {
  agecond = false;
  console.log("agecond test failed")
}

//Check if height >= 170
if (height >= 170) {
  heightcond = true;
  console.log("Height test passed")
}else {
  heightcond = false;
  console.log("heightcond test failed")
}

//Check if last character in pets name == "y"
if (pet[pet.length-1] == "y") {
  petcond = true;
  console.log("Pet test passed")
}else {
  petcond = false;
  console.log("petcond test failed")
}

//Final console message if all conditions match true
if (namecond && agecond && heightcond && petcond){
  console.log("Welcome comrade, you've passed the Test")
}else {
  console.log("Sorry, nothing to see here")
}
