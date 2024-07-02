/**************************************

#!name = PIKPAK
#!desc = 修改随机IP
#!author = 小白
#!date = 2024-07-01

[Script]
# PIKPAK网盘随机IP
http-request ^https?:\/\/.*\.mypikpak\.com\/.* script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pkhd.js

[Mitm]
hostname = *.mypikpak.com

**************************************/




// 生成随机IP地址函数
function generateRandomIP() {
  return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
}
const ip = generateRandomIP(10)
// 获取当前请求
const request = $request;

// 添加或修改请求头
request.headers['x-forwarded-for'] = ip;
request.hraders['X-Real-IP'] = ip;
if(request.headers['x-forwarded-for']){
    console.log('生成随机IP:', ip)
}
// 返回修改后的请求
$done({ headers: request.headers });
