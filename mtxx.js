/****************************

 #!name = 美图秀秀
 #!desc = 解锁本地会员
 #!author = 小白
 #!date = 2024-05-12

[Script]
http-response ^https:\/\/api-sub\.meitu\.com\/v2\/user\/vip_info_by_group\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/mtxx.js

[Mitm]
hostname = api-sub.meitu.com

****************************/
console.log('开始运行!!!')
const body = JSON.parse($response.body)
body.data.is_vip = true
body.data.have_valid_contract = true
body.data.use_vip = true
console.log('解锁成功!!!')
$done({body: JSON.stringify(body)});
