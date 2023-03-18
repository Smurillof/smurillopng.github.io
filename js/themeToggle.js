const themeButton = document.createElement("button");
themeButton.id = "theme-toggle";

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

themeButton.addEventListener("click", toggleTheme);
document.querySelector(".page-title").appendChild(themeButton);