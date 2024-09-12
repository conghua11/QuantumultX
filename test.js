/**************************************
#!name = 测试
#!desc = 测试
#!author = 小白
#!date = 2024-09-12


[Script]

http-response https://wapi1.haijbpi1.com/api.php/api/user/userInfo requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/test.js, tag=测试

[MITM]

hostname = wapi1.haijbpi1.com
**************************************/




(async function main(){
      const body = JSON.parse($response.body)
      $.log(body.data)
      const dedata = await decryptAES_CBC(body.data)
      const obj = JSON.parse(dedata)
      obj.data.nickname = '小白破解'
      obj.isVip = true
      body.data = await encryptAES_CBC(JSON.stringify(obj))
      $.log(body.data)
      $done({ body: JSON.stringify(body) })
      
})()









async function decryptAES_CBC(encryptedData) {
    // 将 base64 编码的密钥和 IV 转换为 Uint8Array
    const keyBuffer = Uint8Array.from(atob('MmFjZjdlOTFlOTg2NDY3Mw=='), c => c.charCodeAt(0));
    const ivBuffer = Uint8Array.from(atob('MWMyOTg4MmQzZGRmY2ZkNg=='), c => c.charCodeAt(0));
    const encryptedBuffer = Uint8Array.from(atob(encryptedData), c => c.charCodeAt(0));

    // 导入密钥
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyBuffer,
        {name: "AES-CBC"},
        false,
        ["decrypt"]
    );

    // 解密数据
    try {
        const decryptedBuffer = await crypto.subtle.decrypt(
            {name: "AES-CBC", iv: ivBuffer},
            cryptoKey,
            encryptedBuffer
        );

        // 将解密后的数据转换为字符串
        const decoder = new TextDecoder();
        // 将解密后的字符串解析为 JSON 对象
        return decoder.decode(decryptedBuffer);
    } catch (e) {
        console.error("解密或解析失败:", e);
        return null;
    }
}

async function encryptAES_CBC(plainText) {
    // 将 base64 编码的密钥和 IV 转换为 Uint8Array
    const keyBuffer = Uint8Array.from(atob('MmFjZjdlOTFlOTg2NDY3Mw=='), c => c.charCodeAt(0));
    const ivBuffer = Uint8Array.from(atob('MWMyOTg4MmQzZGRmY2ZkNg=='), c => c.charCodeAt(0));

    // 创建一个加密用的 CryptoKey 对象
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyBuffer,
        {name: "AES-CBC"},
        false,
        ["encrypt"]
    );

    // 将明文转换为 ArrayBuffer
    const encoder = new TextEncoder();
    const plainBuffer = encoder.encode(plainText);

    // 加密数据
    try {
        const encryptedBuffer = await crypto.subtle.encrypt(
            {name: "AES-CBC", iv: ivBuffer},
            cryptoKey,
            plainBuffer
        );

        // 将加密后的数据转换为 base64 编码的字符串
        const encryptedArray = new Uint8Array(encryptedBuffer);
        return btoa(String.fromCharCode(...encryptedArray));
    } catch (e) {
        console.error("加密失败:", e);
        return null;
    }
}
