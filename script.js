


// fil d'ariane
$('.navigation a').on('click', function() {
	//selecting the syllabus class
	$select = $('<div class="portfolio"></div>');
	$(this).parents('a').each(function(n, a) {
		//Adding / to each anchor tag of li
		$select.prepend(' / ',$(a).children('').clone());
	});
	// Displaying the hierarchical order of pages.
	$('.display').html(
	$select.prepend('<a href="#</a>'));
})


// Menu hamburger
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "sub-nav__menu") {
      x.className += " responsive";
    } else {
      x.className = "sub-nav__menu";
    }
  }