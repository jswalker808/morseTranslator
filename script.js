let submitButton = document.body.querySelector("#form-submit");
//Adds click event listener to the submit button
submitButton.addEventListener("click", (e) => {
  //prevents browser default action
  e.preventDefault();
  //retrieves the value of the input text area, and passes into the translate function
  //then passes into generateHTML to update the user interface
  let englishInput = document.body.querySelector("#input").value;
  let morseString = translate(englishInput);
  generateHTML(morseString);
});


// A dictionary object of key value pairs, where the keys are the english alphabet,
// and the values are the corresponding morse code.  Includes numbers and some
// punctuation marks.
let morseDict = {
  a : ".-",
  b : "-...",
  c : "-.-.",
  d : "-..",
  e : ".",
  f : "..-.",
  g : "--.",
  h : "....",
  i : "..",
  j : ".---",
  k : "-.-",
  l : ".-..",
  m : "--",
  n : "-.",
  o : "---",
  p : ".--.",
  q : "--.-",
  r : ".-.",
  s : "...",
  t : "-",
  u : "..-",
  v : "...-",
  w : ".--",
  x : "-..-",
  y : "-.--",
  z : "--..",
  0 : "-----",
  1 : ".----",
  2 : "..---",
  3 : "...--",
  4 : "....-",
  5 : ".....",
  6 : "-....",
  7 : "--...",
  8 : "---..",
  9 : "----.",
  '.' : ".-.-.-",
  ',' : "--..--",
  '?' : "..--..",
  '!' : "-.-.--",
}

//Passes in an english string and returns a string of the morse translation
let translate = (input) => {
  let morseString = "";
  //iterate through each character in the passed in string
  for (let i = 0; i < input.length; i++) {
    //if the character matches one of the properties in the morse dictionary,
    // we append that character to a string.
    if (morseDict.hasOwnProperty(input.charAt(i).toLowerCase()))
      morseString += morseDict[input.charAt(i).toLowerCase()];
    //if the char is a space, new line, or tab, we append a space to the string
    else if (input.charAt(i) == " " || input.charAt(i) == "\n" || input.charAt == "\t")
      morseString += " ";
  }
  return morseString;
}

//passes in a string and changes the value of the output textarea to that string
let generateHTML = (string) => {
  let textArea = document.getElementById("output");
  textArea.value = string;
}
