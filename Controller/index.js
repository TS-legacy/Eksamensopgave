/** First we need to retrieve elements from the index.html. 
 * I use getElementById instead of querySelector: https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/
 */



  function createAccBtn() {
    
    const fname = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const Password = document.getElementById("signUpPassword").value;
    const age = document.getElementById("age").value;
  

//documentation : https://www.w3schools.com/jsref/met_storage_setitem.asp   
    localStorage.setItem("fullName", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", Password);
    localStorage.setItem("age", age);
  

  
    e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

  }

  /**Et get request sendes som forbinder serveren med siden når bruger opretter sig. 
   * Efter der er kørt node.server.js i consolen så kan localhost:3000 skrives i postman eller føges vi linket*/
  document.addEventListener("DOMContentLoaded", function() {

   let apiButton = document.getElementById("signUp");
    apiButton.addEventListener("click", function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                alert(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000", true);
        xhttp.send();
    });
  });

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
}



