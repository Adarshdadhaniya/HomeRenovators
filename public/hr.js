/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}




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
                  next.disabled = currentIndex >= 2;
                  previous.disabled = currentIndex <= 0;
              };

              next.addEventListener('click', () => {
                  if (currentIndex < 3) {
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
  document.querySelectorAll('.item').forEach(item => {
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





document.addEventListener('scroll', function () {
   const navbar = document.querySelector('.header');
   const scrollPosition = window.scrollY;
   const triggerHeight = window.innerHeight * 0.0001; // 20vh


   const white=document.querySelector('.whitelogo');
   const black=document.querySelector('.blacklogo');


   const nav = document.querySelector('.nav');
   const navLinks = document.querySelectorAll('.nav__link');
   const navLinkSpans = document.querySelectorAll('.nav__link span'); // Select spans within nav links
   const call = document.querySelector('.call');
   const get=document.querySelector('.contact button');
   const calllo=document.querySelector('.calllo');
   const navtoggle=document.querySelector('.nav_toggle');

   if (scrollPosition > triggerHeight) {
     navbar.classList.add('scrolled');
     nav.classList.add('scrolled2');
     call.classList.add('scrolled4');
     get.classList.add('scrolled5');
     calllo.classList.add('scrolled6');
     navtoggle.classList.add('scrolled6');
     // Add classes to nav links and spans
     navLinks.forEach(link => link.classList.add('scrolled1'));
     navLinkSpans.forEach(span => span.classList.add('scrolled3'));
     white.style.display = 'block';
      black.style.display = 'none';
   } else {
     navbar.classList.remove('scrolled');
     nav.classList.remove('scrolled2');
     call.classList.remove('scrolled4');
     get.classList.remove('scrolled5');
     calllo.classList.remove('scrolled6');
     navtoggle.classList.remove('scrolled6');
     // Remove classes from nav links and spans
     navLinks.forEach(link => link.classList.remove('scrolled1'));
     navLinkSpans.forEach(span => span.classList.remove('scrolled3'));
     white.style.display = 'none';
      black.style.display = 'block';
   }
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



document.addEventListener('DOMContentLoaded', () => {
  const itemDiv = document.querySelector('.item'); // Select the first item div
  const maincontainer = document.querySelector('.maincontainer'); // Select the container1 div

  if (itemDiv && maincontainer) {
      const itemHeight = itemDiv.offsetHeight; // Get the height of the item div
      const marginTopValue = `calc(10vh + ${itemHeight}px)`; // Calculate the margin top
      maincontainer.style.marginTop = marginTopValue; // Apply the margin top to container1
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
        slide.style.transform = `translateX(-${totalWidth * currentIndex}px)`;
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
      const totalHeight = slide.offsetHeight + 0.5 * re.offsetHeight;
      
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






document.addEventListener('DOMContentLoaded', function () {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = Array.from(sliderTrack.children);
  const nextButton = document.querySelector('.slider-next');
  const prevButton = document.querySelector('.slider-prev');
  let currentIndex = 0;

  // Function to update slider position and button states
  const updateSliderPosition = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      sliderTrack.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

      // Disable next button at last slide
      nextButton.disabled = currentIndex === slides.length - 1;
      
      // Disable previous button at first slide
      prevButton.disabled = currentIndex === 0;
  };

  // Move to the next slide
  nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
      } else {
          currentIndex = 0; // Loop back to the first slide
      }
      updateSliderPosition();
  });

  // Move to the previous slide
  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
      } else {
          currentIndex = slides.length - 1; // Loop back to the last slide
      }
      updateSliderPosition();
  });

  // Initial setup to display the first slide and button states
  updateSliderPosition();
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

