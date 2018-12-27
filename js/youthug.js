function byId(id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}
var timer = null,
	index = 0,
	pics = byId("carousel-inner").getElementsByTagName("div");
	dots = byId("carousel").getElementsByTagName("span");
	size = pics.length,
	boxPos = 0,
	msgBox = byId("msgBox");
	mTitle = byId("msgTitle");
	boxes = msgBox.getElementsByClassName("box");
	mTitleLi = mTitle.getElementsByTagName("li");
function rotation() {
	var out = byId("carousel-inner");
	// 鼠标滑过清除定时器
	out.onmouseover = function() {
		if (timer) {
			clearInterval(timer);
		}
	}
	// 鼠标离开，图片轮播
	out.onmouseout = function() {
		startAutoPlay();
	}
	out.onmouseout();
	
	// 点击圆点切换
	for (var i = 0; i < dots.length; i++) {
		dots[i].id = i;
		dots[i].onclick = function() {
			index = this.id;
			SwitchPicture();
		}
	}
	/* 消息栏 */
	for (var i = 0; i < mTitleLi.length; i++) {
		mTitleLi[i].id = i;
		mTitleLi[i].onclick = function() {
			boxPos = this.id;
			changeBox();
		}
	}
}
// 轮播
function startAutoPlay() {
	timer = setInterval(function() {
		index++;
		if (index >= size) {
			index = 0;
		}
		// 调用切换图片函数
		SwitchPicture()
	}, 3000);
}
function SwitchPicture() {
	for (var i = 0; i < size; i++) {
		pics[i].style.display = "none";
		dots[i].className = "";
	}
	pics[index].style.display = "block";
	dots[index].className = "active";
}
function changeBox() {
	for (var i = 0; i < mTitleLi.length; i++) {
		boxes[i].style.display = "none";
		mTitleLi[i].getElementsByTagName("a")[0].style.color = "#000";
		mTitleLi[i].style.backgroundColor = "#fff";
		// mTitleLi[i].style.className = "";
	}
	mTitleLi[boxPos].getElementsByTagName("a")[0].style.color = "#fff";
	mTitleLi[boxPos].style.backgroundColor = "#1EB450";
	boxes[boxPos].style.display = "block";
	// mTitleLi[boxPos].style.className = "active";
}
window.onload = function() {
	/* 二级菜单 */
	var ul = byId("ul-menu");
	var lis = ul.getElementsByTagName("li");

	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover = function() {
			var subUl = this.getElementsByTagName("ul");
			for (var j = 0; j < subUl.length; j++) {
				subUl[j].style.display = "block";
			}
			// oUl.style.display = "block";
		}
		lis[i].onmouseout = function() {
			var subUl = this.getElementsByTagName("ul");
			for (var j = 0; j < subUl.length; j++) {
				subUl[j].style.display = "none";
			}
		}

	}
	/* 更换背景 */
	var bg = ['url(./img/bg-001.jpg)', 'url(./img/bg-002.jpg)', 'url(./img/bg-003.jpg)'];
	var index = 0;
	setInterval(function() {
		document.body.style.backgroundImage = bg[index++];
		if (index == bg.length) {
			index = 0;
		}
	}, 5000);
	/* 时间 */
	setInterval(function() {
		nowTime = new Date();
		year = nowTime.getFullYear();
		month = nowTime.getMonth() + 1;
		date = nowTime.getDate();
		byId("timer").innerText = year + "年" + month + "月" + date + "日 " + nowTime.toLocaleTimeString();
	}, 1000);
	dots[0].className = "active";
	/* 初始化 */
	SwitchPicture();
	changeBox();
	/* 初始化完毕 */
	rotation();
}