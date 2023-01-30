// Menu Hamburger
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "myTopnav") {
        x.className += " responsive";
    } else {
        x.className = "myTopnav";
    }
}

//************************************************* */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// ******************************************** */
// fil d'ariane
$('.navigation a').on('click', function () {
    //selecting the syllabus class
    $select = $('<div class="portfolio"></div>');
    $(this).parents('a').each(function (n, a) {
        //Adding / to each anchor tag of li
        $select.prepend(' / ', $(a).children('').clone());
    });
    // Displaying the hierarchical order of pages.
    $('.display').html(
        $select.prepend('<a href="#</a>'));
})

$('.navigation a').on('click', function () {
    //selecting the syllabus class
    $select = $('<div class="portfolio"></div>');
    $(this).parents('a').each(function (n, a) {
        //Adding / to each anchor tag of li
        $select.prepend(' / ', $(a).clone());
    });
    // Displaying the hierarchical order of pages.
    $('.display').html(
        $select.prepend('<a href="#</a>'));
})

AOS.init({
    easing: 'ease-in-sine',
    delay: 200,
    once: 'true',
});

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "nav-bar" + " nav-card" + " nav-animate-top" + " nav-white" + " topnav ";
    } else {
        navbar.className = navbar.className.replace(" nav-card nav-animate-top nav-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("nav-show") == -1) {
        x.className += " nav-show";
    } else {
        x.className = x.className.replace(" nav-show", "");
    }
}





