document.addEventListener('DOMContentLoaded', function () {
    
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    
    const searchForm = document.querySelector('.searchbar');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const query = searchForm.querySelector('input[type="text"]').value.trim();
            if (query) {
                alert('You searched for: ' + query);
                searchForm.requestFullscreen()
            }
        });
    }
});