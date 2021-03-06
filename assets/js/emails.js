/** Code inspired by Code Institute class and EmailsJS website */

function sendMail(contactForm) {
    emailjs.send("service_7qovzsn","BoliviAround", {
        "from_name": contactForm.name.value,
        "from_surname": contactForm.surname.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}