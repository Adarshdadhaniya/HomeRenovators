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


// Function to apply the styles when the page loads
function applyStylesOnPageLoad() {
    const navbar = document.querySelector('.header');
    const white = document.querySelector('.whitelogo');
    const black = document.querySelector('.blacklogo');
    
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const navLinkSpans = document.querySelectorAll('.nav__link span');
    const call = document.querySelector('.call');
    const get = document.querySelector('.contact button');
    const calllo = document.querySelector('.calllo');
    const navtoggle = document.querySelector('.nav_toggle');
    
    // Check if we are on the '/bathroom' page
    const isBathroomPage = window.location.pathname.includes('/bathroom');
    
    if (isBathroomPage) {
      // Apply the styles immediately
      navbar.classList.add('scrolled');
      nav.classList.add('scrolled2');
      call.classList.add('scrolled4');
      get.classList.add('scrolled5');
      calllo.classList.add('scrolled6');
      navtoggle.classList.add('scrolled6');
      navLinks.forEach(link => link.classList.add('scrolled1'));
      navLinkSpans.forEach(span => span.classList.add('scrolled3'));
      white.style.display = 'block';
      black.style.display = 'none';
    }
  }
  
  // Function to handle scroll-based style changes
  function handleScroll() {
    const navbar = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    const triggerHeight = window.innerHeight * 0.0001; // Adjust this as needed
    
    const white = document.querySelector('.whitelogo');
    const black = document.querySelector('.blacklogo');
    
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const navLinkSpans = document.querySelectorAll('.nav__link span');
    const call = document.querySelector('.call');
    const get = document.querySelector('.contact button');
    const calllo = document.querySelector('.calllo');
    const navtoggle = document.querySelector('.nav_toggle');
    
    // Check if we are on the '/bathroom' page
    const isBathroomPage = window.location.pathname.includes('/bathroom');
    
    // If we are on the '/bathroom' page or have scrolled down, apply the styles
    if (isBathroomPage || scrollPosition > triggerHeight) {
      navbar.classList.add('scrolled');
      nav.classList.add('scrolled2');
      call.classList.add('scrolled4');
      get.classList.add('scrolled5');
      calllo.classList.add('scrolled6');
      navtoggle.classList.add('scrolled6');
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
      navLinks.forEach(link => link.classList.remove('scrolled1'));
      navLinkSpans.forEach(span => span.classList.remove('scrolled3'));
      white.style.display = 'none';
      black.style.display = 'block';
    }
  }
  
  // Apply styles when the page loads
  window.addEventListener('load', applyStylesOnPageLoad);
  
  // Handle scroll event
  document.addEventListener('scroll', handleScroll);
  