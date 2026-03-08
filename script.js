// Portfolio Website JavaScript
// Author: Jiregna Dereje
// Description: Interactive portfolio website with smooth animations, dark mode, and dynamic content

// DOM Elements
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const scrollToTopBtn = document.getElementById('scroll-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Project Data - Now loaded from HTML data attribute
let projectsData = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

/**
 * Initialize all website functionality
 */
function initializeWebsite() {
    // Hide preloader after page loads
    hidePreloader();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize typewriter effect
    initializeTypewriter();
    
    // Initialize project filtering
    initializeProjectFiltering();
    
    // Initialize skill bars animation
    initializeSkillBars();
    
    // Initialize contact form
    initializeContactForm();
    
    // Initialize intersection observer for animations
    initializeIntersectionObserver();
    
    // Load projects from HTML data
    loadProjectsFromHTML();
    
    // Fallback: ensure projects are visible after a short delay
    setTimeout(() => {
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length > 0) {
            console.log('Fallback: Ensuring all projects are visible');
            filterProjects('all');
        }
    }, 1000);
    
    // Set initial theme
    setInitialTheme();
}

/**
 * Hide preloader with smooth transition
 */
function hidePreloader() {
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

/**
 * Initialize theme toggle functionality
 */
function initializeThemeToggle() {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        
        // Update theme toggle icon
        const icon = this.querySelector('i');
        icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });
}

/**
 * Set initial theme from localStorage
 */
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.dataset.theme = savedTheme;
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

/**
 * Initialize scroll effects
 */
function initializeScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            if (document.documentElement.dataset.theme === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.98)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.documentElement.dataset.theme === 'dark') {
                navbar.style.background = 'rgba(26, 32, 44, 0.95)';
            }
        }
    });

    // Scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Initialize typewriter effect for home title
 */
function initializeTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
}

/**
 * Initialize project filtering functionality
 */
function initializeProjectFiltering() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            const filter = this.dataset.filter;
            filterProjects(filter);
        });
    });
}

/**
 * Filter projects based on category
 */
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    console.log('Filtering projects by category:', category, 'Found cards:', projectCards.length);
    
    projectCards.forEach((card, index) => {
        const projectCategory = card.dataset.category;
        console.log(`Card ${index}: category=${projectCategory}, should show=${category === 'all' || projectCategory === category}`);
        
        if (category === 'all' || projectCategory === category) {
            card.style.display = 'block';
            // Add animation delay for staggered effect
            setTimeout(() => {
                card.classList.add('animate');
            }, 100);
        } else {
            card.classList.remove('animate');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

/**
 * Load projects from HTML data attribute
 */
function loadProjectsFromHTML() {
    const projectsContainer = document.getElementById('projects-grid');
    const projectsDataString = projectsContainer.dataset.projects;
    
    console.log('Projects data string length:', projectsDataString ? projectsDataString.length : 'null');
    
    if (projectsDataString) {
        try {
            projectsData = JSON.parse(projectsDataString);
            console.log('Parsed projects data:', projectsData);
            loadProjects();
        } catch (error) {
            console.error('Error parsing projects data:', error);
            console.log('Raw data:', projectsDataString);
        }
    } else {
        console.error('No projects data found in HTML');
    }
}

/**
 * Load projects dynamically
 */
function loadProjects() {
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsGrid.appendChild(projectCard);
    });
    
    // Ensure "All" filter is active and shows all projects
    filterProjects('all');
    console.log('Projects loaded:', projectsData.length);
}

/**
 * Create a project card element
 */
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.category = project.category;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none;">
                <i class="fas fa-image"></i>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Initialize skill bars animation
 */
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.dataset.width;

                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
                
                observer.unobserve(skillBar);
            }
        });
    };
    
    const skillObserver = new IntersectionObserver(animateSkillBars, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

/**
 * Initialize contact form functionality
 */
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validate form
        if (validateForm(name, email, subject, message)) {
            // Simulate form submission
            showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
        }
    });
}

/**
 * Validate contact form
 */
function validateForm(name, email, subject, message) {
    const errors = [];
    
    if (!name.trim()) {
        errors.push('Name is required');
    }
    
    if (!email.trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!subject.trim()) {
        errors.push('Subject is required');
    }
    
    if (!message.trim()) {
        errors.push('Message is required');
    }
    
    if (errors.length > 0) {
        showFormMessage(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show form message
 */
function showFormMessage(message, type) {
    formMessage.innerHTML = message;
    formMessage.className = `form-message ${type} show`;
    
    setTimeout(() => {
        formMessage.classList.remove('show');
    }, 5000);
}

/**
 * Initialize intersection observer for scroll animations
 */
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.section-title, .about-content, .skill-item, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility function to throttle function calls
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize scroll events with throttling
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add smooth hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-item, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // Enter key activates focused buttons
    if (e.key === 'Enter' && document.activeElement.classList.contains('filter-btn')) {
        document.activeElement.click();
    }
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Add error handling for failed image loads
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder?.classList?.contains('image-placeholder')) {
                placeholder.style.display = 'flex';
            }
        });
    });
});

// Console welcome message
console.log(`
🚀 Portfolio Website Loaded Successfully!

Built with:
- HTML5
- CSS3 (with CSS Grid & Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

Features:
✅ Responsive Design
✅ Dark/Light Mode Toggle
✅ Smooth Animations
✅ Dynamic Project Loading
✅ Form Validation
✅ Accessibility Features
✅ Performance Optimized

Developed by: Jiregna Dereje
`);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        isValidEmail,
        debounce,
        throttle
    };
}


