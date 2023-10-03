let display = 1;
function menu() {
   let menu = document.getElementById("respMenu");
   if (display % 2 != 0) { menu.style.display = "block"; }
   else {
      menu.style.display = "none";
   }
   display++;
}

function sendEmail() {
    console.log("hello");
    
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("email").value;
    if(firstname !== "" && lastname !== "" && email !== ""){
    var body = "First Name = "+firstname+" <br> Last Name = "+lastname+" <br> Email= "+email+"<br> Subject = "+subject+"<br> Message = "+message;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "moundekarpallavi7@gmail.com",
        Password: "A37846678F7D759F4C920394CF1346ABDFCB",
        To: 'moundekarpallavi7@gmail.com',
        From: 'moundekarpallavi7@gmail.com',
        Subject: "Portfolio Contact Details ",
        Body: body
    }).then(
            message => alert(message)
    );
   }
}