// Simple JavaScript for minimal interactivity

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Navbar transparency effect on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
});

// Add animation classes when elements scroll into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.hero-section, .grid-item');

  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animations
window.addEventListener('load', () => {
  // Add initial styles for animation
  const elementsToAnimate = document.querySelectorAll('.hero-section, .grid-item');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  });

  // Trigger initial animation
  setTimeout(animateOnScroll, 300);
});

window.addEventListener('scroll', animateOnScroll);