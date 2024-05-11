/**************************************

#!name = VIP合集
#!desc = 解锁本地VIP，个别去广告
#!author = 小白
#!date = 2024-05-11

# 圈X
[rewrite_local]
# 迅雷
https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

# 123云盘
^https:\/\/www\.123pan\.com\/api\/user\/space_record\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123.js
^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js

# 剧有引力
^https:\/\/api\.mnckj\.com\/server\/user\/info url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/jyyl.js

# 威锋
^https:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/wf.js


[mitm]
hostname = xluser-ssl.xunlei.com, www.123pan.com, api.mnckj.com, api.wfdata.club


# Loon
[Script]
# 迅雷
http-response https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js

# 123云盘
http-response ^https:\/\/www\.123pan\.com\/api\/user\/space_record\?auth-key=\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123.js
http-response ^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js

# 剧有引力
http-response ^https:\/\/api\.mnckj\.com\/server\/user\/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/jyyl.js

# 威锋
http-response ^https:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/wf.js

[Mitm]
hostname = xluser-ssl.xunlei.com, www.123pan.com, api.mnckj.com, api.wfdata.club

**************************************/
