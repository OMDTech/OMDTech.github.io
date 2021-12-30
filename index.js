const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });
});
hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.getElementById("send").addEventListener(
    "submit",
    (event) => {
        event.preventDefault();
        console.log("event");
        const subject = event.target.subject.value;
        const name = event.target.name.value;
        const message = event.target.message.value;

        window.open(
            `mailto:abodiidak@gmail.com?subject=${subject}&body=${name},%0D%0A${message}`
        );
    },
    false
);