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
// Function to add the first script to the DOM
function addFirstScript() {
  const script = document.createElement("script");
  script.setAttribute("data-dynamic-script", "first");
  script.textContent = `
      (function() {
          let currentIndex = 0; // Initialize currentIndex inside the first script

          const container = document.querySelector('.container1');

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
                  removeExistingScript();
                  addSecondScript();
              }
          }
      })();
  `;
  document.head.appendChild(script);
}

// Function to add the second script to the DOM
function addSecondScript() {
  const script = document.createElement("script");
  script.setAttribute("data-dynamic-script", "second");
  script.textContent = `
      (function() {
          let currentIndex = 0; // Initialize currentIndex inside the second script

          const container = document.querySelector('.container1');

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
                  removeExistingScript();
                  addFirstScript();
              }
          }
      })();
  `;
  document.head.appendChild(script);
}

// Function to remove any existing dynamic script
function removeExistingScript() {
  const existingScript = document.querySelector("script[data-dynamic-script]");
  if (existingScript) {
      existingScript.remove();
  }
}

// Initialize by adding the first script
addFirstScript();


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
   const triggerHeight = window.innerHeight * 0.2; // 20vh


   const white=document.querySelector('.whitelogo');
   const black=document.querySelector('.blacklogo');


   const nav = document.querySelector('.nav');
   const navLinks = document.querySelectorAll('.nav__link');
   const navLinkSpans = document.querySelectorAll('.nav__link span'); // Select spans within nav links
   const call = document.querySelector('.call');
   const get=document.querySelector('.contact button');

   if (scrollPosition > triggerHeight) {
     navbar.classList.add('scrolled');
     nav.classList.add('scrolled2');
     call.classList.add('scrolled4');
     get.classList.add('scrolled5');
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
  const button1 = document.querySelector('.button1');

  if (slide && re && button1) {
      // Calculate combined height
      const totalHeight = slide.offsetHeight + 0.5*re.offsetHeight;
      // Set the top property of button1
      button1.style.top = `${totalHeight}px`;
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.slide');
  const re = document.querySelector('.re');
  const button2 = document.querySelector('.button2');

  if (slide && re && button2) {
      // Calculate combined height
      const totalHeight = slide.offsetHeight + 0.5*re.offsetHeight;
      // Set the top property of button1
      button2.style.top = `${totalHeight}px`;
  }
});