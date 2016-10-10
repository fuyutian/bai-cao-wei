jQuery(function($){
	//点击登录按钮,进行验证
	$(".btn").on("click",function(){
		//获取输入框的值
		var user=$(".f-input input").val();
		var pass=$(".f-pass input").val();
		//获取cook中的值进行比较
		var usercook=getCookie("username");
		var phonecook=getCookie("phone");
		var passcook=getCookie("password");
		if (user==usercook || user == phonecook) {
			if ( pass == passcook) {
				return "";
			}else{
				alert("密码错误");
			}
		}else{
			alert("帐号错误");
		}
	});
});
