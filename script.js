/**
 * 1. CONFIGURATION & DATA
 */
const coursework = {
    "DSA": {
        title: "📘 Data Structures and Algorithms",
        topics: ["Introduction to DS", "Arrays & Strings", "Linked Lists", "Stacks & Queues", "Recursion", "Searching & Sorting", "Trees (Binary, BST, AVL, Heap)", "Graphs (BFS, DFS, Shortest Path)", "Hashing", "Greedy Algorithms", "Divide and Conquer", "Dynamic Programming", "Backtracking", "Complexity Analysis"]
    },
    "DBMS": {
        title: "🗄️ Database Management System",
        topics: ["Architecture", "ER & Relational Model", "Relational Algebra", "SQL (DDL, DML, DCL, TCL)", "Constraints & Keys", "Normalization", "Transactions & ACID", "Concurrency Control", "Deadlocks", "Indexing", "Query Optimization", "Security & Recovery"]
    },
    "OOPS": {
        title: "🧠 Object-Oriented Programming",
        topics: ["Classes and Objects", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Constructors & Destructors", "Access Specifiers", "Interfaces", "Abstract Classes", "Overloading & Overriding", "Exception Handling", "Memory Management", "SOLID Principles"]
    },
    "OS": {
        title: "💻 Operating System",
        topics: ["Process Management", "Threads", "Scheduling Algorithms", "IPC & Synchronization", "Deadlocks", "Memory Management", "Paging & Segmentation", "Virtual Memory", "Page Replacement", "File System", "Disk Scheduling"]
    },
    "ML": {
        title: "🤖 Machine Learning",
        topics: ["Data Preprocessing", "Feature Engineering", "Supervised Learning", "Unsupervised Learning", "Regression & Classification", "Clustering", "Dimensionality Reduction", "Evaluation Metrics", "Bias-Variance Tradeoff", "Neural Networks", "Python Libraries (NumPy, Scikit-learn)"]
    },
    "CN": {
        title: "🌐 Computer Networks",
        topics: ["Network Topologies", "Transmission Media", "OSI & TCP/IP Models", "Data Link Layer", "Network Layer", "Transport Layer", "Application Layer", "IP Addressing & Subnetting", "Routing Algorithms", "Switching Techniques", "Network Security"]
    }
};

/**
 * 2. CORE FUNCTIONALITY (Wait for DOM)
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- MODAL LOGIC (Event Delegation) ---
    const modal = document.getElementById("skillModal");
    const modalContent = document.getElementById("modalContent");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.querySelector(".close-modal");

    // Unified Click Logic for Course Concepts
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.clickable');
        if (btn) {
            const key = btn.getAttribute('data-skill');
            const data = coursework[key];
            if (data) {
                // Apply dynamic color theme based on the skill key
                modalContent.className = 'modal-content theme-' + key.toLowerCase();
                
                // Inject content (Removed the bullet points per request)
                modalBody.innerHTML = `
                    <h2 class="modal-title">${data.title}</h2>
                    <ul class="modal-list">
                        ${data.topics.map(t => `<li>${t}</li>`).join('')} 
                    </ul>`;
                
                // Show modal with Flex centering logic
                modal.style.display = "flex"; 
                document.body.style.overflow = "hidden"; // Stop background scroll
            }
        }
    });

    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.onclick = closeModal;
    window.onclick = (e) => { if (e.target == modal) closeModal(); };

    // --- MOBILE MENU (HAMBURGER) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active'); 
            navMenu.classList.toggle('active');   
        });

        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // --- TYPEWRITER EFFECT ---
    const typeText = document.querySelector('.typing-effect');
    const words = ["CS Student", "Developer", "Problem Solver"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!typeText) return; 
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typeText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; 
        }
        setTimeout(type, typeSpeed);
    }
    type(); // Start the typing effect

    // --- CONTACT FORM HANDLING ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            fetch("https://formsubmit.co/ajax/gurusaireddy1234@gmail.com", {
                method: "POST",
                body: new FormData(this)
            })
            .then(response => response.json())
            .then(data => {
                alert('Message Sent Successfully!');
                contactForm.reset(); 
            })
            .catch(error => {
                alert('Something went wrong. Please try again.');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});

/**
 * 3. GLOBAL SCROLL HANDLERS (Navbar & Active Links)
 */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar background transition logic
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(36, 10, 44, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(36, 10, 44, 0.85)';
        navbar.style.boxShadow = 'none';
    }

    // Active nav link highlighting logic
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});