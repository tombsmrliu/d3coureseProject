/**
 * Created by Administrator on 2017/7/1 0001.
 */
var leftDiv = document.getElementById("leftDiv");
var rightDiv = document.getElementById("rightDiv");
var mengDiv = document.getElementById("mengDiv");
var rightImg = document.getElementById("rightImg");

leftDiv.onmouseover = function () {
    mengDiv.style.display = "block";
    rightDiv.style.display = "block";
};

leftDiv.onmouseout = function () {
    mengDiv.style.display = "none";
    rightDiv.style.display = "none";
};

leftDiv.onmousemove = function (ev) {
    var myEvent = ev || event;
    var newLeft = myEvent.clientX -(mengDiv.clientWidth / 2);
    var newTop = myEvent.clientY - (mengDiv.clientHeight / 2);
    newLeft > leftDiv.clientWidth - mengDiv.clientWidth ? newLeft = leftDiv.clientWidth - mengDiv.clientWidth:newLeft;
    newTop > leftDiv.clientHeight - mengDiv.clientHeight ? newTop = leftDiv.clientHeight - mengDiv.clientHeight:newTop;
    newLeft < 0 ? newLeft = 0 : newLeft;
    newTop < 0 ? newTop = 0 : newTop ;
    mengDiv.style.left = newLeft + "px";
    mengDiv.style.top = newTop + "px";

    //确定右侧大图显示哪块区域
    var scale = leftDiv.clientWidth / mengDiv.clientWidth;
    rightImg.style.left = -scale * newLeft + "px";
    rightImg.style.top = -scale * newTop + "px";
};