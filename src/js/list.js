jQuery(function($){
	//配置全局ajax请求
	$.ajaxSetup({
		url:"../data/goods.json",
		async:true,
		success:function(rel){
			console.log(rel);
		}
	});
	//设置一些全局变量
	var $list=$(".re-shop");
	//利用ajax进行商品的替换更新
	$.ajax({
		success:function(rel){
			var i=0;
			$.each(rel, function(idx,obj) {
				if (obj.class == "re") {
					//生成图片 添加到ul中
					var $img=$("<img />").attr("src",obj.src);
					var $a=$("<a></a>").attr("href","details.html");
					var $div1=$("<div/>").addClass("re-left");
					var $li=$("<li/>");
					$a.append($img).appendTo($div1);
					//生成价格名字添加到ul中
					var $span1=$("<span/>").append($("<stong/>").html(obj.prc)).addClass("price");
					var $span2=$("<span/>").html(obj.nrc).addClass("disbox");
					var $span3=$("<span/>").html(obj.count).addClass("count");
					var $div2=$("<div/>").append($span1).append($span2).append($span3).addClass("buy-cost");
					var $h3=$("<h3></h3>").html(obj.name);
					var $p=$("<p/>").html(obj.jirshao);
					var $div3=$("<div/>").append($h3).append($p).append($div2).addClass("re-right");
					//生成购买按钮
					var $div4=$("<div/>").append($("<a></a>").html(obj.word).attr("href","details.html")).addClass("buy");
					$div3.append($div4);
					$li.append($div1).append($div3).appendTo($list);
				}
			});
			
			//  点击图片或购买 取得id 保存到cook中
			$list.on("click","img",function(){
				var $src=$(this).attr("src");
				var d = new Date;
				d.setDate(d.getDate() + 10);
				setCookie("src",$src,d,"/");
			});
			//点击购买按钮.获取src
//			$list.on("click",".buy",function(){
//				var $src=$(this).siblings(".re-left").find("img").attr("src");
//				console.log($src);
//			});
		}
	});
	//利用懒加载,实现ajax的加载
	var $buy1=$("#buy1");
	var $buy2=$("#buy2");
	var $buy3=$("#buy3");
	var $buy4=$("#buy4");
	var $buy5=$("#buy5");
	var $buy6=$("#buy6");
	var $buy7=$("#buy7");
	//产生滚动事件,来实现懒加载
	$.ajax({
		success:function(rel){
			var i=0;
			$(window).on("scroll",function(){
				if ($(document).scrollTop() >= 900) {
					i++;
					$.each(rel, function(idx,obj) {
						if (1 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy1);
						}
						if (2 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy2);
						}
						if (3 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy3);
						}
						if (4 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy4);
						}
						if (5 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy5);
						}
						if (6 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy6);
						}
						if (7 == i && obj.star == i) {
							var $span1=$("<span/>").html(obj.prc).addClass("npr");
							var $span2=$("<span/>").html(obj.nrc).addClass("opr");
							var $span3=$("<span/>").html(obj.count).addClass("count");
							var $div1=$("<div/>").append($span1).append($span2).append($span3).addClass("brand-buy");
							var $a=$("<a></a>").append($("<img />").attr("src",obj.src)).attr("href","details.html");
							var $p1=$("<p/>").append($("<span/>").html(obj.name));
							var $p2=$("<p/>").append($("<span/>").html(obj.jirshao));
							var $span=$("<span/>").append($("<a/>").html(obj.word).attr("href","shopping.html")).addClass("buycate");
							var $li=$("<li/>");
							$li.append($a).append($p1).append($p2).append($span).append($div1).appendTo($buy7);
						}
						
					});
				}
			});
			//  点击图片或购买 取得id 保存到cook中
			$(".buy-off").on("click","img",function(){
				var $src=$(this).attr("src");
				var d = new Date;
				d.setDate(d.getDate() + 10);
				setCookie("src",$src,d);
			});
		}
	});
	
});
