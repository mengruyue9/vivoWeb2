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
		"json":"json"
	},
	shim:{
		"jquery-cookie":["jquery"],
		"startMove":{
			exports:"_"
		}
	}
	
})

require(["index","roll","login_regsit","products","json"],function (index,roll,login_regsit,products,json) {
	index.main();
	roll.roll();
	login_regsit.loginFun();
	products.productsFun();
	json.NEXFun();
})