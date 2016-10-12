jQuery(function($){
	//获取cook中的内容
	var cookies=getCookie("src1");
	//把字符串转化为数组
	var cooklist=JSON.parse(cookies);
	//遍历数组,生成需要的li
	for (var i=0;i<cooklist.length;i++) {
		var $img=$("<img />").attr("href",cooklist[i].src);
		var $span=$("<span></span>").html(cooklist[i].name);
		var $div1=$("<div/>").append($img).append($span).addClass("box1");
		var $span1=$("<span/>").html(cooklist[i].prc).addClass("span1");
		var $spand1=$("<span/>").html("-");
		var $spand2=$("<span/>").html(cooklist[i].num);
		var $spand3=$("<span/>").html("+");
		var $div2=$("<div/>").append($spand1).append($spand2).append($spand3).addClass("span2");
	}
});
