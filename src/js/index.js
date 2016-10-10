jQuery(function($){
	//轮播图
	$(".lbt").xcarousel({
		width:1263,
		height:474,
		buttons:false,
		type:'fade'
	});
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
	//收起左边的浮动窗口
	$(".left-fixed span").on("click",function(){
		$(".left-fixed").hide();
	});
	$(".l-fixed").on("click",function(){
		$(".left-fixed").show();
	});
	//点击有浮动窗口,回到顶部
		$(".right-fixed ul").children().eq(3).on("click",function(){
			$(document).scrollTop(0);
		});
	//利用Ajax 进行替换图片
	$.ajax({
		type:"get",
		url:"data/goods.json",
		async:true,
		success:function(rel){
			$.each(rel, function(idx,obj) {
				
			});
		}
	});
});