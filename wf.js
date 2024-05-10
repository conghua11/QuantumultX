
/**************************************

#!name = 威锋
#!desc = 解锁本地VIP，去广告
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/wf.js

[mitm]
hostname = api.wfdata.club

[Script]
http-response ^https:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/wf.js

[Mitm]
hostname = api.wfdata.club

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.data = {
    "followCount": "1",
    "photoCount": "1",
    "isSignedIn": true,
    "threadDraftCount": "0",
    "isContentAuthor": true,
    "replyCount": "104",
    "followTopicCount": "0",
    "userBaseInfo": {
        "userAvatar": "https://face1.fengimg.com/data/avatar/008/38/07/00_avatar_middle.jpg",
        "levelTitle": "金苹果",
        "isUgcUser": true,
        "isVip": true,
        "vipExpiryDate": "2099-12-01",
        "userTitle": "",
        "signature": "小白破解!!!",
        "level": 20,
        "shareUrl": "",
        "levelIcon": "https://bucket-api.fengimg.com/feng-bbs-att/2021/04/24/192230iypojdi1j9jssnuh.png?imageMogr2/format/jpg/interlace/0/quality/100",
        "managerTopics": [],
        "userStatus": "normal",
        "gender": "secret",
        "permGroups": []
    },
}
console.log('解锁成功!!!')
$done({body:JSON.stringify(body)})
