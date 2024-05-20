/*
[Script]
http-response https://businessapi.hprtupgrade.com/api/tem.app_member/getMemberUser requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/hm.js
[Mitm]
hostname = businessapi.hprtupgrade.com
*/
const body = JSON.parse($response.body)
body.data.status = "ok"
body.data.is_member = true
body.data.available_space = 20
body.data.expire_time = "2099-12-01"
$done(
