//A function is made that checks if the mail and password that is put in is equal to the one from local storage
function logInBtn() {
    //documentation for getItem: https://www.w3schools.com/jsref/met_storage_getitem.asp 
        var savedEmail = localStorage.getItem("email");
        var savedPassword = localStorage.getItem("password");
    
      const logInEmail = document.getElementById("logInEmail").value;
      const logInPassword = document.getElementById("logInPassword").value;
    
      if (savedEmail == logInEmail && savedPassword == logInPassword) {
          
        window.location.href = "../Views/swipe.html"; //link til swipe siden når bruger er logget ind
      } 
return localStorage.key(1);
}
logInBtn();