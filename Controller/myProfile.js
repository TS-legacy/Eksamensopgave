function updateInfo() {
    const fname = document.getElementById("updateFname").value;
    const email = document.getElementById("updateEmail").value;
    const Password = document.getElementById("updatePassword").value;
    const age = document.getElementById("updateAge").value;
  

//documentation : https://www.w3schools.com/jsref/met_storage_setitem.asp   
    localStorage.setItem("fullName", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", Password);
    localStorage.setItem("age", age);

    e.preventDefault(); //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

      reload = location.reload();

};

function reload() {
  reload = location.reload();

}

//Function that deletes the users information from local storage: See documentation - https://www.w3schools.com/jsref/met_storage_removeitem.asp 
function deleteUser(){

  
    
  localStorage.removeItem("fullName")
  localStorage.removeItem("email")
  localStorage.removeItem("age")
  localStorage.removeItem("password")
  localStorage.removeItem("Selena")
  localStorage.removeItem("navn")

  window.location.href = "../Views/login.html"; //Link til login siden når bruger e rlogget ud



}


  /**Et get request sendes som forbinder serveren med siden når bruger opretter sig. 
   * Efter der er kørt node.server.js i consolen så kan localhost:3001 skrives i postman eller føges vi linket*/
  document.addEventListener("DOMContentLoaded", function() {

    let apiButton = document.getElementById("update");
     apiButton.addEventListener("click", function(){
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 // Typical action to be performed when the document is ready:
                 alert(xhttp.responseText);
             }
         };
         xhttp.open("GET", "http://localhost:3001", true);
         xhttp.send();
     });
   });


/**Et get request sendes som forbinder serveren med siden når bruger opretter sig. 
   * Efter der er kørt node.server.js i consolen så kan localhost:3002 skrives i postman eller føges vi linket*/
  document.addEventListener("DOMContentLoaded", function() {

    let apiButton = document.getElementById("deleteBtn");
     apiButton.addEventListener("click", function(){
         var xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
                 // Typical action to be performed when the document is ready:
                 alert(xhttp.responseText);
             }
         };
         xhttp.open("GET", "http://localhost:3002", true);
         xhttp.send();
     });
   });