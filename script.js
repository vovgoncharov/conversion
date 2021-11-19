"use strict";
const base = document.querySelector("#base-currency");
const target = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");

const getConversion = () => {
    fetch(
        `https://v6.exchangerate-api.com/v6/33ffa43c612899ee812b31e2/latest/${base.value}`,
    )
        .then((response) => response.json())
        .then(
            (data) =>
                (result.textContent = data.conversion_rates[target.value]),
        );
};
getConversion();
const changeCurrencyBase = () => {
    base.addEventListener("change", (e) => {
        getConversion();
    });
};
const changeCurrencyTarget = () => {
    target.addEventListener("change", (e) => {
        getConversion();
    });
};
changeCurrencyBase();
changeCurrencyTarget();
