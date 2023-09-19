  function validateForm() {
    var nameInput = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  
    if (namePattern.test(nameInput)) {
        console.log("Name Valid")

    } else {
        console.log("Name Invalid")
    }

    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailPattern.test(emailInput)) {
        console.log("Email Valid")
    } else {
        console.log("Email Invalid")
        
    }

    }
