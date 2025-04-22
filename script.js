// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('active');
});

// Close mobile nav when clicking on links
const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMobile.classList.remove('active');
    });
});

// Header hide on scroll
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scrolling down
        header.classList.add('header-scrolled');
    } else {
        // Scrolling up
        header.classList.remove('header-scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle current question
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
        
        // Close other questions
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question && otherQuestion.classList.contains('active')) {
                otherQuestion.classList.remove('active');
                otherQuestion.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would normally send the data to your server
    // For this demo, we'll just show a success message
    
    const formData = new FormData(contactForm);
    let formValues = {};
    
    for (let [key, value] of formData.entries()) {
        formValues[key] = value;
    }
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    contactForm.innerHTML = `
        <div style="text-align: center; padding: 2rem 0;">
            <h3 style="color: var(--primary); margin-bottom: 1rem;">Thank You!</h3>
            <p style="margin-bottom: 2rem;">Your information has been submitted successfully. One of our marketing specialists will contact you within 24 hours to discuss your custom advertising campaign.</p>
            <p style="font-weight: 600; color: var(--dark);">We look forward to helping your business grow!</p>
        </div>
    `;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
// Loading Screen Logic
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    // Add a small delay to ensure the animation is visible briefly
    // and prevent jarring flash on very fast loads.
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 100); // 100ms delay
  }
});