$(function () {
	$(".loading-text-1").delay(700).fadeIn(2500);
	$(".loading-text-2").delay(2000).fadeIn(4500);
});

$(window).load(function () {
	$(".loader-container").fadeOut(1000);
});

$(function () {
	$("#home-message-icon").click(function () {
		$(".message-dialog").css({
			"transform": "translateY(70px)",
			"zIndex": "5",
			"opacity": "1"
		});
	});
	
	$("#close").click(function () {
		$(".message-dialog").css({
			"transform": "translateY(0px)",
			"zIndex": "-1",
			"opacity": "0"
		});
	});
	
	$(document).mouseup(function (e) {
		var container = $(".message-dialog");
		var btn = $("#submit-button");

		if (!container.is(e.target) // if the target of the click isn't the container...
			&&
			container.has(e.target).length === 0 && !btn.is(e.target)) // ... nor a descendant of the container
		{
			$(".message-dialog").css({
				"transform": "translateY(0px)",
				"zIndex": "-1",
				"opacity": "0"
			});
		}
	});
});
