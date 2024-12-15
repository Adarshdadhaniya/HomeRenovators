




document.addEventListener('DOMContentLoaded', () => {
  const faqAccordions = document.querySelectorAll('.faq1');
  const faqImages = document.querySelectorAll('.faqimage img');

  // Display the first image by default
  if (faqImages[0]) {
    faqImages[0].classList.add('visible');
  }

  faqAccordions.forEach((faqque, index) => {
    const questionWrapper = faqque.querySelector('.faqques');
    const answerWrapper = faqque.querySelector('.faqans');
    const plusIcon = faqque.querySelector(".plus-icon");

    questionWrapper.addEventListener('click', () => {
      // Close all other FAQs and hide all images
      faqAccordions.forEach((otherFaq, otherIndex) => {
        if (otherFaq !== faqque) {
          otherFaq.querySelector('.faqans').classList.remove('active');
          otherFaq.querySelector('.plus-icon').classList.remove('minus-icon');

          if (faqImages[otherIndex]) {
            faqImages[otherIndex].classList.remove('visible'); // Remove visible class
          }
        }
      });

      // Toggle the selected FAQ answer visibility and icon
      answerWrapper.classList.toggle('active');
      plusIcon.classList.toggle('minus-icon');

      // Show the corresponding image if it exists
      if (faqImages[index]) {
        if (answerWrapper.classList.contains('active')) {
          faqImages[index].classList.add('visible'); // Add visible class
        } else {
          faqImages[index].classList.remove('visible'); // Remove visible class
        }
      }

      // Check if any image is visible; if not, display the first image by default
      const anyImageVisible = Array.from(faqImages).some(img => img.classList.contains('visible'));
      if (!anyImageVisible && faqImages[0]) {
        faqImages[0].classList.add('visible');
      }
    });
  });
});
// Function to add a dynamic script to the DOM with specific container context
function addScript(containerIndex, scriptType) {
  const script = document.createElement("script");
  script.setAttribute("data-dynamic-script", scriptType + containerIndex);
  script.textContent = `
      (function() {
          let currentIndex = 0; // Initialize currentIndex inside the script

          const container = document.querySelectorAll('.container1')[${containerIndex}];

          if (container) {
              const next = container.querySelector('.next');
              const previous = container.querySelector('.previous');
              const slide = container.querySelector('.slide');
              const items = Array.from(slide.children);
              const itemWidth = items[0].offsetWidth;

              const updateItemPositions = () => {
                  slide.style.transform = \`translateX(-\${itemWidth * currentIndex}px)\`;
                  next.disabled = currentIndex >= 5;
                  previous.disabled = currentIndex <= 0;
              };

              next.addEventListener('click', () => {
                  if (currentIndex < 6) {
                      currentIndex++;
                      updateItemPositions();
                      checkCurrentIndex();
                  }
              });

              previous.addEventListener('click', () => {
                  if (currentIndex > 0) {
                      currentIndex--;
                      updateItemPositions();
                      checkCurrentIndex();
                  }
              });

              updateItemPositions();
          }

          function checkCurrentIndex() {
              if (currentIndex === 0) {
                  removeExistingScript(${containerIndex});
                  addScript(${containerIndex}, '${scriptType === 'first' ? 'second' : 'first'}');
              }
          }
      })();
  `;
  document.head.appendChild(script);
}

// Function to remove any existing dynamic script for a specific container
function removeExistingScript(containerIndex) {
  const existingScript = document.querySelector(`script[data-dynamic-script*="${containerIndex}"]`);
  if (existingScript) {
      existingScript.remove();
  }
}

// Initialize by adding the first script for each container
document.querySelectorAll('.container1').forEach((_, index) => addScript(index, 'first'));











