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

	//从cook中获取图片的src ,根据ajax从json中获取信息,与src比较,取得相同的添加到页面上
	var $src=getCookie("src");
	//全局配置ajax
	$.ajaxSetup({
		url:"../data/goods.json",
		async:true,
		dataType:"json",
		success:function(rel){
			console.log(rel);
		}
	});
	
	//从goods.json取出信息进行比较
	$.ajax({
		success:function(rel){
			$.each(rel, function(idx,obj) {
				if (obj.src == $src) {
					$("<img />").attr("src",obj.src1).appendTo($(".shar1"));
					var $h4=$("<h4/>").html(obj.name);
					var $p=$("<p/>").html(obj.jirshao);
					var $div=$("<div/>").append($h4).append($p);
					$div.appendTo($(".date-minute")).insertBefore($(".pro"));
					var $div1=$("<div/>").html("价格").append($("<span/>").html(obj.prc)).addClass("pro1");
					var $li1=$("<li/>").html(obj.sell);
					var $li2=$("<li/>").append($("<a></a>").attr("href","#").html(obj.count));
					var $ul1=$("<ul/>").append($li1).append($li2);
					var $div2=$("<div/>").append($ul1).addClass("pro2");
					var $li3=$("<li/>").html("送货至");
					var $li4=$("<li/>").append($("<span/>").html("广东"));
					var $li5=$("<li/>").html("运费6.00元  满68.00包邮");
					var $ul2=$("<ul/>").append($li3).append($li4).append($li5).addClass("deli");
					var $div3=$("<div/>").html("1").addClass("nums");
					var $div4=$("<div/>").html("+").addClass("jia");
					var $div5=$("<div/>").html("-").addClass("jian");
					var $div6=$("<div/>").addClass("amount").append($div3).append($div4).append($div5);
					var $div7=$("<div/>").html("加入购物车").addClass("amount1");
					$(".pro").append($div1).append($div2).append($ul2).append($div6).append($div7);
					//点击加入购物车效果
					//定义一个空数组,便于保存获取到的对象.
					var goods_list=[];
					$(".amount1").on("click",function(){
						$(".cover").show();
						$(".lap").show();
						var num=$(".shop span").html()*1+1;
						$(".shop span").html(num);
						//定义一个空的对象
						var goods={};
						//获取已有的cook
						var oldcook=getCookie("srcx");
						if (oldcook == "") {
							goods.src=obj.src1;
							goods.num=$(".nums").html();
							goods.prc=obj.prc;
							goods.name=obj.name;
							goods_list.push(goods);
							console.log("y");
						}else{
							//把cook字符串转化成数组
							goods_list=JSON.parse(oldcook);
							//遍历字符串,是否有相同的src
							var t=true;
							for (var i=0;i<goods_list.length;i++) {
								console.log(goods_list[i].src);
								console.log(obj.src);
								if (goods_list[i].src == obj.src1) {
									goods_list[i].num=parseInt(goods_list[i].num)+parseInt($(".nums").html());
									t=false;
									break;
								}
							}
							//如果没有相同的src 把信息存入到新的对象中并加入到数组
							if (t) {
								goods.src=obj.src1;
								goods.num=$(".nums").html();
								goods.prc=obj.prc;
								goods.name=obj.name;
								goods_list.push(goods);
							}
						}
						console.log(goods_list);
						//把数组转换成字符串
						var goods_str=JSON.stringify(goods_list);
						//把数组存入到cook中
						var d = new Date;
						d.setDate(d.getDate() + 10);
						setCookie("srcx",goods_str,d,"/");
					});
				}
			});
			//加入放大镜效果
			$(".shar1").xzoom();
			//关闭遮盖层和跳转到购物车
			$(".lap1").on("click",function(){
				$(".cover").hide();
				$(".lap").hide();
			})
			$(".lap2").on("click",function(){
				$(".cover").hide();
				$(".lap").hide();
				location.assign("shopping.html");
			})
		}
	});
	
});
