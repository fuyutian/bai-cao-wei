jQuery(function($){
	//所有零食下的列表
	$(".head-bottom ul").children().eq(0).on("mouseenter",function(){
		$(".hb-list").css("display","block");
	}).on("mouseleave",function(){
		$(".hb-list").css("display","none");
		});
	$(".hb-list").on("mouseenter",function(){
		$(".hb-list").css("display","block");
	}).on("mouseleave",function(){
		$(".hb-list").css("display","none");
		});
	$(".hb-list li").on("mouseenter",function(){
		$(this).addClass("bg").siblings("li").removeClass("bg");
	}).on("mouseleave",function(){
		$(".hb-list li").removeClass("bg");
	})
	//给第一个小图片加上边框
	$(".shar-list li").eq(0).addClass("frame");
	//点击下面的小图片进行大图片
	$(".shar-list li").on("click",function(){
		var index=$(this).index();
		$(this).addClass("frame").siblings().removeClass("frame");
		$(".shar img").eq(index).show().siblings().hide();
	});
	//引用插件,实现放大镜效果
	
});
