/**
* Template Name: ClientPeak: Free Bootstrap 5 Business Landing Template
* Template URL: https://www.templaterise.com/template/clientpeak-free-bootstrap-5-business-landing-template
* Updated: January 31 2025 with Bootstrap v5.3.3
* Author: templaterise.com
*/

$(document).ready(function(){

  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarClose = document.querySelector('.navbar-close');

  function toggleBodyScroll(disable) {
      document.body.style.overflow = disable ? 'hidden' : '';
  }

  function hideNavbarToggler() {
      navbarToggler.classList.add('hide');
  }

  function showNavbarToggler() {
      navbarToggler.classList.remove('hide');
  }

  navbarCollapse.addEventListener('show.bs.collapse', function() {
      toggleBodyScroll(true);
      hideNavbarToggler();
  });

  navbarCollapse.addEventListener('hide.bs.collapse', function() {
      toggleBodyScroll(false);
      showNavbarToggler();
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (navbarCollapse.classList.contains('show')) {
              bootstrap.Collapse.getInstance(navbarCollapse).hide();
          }
      });
  });
  navbarClose.addEventListener('click', () => {
      bootstrap.Collapse.getInstance(navbarCollapse).hide();
  });

  $('.brand-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      responsive:{
          0:{
              items: 2
          },
          768:{
              items: 3
          },
          1200:{
              items: 4
          }
      }
});



});