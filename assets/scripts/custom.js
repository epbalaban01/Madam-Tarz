$(document).ready(function(e) {

	// slider start
	$(function(){
	
		var sure_slider_box = 3000;
		var toplamli_slider_box = $(".slider ul li").length;

		var liwidth_slider_box = 959;
		var toplamwidth_slider_box = liwidth_slider_box * toplamli_slider_box ;
		var lideger_slider_box = 0;
		$(".slider ul").css("width", toplamwidth_slider_box + "px")


		$(".slider_degis_icons_right").click(function(){
			if(lideger_slider_box < toplamli_slider_box - 1){
				lideger_slider_box++;
				yeniwidth_slider_box = liwidth_slider_box * lideger_slider_box;
				$(".slider ul").animate({marginLeft: "-" + yeniwidth_slider_box + "px"}, 500)

				$('.slider_swap ul li').removeClass("slide_act");
				$('.slider_swap ul li:eq('+lideger_slider_box+')').addClass("slide_act");

			}
			else
			{
				lideger_slider = 0 ;
				$(".slider ul").animate({marginLeft: "0"}, 500)
			}
		})



		$(".slider_degis_icons_left").click(function(){
			if(lideger_slider_box > 0){
				lideger_slider_box--;
				yeniwidth_slider_box = liwidth_slider_box * lideger_slider_box;
				$(".slider ul").animate({marginLeft: "-" + yeniwidth_slider_box + "px"}, 500)

				$('.slider_swap ul li').removeClass("slide_act");
				$('.slider_swap ul li:eq('+lideger_slider_box+')').addClass("slide_act");

			}
		})



		$('.slider_swap ul li:first').addClass("slide_act");

		$('.slider_swap ul li').click(function(){
			var indis_slider_box = $(this).index();


			$('.slider_swap ul li').removeClass("slide_act");
			$(this).addClass("slide_act");

			deger_slider_box=indis_slider_box;

			var yenideger_slider_box = deger_slider_box * 959;
			$(".slider ul").animate({marginLeft: "-" + yenideger_slider_box + "px"}, 500)

		return false;  // Fonksiyonunun daha işlem yapmasına gerek kalmadığını belirtiyoruz.
		});


		$.oto_slider_box = function(){
			if(lideger_slider_box < toplamli_slider_box -1)
			{
				lideger_slider_box++;
				yeniwidth_slider_box = liwidth_slider_box * lideger_slider_box;
				$(".slider ul").animate({marginLeft: "-" + yeniwidth_slider_box + "px"}, 500)
				$('.slider_swap ul li').removeClass("slide_act");
				$('.slider_swap ul li:eq('+lideger_slider_box+')').addClass("slide_act");
			}
			else
			{
				lideger_slider_box = 0 ;
				$(".slider ul").animate({marginLeft: "0"}, 500)
				$('.slider_swap ul li').removeClass("slide_act");
				$('.slider_swap ul li:eq('+lideger_slider_box+')').addClass("slide_act");
			}

		}

		var don_slider_box = setInterval("$.oto_slider_box()", sure_slider_box);

		$(".slider").hover(function(){

			clearInterval(don_slider_box)

		}, function(){
			don_slider_box = setInterval("$.oto_slider_box()", sure_slider_box);
		})

		$(".slider_swap").hover(function(){

			clearInterval(don_slider_box)

		}, function(){
			don_slider_box = setInterval("$.oto_slider_box()", sure_slider_box);
		})
	
	});// slider start

});