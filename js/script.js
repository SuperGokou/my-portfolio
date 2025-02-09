function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_id", "template_id", params)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("message").value = '';
        }, error => {
            console.error('FAILED...', error);
            alert("Failed to send message.");
        });
}
