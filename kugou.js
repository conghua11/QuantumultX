/****************************
#!name = 酷狗
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-14

[Script]
# 酷狗
http-response ^https:\/\/gateway\.kugou\.com\/v2\/get_login_extend_info\?.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kugou.js

[Mitm]
hostname = gateway.kugou.com
****************************/

console.log('开始运行!!!')
const body = JSON.parse($response.body);
if (body.data) {
    body.data.ads ={
        "val1":'',
        "val2":''
    }
    body.data.vipinfo = {
        "bookvip_end_time": "2099-12-01",
        "svip_level": 9,
        "su_vip_end_time": "2099-12-01",
        "su_vip_y_endtime": "2099-12-01",
        "user_type": 1,
        "svip_score": 1,
        "bookvip_valid": 1,
        "su_vip_begin_time": "2024-05-14",
        "bookvip_rankvip": [1],
        "y_type": 1,
        "user_y_type": 1,
        "vip_type": 1,
        "su_vip_clearday": "",
        "m_type": 1
    }
    console.log('解锁成功!!!')
} else {
    console.log('参数不存在,解锁失败!!!')
}
$done({body: JSON.stringify(body)});
