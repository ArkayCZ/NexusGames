$(function() {
	/* English */
	/* In case you are reading this, I would like to say, in my defense, that I do not know JavaScript and I know this code is very, very bad.
		I want to optimize it in the future */

	/* Čeština */
	/* Pokud toto čtete, chci na svou obranu říci, že JavaScript neumím a i tak vím, že tento kód je extrémně špatný.
		Mám v plánu jeho optimalizaci */

	var height = parseInt($("#hamburger-nav").height()) * -1;
	var shift = parseInt(height) + "px";
	var visible = false;

	onResize();

	$(window).resize(function(event) {
		onResize();
	});

	$("#menu-toggle").click(function(event) {
		if(visible == true) {
			$("#hamburger-nav").animate({"margin-top": shift}, 500);
			
		}
		else {
			$("#hamburger-nav").animate({"margin-top": "0px"}, 500);
		}

		visible = !visible;
	});

	if(height == 0) {
	 	shift = "-180px";
	}

	function onResize() {
		if($(window).width() >= 1024) {
			shift = "0px";
		} else {
			height = parseInt($("#hamburger-nav").height()) * -1;
			shift = parseInt(height) + "px";
		}
		hideHamburger()
		visible = false;
	}

	function hideHamburger() {
		$("#hamburger-nav").css('margin-top', shift);
		var visible = false;
	}

	function showHamburger() {
		$("#hamburger-nav").css('margin-top', 0);
		var visible = true;
	}
});



