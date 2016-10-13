jQuery(function($){
	//获取cook中的内容
	var oldcook=getCookie("srcx");
	if (oldcook){
		//把字符串转化为数组
		var cooklist=JSON.parse(oldcook);
		//遍历数组,生成需要的li
		for (var i=0;i<cooklist.length;i++) {
			var $img=$("<img />").attr("src",cooklist[i].src);
			var $span=$("<span></span>").html(cooklist[i].name);
			var $div1=$("<div/>").append($img).append($span).addClass("box1");
			var $span1=$("<span/>").html(cooklist[i].prc).addClass("span1");
			var $spand1=$("<span/>").html("-").addClass("jian1");
			var $spand2=$("<span/>").html(cooklist[i].num);
			var $spand3=$("<span/>").html("+").addClass("jia1");
			var $div2=$("<div/>").append($spand1).append($spand2).append($spand3).addClass("span2");
			var $span3=$("<span/>").addClass("span3");
			var $span4=$("<span/>").addClass("span4");
			var $span5=$("<span/>").html("删除").addClass("span5");
			var $div3=$("<div/>").append($span1).append($div2).append($span3).append($span4).append($span5).addClass("box2");
			var $li=$("<li/>").append($div1).append($div3).appendTo($(".shop-list"));
			var no=$div2.children("span").eq(1).html()*1;
			var prc=$span1.html()*1;
			$span3.html(no*prc);
		}
	}
	//点击加减符号,实现商品数量的加减
	$(".shop-list").on("click","li .jian1",function(){
		//取得 span 里的数值
		var str=$(this).next().html()*1-1;
		if (str <= 0) {
			str=1;
		}
		$(this).next().html(str);
	});
	$(".shop-list").on("click","li .jia1",function(){
		//取得 span 里的数值
		var str=$(this).prev().html()*1+1;
		$(this).prev().html(str);
	})
	//点击删除按钮,删除本件商品
	var $lid=$(".shop-list li");
	var $delt=$lid.find(".span5");
	$.each($delt, function(idx,del) {
		$(this).on("click",function(){
			var cook=getCookie("srcx");
			if (cook) {
				var arr=JSON.parse(cook);
				$lid.eq(idx).remove();
				arr.splice(idx,1);
				var str=JSON.stringify(arr);
				var d=new Date();
				d.setDate(d.getDate()+10);
				setCookie("srcx",str,d,"/");
			}
		});
	});
	//点击全部删除,删除全部商品
	$(".s1").on("click",function(){
		$(".shop-list li").remove();
		var cook=getCookie("srcx");
		if (cook) {
			var arr=JSON.parse(cook);
			var length=arr.length;
			arr.splice(0,length);
			var str=JSON.stringify(arr);
			var d=new Date();
			d.setDate(d.getDate()+10);
			setCookie("srcx",str,d,"/");
		}
	})
});
