//! Selecting input fields and dropdown menus from the HTML
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

//! Creating a new instance of the Currency class
const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}

//! Function to perform currency exchange calculation
function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;

  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
