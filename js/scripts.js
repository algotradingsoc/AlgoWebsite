$(document).ready(function(){
	window.onscroll = function() {toTopAppear()};

	function toTopAppear() {
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			document.getElementById("topBtn").style.display = "block";
		} else {
			document.getElementById("topBtn").style.display = "none";
		}
	}

	$('body').scrollspy({target: ".navbar", offset: 50});
});