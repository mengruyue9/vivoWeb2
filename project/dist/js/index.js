define(["jquery","jquery-cookie","startMove"],function($,stasrtMove) {
	function main() {
		/*$("#nav_list li, #pull_down").mouseenter(function(){
			$("#pull_down").stop().animate({height:"200px"},300);
			//加载已经加入购物车的数据
			eq($(this).index())
			nav_msg();

		});*/
		/*用户信息下拉菜单*/
		$("#user,#user_menu,#user_menu ul").mouseenter(function () {
			$("#user_menu").stop().animate({height:"250px"},300);
			$("#user_menu ul").css("display","block").css("cursor","pointer");
			
		})
		$("#user_menu ul li").mouseenter(function () {
			$("#user_menu ul li").eq($(this).index()).css("color","#57b0de");
		})
		$("#user_menu ul li").mouseleave(function () {
			$("#user_menu ul li").eq($(this).index()).css("color","#333");
		})
		
		$("#user,#user_menu,#user_menu ul").mouseleave(function () {
			$("#user_menu").stop().animate({height:"0px"},300);
			$("#user_menu ul").css("display","none").css("cursor","pointer");
		})
		/*登陆注册点击事件*/
		$("#user_menu ul li").eq($(this).index()).click(function () {
			if ($(this).index()== 0) {
				open("../shoppingcart.html","_self");
			}else if ($(this).index() == 1) {
				open("../login.html","_self");
			}else if ($(this).index()== 2) {
				open("../login.html","_self");
			}else if ($(this).index()== 3) {
				open("../login.html","_self");
			}
		})
		//导航下拉菜单
		$("#nav_list li,#pull_down").mouseenter(function(){
			$("#pull_down").stop().animate({height:"200px"},300);
			$(".box_list").css("display","block");
			nav_msg();
		})
		$("#nav_list li,#pull_down").mouseleave(function(){
			$("#pull_down").stop().animate({height:0},300);
			$(".box_list").css("display","none");
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
							html += `<div class="box_list">
							<div class="box">
								<p><img src="${res[i].images}" alt=""></p>
								<h1>${res[i].title}</h1>
								<h2>${res[i].price}元</h2>
							</div></div>`;
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