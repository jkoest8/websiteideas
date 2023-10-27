document.addEventListener("DOMContentLoaded", function() {
    // Search Autocomplete
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', function() {
        // Simulated search data (replace with actual data if available)
        const searchData = ['Digital Library', 'New Materials', 'Ask A Librarian', 'Overdrive'];
        const value = searchInput.value.toLowerCase();
        
        if (value) {
            const suggestions = searchData.filter(data => data.toLowerCase().includes(value));
            // Display these suggestions to users (for instance, in a dropdown below the input)
            console.log(suggestions);
        }
    });

    // Carousel for Featured Resources (Simplified)
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    setInterval(function() {
        const images = carousel.querySelectorAll('img');
        images[currentIndex].style.display = 'none';
        
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        images[currentIndex].style.display = 'block';
    }, 3000); // Change the slide every 3 seconds

    // Light/Dark Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', function() {
        const body = document.body;
        
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }
    });
});
