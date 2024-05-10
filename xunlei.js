/**************************************

#!name = 迅雷
#!desc = 解锁本地VIP，去广告
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/xluser-ssl\.xunlei\.com\/v1\/etuserinfo url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

[mitm]
hostname = api.wfdata.club

[Script]
http-response ^https:\/\/xluser-ssl\.xunlei\.com\/v1\/etuserinfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

[Mitm]
hostname = api.wfdata.club

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.data.vips = [
    {
      "expire" : '2099-12-01',
      "isyear" : 1,
      "vas_type" : 1,
      "level" : 9,
      "vasid" : "2",
      "isvip" : 1,
      "uservas" : 1
    },
    {
      "expire" : '2099-12-01',
      "isyear" : 1,
      "vas_type" : 1,
      "level" : 9,
      "vasid" : "201",
      "isvip" : 1,
      "uservas" : 1
    }
  ]
body.data.vip = {
    "isyear" : 1,
    "expire" : '2099-12-01',
    "isvip" : 1,
    "level" : 9,
    "uservas" : 1,
    "vas_type" : 1
  }
console.log('解锁成功!!!')
$done({body:JSON.stringify(body)})
