/***********************************

#!name = 乐刷短剧
#!desc = 解锁本地VIP
#!author = 小白
#!data = 2024-05-16

[Script]
http-response http://akdj.lunlunkj.vip/api/v1/user/account/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/lsdj.js
[Mitm]
hostname = akdj.lunlunkj.vip
***********************************/

const body  = JSON.parse($response.body)
if (body.data) {
    console.log('开始运行!!!')
    body.data.vipInfo = {
        vipType: 1,
        id: body.data.id,
        startTime: '2024-03-15',
        endTime: '2099-12-01',
        updataTime: '2024-03-15'
    }
    body.data.vipEnabled = true
    console.log('解锁成功!!!')
    $done({body: JSON.stringify(body)})
}else {
    console.log('解锁失败!!!')
    $done({body: JSON.stringify(body)})
}
