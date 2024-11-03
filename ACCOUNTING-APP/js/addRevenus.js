//! constants => 
export const main_rev_container = document.querySelector(".rev-container");
export const add_rev_name = document.querySelector(".add-rev-name");
export const add_rev_value = document.querySelector(".add-rev-value");
export const add_rev_button = document.querySelector(".add-rev-button");
export const clear_rev_button = document.querySelector(".clear-rev-button");
export const total_r = document.querySelector(".total-revenues-value");
const net_element = document.querySelector(".net");
window.onload = function () {
    total_r.innerHTML = Number(false);
}
export let t_r = 0;
clear_rev_button.addEventListener("click", function () {
    t_r = 0;
    total_r.innerHTML = `0`;
    let Revenues_elements = document.querySelectorAll(".rev-added");
    Revenues_elements.forEach(function (element) { 
        element.remove();
    })
})

add_rev_button.onclick = function () {
    if (add_rev_name.value !== "" && add_rev_value.value !== "") {
        let rev = document.createElement("div");
        rev.className = "rev-added";
        
        let rev_name = document.createElement("p");
        rev_name.className = "rev-added-name";
        rev_name.innerHTML = `${add_rev_name.value}`
        rev.appendChild(rev_name);
        
        let rev_value = document.createElement("p");
        rev_value.className = "rev-added-value";
        rev_value.innerHTML = `${+add_rev_value.value}$`
        rev.appendChild(rev_value);
        main_rev_container.appendChild(rev);
        add_rev_name.value = ``;
        add_rev_value.value = ``;
        let added_val_total = +rev_value.innerHTML.replace("$", '');
        t_r += added_val_total;
        console.log(added_val_total);
        total_r.innerHTML = t_r;
                                calculateNet();
    } else {
        alert("Please fill in both fields");
    }
}
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