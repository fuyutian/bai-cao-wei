;(function($){
	$.fn.zoom=function(option){
		var defaust={
			width:300,
			height:300,
			gap:30,
			position:'right'
		}
		//扩展 defaust
		var opt=$.extend({},defaust,option);
		//遍历 每个 对象
		this.each(function(){
			var $self=$(this);
			//设置全局变量
			var $big, //大图外框
				$bigImg,  //大图
				$min,    //放大镜
				ratio ;  //比例
			 var $smallImg=$("img",$self);
			 var bigUrl=$smallImg.attr("data-big") || $smallImg.attr("src");
			 //添加鼠标事件
			 $self.on("mouseenter",function(e){
			 	$big.appendTo("body");
			 	$min.css({
					width:opt.width/ratio,
					height:opt.height/ratio,
				}).appendTo($self);
			 }).on("mouseleave",function(){
			 	$big.remove();
			 	$min.remove();
			 }).on("mousemove",function(e){
			 	var top = e.pageY - $smallImg.offset().top - $min.outerHeight()/2;
				var left = e.pageX - $smallImg.offset().left - $min.outerWidth()/2;

				// 防止放大镜移出小图区域
				if(left<0){
					left = 0;
				}else if(left > $smallImg.outerWidth() - $min.outerWidth()){
					left = $smallImg.outerWidth() - $min.outerWidth();
				}

				if(top < 0 ){
					top = 0;
				}else if(top > $smallImg.outerHeight() - $min.outerHeight()){
					top = $smallImg.outerHeight() - $min.outerHeight();
				}

				$min.css({
					top:top,
					left:left
				});


				// 移动大图
				// console.log($bigImg,ratio)
				$bigImg.css({
					top:-top*ratio,
					left:-left*ratio
				})
			 });
			 //当小图加载完成执行初始化函数
			 $smallImg.load(function(){
			 	init();
			 });
			 //初始化函数
			 function init(){
			 	//添加全局类名 fzoom 并设置宽度
			 	$self.addClass("fzoom").width($smallImg.outerWidth());
			 	//创建大图
			 	$big=$("<div/>").addClass("fzoom-big");
			 	$bigImg=$("<img />").attr("src",bigUrl);
			 	//把大图添加到页面中
			 	$big.append($bigImg).appendTo("body");
			 	//大图加载完成,算出比例
			 	$bigImg.load(function(){
			 		ratio=$bigImg.outerWidth()/$smallImg.outerWidth();
			 		$big.remove();
			 	});
			 	$big.css({
			 		left:$smallImg.offset().left + $smallImg.outerWidth() + 30,
			 		top:$smallImg.offset().top
			 	});
			 	//创建放大镜
			 	$min=$("<span/>").addClass("fzoom-min");
			 }
		});
		return this;
	}
})(jQuery);
