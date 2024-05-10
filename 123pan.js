/**************************************

#!name = 123yunpan
#!desc = 测试本地VIP
#!author = 小白
#!date = 2024-05-10

[Script]
http-response ^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? response-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js

[Mitm]
hostname = www.123pan.com

**************************************/

var data = $response.body
console.log('开始运行:')
var body = JSON.parse($response.body)
body.data ={
    "IsShowAdvertisement" : false,
        "VipExplain" : "Svip",
        "SpaceTemp" : 7,
        "Mail" : "",
        "UserVipDetailInfos" : [

    ],
        "SpacePermanent" : 1099511627760,
        "FileCount" : 242,
        "ContinuousPaymentDate" : "2299-12-01 08:00:00",
        "IsAuthentication" : true,
        "SpaceUsed" : 183317505265,
        "ContinuousPaymentAmount" : 5,
        "VipLevel" : 5,
        "UID" : 1636340,
        "GrowSpaceAddCount" : 5,
        "IsBeforeBuyVipProduct" : true,
        "BindWechat" : false,
        "ContinuousPaymentDuration" : 5,
        "SpaceTempExpr" : "2299-12-01T08:00:00+00:00",
        "Nickname" : "小白测试",
        "HeadImage" : "https://statics.123pan.com/static-by-custom/default_avatar.png",
        "StraightLink" : true,
        "VipExpire" : "2299-12-01 08:00:00",
        "ContinuousPayment" : true,
        "SpaceBuy" : true,
        "SignType" : 1,
        "Vip" : true,
        "Passport" : 13022632289,
        "OpenLink" : 0
},
console.log('运行结束')
$done({body:JSON.stringify(body)})
