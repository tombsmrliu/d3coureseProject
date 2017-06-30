/**
 * Created by tombsliu on 2017/6/28.
 */

var login = {
    check:function () {


        var username = $('input[name="username"]').val();

        var password = $('input[name="password"]').val();

        //验证
        if (!username ){
            return dialog.error("用户名不能为空");
        }

        if (!password ){
            return dialog.error("密码不能为空");
        }

        //ajax
        var url = "login.php";
        var data = {
            'username':username,
            'password':password
        };

        $.post(url,data,function (result) {
            //当第四个参数指定为'JSON'时，result为js对象
             if (result.status === 0){
                 dialog.error(result.message);
             }

             if (result.status === 1){
                 dialog.success(result.message,'index.html');
             }

        },'JSON');

    }
};