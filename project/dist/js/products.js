define(["jquery","jquery-cookie"],function($) {
	function productsFun() {
		$(".banner .link a").mouseenter(function() {
			$(".banner .link a").eq($(this).index()).find($(".line"))
			.stop().animate({width:"100%"},300)
		});
		$(".banner .link a").mouseleave(function() {
			$(".banner .link a").eq($(this).index()).find($(".line"))
			.stop().animate({width:10},300)
		});
		
	}

	return {
		productsFun: productsFun
	} 
})