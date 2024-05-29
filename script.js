document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Here you can add your code to send the form data to your server
    event.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        { element: document.getElementById('hero-title'), text: 'John Doe - Indie Game Developer' },
        { element: document.getElementById('hero-message'), text: 'Creating Engaging and Interactive Experiences' }
    ];

    texts.forEach((item) => {
        item.element.innerHTML = ''; // Clear the text initially
        typeEffect(item.element, item.text);
    });

    function typeEffect(element, text, speed = 100) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            }
        }
        typing();
    }
});









