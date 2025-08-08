emailjs.init('eaGmNXr0AYlq8O4-b')
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm('service_hg5fb64', 'template_xj0l41c', this).then(() => {
        alert('Eamil Sent!');
        this.reset();
    }, (error) => {
        alert('Send failed:' + error.text);
    });
});