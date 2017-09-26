//	加载动画 
$(function(){
	$('#myloader').addClass('wancheng');
	setTimeout(function(){
		$('#myloader').css('display','none')
	},1500);
})
//	轮播图
$(function(){
	var num=0,timeban;
	var imgs = $('#banner ul li');
	$('#banner').height(imgs.height());
	for (var i=0;i<imgs.length-1;i++) {
		if (i==0) {
			$('#banner ol').append('<li class="active"></li>');
		}else{
			$('#banner ol').append('<li></li>');
		}
	}
	//获取屏幕的宽度
	var window_width = $(window).width();
    $(window).resize(function(){
        window_width = $(window).width();
		imgs.css({width:window_width});
		$('#banner').css('height',imgs.height());
		imgplay();
	});
	//console.log(window_width);
	//  轮播图的运动规则
    function imgplay(length,num1,num2){
    	clearInterval(timeban);
		//  图片
    	if (num==length) {
	    	num=num1;
	    	$('#banner ul').css({left:-(num2)*window_width});
	    }
	    $('#banner ul').stop().animate({left:-num*window_width},500);
		//	圆点
	    if(num==imgs.length-1){
			$('#banner ol li').eq(num2).addClass('active').siblings().removeClass('active');
		}
		$('#banner ol li').eq(num).addClass('active').siblings().removeClass('active');
		timeban = setInterval(nextplay,2000);
    }
	function prevplay(){
	    num--;
	    imgplay(-1,imgs.length-2,imgs.length-1);
	}
	function nextplay(){
	  	num++;
	  	imgplay(imgs.length,1,0);
	}
	//轮播圆点
	$('#banner ol li').mouseover(function(){
		clearInterval(timeban);
        $(this).addClass('active').siblings().removeClass('active');
        var i = $(this).index();
        $('#banner ul').stop().animate({left:-i*window_width},500);
        num = i;
        timeban = setInterval(nextplay,2000);
    });
//	自动轮播
  	timeban = setInterval(nextplay,3000);
  	$('#banner .next').click(nextplay);
  	$('#banner .prev').click(prevplay);
	$('#banner ul li').hover(
		function(){
			clearInterval(timeban);
		},
		function(){
			timeban = setInterval(nextplay,3000);
		}
	)
})

//   合作伙伴图片无缝滚动
$(function(){
    var i=0,timecom;
    var firstimg=$('.huaodong-img').first().clone(); //复制第一张图片
    $('.roll').append(firstimg).width($('.huaodong-img').length*($('.huaodong-img').width())); 
    //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
    function compy(){
    	i++;
    	if (i==$('.huaodong-img').length) {
    		i=1;
    		$('.roll').css({left:10});
   		};
  		$('.roll').stop().animate({left:10+(-i*1400)},500);
	}
    timecom = setInterval(compy,2000);
    $('.huaodong-img').hover(function(){
    	clearInterval(timecom);
    },function(){
    	timecom = setInterval(compy,2000);
    })
})

