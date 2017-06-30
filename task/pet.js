/**
 * Created by Administrator on 2017/7/1 0001.
 */

var divElement = document.getElementById("pet");
divElement.style.background = "url(pet.gif)";

//添加鼠标按下事件
divElement.onmousedown = function () {
    //获取此时的鼠标坐标
    var oldX = event.x;
    var oldY = event.y;
    var oldLeft = divElement.offsetLeft;
    var oldTop = divElement.offsetTop;
    var disX = oldX - oldLeft ;
    var disY = oldY - oldTop ;

    document.body.onmousemove = function () {
        var newLeft = event.x - disX;
        var newTop = event.y - disY;
        divElement.style.left = newLeft + "px" ;
        divElement.style.top = newTop + "px";
    }


};

divElement.onmouseup = function () {
    document.body.onmousemove = null;
};