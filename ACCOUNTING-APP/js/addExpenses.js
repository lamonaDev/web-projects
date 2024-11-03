//! constants =>
export const main_exp_container = document.querySelector(".exp-container");
console.log(main_exp_container);
export const add_exp_name = document.querySelector(".add-exp-name");
console.log(add_exp_name);
export const add_exp_value = document.querySelector(".add-exp-value");
console.log(add_exp_value);
export const add_exp_button = document.querySelector(".add-exp-button");
console.log(add_exp_button);
export const clear_exp_button = document.querySelector(".clear-exp-button");
console.log(clear_exp_button);
export const total_e = document.querySelector(".total-expenses-value");
console.log(total_e);
window.onload = function () { 
    total_e.innerHTML = Number(false);
}
export let t_e = 0;
clear_exp_button.addEventListener("click", function () {
    t_e = 0;
    total_e.innerHTML = `0`;
    let expenses_elements = document.querySelectorAll(".exp-added");
    expenses_elements.forEach(function (element) {
        element.remove();
    })
})

add_exp_button.addEventListener("click", function () {
    if (add_exp_name.value !== "" && add_exp_value.value !== "") {
        let exp = document.createElement("div");
        exp.className = "exp-added";

        let exp_name = document.createElement("p");
        exp_name.className = "exp-added-name";
        exp_name.innerHTML = `${add_exp_name.value}`
        exp.appendChild(exp_name);

        let exp_value = document.createElement("p");
        exp_value.className = "exp-added-value";
        exp_value.innerHTML = `${+add_exp_value.value}$`;
        exp.appendChild(exp_value);
        main_exp_container.appendChild(exp);
        add_exp_name.value = ``;
        add_exp_value.value = ``;
        let added_val_total = +exp_value.innerHTML.replace("$", '');
        t_e += added_val_total;
        console.log(added_val_total);
        total_e.innerHTML = t_e;
                                    calculateNet();
    } else {
        alert("Please fill in both fields");
    }
})
function calculateNet() {
    const revenueElements = document.querySelectorAll('.rev-added');
    const expenseElements = document.querySelectorAll('.exp-added');

    let totalRevenues = 0;
    let totalExpenses = 0;

    revenueElements.forEach(rev => {
        const revValueText = rev.querySelector('.rev-added-value').textContent;
        const revValue = parseFloat(revValueText.replace('$', '').trim());
        totalRevenues += revValue;
    });

    expenseElements.forEach(exp => {
        const expValueText = exp.querySelector('.exp-added-value').textContent;
        const expValue = parseFloat(expValueText.replace('$', '').trim());
        totalExpenses += expValue;
    });

    document.querySelector('.total-revenues-value').textContent = `${totalRevenues}$`;
    document.querySelector('.total-expenses-value').textContent = `${totalExpenses}$`;

    const netIncome = totalRevenues - totalExpenses;
    document.querySelector('.net-value').textContent = `${netIncome}$`;
}
