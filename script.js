document.addEventListener('DOMContentLoaded', function () {
    // 1. Load Navbar HTML (fix path!)
    fetch('/navbar/navbar.html') // leading slash = root-relative path
        .then(res => {
            if (!res.ok) throw new Error('Navbar failed to load');
            return res.text();
        })
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Attach toggle after load
            const toggleBtn = document.querySelector('.custom-menu-toggle');
            const navLinks = document.querySelector('.custom-nav-links');

            if (toggleBtn && navLinks) {
                toggleBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        })
        .catch(err => console.error('Error loading navbar:', err));

    // Load footer
    fetch('/footer/footer.html')
        .then(res => {
            if (!res.ok) throw new Error('Footer failed to load');
            return res.text();
        })
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.error('Error loading footer:', err));


    // 3. Add to cart functionality
    // Make sure the selectors match your HTML
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Adjust selectors inside event card accordingly
            const eventCard = this.closest('.event-card');
            const eventTitle = eventCard ? eventCard.querySelector('strong')?.textContent || "this event" : "this event";
            alert(`Added "${eventTitle}" to your cart!`);
        });
    });

    // 4. Sign up button functionality
    const signupButton = document.querySelector('.sign-up'); // you had `.signup-btn` but your HTML uses `sign-up`
    if (signupButton) {
        signupButton.addEventListener('click', function () {
            alert('Redirecting to sign up page...');
        });
    }
});
