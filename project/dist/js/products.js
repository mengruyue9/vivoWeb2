define(["jquery","jquery-cookie"],function($) {
	function productsFun() {
		$(".buttonBuy").mouseenter(function() {
			$(this).find($(".line"))
			.stop().animate({width:"100%"},500)
		});
		$(".buttonBuy").mouseleave(function() {
			$(this).find($(".line"))
			.stop().animate({width:10},500)
		});
		
	}

	return {
		productsFun: productsFun
	} 
})