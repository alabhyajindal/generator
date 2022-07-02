// Selecting the elements on the page
const symbols = document.getElementById('symbols');
const numbers = document.getElementById('numbers');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const generate = document.getElementById('generate');
const result = document.getElementById('result');
const copy = document.getElementById('copy');

let length = document.getElementById('length');
let char = 0;
let password = [];

function symbolsFunc() {
  const symbolsList = ['!', '@', '#', '$', '%', '^', '&', '*'];
  password.push(symbolsList[Math.floor(Math.random() * symbolsList.length)]);
}

function numbersFunc() {
  password.push(Math.floor(Math.random() * 10));
}

function uppercaseFunc() {
  const uppercaseList = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  password.push(
    uppercaseList[Math.floor(Math.random() * uppercaseList.length)]
  );
}

function lowercaseFunc() {
  const lowercaseList = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  password.push(
    lowercaseList[Math.floor(Math.random() * lowercaseList.length)]
  );
}

// append functions as array items if the user has selected the option

let functionsList = [];
const checkboxes = [symbols, numbers, lowercase, uppercase];

generate.addEventListener('click', () => {
  if (
    symbols.checked ||
    numbers.checked ||
    lowercase.checked ||
    uppercase.checked
  ) {
    char = length.value;
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        functionsList.push(`${checkboxes[i].name}Func`);
      }
    }

    // Converting the string to a pointer
    for (let j = 0; j < char; j++) {
      window[functionsList[Math.floor(Math.random() * functionsList.length)]]();
    }

    result.value = password.join('');

    // Resetting arrays for next run
    password = [];
    functionsList = [];
    // Resetting the style of copy button
    copy.classList.remove('copied');
    copy.innerText = 'Copy';
  } else {
    console.log('Please select atleast one password attribute.');
  }
});

copy.addEventListener('click', () => {
  if (result.value != '') {
    copy.innerText = 'Copied!';
    copy.classList.add('copied');
    navigator.clipboard.writeText(result.value);
  }
  navigator.clipboard.writeText(result.value);
});
