jQuery(function($){
	var $lbt=$(".lbt-list");
	var $hnl=$("#hnl-list");
	var $choose=$("#choose-list");
	var $nuts=$("#nuts-list");
	var $meat=$("#meat-list");
	var $fresh=$("#fresh-list");
	//利用Ajax进行图片的添加 实现轮播图效果
	$.ajax({
		type:"get",
		url:"data/goods.json",
		async:true,
		success:function(rel){
			//通过遍历查找,生成图片和链接
			$.each(rel, function(idx,obj) {
				if (obj.class == "lbt") {
					var $a=$("<a></a>").attr("href","html/list.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($lbt);
				}
				if (obj.class == "hnl") {
					var $a=$("<a></a>").attr("href","html/details.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($hnl);
				}
				if (obj.class == "choose") {
					var $a=$("<a></a>").attr("href","html/details.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($choose);
				}
				if (obj.class == "nuts") {
					var $a=$("<a></a>").attr("href","html/details.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($nuts);
				}
				if (obj.class == "meat") {
					var $a=$("<a></a>").attr("href","html/details.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($meat);
				}
				if (obj.class == "fresh") {
					var $a=$("<a></a>").attr("href","html/details.html");
					var $img=$("<img />").attr("src",obj.src);
					var $li=$("<li/>");
					$a.append($img);
					$li.append($a).appendTo($fresh);
				}
			});
			//轮播图函数
			$(".lbt").xcarousel({
				width:1263,
				height:474,
				buttons:false,
				type:'fade'
			});
			//  点击图片或购买 取得id 保存到cook中
			$(".goods").on("click","img",function(){
				var $src=$(this).attr("src");
				var d = new Date;
				d.setDate(d.getDate() + 10);
				setCookie("src",$src,d,"/");
			});
		}
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
	
});