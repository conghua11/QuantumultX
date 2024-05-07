#!name = 123yunpan
#!desc = 测试本地VIP
#!author = 小白
#!update = 2024-05-07 18:00
[rewrite_local]
# 解锁VIP
^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js
[mitm]
hostname = www.123pan.com

var body = JSON.parse($response.body)
body.data.Vip = true;
body.data.VipExpire = '2099-12-31 23:59:59';
$done({body:JSON.stringify(body)})
