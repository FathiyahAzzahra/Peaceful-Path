document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const articles = document.querySelectorAll('.article-item');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            
            // Loop through all articles and toggle visibility
            articles.forEach(article => {
                if (article.getAttribute('data-theme') === theme || theme === "all") {
                    article.style.display = 'block';  // Show matching articles
                } else {
                    article.style.display = 'none';  // Hide non-matching articles
                }
            });
        });
    });
});


// Initialize Swiper
new Swiper('.video-gallery-container', {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});



