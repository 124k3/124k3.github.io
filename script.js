// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight current section in navigation bar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        const scrollPos = window.scrollY;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Simple form validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
        alert('Please fill in all fields.');
    } else {
        // You can add further logic here, like sending the form data to a server
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});
