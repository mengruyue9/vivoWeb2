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
		
    $('.LittleImgs li').mouseover(function(){
    	$(this).css('border', '1px solid coral').siblings().css('border', '1px solid transparent');
    	$(this).css('background', '#fff').siblings().css('background', '#f1f1f1');
        $('#BigImgs img').eq(0).attr('src', 'images/xq1_' + ($(this).index()) + '.png');
        $('.magnify img').eq(0).attr('src', 'images/xq1_' + ($(this).index()) + '.png');
    })
	}
	return {
		detailFun: detailFun
	} 
})