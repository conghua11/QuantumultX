/****************************

#!name = 阳光老挝语
#!desc = 解锁VIP
#!author = 小白
#!date = 2024-07-08

[Script]
http-response https://www.ecigrxy.cn/api/user/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/yglwy.js

[Mitm]
hostname = www.ecigrxy.cn
****************************/

const body = JSON.parse($response.body)
body.data.translateVipDate = "2099-12-08 21:32:21"
body.data.isDown = true
body.data.videoVipDate = "2099-12-08 21:32:21"
body.data.translateVip = true      
console.log('解锁成功!!!')
$done({body: JSON.stringify(body)})