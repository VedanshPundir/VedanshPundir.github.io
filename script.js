//index.js

const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
    const hamIcon = this.querySelector('.hamburger-icon'); 
    const crossIcon = this.querySelector('.cross-icon'); 
    if (hamIcon.style.display === "none") { 
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    } 
    else { 
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    } 
});

document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.querySelector(".greet-heading");
    const nameHeading = document.querySelector(".my-heading");
    
    // Function to split text into individual span elements
    function createLetterSpans(element) {
        const text = element.textContent;
        element.textContent = ""; // Clear the text
        text.split("").forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.classList.add("letter");
            span.style.transitionDelay = `${index * 0.1}s`;
            element.appendChild(span);
        });
    }

    // Split the text into letters for both elements
    createLetterSpans(greeting);
    createLetterSpans(nameHeading);

    // Add the visible class after a delay to trigger the animation
    setTimeout(() => {
        document.querySelectorAll(".letter").forEach(letter => {
            letter.classList.add("visible");
        });
    }, 500); // Adjust this delay if you want the effect to start sooner or later
});

// Function to add 'show-card' class when the portfolio cards come into view
const portfolioCards = document.querySelectorAll('.port-card');

const showCardsOnScroll = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-card');
                observer.unobserve(entry.target); // Stop observing once the card is shown
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    portfolioCards.forEach(card => {
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', showCardsOnScroll);


// Function to handle the scroll-triggered animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');

    const observerOptions = {
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    };

    // Intersection Observer to show "About Me" section when it's in view
    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutText.classList.add('show');
                aboutImage.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, observerOptions);

    aboutObserver.observe(aboutSection);
});


// Smooth scroll to section while accounting for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        const headerOffset = 80; // Adjust based on header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// script.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Change the value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

let scrollTimeout;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    clearTimeout(scrollTimeout);
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Reset the header style after 5 seconds of inactivity
    scrollTimeout = setTimeout(() => {
        header.classList.remove('scrolled');
    }, 5000); // Adjust the timeout as needed
});



document.addEventListener('DOMContentLoaded', function () {
    const fadeLeftElements = document.querySelectorAll('.fade-left');
    const fadeRightElements = document.querySelectorAll('.fade-right');

    function checkScroll() {
        fadeLeftElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });

        fadeRightElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && !element.classList.contains('visible')) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Trigger check on page load as well
});


if (rect.top < window.innerHeight * 0.75) {
    // Trigger animation when element is 75% visible
}


document.addEventListener("DOMContentLoaded", function() {
    const educationSection = document.querySelector('.education-details');
    const skillsSection = document.querySelector('.technical-skills');

    // Add the 'visible' class after a short delay for the transition effect
    setTimeout(() => {
        educationSection.classList.add('visible');
        skillsSection.classList.add('visible');
    }, 1000); // Delay in milliseconds (1000ms = 1s)
});