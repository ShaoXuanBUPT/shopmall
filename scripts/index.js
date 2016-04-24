$(function(){
	//搜索框
	$("#search").keyup(function(e){
		if(e.which==13)
		{
			alert("目前还没有商品哦！");
		}
		})
	//导航栏
	$("#nav li").mouseover(function(){
		$(this).find("div").show();
		}).mouseout(function(){
			$(this).find("div").hide();
			})
	//大屏广告
	var index=0;
	var length=$("#title a").length;
    var newhref = $("#ad a").eq(index).attr("href");
	function a(x){
		$("#ad a").attr("href",newhref).
            find("img").eq(x).stop(true,true).fadeIn().siblings().fadeOut();
		$("#title a").eq(x).addClass("selected").siblings().removeClass("selected");
	}
	$("#title a").mouseover(function(){
		index=$(this).index();
		a(index);
		}).eq(0).mouseover();
	$("#ad").mouseover(function(){
		clearInterval(show);
		}).mouseout(function(){
			show=setInterval(function(){
				a(index);
				index++
				if(index==length)index=0;
				},3000)
			}).mouseout();
})