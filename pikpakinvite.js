/****************************

#!name = PIKPAK
#!desc = 刷邀请测试
#!author = 小白
#!date = 2024-05-19

[Script]
# PIKPAK
http-response https://api-drive.mypikpak.com/vip/v1/activity/inviteCode requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/pikpakinvite.js, tag=PIKPAK

[Mitm]
hostname = api-drive.mypikpak.com
****************************/
const body = JSON.parse($response.body);
const inCode = body.code
//  加密参数函数
function MD5(string) {
  function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }

  function AddUnsigned(lX, lY) {
    const lX4 = lX & 0x40000000;
    const lY4 = lY & 0x40000000;
    const lX8 = lX & 0x80000000;
    const lY8 = lY & 0x80000000;
    const lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  }

  function F(x, y, z) {
    return (x & y) | ((~x) & z);
  }

  function G(x, y, z) {
    return (x & z) | (y & (~z));
  }

  function H(x, y, z) {
    return (x ^ y ^ z);
  }

  function I(x, y, z) {
    return (y ^ (x | (~z)));
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  }

  function ConvertToWordArray(string) {
    let lWordCount;
    const lMessageLength = string.length;
    const lNumberOfWordsTempOne = lMessageLength + 8;
    const lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
    const lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
    const lWordArray = new Array(lNumberOfWords - 1);
    let lBytePosition = 0;
    let lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  }

  function WordToHex(lValue) {
    let WordToHexValue = "",
      WordToHexValueTemp = "",
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValueTemp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }
    return WordToHexValue;
  }

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    let utftext = "";

    for (let n = 0; n < string.length; n++) {
      const c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  }

  let x = [];
  let k, AA, BB, CC, DD, a, b, c, d;
  const S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  const S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  const S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  const S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  string = Utf8Encode(string);

  x = ConvertToWordArray(string);

  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x02441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x04881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  const temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
}
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function item_compare(img_list, mode_list) {
    let score = 0;
    let rank = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (img_list[i][j] !== mode_list[i][j]) {
                score += 1;
            }
        }
    }
    if (score === 2) {
        rank += 1;
    }
    return rank;
}

function list_compare(frames) {
    let score_list = [];
    let flag = 0;
    for (const frame of frames) {
        const img_list = frame.matrix;
        let scores = 0;
        for (const mode_frame of frames) {
            const mode_list = mode_frame.matrix;
            const one_score = item_compare(img_list, mode_list);
            scores += one_score;
        }
        score_list.push(scores);
        flag += 1;
    }
    for (let i = 0; i < 12; i++) {
        if (score_list[i] === 11) {
            // console.log(i)
            return i;
        }
    }
}

function r(e, t) {
    let n = t - 1;
    if (n < 0) {
        n = 0;
    }
    let r = e[n];
    let u = Math.floor(r['row'] / 2) + 1;
    let c = Math.floor(r['column'] / 2) + 1;
    let f = r['matrix'][u][c];
    let l = t + 1;
    if (l >= e.length) {
        l = t;
    }
    let d = e[l];
    let p = l % d['row'];
    let h = l % d['column'];
    let g = d['matrix'][p][h];
    let y = e[t];
    let m = 3 % y['row'];
    let v = 7 % y['column'];
    let w = y['matrix'][m][v];
    let b = parseInt(i(f)) + o(w);
    let x = parseInt(i(w)) - o(f);
    return [s(a(i(f), o(f))), s(a(i(g), o(g))), s(a(i(w), o(w))), s(a(b, x))];
}

function i(e) {
    return parseInt(e.split(",")[0]);
}

function o(e) {
    return parseInt(e.split(",")[1]);
}

function a(e, t) {
    return e + "^⁣^" + t;
}

function s(e) {
    let t = 0;
    let n = e.length;
    for (let r = 0; r < n; r++) {
        t = u(31 * t + e.charCodeAt(r));
    }
    return t;
}

function u(e) {
    let t = -2147483648;
    let n = 2147483647;
    if (e > n) {
        return t + (e - n) % (n - t + 1) - 1;
    }
    if (e < t) {
        return n - (t - e) % (n - t + 1) + 1;
    }
    return e;
}

function c(e, t) {
    return s(e + "⁣" + t);
}

function img_jj(e, t, n) {
    return {
        'ca': r(e, t),
        'f': c(n, t)
    };
}

