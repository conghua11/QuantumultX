/****************************

#!name = PIKPAK
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-19

[Script]
# PIKPAK
http-response ^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus|space\/list)|drive\/v\d\/about\?space) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pikpak.js, tag=PIKPAK
http-response https://api-drive.mypikpak.com/vip/v1/activity/inviteInfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pikpak.js, tag=PIKPAK
[Mitm]
hostname = api-drive.mypikpak.com
****************************/

console.log('开始运行!!!')
const req = $request;
const url = $request.url;
const URL1 = '/vip/info';
const URL2 = '/about';
const URL3 = '/space/list';
const URL4 = '/allSubscriptionStatus';
if (url.indexOf(URL1) !== -1) {
    const body = JSON.parse($response.body);
    body.data.expire = "2099-12-01T10:12:29+08:00"
    body.data.status = "ok"
    body.data.type = "platinum"
    body.data.vipItem = [
        {
            "type": "global",
            "description": "全球会员",
            "status": "ok",
            "expire": "2099-12-01T21:30:15+08:00",
            "surplus_day": 9999
        },
        {
            "type": "regional",
            "description": "区域会员",
            "status": "ok",
            "expire": "2099-12-01T10:12:29+08:00",
            "surplus_day": 9999
        }
    ]
    console.log('解锁成功')
    $done({body: JSON.stringify(body)});
}
if (url.indexOf(URL2) !== -1) {
    const body = JSON.parse($response.body);
    body.quota.limit = '10995116277760'
    console.log('解锁成功')
    $done({body: JSON.stringify(body)});
}
if (url.indexOf('URL3') !== -1) {
    const body = JSON.parse($response.body);
    body.base.assets = '10T'
    body.base.expire_time = "2099-12-01T21:30:15+08:00"
    body.base.size = 10995116277760
    body.base.vip_status = 'ok'
    console.log('解锁成功')
    $done({body: JSON.stringify(body)});
}
if (url.indexOf(URL4) !== -1) {
    const body = JSON.parse($response.body);
    body.apple = {"subscribed":true,
                  "purchased":true,
                  "status":"trial",
                  "interval":"year",
                  "product":"sub.year",
                  "past_due_deadline":"",
                  "pay_type":"",
                  "region":"regional"};
    console.log('解锁成功')
    $done({body: JSON.stringify(body)});
}