/****************************

#!name = unicam
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-12

[Script]
http-response https://api.unicam.app/api.sync requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/unicam.js

[Mitm]
hostname = api.unicam.app
****************************/

console.log('开始运行!!!')
const body = JSON.parse($response.body);
if (body.subscription && body.subscription.tier) {
    body.subscription.tier = 'vip'
    console.log('解锁成功!!!')
} else {
    console.log('参数不存在,解锁失败!!!')
}
$done({body: JSON.stringify(body)});
