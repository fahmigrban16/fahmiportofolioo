document.addEventListener('DOMContentLoaded', function() {
    // Language switcher
    const langID = document.getElementById('lang-id');
    const langEN = document.getElementById('lang-en');
    const langIDElements = document.querySelectorAll('.lang-id');
    const langENElements = document.querySelectorAll('.lang-en');
    
    langID.addEventListener('click', function() {
        // Show Indonesian content
        langIDElements.forEach(el => el.style.display = 'block');
        langENElements.forEach(el => el.style.display = 'none');
        
        // Update active button
        langID.classList.add('active');
        langEN.classList.remove('active');
        
        // Set language to Indonesian
        document.documentElement.lang = 'id';
    });
    
    langEN.addEventListener('click', function() {
        // Show English content
        langIDElements.forEach(el => el.style.display = 'none');
        langENElements.forEach(el => el.style.display = 'block');
        
        // Update active button
        langEN.classList.add('active');
        langID.classList.remove('active');
        
        // Set language to English
        document.documentElement.lang = 'en';
    });
    
    // Navigation active state
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Show/hide scroll to top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission (prevent default for demo)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submission functionality would be implemented with a backend service.');
            this.reset();
        });
    }
    
    // Add animation to sections
    function animateSections() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });
    }
    
    animateSections();
});