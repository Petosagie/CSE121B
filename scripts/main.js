// Javascript to do the currency conversion 

// To assign HTML Element by Id to varible names
const currencyNo_one = document.getElementById("currency-one");
const currencyNo_two = document.getElementById("currency-two");
const amountNo_one = document.getElementById("amount-one");
const amountNo_two = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateNo = document.getElementById("rate");

// Function to do the conversion of currencies
function calculate() {
  const currency_one = currencyNo_one.value;
  const currency_two = currencyNo_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`) 
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateNo.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountNo_two.value = (amountNo_one.value * rate).toFixed(2);
    });
}

currencyNo_one.addEventListener("change", calculate);
amountNo_one.addEventListener("input", calculate);
currencyNo_two.addEventListener("change", calculate);
amountNo_two.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyNo_one.value;
  currencyNo_one.value = currencyNo_two.value;
  currencyNo_two.value = temp;
  calculate();
});

calculate();