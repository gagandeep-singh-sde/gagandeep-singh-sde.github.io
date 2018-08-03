	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.burger').on(click, function(){

			if( !$(this).hasClass('open') ){ openMenu(); }
			else { closeMenu(); }

	});


	function openMenu(){

		$('div.circle').addClass('expand');

		$('div.burger').addClass('open');
		$('div.x, div.y, div.z').addClass('collapse');
		$('.menu li').addClass('animate');

		setTimeout(function(){
			$('div.y').hide();
			$('div.x').addClass('rotate30');
			$('div.z').addClass('rotate150');
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45');
			$('div.z').addClass('rotate135');
		}, 120);



	}

	function closeMenu(){

		$('div.burger').removeClass('open');
		$('div.x').removeClass('rotate45').addClass('rotate30');
		$('div.z').removeClass('rotate135').addClass('rotate150');
		$('div.circle').removeClass('expand');
		$('.menu li').removeClass('animate');

		setTimeout(function(){
			$('div.x').removeClass('rotate30');
			$('div.z').removeClass('rotate150');
		}, 50);
		setTimeout(function(){
			$('div.y').show();
			$('div.x, div.y, div.z').removeClass('collapse');
		}, 70);

	}


$(function () {

	$(window).scroll(function(){
		var winht = $(window).scrollTop();
			$(".message-dialog").css({
				"top": winht + "px"
			});
	});

	$(".message-dialog input").focus(function () {
		var winht = $(window).scrollTop() - 150;
		var winwt = $(window).width();
		if(winwt<=420){
			$(".message-dialog").css({
				"top": winht + "px"
			});
		}
	});

	$("#pop-up").click(function () {
		$(".message-dialog").css({
			"transform": "translateY(50px)",
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
