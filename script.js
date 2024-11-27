let display = document.getElementById('result');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ` ${operator} `;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.trim();
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = 'Error';
  }
}
