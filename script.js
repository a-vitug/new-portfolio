// sidenav
var elem = document.querySelector('.sidenav');
var instance = new M.Sidenav(elem);

// carousel for projects page
var elems = document.querySelectorAll('.carousel');
var instances = M.Carousel.init({
    duration: 300,
    dist: -100,
    shift: 20,
    fullWidth: true,
    noWrap: false
});

// tooltip on projects page
var elems = document.querySelectorAll('.tooltipped');
var instances = M.Tooltip.init({
    html: '',
});

// contact me page
// var elems = document.querySelectorAll('.tap-target');
// var instances = M.TapTarget.init({
//     onOpen()
// });