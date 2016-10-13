jQuery(function($){
	//背景图片进行轮播
	var i=0;
	$(".register-list").children().eq(i).css("opacity",0.5).siblings("li").css("opacity",0);
	setInterval(function(){
		if (i>=5) {
			i=0;
		}
		i++;
		$(".register-list").children().eq(i).animate({"opacity":0.5}).siblings("li").animate({"opacity":0});
	},3000)
	//当输入框获取焦点时
	$(".re-mode input").on("focus",function(){
		$(this).parent().next().css("display","block");
		$(this).prev().animate({"left":-70});
	}).on("blur",function(){
		$(this).parent().next().css("display","none");
	});
	
	//运用正则表达式,来验证输入的信息,
	//判断用户名
	var t1=0,t2=0,t3=0,t4=0,t5=0;
	$(".re-form input").eq(0).on("blur",function(){
		var str=$(this).val();
		var istrue=/([\u4E00-\u9FA5]|\w){4,20}/.test(str);
		if (istrue) {
			$(this).parentsUntil("ul").find("p").html("输入正确");
			t1=1;
		}else{
			$(this).parentsUntil("ul").find("p").html("输入错误");
			t1=0;
		}
	});
	//判断手机号
	$(".re-form input").eq(1).on("blur",function(){
		var str=$(this).val();
		var istrue=/^1\d{10}$/.test(str);
		if (istrue) {
			$(this).parentsUntil("ul").find("p").html("输入正确");
			t2=1;
		}else{
			$(this).parentsUntil("ul").find("p").html("输入错误");
			t2=0;
		}
	});
	//判断验证码
	//点击div随机生成六位验证码.
	$(".num").on("click",function(){
		var num="";
		for (var i=0;i<6;i++) {
			num+=parseInt(Math.random()*10);
		}
		$(this).html(num);
		$(".re-form input").eq(2).on("blur",function(){
			var str=$(this).val();
			if (str==num) {
				$(this).parentsUntil("ul").find("p").html("输入正确");
				t3=1;
			}else{
				$(this).parentsUntil("ul").find("p").html("输入错误");
				t3=0;
			}
		});
	});
	//判断用户密码
	$(".re-form input").eq(3).on("blur",function(){
		var str=$(this).val();
		var istrue=/\w{6,20}/.test(str);
		if (istrue) {
			$(this).parentsUntil("ul").find("p").html("输入正确");
			t4=1;
		}else{
			$(this).parentsUntil("ul").find("p").html("输入错误");
			t4=0;
		}
	//确认密码是否正确
		$(".re-form input").eq(4).on("blur",function(){
			var str1=$(this).val();
			if (str===str1) {
				$(this).parentsUntil("ul").find("p").html("输入正确");
				t5=1;
			}else{
				$(this).parentsUntil("ul").find("p").html("输入错误");
				t5=0;
			}
		});
	});
	//点击注册时,把数据保存到cook中
	$(".re-form input").eq(5).on("click",function(){
		//判断是否填写完全正确
		if (t1==1 && t2==1 && t3==1 && t4==1 && t5==1) {
			$(".tanchu").hide();
			//获取用户名 手机号码 和密码
			var user=$(".re-form input").eq(0).val();
			var phone=$(".re-form input").eq(1).val();
			var pass=$(".re-form input").eq(3).val();
			var d = new Date;
			d.setDate(d.getDate() + 10);
			setCookie("username",user,d);
			setCookie("phone",phone,d);
			setCookie("password",pass,d);
			console.log(decodeURIComponent(document.cookie));
			location.assign("../index.html");
		}else{
			$(".tanchu").show();
		}
	});
	
});
