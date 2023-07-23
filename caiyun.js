/*************************************

项目名称：彩云天气-净化/SVIP

脚本作者：chxm1023


**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var conghua11 = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
    conghua11.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    conghua11.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    conghua11.activities = [];
}

if ($request.url.indexOf('user') != -1){
    conghua11.result.ranking_above = 99;
    conghua11.result.is_vip = true;
    conghua11.result.vip_expired_at = 4092599349;
    conghua11.result.svip_given = 9999;
    conghua11.result.is_xy_vip = true;
    conghua11.result.xy_svip_expire = 4092599349; 
    conghua11.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    conghua11.result.wt.svip_given = 9999;
    conghua11.result.wt.ranking_above = 99;
    conghua11.result.is_phone_verified = true;
    conghua11.result.name = "葱花11";
    conghua11.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
    conghua11.result.phone_num = "13145200000";
    conghua11.result.vip_take_effect = 1;
    conghua11.result.is_primary = true;
    conghua11.result.xy_vip_expire = 4092599349;
    conghua11.result.svip_expired_at = 4092599349;
    conghua11.result.svip_take_effect = 1;
    conghua11.result.vip_type = "s";
    conghua11.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    
}

$done({ body: JSON.stringify(conghua11)});
