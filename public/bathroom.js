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





const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
let currentIndex = 0; // Track the current slide

// Function to update the track position based on the current index
const updateSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
};

// Move to the next slide
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateSlidePosition();
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop back to the last slide
    }
    updateSlidePosition();
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
  





 