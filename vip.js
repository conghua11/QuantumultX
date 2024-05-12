/**************************************

#!name = VIP合集
#!desc = 解锁本地VIP，个别去广告
#!author = 小白
#!date = 2024-05-12


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

# 酷我
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://napi.ltd/script/BackUP/KuWo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://file.napi.ltd/Static/Image/KuWo.png

# 美图秀秀
http-response ^https?:\/\/(api|h5).xiuxiu.meitu.com/(?!(v1/feed/)) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/mtxx.js


[Mitm]
hostname = xluser-ssl.xunlei.com, www.123pan.com, api.mnckj.com, api.wfdata.club, *.kuwo.cn, api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com

**************************************/
