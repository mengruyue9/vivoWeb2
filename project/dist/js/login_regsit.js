define(["jquery","jquery-cookie"],function($) {
	function loginFun() {
		$("#registBtn").click(function() {
			/*open("registerPage.html");*/
			$("#register_content").css("display","block");
			document.title ="vivo帐号注册";
			$("#login_content").css("display","none");

		})
	$("#username").blur(function(){//用户名文本框失去焦点触发验证事件  
		 var username = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		 if(!username.test($("#username").val()))
		 {
		  $(".namTip").html('请输入有效的手机号码');
		 }
        else  
        {  
            $(".namTip").html("输入正确");  
        }  
     });  
      $("#password").blur(function(){//用户密码框失去焦点触发验证事件  
      	var reg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
        if(!reg.test($("#password").val()))//只处验证和上面一样  
        {  
            $(".pwTip").html("密码由大写字母+小写字母+数字，8-16位组成！");  
        }  
        else  
        {  
            $(".pwTip").html("输入正确");  
        }  
     });  
    
		/*$("#username").blur(function () {
			alert($("#username"));
			//2、如何对用户名进行验证
			 if(!$(this).val || !$(this).val.match(/([w]){2,15}$/))//只处验证不能为空并且只能为英文或者数字或者下划线组成的２－１５个字符
		        {
		            $(".verify").html("用户名不能为空且只能为英文或者数字");
		        }
		        else
		        {
		            $(".verify").html("输入正确");
		        }


		})
		*/
	}

	return {
		loginFun: loginFun
	} 
})