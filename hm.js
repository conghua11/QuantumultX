/*
[Script]
http-response https://businessapi.hprtupgrade.com/api/tem.app_member/getMemberUser response-body=1,script-path=
*/
body.data.status = "ok"
body.data.is_member = true
body.data.available_space = 20
body.data.expire_time = "2099-12-01"
