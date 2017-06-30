/**
 * Created by tombsliu on 2017/6/28.
 */

var dialog = {


    error:function (message) {
        alert(message);
    },

    success:function (message,url) {
        alert(message);
        location.href = url;
    }
};