/****************************

#!name = 酷我纯净版
#!desc = 测试解锁畅听
#!author = 小白
#!date = 2024-05-14

[Script]
# 酷我纯净版
http-response ^https?:\/\/nmobi\.kuwo\.cn\/mobi\.s\?f\=kuwo&\*? requires-text=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kuwo.js

[Mitm]
hostname = nmobi.kuwo.cn
****************************/
