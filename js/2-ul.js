window.onload=function () {
	/* body... */
	var list1=document.querySelectorAll(".list")[0];
	var list2=document.querySelectorAll(".list")[1];
	var prev=document.querySelector("#prev");
	var next=document.querySelector("#next");
	var moved=true;
	var btn=document.querySelectorAll(".seach>ul>li");
	prev.onclick=function () {
		/* body... */
		if(parseInt(list1.style.left)==0){
			list2.style.left="-5216px";
		};
		if (parseInt(list2.style.left)==0) {
			list1.style.left="-5216px";
		}
		if (moved) {
			moveList1(1304);
			moveList2(1304);
		}

	}
	next.onclick=function () {
		/* body... */
		if (parseInt(list1.style.left)==-3912) {
			list2.style.left="1304px";
		}
		if (parseInt(list2.style.left)==-3912) {
			list1.style.left="1304px";
		}
		if (moved) {
			moveList2(-1304);
			moveList1(-1304);
		}
		// console.log(list1.style.left+"      "+1);
		// console.log(list2.style.left+"      "+2);
	}
	function moveList1(offset){
		if (moved) {
			var leftFirst=parseInt(list1.style.left);
			var leftNew=leftFirst+offset;
			var distence;
			var t=window.setInterval(function () {
				moved=false;
				/* body... */
				if (offset>0) distence=Math.ceil(offset/4);
				else distence=Math.floor(offset/4);
				leftFirst+=distence;
				offset-=distence;
				list1.style.left = leftFirst+'px';
				if (offset==0) {clearInterval(t);moved=true;}
			}, 100);
		}
		// list1.style.left = leftNew+'px';
		// console.log(list1.style.left+"      "+1);
	}
	function moveList2(offset){
		if (moved) {
			var leftFirst=parseInt(list2.style.left);
			var leftNew=leftFirst+offset;
			var distence;
			var t=window.setInterval(function () {
				moved=false;
				/* body... */
				if (offset>0) distence=Math.ceil(offset/4);
				else distence=Math.floor(offset/4);
				leftFirst+=distence;
				offset-=distence;
				list2.style.left = leftFirst+'px';
				console.log(moved);
				if (offset==0) {clearInterval(t);moved=true;}
			}, 100);
		}
		// console.log(list2.style.left+"    " +2);
		// list2.style.left = leftNew+'px';
		console.log(moved);
		// console.log(list2.style.left+"      "+2);
	}
	//自动播放；
	var timer;
	var e=0;
	function run(){
		timer=setInterval(function(){
			if (parseInt(list1.style.left)==0||parseInt(list2.style.left)==0) {
				btn[1].style.borderColor="#008B8B";
				// alert("783");
				btn[0].style.borderColor="#FFFFFF"
				btn[2].style.borderColor="#FFFFFF"
				btn[3].style.borderColor="#FFFFFF"
			}
			if (parseInt(list1.style.left)==-1304||parseInt(list2.style.left)==-1304) {
				btn[2].style.borderColor="#008B8B";
				btn[0].style.borderColor="#FFFFFF"
				btn[1].style.borderColor="#FFFFFF"
				btn[3].style.borderColor="#FFFFFF"
			}
			if (parseInt(list1.style.left)==-2608||parseInt(list2.style.left)==-2608) {
				btn[3].style.borderColor="#008B8B";
				btn[1].style.borderColor="#FFFFFF"
				btn[0].style.borderColor="#FFFFFF"
				btn[2].style.borderColor="#FFFFFF"
			}
			if (parseInt(list1.style.left)==-3912||parseInt(list2.style.left)==-3912) {
				btn[0].style.borderColor="#008B8B";
				btn[1].style.borderColor="#FFFFFF"
				btn[2].style.borderColor="#FFFFFF"
				btn[3].style.borderColor="#FFFFFF"
			}
			if (moved) {
				next.click();
			}
			// for (var i = 0; i < btn.length; i++) {
			// 	btn[i].style.borderColor="#FFFFFF"
			// }
		},4000);
	}
	run();
	function stop(){
		clearInterval(timer);
	}
	var content=document.querySelector(".city");
	// console.log(content);
	// content.onmouseover=stop;
	// content.onmouseout=run;
//焦点；

	btnMoveList();
	var btn=document.querySelectorAll(".seach>ul>li");
	function btnMoveList(){
		var btn=document.querySelectorAll(".seach>ul>li");
		// var leftFirst_1=parseInt(list1.style.left);
		// var leftFirst_2=parseInt(list2.style.left);
		for (var i = 0; i < btn.length; i++) {
			btn[i].setAttribute("data-i",i);
		// console.log(btn);
		var choice=0;
			btn[i].addEventListener("click",function(){
				for (var i=0;i<btn.length;i++){
					btn[i].style.borderColor='#FFFFFF';
				}
				var leftFirst_1=parseInt(list1.style.left);
				var offset
				var i=this.dataset.i;
				var leftNew=i*(-1304);
				// if (leftFirst_1<=0&&leftFirst_1>-3912) {
					offset=leftNew-leftFirst_1;
				// } else {
					// offset=leftNew-leftFirst_2;
				// }
				if (moved) {
					moveList1(offset);
					moveList2(offset);
				}
				this.style.borderColor=" #008B8B";
				console.log();
				// stop();
				//  console.log(list1.style.left+"      "+1);
				//  console.log(list2.style.left+"      "+2);
			})
			// run();
		}
	}
}
