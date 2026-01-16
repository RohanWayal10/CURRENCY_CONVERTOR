// const BASE_URL =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Populate dropdowns
// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let option = document.createElement("option");
//     option.innerText = currCode;
//     option.value = currCode;

//     if (currCode === "EUR") option.selected = true;
//     if (select.name === "to" && currCode === "INR") option.selected = true;

//     select.append(option);
//   }
// }

// // Exchange rate logic (EUR → Any)
// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value || 1;

//   let response = await fetch(BASE_URL);
//   let data = await response.json();

//   let target = toCurr.value.toLowerCase();
//   let rate = data.eur[target];

//   if (!rate) {
//     msg.innerText = "Currency not supported";
//     return;
//   }

//   let finalAmount = (amtVal * rate).toFixed(2);
//   msg.innerText = `${amtVal} EUR = ${finalAmount} ${toCurr.value}`;
// };

// // Update flag
// const updateFlag = (element) => {
//   let countryCode = countryList[element.value];
//   let img = element.parentElement.querySelector("img");
//   img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
// };

// dropdowns.forEach(select => {
//   select.addEventListener("change", e => updateFlag(e.target));
// });

// btn.addEventListener("click", e => {
//   e.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", updateExchangeRate);



// const BASE_URL =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Populate dropdowns
// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let option = document.createElement("option");
//     option.innerText = currCode;
//     option.value = currCode;

//     if (select.name === "from" && currCode === "USD") option.selected = true;
//     if (select.name === "to" && currCode === "INR") option.selected = true;

//     select.append(option);
//   }

//   select.addEventListener("change", (e) => updateFlag(e.target));
// }

// // FROM → EUR → TO
// const updateExchangeRate = async () => {
//   let amountInput = document.querySelector(".amount input");
//   let amount = amountInput.value || 1;

//   let response = await fetch(BASE_URL);
//   let data = await response.json();

//   let from = fromCurr.value.toLowerCase();
//   let to = toCurr.value.toLowerCase();

//   let fromRate = data.eur[from];
//   let toRate = data.eur[to];

//   if (!fromRate || !toRate) {
//     msg.innerText = "Conversion not available";
//     return;
//   }

//   let finalAmount = (amount * toRate / fromRate).toFixed(2);

//   msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// // Update flag
// const updateFlag = (element) => {
//   let countryCode = countryList[element.value];
//   let img = element.parentElement.querySelector("img");
//   img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
// };

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", updateExchangeRate);



const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");
    option.innerText = currCode;
    option.value = currCode;

    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "INR") option.selected = true;

    select.append(option);
  }

  // Update flag + conversion on change
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
    updateExchangeRate();
  });
}

// Convert: FROM → EUR → TO
const updateExchangeRate = async () => {
  let amountInput = document.querySelector(".amount input");
  let amount = amountInput.value || 1;

  let response = await fetch(BASE_URL);
  let data = await response.json();

  let from = fromCurr.value.toLowerCase();
  let to = toCurr.value.toLowerCase();

  let fromRate = data.eur[from];
  let toRate = data.eur[to];

  if (!fromRate || !toRate) {
    msg.innerText = "Conversion not available";
    return;
  }

  let result = (amount * toRate / fromRate).toFixed(2);
  msg.innerText = `${amount} ${fromCurr.value} = ${result} ${toCurr.value}`;
};

// Update flag image
const updateFlag = (element) => {
  let countryCode = countryList[element.value];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", updateExchangeRate);
