// Select all containers with class 'container1'
let containers = document.querySelectorAll('.container1');

containers.forEach(container => {
    // Target the 'next' and 'prev' buttons and 'slide' inside each container
    let next = container.querySelector('.next');
    let prev = container.querySelector('.prev');
    let slide = container.querySelector('.slide');

    if (next && prev && slide) {
        // Add event listener for the 'next' button
        next.addEventListener('click', function() {
            let items = slide.querySelectorAll('.item');
            if (items.length > 0) {
                // Move the first item to the end of the slide
                slide.appendChild(items[0]);
            }
        });

        // Add event listener for the 'prev' button
        prev.addEventListener('click', function() {
            let items = slide.querySelectorAll('.item');
            if (items.length > 0) {
                // Move the last item to the beginning of the slide
                slide.prepend(items[items.length - 1]);
            }
        });
    }
});





const carouselTrack = document.querySelector('.carousel-track');
const carouselSlides = Array.from(carouselTrack.children);
const nextArrow = document.querySelector('.carousel-next');
const prevArrow = document.querySelector('.carousel-prev');
let currentSlideIndex = 0; // Track the current slide

// Function to update the track position based on the current index
const updateCarouselPosition = () => {
    const slideWidth = carouselSlides[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
};

// Move to the next slide
nextArrow.addEventListener('click', () => {
    if (currentSlideIndex < carouselSlides.length - 1) {
        currentSlideIndex++;
    } else {
        currentSlideIndex = 0; // Loop back to the first slide
    }
    updateCarouselPosition();
});

// Move to the previous slide
prevArrow.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
    } else {
        currentSlideIndex = carouselSlides.length - 1; // Loop back to the last slide
    }
    updateCarouselPosition();
});




document.addEventListener('DOMContentLoaded', () => {
    const slideimage = document.querySelector('.slide-image'); // Select the first item div
    const carouselcontainer = document.querySelector('.carousel-container'); // Select the container1 div
  
    if (slideimage && carouselcontainer) {
        const itemHeight = slideimage.offsetHeight; // Get the height of the item div
        const marginTopValue = `calc(10vh + ${itemHeight}px)`; // Calculate the margin top
        carouselcontainer.style.marginTop = marginTopValue; // Apply the margin top to container1
    }
  });
  





 