document.addEventListener('DOMContentLoaded', () => {
  // Loop through each item with the class "item"
  document.querySelectorAll('.itemc').forEach(item => {
      const description = item.querySelector('.description');
      const readMoreButton = item.querySelector('.read-more');
      const readLessButton = item.querySelector('.read-less'); // Select the Read Less button

      if (description && readMoreButton && readLessButton) {
          // Check if the content overflows its container
          if (description.scrollHeight > description.clientHeight) {
            readMoreButton.classList.add('showmore');
            readLessButton.classList.add('showless'); // Initially hidden in CSS

            // Click event for the Read More button
            readMoreButton.addEventListener('click', () => {
              description.classList.add('expanded');
              item.classList.add('expanded1'); // For any additional styling
              readMoreButton.style.display = 'none'; // Hide Read More
              readLessButton.style.display = 'block'; // Show Read Less
            });

            // Click event for the Read Less button
            readLessButton.addEventListener('click', () => {
              console.log("c");
              description.classList.remove('expanded');
              item.classList.remove('expanded1'); // Reset any additional styling
              readMoreButton.style.display = 'block'; // Show Read More
              readLessButton.style.display = 'none'; // Hide Read Less
            });
          }
      }
  });
});








 document.addEventListener('DOMContentLoaded', () => {
   const itemDiv = document.querySelector('.item'); // Select the first item div
   const rate1 = document.querySelector('.rate1'); // Select the container1 div

   if (itemDiv && rate1) {
       const itemHeight = itemDiv.offsetHeight; // Get the height of the item div
       const marginTopValue = `calc(10vh + ${itemHeight}px)`; // Calculate the margin top
       rate1.style.marginTop = marginTopValue; // Apply the margin top to container1
   }
});





// Select all containers with the class 'container1'
let containers1 = document.querySelectorAll('.container1');

containers1.forEach(container => {
    // Target specific elements inside each container
    const next = container.querySelector('.next');
    const slide = container.querySelector('.slide');
    const items = Array.from(slide.children);
    let currentIndex = 0; // Track the current slide for each container

    // Function to update the position of each item based on the current index
    const updateItemPositions = () => {
        const itemWidth = items[0].getBoundingClientRect().width;
        const style = window.getComputedStyle(items[0]);
        const marginRight = parseFloat(style.marginRight); // Get margin-right in pixels
        const totalWidth = itemWidth + marginRight; // Calculate the combined width (width + margin)
        slide.style.transform = `translateX(-${(totalWidth * currentIndex) -4}px)`;
    };

    // Move to the next item
    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length; // Loop back to the first item if at the end
        updateItemPositions();
    });

    // Initialize positions
    updateItemPositions();
});







document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.slide');
  const re = document.querySelector('.re');
  const buttons1 = document.querySelectorAll('.button1');
  const buttons2 = document.querySelectorAll('.button2');

  if (slide && re) {
      // Calculate combined height once
      const totalHeight = slide.offsetHeight + 0.2 * re.offsetHeight;
      
      // Set the top property for all button1 instances
      buttons1.forEach(button => {
          button.style.top = `${totalHeight}px`;
      });

      // Set the top property for all button2 instances
      buttons2.forEach(button => {
          button.style.top = `${totalHeight}px`;
      });
  }
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







document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navClose = document.querySelector('.nav__close');

  navToggle.addEventListener('click', () => {
      navClose.style.display = 'block'; // Only sets display to 'block' once
  });
  navClose.addEventListener('click', () => {
    navClose.style.display = 'none';
});
});







document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('.nav__toggle');
  const navClose = document.querySelector('.nav__close');
  const whiteLogo = document.querySelector('.whitelogo');
  const blackLogo = document.querySelector('.blacklogo');

  navToggle.addEventListener('click', () => {
      blackLogo.style.display = 'none';
      whiteLogo.style.display = 'block';
  });

  navClose.addEventListener('click', () => {
      blackLogo.style.display = 'block';
      whiteLogo.style.display = 'none';
  });
});










document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-numbers');
  let hasAnimated = false;

  // Function to animate numbers
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-number'); // Get the target number
      let current = 0;
      const increment = target / 100; // Adjust this value to change the speed

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = `${Math.ceil(current)}+`;
          requestAnimationFrame(updateCounter); // Continue animating
        } else {
          counter.textContent = `${target}+`;
        }
      };
      updateCounter();
    });
  };

  // Use IntersectionObserver to trigger animation when the section comes into view
  const section = document.querySelector('.section-work-data');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true; // Ensure the animation runs only once
    }
  }, {
    threshold: 0.5 // Trigger when 50% of the section is in view
  });

  observer.observe(section);
});
