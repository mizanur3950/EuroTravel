$(document).ready(function() {
 
  $("#owl-city").owlCarousel({
    autoplay: 2000,
    loop:true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items:1
      },
      600: {
        items: 3
      },
      1000 :{
        items: 6
      }
    }
  });
 


$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});


//Initialize Scrollspy
$('body').scrollspy({ target: '#main-nav' });



});

//Smooth Scrolling
$('#main-nav a').on('click',function(e){
  if(this.hash !== ''){
    e.preventDefault();

    const hash= this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    },700, function() {
      window.location.hash= hash;
    });
  }
});
