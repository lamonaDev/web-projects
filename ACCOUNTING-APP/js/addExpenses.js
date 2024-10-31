// const main_exp_container = document.querySelector(".add-exp");
// const exp_name = document.querySelector("#name-exp");
// const exp_amount = document.querySelector("#exp-amount");
// const add_exp_button = document.querySelector(".add-exp-button");
// const exp_container = document.querySelector(".expenses-container");
// const exp_container_exp_name = document.querySelector(".exp-1-name").cloneNode(true);
// const exp_container_exp_amount = document.querySelector(".exp-1-amount").cloneNode(true);
// const total_exp = document.querySelector(".total-exp");
// const exp_clear_button = document.querySelector(".exp-clear-button");
// exp_clear_button.addEventListener("click", () => {
//     let exp_elements = document.querySelectorAll(".exp-1-name");
//     let exp_elements_amount = document.querySelectorAll(".exp-1-amount");
//     exp_elements.forEach((element) => {
//         element.remove();
//     })
//     exp_elements_amount.forEach((element) => {
//         element.remove();
//     })
//     total_exp.innerHTML = `TOTAL EXPENSES: 0`;
// })
// main_exp_container.onsubmit = function (e) {
//     e.preventDefault();
//     let main_exp_element = document.createElement("p");
//     main_exp_element.className = "rev-1-name";
//     let main_exp_element_text = document.createTextNode(exp_name.value);
//     main_exp_element.appendChild(main_exp_element_text);

//     let main_exp_amount_element = document.createElement("p");
//     main_exp_amount_element.className = "rev-1-amount";
//     let main_exp_amount_element_text = document.createTextNode(exp_amount.value + "$");
//     main_exp_amount_element.appendChild(main_exp_amount_element_text);
//     exp_container.appendChild(main_exp_element);
//     exp_container.appendChild(main_exp_amount_element);
//     exp_name.value = "";
//     exp_amount.value = "";
//     let regex = /[.*+?^${}()|[\]\\]/g;
//     if (exp_name.contains(regex)) {
//         alert("write a valid name")
//     }
// }
// let exp_values = [];
// add_exp_button.addEventListener("click", function () {
//     let allExp = document.querySelectorAll("p.exp-1-amount");
//     let total = 0;
//     for (let i = 0; i <= allExp.length; i++) {
//         exp_values.unshift(+allExp[i].innerHTML.replace("$", ""));
//         total += exp_values[i];
//         total_exp.innerHTML = `TOTAL EXPENSES: ${total.toFixed(2)}`
//     }
//     console.log(exp_values);
//     console.log(total);
//     console.log(+allRevs[0].innerHTML.replace("$", ""));
// })
import { total_rev } from './addRevenus.js';
    console.log(total_rev);
const main_exp_container = document.querySelector(".add-exp");
const exp_name = document.querySelector("#name-exp");
const exp_amount = document.querySelector("#exp-amount");
const add_exp_button = document.querySelector(".add-exp-button");
const exp_container = document.querySelector(".expenses-container");
const exp_container_exp_name = document.querySelector(".exp-1-name").cloneNode(true);
const exp_container_exp_amount = document.querySelector(".exp-1-amount").cloneNode(true);
const total_exp = document.querySelector(".total-exp");
const exp_clear_button = document.querySelector(".exp-clear-button");
exp_clear_button.addEventListener("click", () => {
    let exp_elements = document.querySelectorAll(".exp-1-name");
    let exp_elements_amount = document.querySelectorAll(".exp-1-amount");
    exp_elements.forEach((element) => { 
        element.remove();
    })
    exp_elements_amount.forEach((element) => { 
        element.remove();
    })
    total_exp.innerHTML = `TOTAL EXPENSES: 0`;
})
main_exp_container.onsubmit = function (e) {
    e.preventDefault();
    let main_exp_element = document.createElement("p");
    main_exp_element.className = "exp-1-name";
    let main_exp_element_text = document.createTextNode(exp_name.value);
    main_exp_element.appendChild(main_exp_element_text);
    
    let main_exp_amount_element = document.createElement("p");
    main_exp_amount_element.className = "exp-1-amount";
    let main_exp_amount_element_text = document.createTextNode(exp_amount.value + "$");
    main_exp_amount_element.appendChild(main_exp_amount_element_text);
    exp_container.appendChild(main_exp_element);
    exp_container.appendChild(main_exp_amount_element);
    exp_name.value = "";
    exp_amount.value = "";
    let regex = /[.*+?^${}()|[\]\\]/g;
    if (exp_name.contains(regex)) {
        alert("write a valid name")
    }
}
let exp_values = [];
add_exp_button.addEventListener("click", function () {
    let allExp = document.querySelectorAll("p.exp-1-amount");
    let total = 0;
    for (let i = 0; i <= allExp.length; i++) {
        if (!exp_values.includes(+allExp[i].innerHTML.replace("$", ""))) {
            exp_values.push(+allExp[i].innerHTML.replace("$", ""));
        }
        total += exp_values[i];
        total_exp.innerHTML = `TOTAL REVENEUS: ${total.toFixed(2)}`
    }
    console.log(exp_values);
    console.log(total);
    console.log(+allExp[0].innerHTML.replace("$", ""));
})