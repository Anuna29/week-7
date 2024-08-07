const themeButton = document.getElementById("icon-container");

themeButton.onclick  = function(){
  document.body.classList.toggle("dark-theme")
}

var ajax = new XMLHttpRequest();
ajax.responseType = "blob";
ajax.open("GET","Resume_Sukhbat_Anujin.pdf", true);
ajax.send();

ajax.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
    var obj = window.URL.createObjectURL(this.response);
    document.getElementById("anchor").setAttribute("href",obj);

    setTimeout(function(){
      window.URL.revokeObjectURL(obj);
    }, 60*1000);
  }
}