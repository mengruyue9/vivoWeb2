console.log("加载成功");

require.config({
	paths:{
		"jquery":"jquery-1.10.1.min",
		"jquery-cookie":"jquery.cookie",
		"startMove":"startMove",
		"index":"index",
		"roll":"roll",
		"login_regsit":"login_regsit",
		"products":"products",
		"json":"json",
		"vivoStore":"vivoStore",
		"detailPage":"detailPage"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"startMove":{
			exports:"_"
		}
	}
	
})

require(["index","roll","login_regsit","products","json","vivoStore","detailPage"],function (index,roll,login_regsit,products,json,vivoStore,detailPage) {
	index.main();
	roll.roll();
	login_regsit.loginFun();
	products.productsFun();
	json.NEXFun();
	vivoStore.storeFun();
	detailPage.detailFun();

})