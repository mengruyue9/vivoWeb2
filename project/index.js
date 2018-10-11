define(["jquery","jquery-cookie","startMove"],function($,stasrtMove) {
	function main() {
		/*$("#nav_list li, #pull_down").mouseenter(function(){
			$("#pull_down").stop().animate({height:"200px"},300);
			//加载已经加入购物车的数据
			eq($(this).index())
			nav_msg();

		});*/
		$("#nav_list li,#pull_down").mouseenter(function(){
			$("#pull_down").stop().animate({height:"200px"},300);
			//nav_msg();
		})
		$("#nav_list li,#pull_down").mouseleave(function(){
			$("#pull_down").stop().animate({height:0},300);
		})
		/*$("#nav_list li, #pull_down").mouseleave(function(){
			$("#pull_down").stop().animate({height:0},300);
		});*/

		/*关注上拉菜单*/
		$(".attention,#menu").mouseenter(function(){
			$("#menu").css("display","block");
		});
		$(".attention,#menu").mouseleave(function(){
			$("#menu").css("display","none");
		});
		$("#menu p").mouseenter(function(){
			$("#menu p").eq($(this).index()).css("backgroundColor","#f4f4f4").css("cursor","pointer");
			switch($(this).index()){
				case 0 :
				$(".sina span").css("color","#cf0800");
				break;
				case 1 :
				$(".wechat span").css("color","#68b732");
				$(".wechat img").css("display","block");
				break;
				case 2 :
				$(".pay span").css("color","#5fa8ed");
				$(".pay img").css("display","block");
				break;
			}
		});
		$("#menu p").mouseleave(function(){
			$("#menu p").eq($(this).index()).css("backgroundColor","#fff");
			$("#menu p span").eq($(this).index()).css("color","#333333");
			$("#menu p img").css("display","none");
		});
		function nav_msg(){
				$.ajax({
					url: "data/nav.json",
					type: "get",
					success: function(res){
						var html = '';
						for(var i = 0; i < res.length; i++){
							html += `
							<div class="box">
								<img src="${res[i].images}" alt="">
								<h1>${res[i].title}</h1>
							</div>`;
						}
						$("#pull_down").html(html);

					}
				})
			}

		$(function () {
			$.ajax({
				url: 'data/index.json',
				success: function(res){
					// alert(res);
					//将数据通过循环遍历，添加到页面上
					var html = "";
					for(var i = 0; i < res.length; i++){
						html += `<div class = "list${res[i].id}">
						<div class="img"><img src="${res[i].img}" alt=""></div>
						<h4>${res[i].title}</h4>
						<a href="">${res[i].desc}</a>
						</div>`;
					}
					$("#quick_nav").html(html);
					
				},
				error: function(msg){
					alert(msg);
				}
			})
			
		})
		
	}

	return {
		main: main
	} 
})