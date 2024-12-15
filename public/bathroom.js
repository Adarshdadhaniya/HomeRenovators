// Function to set the margin-top of the 'bathroommain' div based on the 'header' height
function setMarginTop() {
    // Get the 'header' and 'bathroommain' elements
    const header = document.querySelector('.header');
    const bathroomMain = document.querySelector('.bathroommain');
  
    // Ensure both elements exist
    if (header && bathroomMain) {
      // Get the height of the 'header' div
      const headerHeight = header.offsetHeight;
  
      // Set the margin-top of the 'bathroommain' div equal to the height of the 'header'
      bathroomMain.style.marginTop = `${headerHeight}px`;
    }
  }
  
  // Call the function on page load and whenever the window is resized
  window.addEventListener('load', setMarginTop);
  window.addEventListener('resize', setMarginTop);

  
// Select all containers with class 'container1'
let containers = document.querySelectorAll('.container1');

containers.forEach(container => {
    // Target the 'next' and 'prev' buttons and 'slide' inside each container
    let next = container.querySelector('.next');
    let prev = container.querySelector('.prev');
    let slide = container.querySelector('.slide');

    if (next && prev && slide) {
        // Function to update the positions of items
        const updatePositions = () => {
            let items = slide.querySelectorAll('.itemc');
            items.forEach((item, index) => {
                // Calculate the position dynamically
                item.style.left = `${index * 20}vw`;
                item.style.opacity = index < 4 ? '1' : '0'; // Show only the first 5 items
            });
        };

        // Initialize positions on page load
        updatePositions();

        // Add event listener for the 'next' button
        next.addEventListener('click', function () {
            let items = slide.querySelectorAll('.itemc');
            if (items.length > 0) {
                // Move the first item to the end of the slide
                slide.appendChild(items[0]);
                // Update positions
                updatePositions();
            }
        });

        // Add event listener for the 'prev' button
        prev.addEventListener('click', function () {
            let items = slide.querySelectorAll('.itemc');
            if (items.length > 0) {
                // Move the last item to the beginning of the slide
                slide.prepend(items[items.length - 1]);
                // Update positions
                updatePositions();
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    const totalSlides = slides.length;
    let currentIndex = 1; // Start from the second slide (to keep the first slide on the left)
    let clickCount = 0; // Track number of times "Next" is clicked
    let autoSlide; // For automatic sliding
    let autoSlideCount = 0; // Track number of automatic slides

    // Function to update carousel position
    const updateCarousel = () => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        const gap = 2 * window.innerWidth / 100; // Gap in percentage
        const offset = (window.innerWidth / 2) - (slideWidth / 2); // Center the middle slide
        const position = -(currentIndex * (slideWidth + gap)) + offset;
        carouselTrack.style.transform = `translateX(${position}px)`;
    };

    // Move to the next slide and append slides when needed
    const moveToNextSlide = () => {
        clickCount++;  // Increase click count
        currentIndex = (currentIndex + 1) % totalSlides; // Cycle through slides

        // When we reach the last slide, set the currentIndex to 1 (second slide)
        if (currentIndex === 0) {
            currentIndex = 1;
        }

        // Check for when to append slides
        if (clickCount === 2 || clickCount === 4) {
            appendSlide();
            clickCount = 0; // Reset after appending
        }

        updateCarousel();
    };

    // Append a slide to the end (after specified clicks)
    const appendSlide = () => {
        const firstSlide = slides[0]; // Get the first slide

        // Clone the first slide and append it after 2 or 4 clicks
        const clonedSlide = firstSlide.cloneNode(true);
        carouselTrack.appendChild(clonedSlide);  // Append the cloned slide

        // After appending, do a smooth transition without jerk
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            updateCarousel();
            setTimeout(() => {
                carouselTrack.style.transition = 'transform 0.5s ease-in-out';
            }, 20); // Set transition back to normal after a short delay
        }, 500); // After 0.5s wait, append the next slide
    };

    // Automatic sliding (continuously forward)
    const startAutoSlide = () => {
        autoSlide = setInterval(() => {
            moveToNextSlide();
            autoSlideCount++; // Increase the auto-slide counter
            if (autoSlideCount >= 12) {
                clearInterval(autoSlide); // Stop auto sliding after 12 cycles
            }
        }, 3000); // Automatic sliding every 3 seconds
    };

    // Stop auto sliding when manual navigation happens
    const stopAutoSlide = () => {
        clearInterval(autoSlide);
    };

    // Manual navigation (Next Button)
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        moveToNextSlide();
        startAutoSlide(); // Restart auto sliding after button press
    });

    // Manual navigation (Previous Button) - Not needed, but available if you need it
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        moveToNextSlide(); // Only move forward, no reverse functionality
        startAutoSlide(); // Restart auto sliding after button press
    });

    // Initial setup
    updateCarousel();
    startAutoSlide(); // Start the automatic sliding initially
});





  document.addEventListener('DOMContentLoaded', () => {
    // Loop through each item with the class "itemc"
    document.querySelectorAll('.itemc').forEach(item => {
        const description = item.querySelector('.description');
        const readMoreButton = item.querySelector('.read-more');
        const readLessButton = item.querySelector('.read-less'); // Select the Read Less button
  
        if (description && readMoreButton && readLessButton) {
            // Check if the content overflows its container
            if (description.scrollHeight > description.clientHeight) {
                // Show the Read More button initially
                readMoreButton.classList.add('showmore');
  
                // Click event for the Read More button
                readMoreButton.addEventListener('click', () => {
                    description.classList.add('expanded'); // Expand the description
                    item.classList.add('expanded1'); // Optional: for additional styling
                    readMoreButton.classList.remove('showmore');
                    readMoreButton.classList.add('showless'); // Hide Read More
                    readLessButton.classList.remove('showless');
                    readLessButton.classList.add('showmore'); // Show Read Less
                });
  
                // Click event for the Read Less button
                readLessButton.addEventListener('click', () => {
                    description.classList.remove('expanded'); // Collapse the description
                    item.classList.remove('expanded1'); // Optional: reset styling
                    readMoreButton.classList.remove('showless');
                    readMoreButton.classList.add('showmore'); // Show Read More
                    readLessButton.classList.remove('showmore');
                    readLessButton.classList.add('showless'); // Hide Read Less
                });
            }
        }
    });
  });
  






  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.slider-item');
  
    const handleScroll = () => {
        const triggerPoint = window.innerHeight / 1.5; // Adjust based on when you want animation
        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerPoint) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load in case of initial visible items
  });
  