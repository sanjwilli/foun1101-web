$(document).ready(function() {

  $('.toggled-nav-wrapper').on('click', function(e) {
    e.stopPropagation();
  });
  $('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper, header .nav-toggle-body-overlay').on('click', function() {
    $('html').toggleClass('nav-open');
  });

  $('.nav-toggle-open-wrapper').on('click', function() {
    console.log('Toggle Clciked');
  });

});
