define(["jquery","jquery-cookie"],function($) {
	function loginFun() {
		$("#registBtn").click(function() {
			/*open("registerPage.html");*/
			$("#register_content").css("display","block");
			document.title ="vivo帐号注册";
			$("#login_content").css("display","none");

		})
		
	}

	return {
		loginFun: loginFun
	} 
})