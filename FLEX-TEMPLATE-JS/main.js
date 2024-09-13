//! body main root style =>
document.body.style.cssText = ` margin:0; padding:0;
// background-color:black;
display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;
//! navbar header =>
const headerElement = document.createElement("header");
const navElement = document.createElement("div");
navElement.classList = ["topnav"]; navElement.id = "myTopnav";
navElement.style.display = "block";
navElement.style.position = "absolute";
navElement.style.top = "0px";
navElement.style.left = "0px";
navElement.style.width = "100%"
navElement.style.backgroundColor = "#333"; navElement.style.overflow = "hidden";
const navLogo = document.createElement("a");
const navLogoText = document.createTextNode("Elzero");
navLogo.classList = ["active"]; navLogo.href = "#home";
navLogo.appendChild(navLogoText);
navLogo.style.float = "left"; navLogo.style.display = "block";
navLogo.style.color = "green"; navLogo.style.textAlign = "center";
navLogo.style.padding = "14px 16px"; navLogo.style.textDecoration = "none";
navLogo.style.fontSize = "17px";
navElement.appendChild(navLogo);

for (let i = 0; i < 1; i++) {
    const link = document.createElement("a"); const linkText = document.createTextNode("Contact");
    link.appendChild(linkText);
    link.classList = ["nav-link"]; link.href = `#${link.textContent.toLocaleLowerCase()}`;
    link.style.fontSize = "17px"; link.style.float = "right";
    link.style.display = "block"; link.style.color = "white";
    link.style.textAlign = "center"; link.style.padding = "14px 16px";
    link.style.textDecoration = "none";
    navElement.appendChild(link); }
for (let i = 0; i < 1; i++) {
    const link = document.createElement("a"); const linkText = document.createTextNode("Service");
    link.appendChild(linkText);
    link.classList = ["nav-link"]; link.href = `#${link.textContent.toLocaleLowerCase()}`;
    link.style.fontSize = "17px";
    link.style.float = "right"; link.style.display = "block";
    link.style.color = "white"; link.style.textAlign = "center";
    link.style.padding = "14px 16px"; link.style.textDecoration = "none";
    navElement.appendChild(link); }
for (let i = 0; i < 1; i++) {
    const link = document.createElement("a"); const linkText = document.createTextNode("About");
    link.appendChild(linkText);
    link.classList = ["nav-link"]; link.href = `#${link.textContent.toLocaleLowerCase()}`;
    link.style.fontSize = "17px"; link.style.float = "right";
    link.style.display = "block"; link.style.color = "white";
    link.style.textAlign = "center"; link.style.padding = "14px 16px";
    link.style.textDecoration = "none";
    navElement.appendChild(link); }
for (let i = 0; i < 1; i++) {
    const link = document.createElement("a"); const linkText = document.createTextNode("Home");
    link.appendChild(linkText);
    link.classList = ["nav-link"]; link.href = `#${link.textContent.toLocaleLowerCase()}`;
    link.style.fontSize = "17px"; link.style.float = "right";
    link.style.display = "block"; link.style.color = "white";
    link.style.textAlign = "center"; link.style.padding = "14px 16px";
    link.style.textDecoration = "none";
    navElement.appendChild(link); }
headerElement.appendChild(navElement);
document.body.appendChild(headerElement);

//! main body =>

    const mainElement = document.createElement("main");
    mainElement.classList = ["main-contanier"];
    mainElement.style.position = "absolute";
    mainElement.style.top = "60px";
    mainElement.style.left = "0px";
    mainElement.style.width = "100%";
    mainElement.style.height = "100vh";
    
    const parentElement = document.createElement("div");
    parentElement.classList = ["container"];
    parentElement.style.display = "flex";
    parentElement.style.flexWrap = "wrap";
    parentElement.style.width = "100%";
    for (let i = 0; i < 18; i++) {
    const card = document.createElement("div");
    const cardText = document.createTextNode("Product"); 
    const cardNumber = document.createTextNode(`-${i + 1}`);
    card.appendChild(cardText);
    card.appendChild(cardNumber)
    card.classList = ["product"];
    card.style.flex = "3 3 25%";
    card.style.padding = "20px";
    card.style.textAlign = "center";
    card.style.alignContent = "center";
    card.style.margin = "7px";
    card.style.height = "90px"
    card.style.borderRadius = "5px"
    card.style.backgroundColor = "#4CAF50";
    parentElement.appendChild(card);
}
//! footer =>
const footer = document.createElement("footer");
const footerTextNode = document.createTextNode("Copyright 2021");
footer.appendChild(footerTextNode);
footer.classList = ["footer"];
footer.style.position = "sticky";
footer.style.backgroundColor = "#4CAF50";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.alignContent = "center";
footer.style.bottom = "0px";
footer.style.width = "100%";
footer.style.height = "40px";


mainElement.appendChild(parentElement);
mainElement.appendChild(footer);
document.body.appendChild(mainElement);


