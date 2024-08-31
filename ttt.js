/**************************************
#!name = TTT
#!desc = 获取真实地址
#!author = 小白
#!date = 2024-08-14

[Script]
http-request ^https:\/\/[^\/]*\.qxoovv\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/Tangtoutiao.js
http-request ^https:\/\/[^\/]*\.shjsvkj\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/Tangtoutiao.js
http-request ^https:\/\/[^\/]*\.shoknkj\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/Tangtoutiao.js
http-request https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/lsp/Tangtoutiao.js

[MITM]
hostname = *.shjsvkj.cn, *.qxoovv.cn, *.shoknkj.cn, *.shedbgs.cn, *.shnyigs.cn, *.sholfgs.cn, *.shjtqgs.cn, *.shjtpkj.cn, *.hfsudf.cn
**************************************/