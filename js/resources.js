// $(document).ready(function() {
//     let currentIndex = 0;
//     const videoCount = $('.video-item').length;
//     const itemWidth = $('.video-item').outerWidth(true);  // Include margin in item width
//     const visibleItems = Math.floor($('.video-gallery-slider').width() / itemWidth); // Number of items visible
//     const maxIndex = videoCount - visibleItems;

//     // Scroll to the next set of videos
//     $('.next-btn').click(function() {
//         if (currentIndex < maxIndex) {
//             currentIndex++;
//             $('.video-gallery').css('transform', `translateX(${-itemWidth * currentIndex}px)`);
//         }
//     });    

//     // Scroll to the previous set of videos
//     $('.prev-btn').click(function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             $('.video-gallery').css('transform', `translateX(${-itemWidth * currentIndex}px)`);
//         }
//     });

//     // Adjust the width of the video gallery container to fit all items
//     $('.video-gallery').css('width', `${itemWidth * videoCount}px`);
// });


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

