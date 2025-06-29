function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value  
    }
    emailjs.send("service_riodep5","template_n48rkyl",parms).then(alert("Email sent successfully!"))

}
