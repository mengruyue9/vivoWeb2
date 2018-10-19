define(["jquery","jquery-cookie"],function($) {
	console.log(1);
	function detailFun() {
		var num = parseInt($("#add-num").val());
		$("#dec").click(function () {
			if(num <= 1){
				alert("至少购买1件商品");
			}else{
				num--;
				$("#add-num").val(num);

			}
			// var num = $("#add-num").innerHTML();
		});
		$("#inc").click(function () {
			if(num >= 10000){
				alert("你超出购买量了！");
			}else{
				num++;
				$("#add-num").val(num);

			}
			// var num = $("#add-num").innerHTML();
		});
		/*$(document).scroll(function () {
			var rightHei = $(".prod_container_right").offset().top -$(window).scrollTop();
			var divH = $(".prod_container_right").height()-$(".prod_container_left").height();
			var add = rightHei + divH;
			if(rightHei <= 0 ){
				$(".prod_container_left").addClass("fixed");
			}else{
				$(".prod_container_left").removeClass("fixed");
			} 
			if(add <= 0){
				$(".prod_container_left").removeClass("fixed");
				$(".prod_container_left").css("margin-bottom","0");
			}
		})*/
	
		//放大镜
		//

    $('.LittleImgs li').mouseover(function(){
    	$(this).css('border', '1px solid coral').siblings().css('border', '1px solid transparent');
        $('#BigImgs img').eq(0).attr('src', 'images/xq1_' + ($(this).index()) + '.png');
        $('.magnify img').eq(0).attr('src', 'images/xq1_' + ($(this).index()) + '.png');
    })
	}
	return {
		detailFun: detailFun
	} 
})