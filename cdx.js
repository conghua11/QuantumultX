/**************************************
#!name = 重定向
#!desc = 测试
#!author = 小白
#!date = 2024-09-03


[Script]
# 拦截匹配到的网址  重定向到新网址
http-request ^https:\/\/[^\/]*\.(.*\.cn)(\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8)(\?.*)?$ script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/cdx.js requires-body=true, timeout=60, tag=重定向


[MITM]

# 使用通配符来匹配可变的主机名前缀
hostname = *.cn
**************************************/



//  拦截原始网址
let url = $request.url;

// 使用正则表达式匹配并替换域名的前缀部分
url = url.replace(/^https:\/\/[^\/]*\./, 'https://long.');

// 显示通知，告知新的重定向地址
$notification.post('破解地址', '', url);

// 完成请求并重定向到新的URL
$done({url: url});

