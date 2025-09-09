//scripting

const navButtons = document.querySelectorAll('nav button');
const sections = document.querySelectorAll('section');

// show first section
const initialSection = document.getElementById('homePage');
const initialButton = document.querySelector('nav button[data-target="homePage"]');

if (initialSection && initialButton) {
    initialSection.style.display = 'block';

    requestAnimationFrame(() => {
        initialSection.classList.add('active');
        initialButton.classList.add('active-nav');
    });
}

// Function to switch sections
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return;

        // Update nav buttons
        navButtons.forEach(btn => btn.classList.remove('active-nav'));
        button.classList.add('active-nav');

        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });


        setTimeout(() => {
            sections.forEach(section => {
                section.style.display = 'none';
            });


            targetSection.style.display = 'block';
            requestAnimationFrame(() => {
                targetSection.classList.add('active');
            });
        }, 150);
    });
});