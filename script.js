// DOM Variables
const form = document.getElementById("contact-form");


// JS Variables


// Function Definitions
function sendEmail(params) {
    event.preventDefault();
    let tempParams = {
        from_name: document.getElementById('fromName').value,
        reply_to: document.getElementById('fromEmail').value,
        message: document.getElementById('msg').value
    };

    emailjs.send('service_39i9t3z', 'template_ts0a6ib', tempParams)
        .then(function (res) {
            console.log("succes", res.status);
        });

    event.target.reset();

    location.assign(href = "./thanks.html");
}

// Event Listeners
form.addEventListener('submit', sendEmail);

// Function Calls
window.onload = function () {

    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector('.mobile-nav');



    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    })
}