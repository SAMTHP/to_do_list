// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


function preparePage() {
	$("#titleCategory").click(function() {
		myTitle = document.getElementById("titleCategory");
		if (myTitle.onclick = function(){}) {
			// utiliser un style CSS pour afficher
			document.getElementById("card").style.display = "block";
			$("#card").hide(10000);
		} else {
			// ou pour masquer le div
			document.getElementById("card").style.display = "none";
		}
	});
	// Cacher le div au chargement initial de la page.
	document.getElementById("card").style.display = "none";
};

// window.onload =  function() {
// 	preparePage();
// };

$(document).ready(function () {
 preparePage();
 changeImage();
});



// $("#titleCategory").click(function() {
// 	if("#titleCategory").checked {
//   		$("#card").style.display("block");
// 	} else {
// 		$("#card").style.display("block");
// 	}
// });


$(document).ready(function () {

	var myImage = document.getElementById("mainImage");

	var imageArray = ["https://robohash.org/quamillumet.png?size=300x300&set=set1","_images/winery_sign.jpg","https://robohash.org/utfugadistinctio.png?size=300x300&set=set1",
					  "https://robohash.org/inventoredoloreset.png?size=300x300&set=set1","https://robohash.org/porroexercitationemex.png?size=300x300&set=set1","https://robohash.org/velitevenietnon.png?size=300x300&set=set1","https://robohash.org/minimaquaeiste.png?size=300x300&set=set1","https://robohash.org/quoquisapiente.png?size=300x300&set=set1","https://robohash.org/voluptatemconsequaturcorrupti.png?size=300x300&set=set1","https://robohash.org/idenimlaborum.png?size=300x300&set=set1"];
	var imageIndex = 0;

	function changeImage() {
		myImage.setAttribute("src",imageArray[imageIndex]);
		imageIndex++;
		if (imageIndex >= imageArray.length) {
			imageIndex = 0;
		}
	}

	// setInterval est aussi en milisecondes
	var imageInterval = setInterval(changeImage,5000);

	myImage.onmouseover = function(){
		clearInterval(imageInterval);
	};

	myImage.onmouseout = function(){
		var imageInterval = setInterval(changeImage,5000);
	};

});