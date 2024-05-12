/****************************

 #!name = 美图秀秀1
 #!desc = 解锁本地会员
 #!author = 小白
 #!date = 2024-05-12

[Script]
http-response ^https:\/\/api\.posters\.meitu\.com\/center\/user_info\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/mtxx1.js

[Mitm]
hostname = api.posters.meitu.com

****************************/
console.log('开始运行!!!')
const body = JSON.parse($response.body)
body.data.is_vip = true
body.data.vip_end_time = 4099737600
console.log('解锁成功!!!')
$done({body: JSON.stringify(body)});
