const swiperHeafer = new Swiper('.swiper_hero', {


    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


const swiperRec = new Swiper('.swiper_recommended', {


    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next_recommended_movie',
        prevEl: '.swiper-button-prev_recommended_movie',
    },

});
const swiperMovies = new Swiper('.swiper_serial', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiper = new Swiper('.one-movie-slider', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    // Optional parameters
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const swiperAnimation = new Swiper('.swiper-animation', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesAction = new Swiper('.swiper-action', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesDrama = new Swiper('.swiper-drama', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesScary = new Swiper('.swiper-scary', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});
const swiperMoviesComedy = new Swiper('.swiper-comedy-movie', {
    breakpoints: {
        400: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },

        992: {
            slidesPerView: 'auto',
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 'auto',
            spaceBetween: 63,
        },
        1400: {
            slidesPerView: 'auto',
            spaceBetween: 30,
        },
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});