// Wait for the DOM content to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // 1. Toggle mobile menu open/closed on hamburger click
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 2. Smoothly close the menu drawer whenever a user clicks any navigation link
    links.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // This is the magic line that stops the page from redirecting!

    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerText;
    
    // Change button state to show the user it's actively sending
    submitBtn.innerText = "SENDING... ⏳";
    submitBtn.style.opacity = "0.7";

    // sendForm arguments: ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    emailjs.sendForm('service_2qoxjjv', 'template_49148ys', this)
        .then(function() {
            // Success! Show your custom premium notification
            submitBtn.innerText = "MESSAGE SENT! 🔥";
            submitBtn.style.backgroundColor = "#00FF66"; // Neon Green flash
            submitBtn.style.color = "#000000";
            
            // Clear the form fields completely
            document.getElementById('contact-form').reset();

            // Reset the button look after 4 seconds
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.backgroundColor = "";
                submitBtn.style.color = "";
                submitBtn.style.opacity = "1";
            }, 4000);

        }, function(error) {
            // Error handling
            console.log('FAILED...', error);
            submitBtn.innerText = "ERROR! TRY AGAIN ❌";
            submitBtn.style.backgroundColor = "#FF3333";
            
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.backgroundColor = "";
                submitBtn.style.opacity = "1";
            }, 4000);
        });
});
// Smooth Scroll-Reveal Animation Engine
document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Keeps elements visible once animated
            }
        });
    }, {
        threshold: 0.15, // Triggers when 15% of the card is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((el) => observer.observe(el));
});
