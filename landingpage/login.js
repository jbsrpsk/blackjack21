document.addEventListener("DOMContentLoaded", function() {
    const usernameEl = document.getElementById("username");
    const confirmEl = document.getElementById("confirmBtn");

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        if(usernameEl.value === ""){
            alert("Enter your username before continuing.")
        }
        else{
            const username = usernameEl.value;
            console.log("Submitted username:", username);
            usernameEl.value = ""
            
            var age = prompt("Enter your age in numbers")
            if(age>18){
                window.location.href = '../mainpage/index.html';
            }
            else{
                alert("Sorry Minimum age is 18")
                window.location.href = "https://www.agco.ca/eligibility"
            }
        }
      
    });
    
});
