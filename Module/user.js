// Create a very simple class
class User {
    constructor(fullName, email, signUpPassword, age ){
        this.fullName = fullName;
        this.email = email;
        this.signUpPassword = signUpPassword;
        this.age = age
       
    }
}

//const joakim = new User("joakim", "jk", "123", "20");
const newUser = new User({
    "fullName": document.getElementById("fullName").Value,
    "email": document.getElementById("email").Value,
    "signUpPassword": document.getElementById("signUpPassword").Value,
    "age": document.getElementById("age").Value,

});

localStorage.setitem("newUser", JSON.stringify(newUser));

console.log(localStorage);


module.exports = User;



