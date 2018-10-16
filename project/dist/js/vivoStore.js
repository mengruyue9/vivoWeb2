define(["jquery","jquery-cookie"],function ($) {
	function storeFun() {
		$.ajax({
			url: "data/vivoStore.json",
			type: "get",
			success: function(res){
				var html1 = '';
				var lists = res.listName;
				var detail = res.detail;
				for(var i = 0; i < lists.length; i++){
				html1 += `<li>
							<a class = "category_name" href="">${lists[i]}
								<span class="arrow">&#xe662;</span>
							</a>
							<div class="category_box">
								<div class="category_detail">
									<a class="category_all" href="">
										${detail[i].all}
										<span class="arrow">&#xe662;</span>
									</a>
									<p>${detail[i].name}</p>
									<div style="clear: both;"></div>
									<ul class="category_product">									
									</ul>
								</div>
							</div>
						</li>`;
				}
				$("#sidebar .category").html(html1);
				$(`<ul class="category_sub"></ul>`).insertBefore($("#sidebar .category li").eq(0).find(".category_product"));
				var sub = res.phoneOne;
				var subHtml = '';
				console.log(sub);
				for (var i = 0; i < sub.length; i++) {
					subHtml += `<li><a href="">${sub[i].subTitle}</a></li>`;
				}
				$(".category_detail .category_sub").html(subHtml);
				var products = res.products;
				console.log($(".category_product"));
				for (var i = 0; i < products.length; i++) {
					var proInfo = '';

					for (var j = 0; j < products[i].length; j++) {
					proInfo += `<li>
								 <a href="">
								 	<img src="${products[i][j].img}" alt="">
								 	<span>${products[i][j].title}</span>
								 </a>
								</li>`;
					}
					$(".category_product").eq(i).html(proInfo);
					
				}
				
			}
		})
		
	}
	return{
		storeFun:storeFun
		
	}
})