
document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('scrollButton');
  
    scrollButton.addEventListener('click', function() {
      var section = document.getElementById('Projects');
        
      var sectionPosition = section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
      });
    });
  });
