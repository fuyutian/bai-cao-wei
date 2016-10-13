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
		console.log(usercook+phonecook+passcook);
		//判断用户输入的信息
		if (user == "" || pass=="") {
			$(".tishi").show();
			$(".tishi h4").html("填写信息");
		}else	if (user==usercook || user == phonecook) {
					if ( pass == passcook) {
						location.assign("../index.html");
						$(".tishi").hide();
					}else{
						$(".tishi").show();
						$(".tishi h4").html("密码错误");
					}
				}else{
					$(".tishi").show();
					$(".tishi h4").html("帐号错误");
				}
	});
});
