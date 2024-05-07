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
body.data ={
    "IsShowAdvertisement" : false,
        "VipExplain" : "",
        "SpaceTemp" : 0,
        "Mail" : "",
        "UserVipDetailInfos" : [

    ],
        "SpacePermanent" : 2199023255552,
        "FileCount" : 242,
        "ContinuousPaymentDate" : "2099-01-01 08:00:00",
        "IsAuthentication" : true,
        "SpaceUsed" : 183317505265,
        "ContinuousPaymentAmount" : 0,
        "VipLevel" : 0,
        "UID" : 1636340,
        "GrowSpaceAddCount" : 0,
        "IsBeforeBuyVipProduct" : true,
        "BindWechat" : false,
        "ContinuousPaymentDuration" : 0,
        "SpaceTempExpr" : "0001-01-01T00:00:00+00:00",
        "Nickname" : "小白测试",
        "HeadImage" : "https://statics.123pan.com/static-by-custom/default_avatar.png",
        "StraightLink" : true,
        "VipExpire" : "2099-01-01 08:00:00",
        "ContinuousPayment" : true,
        "SpaceBuy" : false,
        "SignType" : 0,
        "Vip" : true,
        "Passport" : 13022632289,
        "OpenLink" : 0
},
$done({body:JSON.stringify(body)})
