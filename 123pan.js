/**************************************

#!name = 123云盘
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js
[mitm]
hostname = www.123pan.com

[Script]
http-response ^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js
[Mitm]
hostname = www.123pan.com

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.data ={
    "IsShowAdvertisement" : false,
        "VipExplain" : "Svip",
        "SpaceTemp" : 7,
        "Mail" : "",
        "UserVipDetailInfos" : [

    ],
        "SpacePermanent" : 10995116277760,
        "FileCount" : 242,
        "ContinuousPaymentDate" : "2099-01-01 08:00:00",
        "IsAuthentication" : true,
        "SpaceUsed" : 183317505265,
        "ContinuousPaymentAmount" : 5,
        "VipLevel" : 5,
        "UID" : 1636340,
        "GrowSpaceAddCount" : 5,
        "IsBeforeBuyVipProduct" : true,
        "BindWechat" : false,
        "ContinuousPaymentDuration" : 5,
        "SpaceTempExpr" : "2099-01-01T00:00:00+00:00",
        "Nickname" : "小白解锁",
        "HeadImage" : "https://statics.123pan.com/static-by-custom/default_avatar.png",
        "StraightLink" : true,
        "VipExpire" : "2099-01-01 08:00:00",
        "ContinuousPayment" : true,
        "SpaceBuy" : true,
        "SignType" : 1,
        "Vip" : true,
        "Passport" : 13022632289,
        "OpenLink" : 0
},
console.log('解锁成功!!!')
$done({body:JSON.stringify(body)})
