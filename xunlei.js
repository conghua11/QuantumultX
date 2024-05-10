/**************************************

#!name = 迅雷
#!desc = 解锁本地VIP，去广告
#!author = 小白
#!date = 2024-05-10
[rewrite_local]
^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v1\/etuserinfo url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

[mitm]
hostname = xluser-ssl.xunlei.com

[Script]
http-response ^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v1\/etuserinfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

[Mitm]
hostname = xluser-ssl.xunlei.com

**************************************/


console.log('开始运行!!!')
var body = JSON.parse($response.body)
body.vipList = [
    {
      "isNew" : "1",
      "suplusDay" : "0",
      "icon" : {
        "general" : "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_a/vip_level1_deactivate.png",
        "small" : "https://xluser-ssl.xunlei.com/v1/file/icon/level/vip/deactivate_b/vip_lever1_deactivate.png"
      },
      "isAutoDeduct" : "1",
      "isYear" : "1",
      "payId" : "1",
      "isVip" : "1",
      "daily" : "-10",
      "vipLevel" : "9",
      "register" : "20991201",
      "lastPay" : "1",
      "expireDate" : "2099-12-01",
      "isRemind" : "1",
      "payName" : "年费",
      "vipDayGrow" : "99",
      "vasid" : "2",
      "vasType" : "1",
      "vipGrow" : "1"
    },
    {
      "isNew" : "1",
      "suplusDay" : "0",
      "icon" : {
        "general" : "",
        "small" : ""
      },
      "isAutoDeduct" : "0",
      "isYear" : "1",
      "payId" : "1",
      "isVip" : "1",
      "daily" : "1",
      "vipLevel" : "9",
      "register" : "20991201",
      "lastPay" : "1",
      "expireDate" : "2099-12-01",
      "isRemind" : "1",
      "payName" : "年费",
      "vipDayGrow" : "99",
      "vasid" : "14",
      "vasType" : "1",
      "vipGrow" : "1"
    },
    {
      "isNew" : "1",
      "suplusDay" : "0",
      "icon" : {
        "general" : "",
        "small" : ""
      },
      "isAutoDeduct" : "1",
      "isYear" : "1",
      "payId" : "1",
      "isVip" : "1",
      "daily" : "1",
      "vipLevel" : "9",
      "register" : "20991201",
      "lastPay" : "20991201",
      "expireDate" : "2099-12-01",
      "isRemind" : "1",
      "payName" : "年费",
      "vipDayGrow" : "1",
      "vasid" : "33",
      "vasType" : "1",
      "vipGrow" : "1"
    },
    {
      "isNew" : "0",
      "suplusDay" : "0",
      "icon" : {
        "general" : "",
        "small" : ""
      },
      "isAutoDeduct" : "1",
      "isYear" : "1",
      "payId" : "1",
      "isVip" : "1",
      "daily" : "1",
      "vipLevel" : "9",
      "register" : "20991201",
      "lastPay" : "20991201",
      "expireDate" : "2099-12-01",
      "isRemind" : "1",
      "payName" : "年费",
      "vipDayGrow" : "99",
      "vasid" : "34",
      "vasType" : "2",
      "vipGrow" : "1"
    },
    {
      "isNew" : "1",
      "suplusDay" : "0",
      "icon" : {
        "general" : "",
        "small" : ""
      },
      "isAutoDeduct" : "1",
      "isYear" : "1",
      "payId" : "1",
      "isVip" : "1",
      "daily" : "-10",
      "vipLevel" : "9",
      "register" : "20991201",
      "lastPay" : "20991201",
      "expireDate" : "2099-12-01",
      "isRemind" : "1",
      "payName" : "年费",
      "vipDayGrow" : "99",
      "vasid" : "35",
      "vasType" : "1",
      "vipGrow" : "1"
    }
  ]
console.log('解锁成功!!!')
$done({body:JSON.stringify(body)})
