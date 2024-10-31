const main_rev_container = document.querySelector(".add-rev");
const rev_name = document.querySelector("#name-rev");
const rev_amount = document.querySelector("#rev-amount");
const add_rev_button = document.querySelector(".add-rev-button");
const rev_container = document.querySelector(".reveneus-container");
const rev_container_rev_name = document.querySelector(".rev-1-name").cloneNode(true);
const rev_container_rev_amount = document.querySelector(".rev-1-amount").cloneNode(true);
export const total_rev = document.querySelector(".total-rev");
const rev_clear_button = document.querySelector(".rev-clear-button");
rev_clear_button.addEventListener("click", () => {
    let revs_elements = document.querySelectorAll(".rev-1-name");
    let revs_elements_amount = document.querySelectorAll(".rev-1-amount");
    revs_elements.forEach((element) => { 
        element.remove();
    })
    revs_elements_amount.forEach((element) => { 
        element.remove();
    })
    total_rev.innerHTML = `TOTAL REVENEUS: 0`;
})
main_rev_container.onsubmit = function (e) {
    e.preventDefault();
    let main_rev_element = document.createElement("p");
    main_rev_element.className = "rev-1-name";
    let main_rev_element_text = document.createTextNode(rev_name.value);
    main_rev_element.appendChild(main_rev_element_text);
    
    let main_rev_amount_element = document.createElement("p");
    main_rev_amount_element.className = "rev-1-amount";
    let main_rev_amount_element_text = document.createTextNode(rev_amount.value + "$");
    main_rev_amount_element.appendChild(main_rev_amount_element_text);
    rev_container.appendChild(main_rev_element);
    rev_container.appendChild(main_rev_amount_element);
    rev_name.value = "";
    rev_amount.value = "";
    let regex = /[.*+?^${}()|[\]\\]/g;
    if (rev_name.contains(regex)) {
        alert("write a valid name")
    }
}
let revs_values = [];
add_rev_button.addEventListener("click", function () {
    let allRevs = document.querySelectorAll("p.rev-1-amount");
    let total = 0;
    for (let i = 0; i <= allRevs.length; i++) {
        if (!revs_values.includes(+allRevs[i].innerHTML.replace("$", ""))) {
            revs_values.push(+allRevs[i].innerHTML.replace("$", ""));
        }
        total += revs_values[i];
        total_rev.innerHTML = `TOTAL REVENEUS: ${total.toFixed(2)}`
    }
    console.log(revs_values);
    console.log(total);
    console.log(+allRevs[0].innerHTML.replace("$", ""));
})