async function getSign(xid, t) {
    const e = [
        {alg: "md5", salt: "KHBJ07an7ROXDoK7Db"},
        {alg: "md5", salt: "G6n399rSWkl7WcQmw5rpQInurc1DkLmLJqE"},
        {alg: "md5", salt: "JZD1A3M4x+jBFN62hkr7VDhkkZxb9g3rWqRZqFAAb"},
        {alg: "md5", salt: "fQnw/AmSlbbI91Ik15gpddGgyU7U"},
        {alg: "md5", salt: "/Dv9JdPYSj3sHiWjouR95NTQff"},
        {alg: "md5", salt: "yGx2zuTjbWENZqecNI+edrQgqmZKP"},
        {alg: "md5", salt: "ljrbSzdHLwbqcRn"},
        {alg: "md5", salt: "lSHAsqCkGDGxQqqwrVu"},
        {alg: "md5", salt: "TsWXI81fD1"},
        {alg: "md5", salt: "vk7hBjawK/rOSrSWajtbMk95nfgf3"}]
    let md5_hash = `YvtoWO6GNHiuCl7xundefinedmypikpak.com${xid}${t}`;
    e.forEach(item => {
        md5_hash += item.salt;
        md5_hash = MD5(md5_hash);
    });
    return md5_hash;
}

//  邮箱API函数
async function getMail(){
    const demo = 'chmg9999.top'
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    const body = {
    'name': result,
    'domain': 'chmg9999.top',
    }
    const url = `https://chmg9999.top/api/new_address`
    return new Promise( async (resolve, reject) => {
        try {
            const response = await fetch(url,{
                method:'POST',
                body: JSON.stringify(body),
            });
            const responseData = await response.json();
            // const jwt = responseData['jwt']
            // const data ={
            //     jwt : jwt,
            //     mail : result + '@' + demo
            // }
            console.log('获取临时邮箱信息', responseData)
            resolve(responseData);
        }catch (error){
            console.log(error)
        }
    });
}

async function getCode(jwt) {
    const url = 'https://chmg9999.top/api/mails?limit=20&offset=0'
    const headers = {
        'Authorization': 'Bearer ' + jwt
    }
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url, {headers: headers});
            const responseData = await response.json();
            if (responseData['results'].length === 0){
                console.log('等待接收邮件...')
                await new Promise(resolve => setTimeout(resolve, 3000)); // 等待3秒钟
                const code = await getCode(jwt)
                resolve(code)
            }
            else {
                console.log('接收到邮件!!!');
                const regex = /<h2>(\d{6})<\/h2>/;// 正则表达式
                const matches = regex.exec(responseData['results'][0]['raw']);// 匹配6位数字的正则表达式
                if (matches !== null) {
                    console.log('提取到验证码:', matches[1])
                    resolve(matches[1]); // 返回匹配到的6位数字
                } else {
                    resolve(null); // 如果没有找到，返回null
                }
            }
        } catch (error) {
            reject(error)
        }
    });
}

//  网络请求函数
async function init(xid, mail){
    return new Promise(async (resolve, reject) => {
        const url = 'https://user.mypikpak.com/v1/shield/captcha/init'
        const body = {
            "client_id": "YvtoWO6GNHiuCl7x",
            "action": "POST:/v1/auth/verification",
            "device_id": xid,
            "captcha_token": "",
            "meta": {
                "email": mail
            }
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'user.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'MainWindow Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'accept-language': 'zh-CN',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-device-model': 'electron%2F18.3.15',
            'x-device-name': 'PC-Electron',
            'x-device-sign': 'wdi10.ce6450a2dc704cd49f0be1c4eca40053xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-net-work-type': 'NONE',
            'x-os-version': 'Win32',
            'x-platform-version': '1',
            'x-protocol-version': '301',
            'x-provider-name': 'NONE',
            'x-sdk-version': '6.0.0'
        }
        try{
            const response = await fetch(url, {
                method:'POST',
                headers:headers,
                body:JSON.stringify(body)
            })
            const responseData = await response.json()
            if (responseData['url']) {
                console.log('初始安全验证', responseData)
                resolve(responseData)
            }
            else {
                return Promise.reject(responseData['error_description']);
            }
        }catch (error){
            reject(error)
        }
    })
}

