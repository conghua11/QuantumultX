/****************************
#!name = 美图秀秀
#!desc = 解锁本地会员
#!author = 小白
#!date = 2024-05-12

[Script]

http-response ^https?:\/\/(api|h5).xiuxiu.meitu.com/(?!(v1/feed/)) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/mtxx2.js

[Mitm]
hostname = api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com

****************************/

const data = JSON.parse($response.body);
if (data && data.data) {
    data.data.vip_type = 1;
    data.data.expire_days = -9999999999;
    data.data.is_expire = 0;
    data.data.in_valid_time = 4099737600;
    data.data.is_valid_user = 1;
    data.data.valid_time = 4099737600;
    data.data.home_prompt = "粉钻会员 2099年12月01日到期";
    data.data.home_btn_prompt = "已解锁";
    console.log('解锁成功!!!')
} else {
    console.log("无法获取参数,解锁失败!!!");
}

$done({ body: JSON.stringify(data) });

