/****************************

#!name = 123云盘
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-06-10

[Script]
http-response https://www.123pan.com/api/user/(info|space_record) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js

[Mitm]
hostname = www.123pan.com
****************************/

console.log('开始运行!!!')
const req = $request;
const url = $request.url;
if (url.indexOf('/user/info') !== -1){
    var body = JSON.parse($response.body)
    body.data ={
        "IsShowAdvertisement" : false,
            "VipExplain" : "SVIP",
            "SpaceTemp" : 7,
            "Mail" : "",
            "UserVipDetailInfos" : [
    
        ],
            "SpacePermanent" : 109951162777600,
            "FileCount" : 242,
            "ContinuousPaymentDate" : "2099-01-01 08:00:00",
            "IsAuthentication" : true,
            "SpaceUsed" : 183317505265,
            "ContinuousPaymentAmount" : 128,
            "VipLevel" : 128,
            "UID" : 1636340,
            "GrowSpaceAddCount" : 128,
            "IsBeforeBuyVipProduct" : true,
            "BindWechat" : false,
            "ContinuousPaymentDuration" : 128,
            "SpaceTempExpr" : "2099-01-01T00:00:00+00:00",
            "Nickname" : "小白解锁",
            "HeadImage" : "https://statics.123pan.com/static-by-custom/default_avatar.png",
            "StraightLink" : true,
            "VipExpire" : "2099-01-01 08:00:00",
            "ContinuousPayment" : true,
            "SpaceBuy" : true,
            "SignType" : 1,
            "Vip" : true,
            "Passport" : 18888888888,
            "OpenLink" : 0
    }
console.log('运行结束!!!')
$done({body: JSON.stringify(body)})
}
if (url.indexOf('/user/space_record') !== -1){
    var body = JSON.parse($response.body)
    body.data = {
        "list" : [
          {
            "expireAt" : "",
            "itemType" : 3,
            "addSpace" : 10995116277760
          }
        ]
      }
console.log('运行结束!!!')
$done({body: JSON.stringify(body)})  
}
