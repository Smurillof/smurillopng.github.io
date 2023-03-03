const themeButton = document.createElement("button");
themeButton.id = "theme-toggle";
themeButton.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});
document.body.getElementsByClassName("page-title")[0].appendChild(themeButton);
