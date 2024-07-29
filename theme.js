const themeButton = document.getElementById("change-theme-button")

function changeText(){
  const text = document.getElementById("title")

  if (theme == "light"){
    text.innerHTML = "Dark theme"
    theme = "dark";
  }else {
    text.innerHTML = "Light theme"
    theme="light"
  }
}





themeButton.addEventListener("click", main)