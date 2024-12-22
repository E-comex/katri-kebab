document.addEventListener('DOMContentLoaded', function() {
    // Get navbar elements
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Close navbar when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbarCollapse.contains(event.target) || 
                            document.querySelector('.navbar-toggler').contains(event.target);
        
        if (!isClickInside && navbarCollapse.classList.contains('show')) {
            bsCollapse.hide();
        }
    });
});
 