/****************************

#!name = PIKPAK
#!desc = 解锁本地VIP
#!author = 小白
#!date = 2024-05-19

[Script]
# PIKPAK
http-response https://api-drive.mypikpak.com/vip/v1/vip/info? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pikpak.js, tag=PIKPAK
[Mitm]
hostname = api-drive.mypikpak.com
****************************/

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
$done({body: JSON.stringify(body)});
