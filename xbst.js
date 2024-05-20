/****************************

#!name = 小包搜题
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-20

[Script]
# 小包搜题
http-response http://soti.ixyzh.com/ios/(userinfo|isvip) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/xbst.js, tag=小包搜题
[Mitm]
hostname = soti.ixyzh.com
****************************/

const body = JSON.parse($response.body);
console.log("开始运行")
if (url.indexOf('/userinfo') !== -1) {
    body.data.vipExpire = "2099-12-01T10:12:29+08:00"
    body.data.userName = "小白破解"
    console.log('小包搜题会员已解锁')
    $done({body: JSON.stringify(body)});
}
if (url.indexOf('/isvip') !== -1) {
    body.data.isvip = 'ok'
    console.log('小包搜题会员已解锁')
    $done({body: JSON.stringify(body)});
}
