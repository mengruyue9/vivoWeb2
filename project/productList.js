define(["jquery","jquery-cookie"],function ($) {
	function proListFun() {
		$.ajax({
			url: 'data/productList.json',
			success: function(res){
				var html = "";
				var pageone = res[0].data;
				var pagetwo = res[1].data;
				for(var i = 0; i < pageone.length; i++){
					html += `<li class="spu_item">
					<a href="detailPage.html">
						<div class="crner_good">
							<img src="${pageone[i].featureImg}" alt="">
						</div>
						<div class="figure">
							<img src="${pageone[i].img}" alt="">
						</div>
						<div class="spu_info">
							<p class="name">${pageone[i].name}</p>
							<p class="feature" title="">
								<span class="sale_point">${pageone[i].salePoint}</span>
								${pageone[i].feature}
							</p>
							<p class="price"><span>￥</span>${pageone[i].price}</p>
						</div>
					</a>
				</li>`;
				}
				$(".spu_item_list").html(html);
				// $(".pagination a").eq(2).click(function() {
				var html2="";
				for(var i = 0; i < pagetwo.length; i++){
				html2 += `<li class="spu_item">
				<a href="detailPage.html">
					<div class="crner_good">
						<img src="${pagetwo[i].featureImg}" alt="">
					</div>
					<div class="figure">
						<img src="${pagetwo[i].img}" alt="">
					</div>
					<div class="spu_info">
						<p class="name">${pagetwo[i].name}</p>
						<p class="feature" title="">
							<span class="sale_point">${pagetwo[i].salePoint}</span>
							${pagetwo[i].feature}
						</p>
						<p class="price"><span>￥</span>${pagetwo[i].price}</p>
					</div>
				</a>
			</li>`;
			$(".spu_item_list2").html(html2);
			}
			},
			error: function(msg){
				alert(msg);
			}
		})
		$(".pagination a").eq(2).click(function () {
			$(".pagination a").removeClass("border");
			$(this).addClass("border");
			$(".spu_item_list").css("display","none");
			$(".spu_item_list2").css("display","block");
		})
		$(".pagination a").eq(1).click(function () {
			$(".pagination a").removeClass("border");
			$(this).addClass("border");
			$(".spu_item_list").css("display","block");
			$(".spu_item_list2").css("display","none");
		})				
	}
	return{
		proListFun:proListFun
	}
})