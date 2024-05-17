/**************************************

#!name = VIP合集
#!desc = 解锁本地VIP，个别去广告
#!author = 小白
#!date = 2024-05-16
#!select = 选择试听音质,至臻音质,无损音质,超品音质

[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Script]
# 迅雷
http-response https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/xunlei.js, tag=迅雷

# 123云盘
http-response https://www.123pan.com/api/user/(info|space_record) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js, tag=123云盘 

# 剧有引力
http-response ^https:\/\/api\.mnckj\.com\/server\/user\/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/jyyl.js, tag=剧有引力

# 乐刷短剧
http-response http://akdj.lunlunkj.vip/api/v1/user/account/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/lsdj.js, tag=乐刷短剧

# 威锋
http-response ^https:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/wf.js, tag=威锋

# 酷我
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/mobi\.s\?f\=kuwo|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kuwo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://file.napi.ltd/Static/Image/KuWo.png

# 美图秀秀
http-response ^https?:\/\/(api|h5).xiuxiu.meitu.com/(?!(v1/feed/)) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/mtxx.js, tag=美图秀秀


[Mitm]
hostname = xluser-ssl.xunlei.com, www.123pan.com, api.mnckj.com, api.wfdata.club, *.kuwo.cn, api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com, akdj.lunlunkj.vip

**************************************/
