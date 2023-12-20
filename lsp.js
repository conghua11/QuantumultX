[rewrite_local]

^http[s]?:\/\/(h5play|10play|120play|long)\.(snowing|beibeini3|pili01a|fuhuida|riyufanyi).*\/(videos.|watch|static|upload|watch[0-9]+)\/.*\/.*\.m3u8\?auth_key.*$ url script-request-header https://raw.githubusercontent.com/conghua11/QuantumultX/main/m3u8.js

# 通杀所有
^(https?:\/\/)(?!long)([^./]+\.)*(longyuandingyi.com|zihzot.com|snowing.ren|vzcnqmr.cn|beibeini3.cn|pili01a.net|hhclyjz.cn|bhhcdou.cn|xuxivwx.cn|sdtuxyh.cn|kngpdsz.cn|sugugaj.cn|mqqjrv.com)(\/.*)? url 302 $1long.$3$4
******************************************/
[mitm] 

hostname = *50a*,*bmafdxt*,*psovzwr*,*yxlauhm*,*yiqiapi*,*jiujiao*,*myb*api*,*hichatapi*,*tbrapi*,*wmqapi*,*gvlan*,*ksapi*,*nbpqfxr*,*91av*,*xtt*,*dyweb*,*argaxqn*,*eoeicmg*,*.longyuandingyi.com,*.zihzot.com,*.snowing.ren,*.vzcnqmr.cn,*beibeini3.cn,*.pili01a.net,*.hhclyjz.cn, *.bhhcdou.cn, *.xuxivwx.cn, *.sdtuxyh.cn, *.kngpdsz.cn, *.sugugaj.cn, *.mqqjrv.com
