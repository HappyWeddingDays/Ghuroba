// Language management
        let currentLanguage = 'en';
        const languageData = {
            en: {
                flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMDAzOWE3Ii8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjZmZmIi8+PC9zdmc+",
                code: 'EN'
            },
            id: {
                flag: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCAzMCI+PHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjY2UwMDAwIi8+PC9zdmc+",
                code: 'ID'
            }
        };

        // Project data with translations
        const projects = {
            1: {
                title: {
                    en: "CodeHub Platform",
                    id: "Platform CodeHub"
                },
                description: {
                    en: "A collaborative coding platform with real-time editing and project management features. This project was designed to help development teams work together more efficiently with features like live code sharing, version control integration, and project tracking.",
                    id: "Platform coding kolaboratif dengan fitur penyuntingan waktu nyata dan manajemen proyek. Proyek ini dirancang untuk membantu tim pengembangan bekerja sama lebih efisien dengan fitur seperti berbagi kode langsung, integrasi kontrol versi, dan pelacakan proyek."
                },
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
                liveLink: "#",
                codeLink: "#"
            },
            2: {
                title: {
                    en: "EcoStore",
                    id: "Toko Eco"
                },
                description: {
                    en: "An e-commerce platform for sustainable products with advanced filtering and payment integration. The platform features a responsive design, secure checkout process, and admin dashboard for inventory management.",
                    id: "Platform e-niaga untuk produk berkelanjutan dengan penyaringan lanjutan dan integrasi pembayaran. Platform ini menampilkan desain responsif, proses checkout yang aman, dan dasbor admin untuk manajemen inventaris."
                },
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                technologies: ["Vue.js", "Laravel", "MySQL", "Stripe API", "Redis"],
                liveLink: "#",
                codeLink: "#"
            },
            3: {
                title: {
                    en: "Creative Portfolio",
                    id: "Portofolio Kreatif"
                },
                description: {
                    en: "A visually stunning portfolio website for a graphic designer with smooth animations and interactive elements. The design focuses on showcasing creative work in an engaging way while maintaining excellent performance.",
                    id: "Website portofolio yang menakjubkan secara visual untuk desainer grafis dengan animasi halus dan elemen interaktif. Desain ini berfokus pada menampilkan karya kreatif dengan cara yang menarik sambil mempertahankan kinerja yang sangat baik."
                },
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
                technologies: ["HTML/CSS", "JavaScript", "GSAP", "Three.js", "WebGL"],
                liveLink: "#",
                codeLink: "#"
            },
            4: {
                title: {
                    en: "Corporate Dashboard",
                    id: "Dasbor Perusahaan"
                },
                description: {
                    en: "A comprehensive business intelligence dashboard with data visualization and reporting capabilities. This application helps businesses track KPIs, generate reports, and make data-driven decisions with interactive charts and real-time data.",
                    id: "Dasbor intelijen bisnis yang komprehensif dengan kemampuan visualisasi data dan pelaporan. Aplikasi ini membantu bisnis melacak KPI, menghasilkan laporan, dan membuat keputusan berbasis data dengan bagan interaktif dan data waktu nyata."
                },
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
                technologies: ["React", "D3.js", "Firebase", "Material-UI", "Chart.js"],
                liveLink: "#",
                codeLink: "#"
            }
        };

        // Function to switch language
        function switchLanguage() {
            currentLanguage = currentLanguage === 'en' ? 'id' : 'en';
            updateLanguageDisplay();
            updateContent();
            // Save preference to localStorage
            localStorage.setItem('preferredLanguage', currentLanguage);
        }

        // Update language switcher display
        function updateLanguageDisplay() {
            const flagIcon = document.getElementById('flagIcon');
            const languageText = document.getElementById('languageText');

            flagIcon.src = languageData[currentLanguage].flag;
            languageText.textContent = languageData[currentLanguage].code;
        }

        // Update all content based on current language
        function updateContent() {
            // Update all elements with data attributes
            document.querySelectorAll('[data-en]').forEach(element => {
                const key = element.getAttribute(`data-${currentLanguage}`);
                if (key) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = key;
                    } else {
                        element.textContent = key;
                    }
                }
            });

            // Update modal if open
            const modal = document.getElementById('projectModal');
            if (modal.style.display === 'flex') {
                const projectId = modal.getAttribute('data-current-project');
                if (projectId) {
                    updateModalContent(projectId);
                }
            }
        }

        // Update modal content with current language
        function updateModalContent(projectId) {
            const project = projects[projectId];
            if (!project) return;

            const modalBody = document.querySelector('.modal-body');
            modalBody.innerHTML = `
                <div class="modal-img">
                    <img src="${project.image}" alt="${project.title[currentLanguage]}">
                </div>
                <div class="modal-info">
                    <h3>${project.title[currentLanguage]}</h3>
                    <p>${project.description[currentLanguage]}</p>
                    <div class="modal-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="modal-links">
                        <a href="${project.liveLink}" class="btn" target="_blank">${currentLanguage === 'en' ? 'Live Demo' : 'Demo Langsung'}</a>
                        <a href="${project.codeLink}" class="btn btn-outline" target="_blank">${currentLanguage === 'en' ? 'View Code' : 'Lihat Kode'}</a>
                    </div>
                </div>
            `;
        }

        // Initialize language from localStorage or default to English
        function initializeLanguage() {
            const savedLanguage = localStorage.getItem('preferredLanguage');
            if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
                currentLanguage = savedLanguage;
            }
            updateLanguageDisplay();
            updateContent();
        }

        // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Language switcher event
        document.getElementById('languageSwitcher').addEventListener('click', switchLanguage);

        // Project Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Project Modal
        const modal = document.getElementById('projectModal');
        const modalClose = document.querySelector('.modal-close');
        const viewProjectButtons = document.querySelectorAll('.view-project');

        // Open modal when view project button is clicked
        viewProjectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectId = button.getAttribute('data-id');
                modal.setAttribute('data-current-project', projectId);
                updateModalContent(projectId);
                modal.style.display = 'flex';
            });
        });

        // Close modal
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // In a real application, you would send the form data to a server
            // For this demo, we'll just show an alert
            const message = currentLanguage === 'en'
                ? 'Thank you for your message! I will get back to you soon.'
                : 'Terima kasih atas pesan Anda! Saya akan membalas segera.';
            alert(message);
            contactForm.reset();
        });

        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            initializeLanguage();
        });
