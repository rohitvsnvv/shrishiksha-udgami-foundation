// ---------- MOBILE MENU TOGGLE ----------
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ---------- CONTACT FORM ----------
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from refreshing page

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    // Basic Validation
    if (!name || !email || !message) {
        formMessage.textContent = "❌ Please fill out all fields.";
        formMessage.style.color = "red";
        return;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "❌ Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    // Success message (Here you can add AJAX to send data to Salesforce/Webhook)
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
});
