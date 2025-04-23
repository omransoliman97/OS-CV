document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('light-mode', savedTheme === 'light');
        updateThemeIcon();
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeIcon();
        // Save theme preference
        localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // Section navigation
    const navLinks = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section-container');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(sectionId);
        const targetLink = document.querySelector(`[href="#${sectionId}"]`);

        if (targetSection && targetLink) {
            targetSection.classList.add('active');
            targetLink.classList.add('active');
        }
    }

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
            history.pushState(null, '', `#${targetId}`);
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1) || 'profile';
        showSection(hash);
    });

    // Initialize skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.classList.contains('skills-section')) {
                    animateSkillBars();
                }
            }
        });
    }, observerOptions);

    // Observe sections for animation
    document.querySelectorAll('.bio-section, .skills-section, .experience-section, .diplomas-section').forEach(section => {
        observer.observe(section);
    });

    // Handle initial page load
    const initialHash = window.location.hash.substring(1) || 'profile';
    showSection(initialHash);

    // Center the active nav item
    function centerActiveNavItem() {
        const activeLink = document.querySelector('.nav-item.active');
        if (activeLink) {
            const navLinks = document.querySelector('.nav-links');
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = navLinks.getBoundingClientRect();
            const offset = linkRect.top - navRect.top - (navRect.height - linkRect.height) / 2;
            navLinks.scrollTop = offset;
        }
    }

    // Call centerActiveNavItem when switching sections
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(centerActiveNavItem, 100);
        });
    });

    // Initial center
    centerActiveNavItem();
}); 