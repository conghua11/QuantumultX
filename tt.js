/****************************

#!name = T豆
#!desc = 解锁无限
#!author = 小白
#!date = 2024-05-14

[Script]
# 迅雷
http-response ^https:\/\/tcoin\.52tt\.com\/portal\/api\/order\/getBalance_v2\.shtml?\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/tt.js

[Mitm]
hostname = tcoin.52tt.com
****************************/

console.log('开始运行!!!')
const body = JSON.parse($response.body);
if (body.body) {
    body.body.balance = 999999
    console.log('解锁成功!!!')
} else {
    console.log('参数不存在,解锁失败!!!')
}
$done({body: JSON.stringify(body)});
