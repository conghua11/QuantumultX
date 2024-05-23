/**************************************

#!name = PIKPAK
#!desc = 绕过区域检测
#!author = 小白
#!date = 2024-05-23


[Script]
http-response https://access.mypikpak.com/access_controller/v1/area_accessible requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pikpakjc.js
[Mitm]
hostname = access.mypikpak.com

**************************************/


console.log('开始运行!!!')
const body = JSON.parse($response.body);
body = {
    "accessible": true,
    "countryCode": "IN",
    "ip": "103.220.218.133"
}
console.log('绕过成功!!!')
$done({body:JSON.stringify(body)})
