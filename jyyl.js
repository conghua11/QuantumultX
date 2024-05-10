/**************************************

#!name = 剧有引力
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/api\.mnckj\.com\/server\/user\/info url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/jyyl.js

[mitm]
hostname = api.mnckj.com

[Script]
http-response ^https:\/\/api\.mnckj\.com\/server\/user\/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/jyyl.js
[Mitm]
hostname = api.mnckj.com

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.data ={
    "payPassword" : true,
    "payPasswordPrompt" : true,
    "points" : 0,
    "mobile" : null,
    "autoUnlockEpisode" : true,
    "userId" : 553028,
    "avatar" : "https://oss.mnckj.com/default/default_avatar.png",
    "vipExpiredTime" : "2099-12-01",
    "vipExpiredTimeStamp" : 4099737600,
    "vipTitle" : "Svip",
    "bindSocial" : false,
    "socialType" : null,
    "nickname" : "小白解锁",
    "email" : "278260683@qq.com",
    "gender" : "未知",
    "imUserId" : 137397882
  },
console.log('解锁成功!!!')
$done({body:JSON.stringify(body)})
