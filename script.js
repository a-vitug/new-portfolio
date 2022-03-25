// sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.sidenav');
    M.Sidenav(elems);
});

// about me
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {

    });
});

// carousel for projects page
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init( elems, { 
        duration: 300,
        shift: 20,
        fullWidth: true,
        indicators: true,
    });
});

// tooltip on projects page
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init( elems, {
        html: '',
    });
});

// contact me page
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    M.TapTarget.init(elems, options);
    // instances.open();
});