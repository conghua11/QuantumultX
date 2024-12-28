/**************************************
#!name=Netflix Headers Rewrite
#!desc=修改Netflix请求头
#!author=Assistant
#!homepage=https://github.com
#!icon=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Netflix.png
#!data=2024-12-28

[Script]
http-request ^https?:\/\/www\.netflix\.com\/browse script-update-interval=0, script-path=script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/hj.js, tag=Netflix Headers

[MITM]

hostname = www.netflix.com
**************************************/

// Netflix Headers 处理脚本
const headers = {
    'Host': 'www.netflix.com',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'cookie': 'netflix-sans-normal-3-loaded=true; netflix-sans-bold-3-loaded=true; profilesNewSession=0; pas=%7B%22supplementals%22%3A%7B%22muted%22%3Atrue%7D%7D; nfvdid=BQFmAAEBELF69hpBqB8Tidx-Ad3TmzpgFe9VI7TDGodi7c574YI0ZjEPag1_t1-ng0blhnD9TDpnswO61JPvASh7N2Y9_LJ-FF2n6CCx5d718sKsT-ZWNRnNyFaBcNe4GIHk1acOn2r9F-Sj5Tc4mn_dser970pd; flwssn=48508ccc-22da-4cb6-8823-5c5950331c4f; SecureNetflixId=v%3D3%26mac%3DAQEAEQABABSon8MTPfYiGBccU2AcUTKU6rb5YfsvS9w.%26dt%3D1735349763865; NetflixId=ct%3DBgjHlOvcAxLfA55V7NveYJx9weUqnGlqgF14vw7WG05-P5fwt7euHMWWVNwm2QBXR_9B9mOwIb7mQ_r16RR3OzBNIHrB017MD64oy2z4a5koXO-W5mXdbx08F0phr7lfCfEt_zKYByjj0ySlI_Wmzoo_qeldfeFz7FUMYFYvKUv24wJ68mqg-UGkECjhNrG0sp5AJJwXCxS38_kqCmD6et71R3OQyYAqilOSLecbVqik-8QQ1Rz0hiX7FdaG1phWOIPUEJziu8ee6kSoPNfFM5PUsGgccVBwy5AkxMcYQhfTUZoRCDIYlX4UxPzCWs0US24BfW_qrJ1tYYVMkMJ8E-seZKeV939R8tgvA3tgWLIg4b1No7zroHbI5cdxXUJaBCehDDXwwmGVPoMGyLCSeYlsp7HHSMWBXOU4VNNvVTpD_44X0u5y-V2PHq0hkrGkRQALyGM1avdGNsbdOqReWlUjuHyvRfZ5a3NQcIxfPOh_-LkXdJThvcfCfmj5gQV6BRd7IFofj4zQlJnffEMGTw-PwVS5DHaugL5majHo_uOnB8gHYv38k82rrcFp30xegaNtxewgTAclGEqJO1Ro7AqJUbl7X_bS6JIT7f4y2uRqbWreLv4qjzLEDVSvkjtEz1v3ELGmbTyeGAYiDgoM3f5CeSt73GyarwBT%26ch%3DAQEAEAABABQeBEvBi2LuElgS0F5iDAyCF-h8tXl6qeE.%26v%3D3; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Dec+28+2024+14%3A21%3A10+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202411.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=31671d51-f792-4370-8d67-c0675d691938&interactionCount=1&isAnonUser=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&AwaitingReconsent=false',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"20.0.0"',
    'X-FORWARDED-FOR': '8.222.202.189',
    'CLIENT-IP': '8.222.202.189',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Accept-Language': 'zh-CN,zh;q=0.9'
};

// 处理请求
function modifyHeaders(request) {
    // 获取原始请求头
    let newHeaders = request.headers;
    
    // 合并新的请求头
    Object.assign(newHeaders, headers);
    
    // 返回修改后的请求
    return {
        headers: newHeaders
    };
}

// 处理请求并返回结果
$done(modifyHeaders($request)); 
