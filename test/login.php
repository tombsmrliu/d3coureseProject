<?php
/**
 * Created by PhpStorm.
 * User: tombsliu
 * Date: 2017/6/28
 * Time: 下午7:06
 */
  require_once 'tool.php';
  require_once 'AdminModel.php';

  //获取前端数据
  $username = $_POST['username'];
  $password = $_POST['password'];

  if (!trim($username)){
      show(0,'用户名不合法');
  }

  if (!trim($password)){
      show(0,'密码不合法');
  }

  //文件系统操作（本地文件，数据库)

//  //连接数据库
//  $dbc = mysqli_connect('127.0.0.1','root',
//      '123456',"user") or die('Error :fail to connect!');
//  if (mysqli_connect_error()){
//      show(0,'连接失败');
//  }
//  //查询操作 插入删除修改查询
//  $query = "select * from app_admin where username='".$username."'";
//
//  $res = mysqli_query($dbc,$query);

  $dbc = new AdminModel();
  $res = $dbc->getAdminByUsername($username);
  $num = mysqli_num_rows($res);

  if ($num){


      //判断密码是否匹配
      $row = mysqli_fetch_array($res);

      if ($row['password'] == md5($password)){
          show(1,'欢迎登陆');
      }else{
          show(0,'密码错误');
      }

  }else{
      show(0,'此用户不存在');
  }


  //关闭数据库连接

  //结果返回给前端（HTML或者JSON，xml）
