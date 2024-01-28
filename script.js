const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const converter = (num) => {
  const translator = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const result = [];

  translator.forEach(function (element) {
    while (num >= element[1]) {
      result.push(element[0]);
      num -= element[1]
    }
  });

  return result.join("");
};

const isValid = (str, int) => {
  let errorText = "";

  if (!str || !int || false) {
    errorText = "Please enter a valid number.";
  } else if (int < 1) {
    errorText = "Please enter a number greater than or equal to 1.";
  } else if (int > 3999) {
    errorText = "Please enter a number less than or equal to 3999.";
  } else {
    return true;
  }

  output.innerText = errorText;
  output.classList.add("alert");

  return false;
};

const clearOutput = () => {
  output.innerText = "";
  output.classList.remove("alert");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  updateScreen();
});

convertButton.addEventListener("click", () => {
  updateScreen();
});

const updateScreen = () => {
  const numStr = document.getElementById("number").value;
  const int = parseInt(numStr, 10);

  output.classList.remove("hidden");

  clearOutput();

  if (isValid(numStr, int)) {
    output.innerText = converter(int);
  }
};