const button = window.document.querySelector(".add-element");
let counter = 0;
window.onload = () => {
    loadEl();
}
button.addEventListener("click", function () {
    let el = window.document.createElement("div");
    let el_txt = window.document.createTextNode(`Appended Element No.${counter += 1}`);
    el.appendChild(el_txt);
    el.className = `el-${counter}`;
    window.document.body.appendChild(el);
    saveEl();
});
function saveEl() {
    let elements = [];
    let es = window.document.querySelectorAll("div");
    es.forEach((e) => {
        elements.push(e.className);
    });
    window.localStorage.setItem("elements", JSON.stringify(elements));
}
function loadEl() {
    const elements = JSON.parse(window.localStorage.getItem("elements")) || [];
    elements.forEach(element => {
    let el = window.document.createElement("div");
    let el_txt = window.document.createTextNode(`Appended Element No.${counter += 1}`);
    el.appendChild(el_txt);
    el.className = `el-${counter}`;
    window.document.body.appendChild(el);
    });
}
