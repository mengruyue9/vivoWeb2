define(["jquery","jquery-cookie"],function ($) {
	function storeFun() {
		sc_car();
		$.ajax({
			url: "data/vivoStore.json",
			type: "get",
			success: function(res){
				var html1 = '';
				var lists = res.listName;
				var detail = res.detail;
				for(var i = 0; i < lists.length; i++){
				html1 += `<li class = "sidelist">
							<a class = "category_name" href="productList.html">${lists[i]}
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
				for (var i = 0; i < sub.length; i++) {
					subHtml += `<li><a style = "background-image:url(${sub[i].subImg})" href="">${sub[i].subTitle}</a></li>`;
				}
				$(".category_detail .category_sub").html(subHtml);
				var products = res.products;
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
				var lis = $('.category').find(".sidelist");
				var boxs = $('.category .sidelist').find(".category_box");

				$('.category').on('mouseenter','.sidelist',function(){
					boxs.eq($(this).index()).css("display","block");

				})
				$('.category').on('mouseleave','.sidelist',function(){
					boxs.eq($(this).index()).css("display","none");
				})
				var boxImg = res.banner_Blist;
				console.log(boxImg);
				var boxHtml = "";
				for (var i = 0; i < boxImg.length; i++) {
					boxHtml += `<img src="${boxImg[i]}" alt="">`;
				}
				$(".bottom_bar").html(boxHtml);
				$(".bottom_bar img").mouseenter(function() {
					$(".bottom_bar img").eq($(this).index()).css('box-shadow',"0px 3px 10px 5px #eee");
					$(".bottom_bar img").eq($(this).index()).animate({marginTop:"8px"},100);
				})
				$(".bottom_bar img").mouseleave(function() {
					$(".bottom_bar img").css('box-shadow',"none");
					$(".bottom_bar img").eq($(this).index()).animate({marginTop:"10px"},100);
				})
				var boxList = res.box_list;
				var bLisHtml = '';
				for (var i = 0; i < boxList.length; i++) {
					bLisHtml += `<div class="case">
						<a target="_blank" href="${boxList[i].href}"><img src="${boxList[i].images}" alt=""></a>
						<div class="color-wrapper" >
						     <div id = "${i}" price ='${boxList[i].price}' class = "addCart" href="">加入购物车</div>
						</div>
						<div class="prodinfo c_3">
							<p class="name">${boxList[i].name}</p>
							<p class="feature">${boxList[i].feature}</p>
							<p class="price rmb-symbol">${boxList[i].price}</p>
						</div>
					</div>`;
				}
				$(".box_list").html(bLisHtml);
			}
		})
		$(".box_list").on("mouseenter",".case",function () {
			$(".color-wrapper").eq($(this).index()).css("display","block");
			$(".prodinfo").eq($(this).index()).css("display","none");
		})
		$(".box_list").on("mouseleave",".case",function () {
			$(".color-wrapper").css("display","none");
			$(".prodinfo").css("display","block");
		})
		$(".box_list").on("click",".addCart",function () {
			sc_msg();
			var price = parseInt($(this).attr('price'));
			alert(price);
			var id = this.id;alert(id);
			var first = $.cookie("goods");
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods', `[{id:${id},num:1,price:${price}}]`, {expires: 7,raw:true});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						var sumPrice = 0;
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7,raw:true});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1,price:price};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7,raw:true});
				}
			}
			sc_car();
		})
		

	}
	function sc_msg(){
				$.ajax({
					url: "data/vivoStore.json",
					type: "get",
					success: function(res){
						var sc_arr = eval($.cookie("goods"));
						var boxList = res.box_list;
						var html = '';
						for(var i = 0; i < sc_arr.length; i++){
							html += `<li>
					<a href=""><img src="${boxList[sc_arr[i].id].images}" alt=""></a>
					<div class="middle">
						<a class="goods" href="">
							<span class="name">${boxList[sc_arr[i].id].name}</span>
							<span class="num">${sc_arr[i].num}</span>
						</a>
						<p class="price rmb-symbol">${boxList[sc_arr[i].id].price}</p>
					</div>
				</li>	`;
						}
						$(".sc_goods ul").html(html);

					}
				})
			}
	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){
			var sc_arr = eval(sc_str);
			var sum = 0;
			var accum = 0;

			for(var i = 0; i < sc_arr.length; i++){
				sum += sc_arr[i].num;
				accum += sc_arr[i].num * sc_arr[i].price
			}
			$(".sc_result").html(`<div>
					<p>共${sum}件商品</p>
					<p class="rmb-symbol">${accum}</p>
				</div>
				<a class="clearing" href="shoppingcart.html">立即结算</a>`);
			$(".sc_num").html(sum);
		}
	}
	/*
	左侧购物车添加点击
			*/
	$(".sc_pic").click(function(){
		/*$(".sc_goods").stop().animate({
			opacity: 1
		})*/
		$(".sc_goods").css('opacity','1');
		//加载已经加入购物车的数据
		sc_msg();

	});
	
	return{
		storeFun:storeFun
		
	}
})