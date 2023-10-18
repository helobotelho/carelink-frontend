document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('active');
  });

document.addEventListener('DOMContentLoaded', function() {
    var menuCheckbox = document.getElementById('menuCheckbox');

    window.addEventListener('scroll', function() {
        if (menuCheckbox.checked) {
            menuCheckbox.checked = false;
        }
    });
});



  