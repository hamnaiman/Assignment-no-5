let firstName = prompt("Enter your first name");

let lastName = prompt("Enter your last name");

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName + "! Welcome!");

//question no 2

let mobileModel = prompt("what's your faviorate model?");

let lengthofInput = mobileModel.length;

document.write("<h2>Length of your favorite mobile phone model:</h2>");
document.write("<p>" + lengthofInput + "</p>")

//ques no 3

let word = "pakistani";

let index = word.indexOf('n');

document.write("<h2>Index of 'n' in the word 'Pakistani':</h2>");
document.write("<p>" + index + "</p>");


// ques no 4

let greetings = "Hello World"

let output = greetings.lastIndexOf('l');

document.write("<h2>Last Index of 'l' in the string 'Hello World':</h2>");
document.write("<p>" + output + "</p>")


//ques no 5

let text = "pakistani"

let  outcome = text.charAt(3);

document.write("<h2>character at 3rd index of the word pakistani");
document.write("<p>" + outcome + "</p>");

//question no 6

let fName = prompt("Enter your first name");

let lName = prompt("enter your last name");

let name = fName.concat(" ",lName);

alert("heloo," + name + "!Welcome");


//ques n0 7


let originalWord = "Hyderabad";

let replacedWord = originalWord.replace("Hyder", "Islam");


document.write("<h2>replaced Word:</h2>");
document.write("<p>" + replacedWord + "</p>");

//ques no 8

let message = "Ali and Sami are best friends. They play cricket and football together ";

let replacedMessage = message.replace(/and/g, "&");

document.write("<h2>replaced message:</h2>");
document.write("<p>" + replacedMessage + "</p>");

//ques no 9

let str = "472";


let num = parseInt(str);

document.write("<h2>Conversion Result:</h2>");
document.write("<p>Original String: " + str + ", Type: " + typeof str + "</p>");
document.write("<p>Converted Number: " + num + ", Type: " + typeof num + "</p>");


//ques no 10

let userInput = prompt("what's your faviorate food");

let out = userInput.toUpperCase();

document.write("<h2>Uppercase Text:</h2>");
document.write("<p>" + out + "</p>");


//ques no 11

//let Input = prompt("Enter some text")

//let result = isTitle.case//

//ques no 12


var number = 35.36;


var numString = number.toString().replace(".", "");


document.write("<h2>Modified Number:</h2>");
document.write("<p>" + numString + "</p>");


//ques


let Arr = ["cake", "apple pie", "cookie", "chips", "patties"];


let user = prompt("Enter an item to search:");


let found = false;
for (let i = 0; i < A.length; i++) {
    if (user.toLowerCase() === A[i].toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    alert("Yes, '" + user + "' is found in the list.");
} else {
    alert("No, '" + user + "' is not found in the list.");
}

