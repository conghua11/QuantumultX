/****************************

#!name = 酷我音乐
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子
#!openUrl = https://napi.ltd
#!homepage = https://napi.ltd
#!icon = https://file.napi.ltd/Static/Image/KuWo.png
#!date = 2024-05-05

[rewrite_local]
^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) url script-response-body https://napi.ltd/script/BackUP/KuWo.js


[mitm]
hostname = *.kuwo.cn

****************************/
