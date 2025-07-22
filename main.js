// main.js - Portfolio Website Animations and Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Preloader Animation
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Initialize Particles.js for animated background
    if (document.querySelector('.particles-background')) {
        particlesJS('particles-background', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#5865F2", "#00A2FF", "#2ECC71", "#F8F9FA"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#5865F2",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Navigation Scroll Behavior
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-toggle').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const hamburger = document.querySelector('.hamburger');
    
    navToggle.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Hero Typing Animation
    const terminalCommand = document.querySelector('.terminal-content .command');
    const terminalOutputs = document.querySelectorAll('.terminal-content .output');
    
    if (terminalCommand && terminalOutputs) {
        setTimeout(() => {
            typeWriter(terminalCommand, 'npm init portfolio', 50, () => {
                terminalOutputs.forEach((output, index) => {
                    setTimeout(() => {
                        typeWriter(output, output.textContent, 20);
                    }, 800 * (index + 1));
                });
            });
        }, 1500);
        
        function typeWriter(element, text, speed, callback) {
            let i = 0;
            element.textContent = '';
            
            function typing() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                } else if (callback) {
                    callback();
                }
            }
            
            typing();
        }
    }

    // Animate Skill Progress Bars
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    function animateProgressBars() {
        skillProgressBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = `${value}%`;
                bar.style.transition = `width 1.5s ease-out`;
            }, 100);
        });
    }
    
    // Initialize GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animation
    gsap.from('.hero-title span', {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-description', {
        scrollTrigger: {
            trigger: '.hero-description',
            start: 'top 80%'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.hero-buttons', {
        scrollTrigger: {
            trigger: '.hero-buttons',
            start: 'top 80%'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: 'power2.out'
    });
    
    gsap.from('.platform-icons .icon', {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });
    
    // Skills Section Animation
    gsap.from('.skills-section .section-title, .skills-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.skill-category', {
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out',
        onComplete: animateProgressBars
    });
    
    // Projects Section Animation
    gsap.from('.projects-section .section-title, .projects-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.projects-filter', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.3
    });
    
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    // Contact Section Animation
    gsap.from('.contact-section .section-title, .contact-section .section-subtitle', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.info-card', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 60%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.3
    });
    
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    gsap.from(card, {
                        duration: 0.5,
                        y: 30,
                        opacity: 0,
                        ease: 'power2.out'
                    });
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Form Input Animation
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        input.addEventListener('focus', () => {
            label.classList.add('active');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
        
        // Check if there's already content (like on page refresh)
        if (input.value) {
            label.classList.add('active');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Tooltips for platform icons
    const platformIcons = document.querySelectorAll('.platform-icons .icon');
    
    platformIcons.forEach(icon => {
        const tooltipText = icon.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;
        icon.appendChild(tooltip);
        
        icon.addEventListener('mouseenter', () => {
            gsap.to(tooltip, {
                duration: 0.3,
                opacity: 1,
                y: -10,
                ease: 'power2.out'
            });
        });
        
        icon.addEventListener('mouseleave', () => {
            gsap.to(tooltip, {
                duration: 0.2,
                opacity: 0,
                y: 0,
                ease: 'power2.in'
            });
        });
    });
    
    // Floating navigation background change on scroll
    const floatingNav = document.querySelector('.floating-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            floatingNav.classList.add('scrolled');
        } else {
            floatingNav.classList.remove('scrolled');
        }
    });
});
