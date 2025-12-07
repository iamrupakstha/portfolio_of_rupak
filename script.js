 // Initialize AOS animations
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Typed.js initialization for typing effect
        const typed = new Typed('.multiple-text', {
            strings: ['Full Stack Developer', 'Web Designer', 'IT Instructor', 'Content Creator'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        // Simplified JavaScript for header functionality
        const menuBtn = document.getElementById('menu');
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = menuBtn.querySelector('i');
        const allLinks = document.querySelectorAll('.nav-links a');
        const backToTop = document.getElementById('backToTop');

        // Mobile menu toggle
        menuBtn.onclick = () => {
            navLinks.classList.toggle('active');
            menuIcon.classList.toggle('fa-bars');
            menuIcon.classList.toggle('fa-times');
        };

        // Close menu when clicking links
        allLinks.forEach(link => {
            link.onclick = () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuIcon.classList = 'fa-solid fa-bars';
                }
            };
        });

        // Smooth scrolling
        allLinks.forEach(anchor => {
            anchor.onclick = (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            };
        });

        // Active tab on scroll
        function setActiveTab() {
            const sections = document.querySelectorAll('section');
            const links = document.querySelectorAll('.nav-links a');
            let activeId = '';
            
            sections.forEach(section => {
                const top = section.offsetTop - 100;
                const height = section.clientHeight;
                if (window.scrollY >= top && window.scrollY < top + height) {
                    activeId = section.id;
                }
            });
            
            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
            
            if (!activeId && window.scrollY < 100) {
                links[0].classList.add('active');
            }
        }

        // Back to top button functionality
        function toggleBackToTop() {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }

        backToTop.onclick = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        window.onscroll = () => {
            setActiveTab();
            toggleBackToTop();
        };

        document.addEventListener('DOMContentLoaded', setActiveTab);

        // Contact form submission
        document.getElementById('contactForm').onsubmit = (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset();
        };

        // Newsletter form submission
        document.querySelector('.newsletter-form').onsubmit = (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input').value;
            alert(`Thank you for subscribing with email: ${email}`);
            e.target.reset();
        };

        // Footer smooth scrolling
        document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
            anchor.onclick = (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            };
        });

        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => observer.observe(bar));