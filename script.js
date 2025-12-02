// 1. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if(hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active'); // Animates the burger icon (optional)
        navMenu.classList.toggle('active');   // Slides the menu in
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// 2. Typewriter Effect (CONSTANT SPEED)
const typeText = document.querySelector('.typing-effect');
const words = ["CS Student", "Developer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if(!typeText) return; // Guard clause
    
    const currentWord = words[wordIndex];
    
    // Typing Logic
    if(isDeleting) {
        typeText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // SPEED SETTINGS (Adjust these numbers to change speed)
    let typeSpeed = 100; // Typing speed (smaller = faster)

    if(isDeleting) {
        typeSpeed = 50; // Deleting speed (faster than typing)
    }

    // Logic for pauses
    if(!isDeleting && charIndex === currentWord.length) {
        // Pause at the end of the word
        typeSpeed = 2000; // 2 seconds pause
        isDeleting = true;
    } else if(isDeleting && charIndex === 0) {
        // Pause before starting the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // 0.5 seconds pause
    }

    // The critical fix: Only one timeout is set here
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// 3. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if(!navbar) return;
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(36, 10, 44, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(36, 10, 44, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// 4. Contact Form Handling (AJAX)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default page reload

        const formData = new FormData(this);
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;

        fetch("https://formsubmit.co/ajax/gurusaireddy1234@gmail.com", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message Sent Successfully!');
            contactForm.reset(); // Clear the form
        })
        .catch(error => {
            alert('Something went wrong. Please try again.');
            console.error('Error:', error);
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}