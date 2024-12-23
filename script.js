document.addEventListener("DOMContentLoaded", function() {
    // Initialize any scripts after the document is fully loaded
    console.log("Document ready!");

    // Select all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
            const pageName = link.textContent.trim(); // Get the text of the link
            loadPageContent(pageName); // Load the content corresponding to the link
        });
    });

    // Function to simulate loading new page content
    function loadPageContent(pageName) {
        console.log(`Loading content for ${pageName}`);
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = `<section class="hero">
                                    <h1>${pageName}</h1>
                                    <p>This is the ${pageName} page. Content can be dynamically loaded here.</p>
                                    <button onclick="alert('Thank you for exploring the ${pageName} page!')">Click me!</button>
                                 </section>`;
    }

    // Example of form interaction (if you have a form)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            if (validateForm()) {
                console.log('Form is valid! Processing form...');
                // Process form (e.g., show message, save data)
                alert('Form submitted successfully!');
            } else {
                console.log('Form validation failed.');
                alert('Please check your input and try again.');
            }
        });
    }

    // Function to validate form input (if you have input elements)
    function validateForm() {
        const nameInput = document.querySelector('#name');
        if (nameInput && nameInput.value.length < 3) {
            console.log('Name input is too short.');
            return false; // Invalid input
        }
        return true; // Valid input
    }
});
