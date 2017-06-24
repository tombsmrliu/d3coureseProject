/**
 * Created by tombsliu on 2017/6/24.
 */


function getRandomColor() {
        //(1) red / blue / green  rbg(r,g,b) 0-255
        //(2) 随机数 Math.random() --> [0,1) * num
        //(3) 返回组合后的结果
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);

        return "rgb(" + r +","+ g +","+ b +")";
        //Math.random() -->[0,1) *255

}


function getRandomNumber(a,b) {
     return parseInt(Math.random() *(b-a+1))
}