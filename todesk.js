/****************************

#!name = ToDesk
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-14

[Script]
# 迅雷
http-response https://uc.todesk.com/api/user/public_info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/todesk.js
[Mitm]
hostname = uc.todesk.com
****************************/

console.log('开始运行!!!')
const body = JSON.parse($response.body);
if (body.data && body.data.userConfigObj) {
    body.data.viplevel = 2
    body.data.userConfigObj['2'].end_time = 4099813930
    console.log('解锁成功!!!')
} else {
    console.log('参数不存在,解锁失败!!!')
}
$done({body: JSON.stringify(body)});
