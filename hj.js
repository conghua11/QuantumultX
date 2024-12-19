/**************************************
#!name = 画镜
#!desc = 测试
#!author = 小白
#!date = 2024-12-19


[Script]

http-response https://api\.iamok\.in/api/Sn/QuerySn\?sn=.* requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/hj.js, tag=测试

[MITM]

hostname = api.iamok.in
**************************************/

const body = $response.body
const data = {"ID": "7593", "Kn": "e9813ff6-667c-4a38-99cf-e77454be1f02", "Pt": "allvideo-3650", "Ds": "3650",
        "St": "2024-12-19 16:24:00", "Dd": false, "Note": "电报分享", "CreateTime": "2024-12-14 00:00:01",
        "OwnerCode": "黑猫", "Status": "已激活", "Price": "13.8", "PriceUnit": "RMB"}
console.log('解锁测试')
$done({ body: JSON.stringify(data) })