async function getImage(xid) {
    const url = "https://user.mypikpak.com/pzzl/gen";
    const params = new URLSearchParams({
        "deviceid": xid,
        "traceid": ""
    });

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url + '?' + params.toString());
            const imgsJson = await response.json();
            const frames = imgsJson["frames"];
            const pid = imgsJson['pid'];
            const traceid = imgsJson['traceid'];
            const selectId = list_compare(frames);
            const result = {frames, pid, traceid, selectId};
            console.log('滑块信息', result)
            resolve(result);
        } catch (error) {
            reject(error);
        }
    })
}

async function getNewToken(result, xid, captcha) {
    return new Promise(async (resolve, reject) => {
        try {
            const frames = result.frames;
            const selectId = result.selectId;
            const traceid = result.traceid;
            const pid = result.pid;
            const json = img_jj(frames, parseInt(selectId), pid);
            console.log('滑块验证参数', json)
            const f = json.f;
            const npac = json.ca;
            const params = new URLSearchParams({
                pid: pid,
                deviceid: xid,
                traceid: traceid,
                f: f,
                n: npac[0],
                p: npac[1],
                a: npac[2],
                c: npac[3]
            });
            const response1 = await fetch(`https://user.mypikpak.com/pzzl/verify?${params.toString()}`);
            const response2 = await fetch(`https://user.mypikpak.com/credit/v1/report?deviceid=${xid}&captcha_token=${captcha}&type=pzzlSlider&result=0&data=${pid}&traceid=${traceid}`);
            const responseDate = await response2.json();
            console.log('滑块验证结果', responseDate)
            resolve(responseDate);
        } catch (error) {
            reject(error);
        }
    });
}

async function verification(captchaToken, xid, mail) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://user.mypikpak.com/v1/auth/verification'
        const body = {
            "email": mail,
            "target": "ANY",
            "usage": "REGISTER",
            "locale": "zh-CN",
            "client_id": "YvtoWO6GNHiuCl7x"
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'user.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'MainWindow Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'accept-language': 'zh-CN',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-captcha-token': captchaToken,
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-device-model': 'electron%2F18.3.15',
            'x-device-name': 'PC-Electron',
            'x-device-sign': 'wdi10.ce6450a2dc704cd49f0be1c4eca40053xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-net-work-type': 'NONE',
            'x-os-version': 'Win32',
            'x-platform-version': '1',
            'x-protocol-version': '301',
            'x-provider-name': 'NONE',
            'x-sdk-version': '6.0.0'
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('发送验证码', responseData)
            resolve(responseData)
        }catch (error) {
            reject(error)
        }
    })
}

async function verify(xid, verificationId, code) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://user.mypikpak.com/v1/auth/verification/verify'
        const body = {
            "verification_id": verificationId,
            "verification_code": code,
            "client_id": "YvtoWO6GNHiuCl7x"
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'user.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'MainWindow Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'accept-language': 'zh-CN',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-device-model': 'electron%2F18.3.15',
            'x-device-name': 'PC-Electron',
            'x-device-sign': 'wdi10.ce6450a2dc704cd49f0be1c4eca40053xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-net-work-type': 'NONE',
            'x-os-version': 'Win32',
            'x-platform-version': '1',
            'x-protocol-version': '301',
            'x-provider-name': 'NONE',
            'x-sdk-version': '6.0.0'
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('注册验证', responseData)
            resolve(responseData)
        }catch (error) {
            reject(error)
        }
    })
}

async function signup(xid, mail, code, verificationToken) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://user.mypikpak.com/v1/auth/signup'
        const body = {
            "email": mail,
            "verification_code": code,
            "verification_token": verificationToken,
            "password": "pw123456",
            "client_id": "YvtoWO6GNHiuCl7x"
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'user.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'MainWindow Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'accept-language': 'zh-CN',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-device-model': 'electron%2F18.3.15',
            'x-device-name': 'PC-Electron',
            'x-device-sign': 'wdi10.ce6450a2dc704cd49f0be1c4eca40053xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-net-work-type': 'NONE',
            'x-os-version': 'Win32',
            'x-platform-version': '1',
            'x-protocol-version': '301',
            'x-provider-name': 'NONE',
            'x-sdk-version': '6.0.0'
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('登录傀儡账户', responseData)
            resolve(responseData)
        }catch (error) {
            reject(error)
        }
    })
}

