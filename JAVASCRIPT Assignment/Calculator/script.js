let display = document.getElementById("display");

// Append clicked value to display
function appendValue(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Clear all input
function clearDisplay() {
  display.innerText = "0";
}

// Delete last character
function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

// Evaluate expression
function calculate() {
  try {
    const result = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}

