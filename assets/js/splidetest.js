document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
          perPage    : 1,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } );