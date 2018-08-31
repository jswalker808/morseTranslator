let submitButton = document.body.querySelector("#form-submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let englishInput = document.body.querySelector("#input").value;
  let morseString = translate(englishInput);
  generateHTML(morseString);
});

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

let translate = (input) => {
  let morseString = "";

  for (let i = 0; i < input.length; i++) {

    if (morseDict.hasOwnProperty(input.charAt(i).toLowerCase()))
      morseString += morseDict[input.charAt(i).toLowerCase()];
    else if (input.charAt(i) == " " || input.charAt(i) == "\n" || input.charAt == "\t")
      morseString += " ";
  }
  return morseString;
}

let generateHTML = (string) => {
  let textArea = document.getElementById("output");
  textArea.value = string;
}
