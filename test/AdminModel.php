<?php

/**
 * Created by PhpStorm.
 * User: tombsliu
 * Date: 2017/6/29
 * Time: 下午7:01
 */
class AdminModel{
    private  $_db = '';

    public function __construct(){
        $this->_db = mysqli_connect('127.0.0.1',
            'root','123456',
            'user');
    }

    public function __destruct()
    {
        // TODO: Implement __destruct() method.
        $this->close();
    }

    /**
     * @return string
     */
    public function getAdminByUsername($username=''){
        $query = "select * from app_admin WHERE  username='".$username."'";

        $res = mysqli_query($this->_db,$query);

        return $res;
    }


    public function close(){
        mysqli_close($this->_db);
    }
}