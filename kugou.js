/****************************
#!name = 酷狗
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-13

[Script]
# 酷狗
http-response ^https:\/\/gateway\.kugou\.com\/v5\/login_by_token\?.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kugou.js
[Mitm]
hostname = gateway.kugou.com
****************************/

console.log('开始运行!!!')
const body = JSON.parse($response.body);
if (body.data) {
    body.data.exp = 9999
    body.data.is_vip = 1
    body.data.vip_end_time = '2099-12-01'
    body.data.su_vip_end_time = '2099-12-01'
    body.data.su_vip_y_endtime = '2099-12-01'
    body.data.m_end_time = '2099-12-01'
    body.data.vip_type = 1
    body.data.user_y_type = 1
    body.data.y_type = 1
    console.log('解锁成功!!!')
} else {
    console.log('参数不存在,解锁失败!!!')
}
$done({body: JSON.stringify(body)});
