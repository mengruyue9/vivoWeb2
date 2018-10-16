define(["jquery","jquery-cookie"],function($) {
	function NEXFun() {
		$.ajax({
			url: "data/NEX.json",
			type: "get",
			success: function(res){
				var html1 = '';
				var html2 = '';
				var html3 = '';
				var html4 = "";
				var head = res.header;
				for(var i = 0; i < head.length; i++){
					html1 += `<li><a href="${head[i].href}">${head[i].title}</a></li>`;
				}
				$("#nav_list").html(html1);
				$("#nav_list li a").eq(0).css("color","#b0b0b0");
				
				var content = res.content;
				var phone_sort = content[1].phone_sort;
				for(var i = 0; i < phone_sort.length; i++){
					html2 += `<li class="swiper-slide">
							<img src="${phone_sort[i].img}" alt="">
							<p>${phone_sort[i].title}</p>
						</li>`;
				}
				$(".swiper-container ul").html(html2);
				var product_single = res.content[2].product_single;
				html3 += `<div class="single_text_right text_white">
						<div>${product_single.title1}</div>
						<div>${product_single.title2}</div>
						<div>${product_single.title3}</div>
						<a href="">
							<div class="buttonBuy">
								<div class="title">进一步了解</div>
								<div class="line"></div>
							</div>
						</a>
						<a href="">
							<div class="buttonBuy">
								<div class="title">立即购买</div>
								<div class="line"></div>
							</div>
						</a>
					</div>`;
				$(".product_single").html(html3);
				var product_parts = res.content[3].product_parts;
					for(var i = 0; i < product_parts.length; i++){

						html4 += `<div class="accessories_line1 left">
						<div>${product_parts[i].title1}</div>
						<div>${product_parts[i].title2}</div>
						<a href="" id="buybtn">
							<div class="buttonBuy">
								<div class="title">立即购买</div>
								<div class="line"></div>
							</div>
						</a>
						<img src="${product_parts[i].img}" alt="" />
					</div>`;
					
				}
				$(".product_parts").html(html4);
				for (var i = 0; i < 4; i++) {
					if (i%2!=0) {
						$(".product_parts .accessories_line1").eq(i).removeClass("left");
					$(".product_parts .accessories_line1").eq(i).addClass("right");
					}
				}
			}
		})
	}

	return {
		NEXFun: NEXFun
	} 
})