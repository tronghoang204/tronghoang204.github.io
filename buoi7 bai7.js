document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.submenu');
  
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    });
  });