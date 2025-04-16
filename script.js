// Tab functionality for weekly program content
function openWeek(evt, weekId) {
    // Hide all week content
    const weekContent = document.getElementsByClassName("week-content");
    for (let i = 0; i < weekContent.length; i++) {
        weekContent[i].classList.remove("active");
    }

    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected week content and mark the button as active
    document.getElementById(weekId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const firmName = document.getElementById('firmName').value;
            const firmSize = document.getElementById('firmSize').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !firmName || !firmSize) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your interest! We will contact you shortly with more information about the AI Training Bootcamp.');
            
            // Reset the form
            form.reset();
        });
    }
    
    // Mobile navigation toggle
    const mobileBreakpoint = 768;
    
    function adjustNavigation() {
        if (window.innerWidth <= mobileBreakpoint) {
            // Add mobile-specific adjustments if needed
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }
    
    // Run on page load
    adjustNavigation();
    
    // Run on window resize
    window.addEventListener('resize', adjustNavigation);
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchorLinks) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Elements to animate
    const animateElements = document.querySelectorAll('.goal-item, .benefit-card, .tool-category, .activity');
    
    // Add animation class when scrolled into view
    function checkAnimations() {
        animateElements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check animations on scroll
    window.addEventListener('scroll', checkAnimations);
    
    // Check animations on page load
    checkAnimations();
});
