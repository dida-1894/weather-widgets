window.onload=function(){{
	var list=document.querySelector(".list");
	var city=document.querySelectorAll(".list>li");
//	console.log(city);
	var btn=document.querySelectorAll(".seach>ul>li");
//	console.log(btn)
	var next=document.querySelector("#next");
	var prev=document.querySelector("#prev");
//	console.log(next);

	console.log(list.style.left);
//滚动
	function move(offset){
	
		
//		list.style.left=newLeft+"px";
		var leftFirst=parseInt(list.style.left)
		
		var newLeft=offset+leftFirst;
//		console.log(newLeft);
		var times=20;
		var realTime=400;
		var speed=offset/times;
		var intervalTime=realTime/times;
		var count=0;
		if(leftFirst<0&&leftFirst>-4020);
		{
			var t=setInterval(function(){
			leftFirst+=speed;
			list.style.left=leftFirst+"px";
			count++;
			if(count==times)clearInterval(t);
			},intervalTime)
			list.style.left=newLeft+"px";
			console.log(1);
			console.log(list.style.left+"   "+1);
		}
		
		
		if(parseInt(list.style.left)>0){
			var t=setInterval(function(){
				leftFirst+=(-offset)*3/times;
				if(leftFirst==(-3912))clearInterval(t);
			},intervalTime);
			list.style.left=(-3912)+"px";	
			console.log(list.style.left);
			console.log(2)
		}
//		if(parseInt(list.style.left)<-3912){
//			console.log(2);
//		}
	}
//上一张
	prev.onclick=function(){
		move(1304);
	}
//下一张	
	next.onclick=function(){
		move(-1304);
	}
////自动播放	
//	var timer;
//	function play(){
//		var i=0;
//		timer=setInterval(function(){
//			prev.click()
//			btn[i].click();
//			i++;
//			if(i>3)i=0;
//		},3000);
//	}
////	play();
////停止自动播放	
//	var content=document.querySelector(".city");
//	console.log(content);
//	function stop(){
//		clearInterval(timer);
//		
//	}
//	
////	content.onclick=stop;
////	content.ondblclick=play;
//
//
//
////实现焦点
//btnShow();
//	
//	function btnShow(){
//		for (var i=0; i<btn.length;i++) {
//			btn[i].setAttribute("data-i",i);
//			btn[i].addEventListener("click",function(){
//				for (var i=0;i<btn.length;i++) {
//					btn[i].style.borderColor='#FFFFFF';
//				}
//				var num=parseInt(this.dataset.i); 
//				list.style.left=num*(-1304)+"px";
//				this.style.borderColor=" #008B8B";
////				stop();
//			})
//			
//		}
//	}
	

}}