async function init1(xid, accessToken, sub, sign, t) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://user.mypikpak.com/v1/shield/captcha/init'
        const body = {
            "client_id": "YvtoWO6GNHiuCl7x",
            "action": "POST:/vip/v1/activity/invite",
            "device_id": xid,
            "captcha_token": accessToken,
            "meta": {
                "captcha_sign": "1." + sign,
                "client_version": "undefined",
                "package_name": "mypikpak.com",
                "user_id": sub,
                "timestamp": t
            },
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'user.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN',
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'MainWindow Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-device-model': 'electron%2F18.3.15',
            'x-device-name': 'PC-Electron',
            'x-device-sign': 'wdi10.ce6450a2dc704cd49f0be1c4eca40053xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            'x-net-work-type': 'NONE',
            'x-os-version': 'Win32',
            'x-platform-version': '1',
            'x-protocol-version': '301',
            'x-provider-name': 'NONE',
            'x-sdk-version': '6.0.0'
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('二次安全验证', responseData)
            resolve(responseData)
        }catch (error) {
            reject(error)
        }
    })
}

async function invite(accessToken, captcha, xid) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://api-drive.mypikpak.com/vip/v1/activity/invite'
        const body = {
            "apk_extra": {
                "invite_code": ""
            }
        }
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'api-drive.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN',
            'authorization': 'Bearer ' + accessToken,
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-captcha-token': captcha,
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-system-language': 'zh-CN'
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('傀儡账户信息', responseData)
            resolve(responseData)
        }catch (error) {
            reject(error)
        }
    })
}

async function activationCode(accessToken, captcha, xid, inCode) {
    return new Promise(async (resolve, reject) => {
        const url = 'https://api-drive.mypikpak.com/vip/v1/order/activation-code';
        const body = {
            "activation_code": inCode,
            "page": "invite"
        }
        // 将请求体转换为字符串形式
        const bodyString = JSON.stringify(body);
        // 计算请求体长度（字节数）
        const encoder = new TextEncoder();
        const bodyLength = encoder.encode(bodyString).byteLength;
        const headers = {
            'host': 'api-drive.mypikpak.com',
            'content-length': bodyLength,
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN',
            'authorization': 'Bearer ' + accessToken,
            'referer': 'https://pc.mypikpak.com',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) PikPak/2.3.2.4101 Chrome/100.0.4896.160 Electron/18.3.15 Safari/537.36',
            'content-type': 'application/json',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'x-captcha-token': captcha,
            'x-client-id': 'YvtoWO6GNHiuCl7x',
            'x-client-version': '2.3.2.4101',
            'x-device-id': xid,
            'x-system-language': 'zh-CN'
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            })
            const responseData = await response.json()
            console.log('填写邀请', responseData)
            resolve(responseData)
        } catch (error) {
            reject(error)
        }
    })
}

//   主函数及执行
async function start(inCode){
    const start_time = new Date().getTime();
    return new Promise(async (resolve, reject) => {
        try {
            const mail = await getMail()
            const xid = uuidv4().replace(/-/g, '');
            const Init = await init(xid, mail['address'])
            const Image = await getImage(xid)
            const Newtoken = await getNewToken(Image, xid, Init['captcha_token'])
            const Verification = await verification(Newtoken['captcha_token'], xid, mail['address'])
            const Code = await getCode(mail['jwt'])
            const Verify = await verify(xid, Verification['verification_id'], Code)
            const SignUp = await signup(xid, mail['address'], Code, Verify['verification_token'])
            const t = String(Date.now())
            const sign = await getSign(xid, t)
            const Init1 = await init1(xid, SignUp['access_token'], SignUp['sub'], sign, t)
            const Invite = await invite(SignUp['access_token'], Init1['captcha_token'], xid)
            const final = await activationCode(SignUp['access_token'], Init1['captcha_token'], xid, inCode)
            const end_time = new Date().getTime();
            const run_time = parseFloat(((end_time - start_time)/1000).toFixed(2))
            resolve({add_days:final['add_days'],
                time:run_time});
            console.log('当前邀请码:', inCode)
        } catch (error) {
            const end_time = new Date().getTime();
            const run_time = parseFloat(((end_time - start_time)/1000).toFixed(2))
            reject({add_days:1,
                error:error,
                time:run_time});
        }
    });
}

start(inCode).then(data => {
    let result;
    if (data.add_days === 5) {
        result = {
            '结果': '邀请成功',
            '用时': data.time + '秒'
        }
    } else if (data.add_days === 1) {
        result = {
            '结果': data.error,
            '用时': data.time + '秒'
        }
    }else {
        result = {
            '结果': '邀请失败',
            '用时': data.time + '秒'}
    }
    console.log(result)
    body.code = result.结果
    $done({body: JSON.stringify(body)})
    })
$done
