/**************************************

#!name = 123云盘
#!desc = 云盘空间
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/www\.123pan\.com\/api\/user\/space_record\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123.js
[mitm]
hostname = www.123pan.com

[Script]
http-response ^https:\/\/www\.123pan\.com\/api\/user\/space_record\?auth-key=\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123.js
[Mitm]
hostname = www.123pan.com

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.data = {
    "list" : [
      {
        "expireAt" : "",
        "itemType" : 3,
        "addSpace" : 10995116277760
      }
    ]
  },
console.log('运行结束!!!')
$done({body:JSON.stringify(body)})

