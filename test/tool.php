<?php
/**
 * Created by PhpStorm.
 * User: tombsliu
 * Date: 2017/6/28
 * Time: 下午7:18
 */

function show($status,$message){
    $result = array(
        'status' => $status,
        'message' => $message
    );

    exit(json_encode($result));
}