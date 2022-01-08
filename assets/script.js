function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    body.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
}

function changeText() {
    const ligthMode = "ligth Mode";
    const modeDark = "Dark Mode";

    if (button.classList.contains(darkMode)) {
      button.innerHTML = ligthMode;
      h1.innerHTML = modeDark + " ON";
      return;
   } 

   button.innerHTML = modeDark;
   h1.innerHTML = ligthMode + " ON";
}

const darkMode = "dark-mode";
const h1 = document.getElementById("page-title");
const button = document.getElementById("mode-selector");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];


button.addEventListener("click", changeMode) 

