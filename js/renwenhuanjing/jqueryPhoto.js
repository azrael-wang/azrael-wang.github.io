//人文环境
function rmhjLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
//校园活动
function dtbjsLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		$('.jianjie>ul').animate({
			left: - index * 800 + 'px'
		}).stop(false,true)
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
// 社团文化
function stwhLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		// $('.jianjie2>ul').animate({
		// 	left: - index * 800 + 'px'
		// }).stop(false,true)
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
//优秀团队
function yxtdLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
//优秀个人
function yxgrLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
//评优评先
function pypxLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
//才艺展示
function cyzsLunBo(picBox,listBox,prev,next,prevTop,nextTop){
	/*
	*@parma
	*  picBox 大轮播图容器
	* listBox 底部列表轮播图容器
	* prev next下方箭头
	* prevTop nextTop上方箭头
	* */
	function G(s){
		return document.getElementById(s);
	}
	
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPic = G(picBox);
	var oList = G(listBox);
	
	var oPrev = G(prev);
	var oNext = G(next);
	var oPrevTop = G(prevTop);
	var oNextTop = G(nextTop);

	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetWidth;
	// console.log(w1)
	var w2 = oListLi[0].offsetWidth;
	// console.log(w2)

	oPicUl.style.width = w1 * len1 + "px";
	oListUl.style.width = w2 * len2 + "px";

	var index = 0;
	
	var num = 5;
	var num2 = Math.ceil(num / 2);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {left: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {left: - (index - num2 + 1) * w2});
		}else{
			Animate(oListUl, {left: - (len2 - num) * w2});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}
	
	oNextTop.onclick = oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
	
	oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
		clearInterval(timer);
		}
	oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
		timer=setInterval(autoPlay,10000);
		}

	oPrevTop.onclick = oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
	
	var timer=null;
	timer=setInterval(autoPlay,10000);
	function autoPlay(){
		    index ++;
			index = index == len2 ? 0 : index;
			Change();
		}
	
	

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}
}
function jianjieChange (index,direction){
	var currIndex = index + 1
	if(direction == "left")	{
	
	} else {
		$('.jianjie>ul>li').Animate({
			right: currIndex * 800 + 'px'
		})
	}

}