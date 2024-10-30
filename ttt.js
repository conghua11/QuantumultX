/***********************************
 #!name=测试
 #!desc=测试去广告
 #!author=小白
 #!date=2024-10-30
 [Script]
 http-response https://dpi4.dr4gv5cd.com/pwa.php/api/(home/getOpenAdsAndVersion|user/userinfo) script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/ttt.js, requires-body=true, timeout=60, tag=测试

 [MITM]
 hostname = *.dr4gv5cd.com
 ***********************************/
const body = JSON.parse($response.body);
let url = "undefined" !== typeof $request ? $request.url : "";
let AD = '/home/getOpenAdsAndVersion'
let VIP = '/user/userinfo'
if (url.indexOf(AD) !== -1) {
    (async function ad() {
        body.data = 'FF07BB58C9AC9A848762D6621E357A67224135B5ED4EFC7F93D55768766C66922B0F6C31418B4BE0B882FCDE210712DEC0DF026BAF22E099D17ADC02B4F4909BC9'
        const t = body.timestamp
        let text = 'client=pwa&data=' + body.data + '&timestamp=' + t + '7205a6c3883caf95b52db5b534e12ec3'
        const hash = await sha256(text)
        console.log(hash)
        body.sign = md5(hash); // 输出 SHA-256 哈希值
        console.log('去除广告')
        $done({body: JSON.stringify(body)})
    })()
}
if (url.indexOf(VIP) !== -1) {
    (async function vip() {
        body.data = 'FF07BB58C9AC9A848762D6621E357A67224135B5ED5BAB72999F573F33327D9E2B28DBF959B18591EEA2887F98E687AF8D1A7FF8520EFA03A7F150B20A68F366367C26D4132FE21585F9AEFE8C3411AE229A5E18363D9CFB12B0B73E92723C70D439F4FFB282C9DB5D589C0B4C07B0AADEA40BD80221119FB74988A48E798CE5684E48F636044F8E19D98790AE6164DAC5ADB57A3EB44BE801E5DA695A6BCE7D2B032B7BBC89AA854658A1E91F4BF66594D2BFC589CCE473F29F80FBA194341D91274FA123D33A2E6C5A7263223E05CEADB9F866D914D8A429C2D18AA305337F1D29324275EAAED32261D8FD786211C197C621F9795F1389C866A4F45F1EFF940271DA5142DCCCB0C3129E1EA84753953BE57C652F367D8936207040A7F0036E30C8D563F4C0BA3CF4B56E8BD3E1FF41EB998C664929739FDA67CF3599480AE30183B4C0359ABC20F8FAFC97DC908C3BA9E7D7863B20393887FAB2B09E0EA1C8786E58B57279DC0AE2D27163C583004FA3A28193CC4CE74B599A64524AC5C023CABC435431F03F1B81E9F1D642AEF4AB98C9E28335623138262E8A0E1F008FD579801A0ECAC783217F074B5424ACC2C8BBF3B8EEBC103C4936CF76E9B6445304AEF850416ED8BC5C784466486D860EBE60403BA8C7EFDC656E2572432F8954FDE5D871E79A7D449059F2B451A42B546A535DED5840297FA8596F3C41FA2AE4EB0002FE939B862C57528F09DC04D65C734CDE10E3AFB1B7E3E13857C7EC1FAD8C931D5DB2E5EF352478FC444751ADEEDE4AF47F354B29C259B7A21A375E4B7790AEAB032A0CD6C6DD7477C1BDD176AF6C8DEBD3D110020BFC6C2C5FFCBD349973A6A936915371BC0BA4843CC9CC40E59F89BCAE457CB7E5F81E9DC7184173439657C4357A712D2860C40C79C263F8EABE34B47451FC05BA1F9FCB417BF2277A7AAEA9B6F35FC0F78D69DA15BF7B78EE4F73B25527E12C4560460869C6FB94C297BD5B67E660F649D30E625406881124EA7DFEB42CB6B3CB08A04A900D6AF5387231394420A3A40A277430D4759D2DD4AECA5572233A22357DCB90873ACBA95B2A973E65DFDDC856FE59572C13036B29F969E654947C9744DE73297E7413E3CD3E279AC8886FC87D06740AEB9710DF4BB07D9B7CCC15F6656A9D26E91B8256C300180DDFB462911D94653DDC2C03D810368D601D3B35E2939C796E54C8F974392806DECAB53630F4DAAB8F52338FA6BD02E688914B18FB57E9EB7FBF1E57593746338F2981D954CEEA61AE57034A817A1227057BF3CC69A830DD403BE87DACCF49BA3E35F03AEB3FEF388F1BCD1E419E13D2616ED9E29F9BDD99AD'
        const t = body.timestamp
        let text = 'client=pwa&data=' + body.data + '&timestamp=' + t + '7205a6c3883caf95b52db5b534e12ec3'
        const hash = await sha256(text)
        console.log(hash)
        body.sign = md5(hash); // 输出 SHA-256 哈希值
        console.log('解锁VIP')
        $done({body: JSON.stringify(body)})
    })()
}
$done({body: JSON.stringify(body)})
function md5(input) {
  const hex_chr = '0123456789abcdef'.split('');

  function rhex(n) {
    let s = '';
    for (let j = 0; j < 4; j++) {
      s += hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
    }
    return s;
  }

  function add32(a, b) {
    return (a + b) & 0xffffffff;
  }

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function md5cycle(x, k) {
    let [a, b, c, d] = x;

    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);

    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);

    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);

    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);

    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function md5blk(s) {
    let md5blks = [];
    for (let i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }

  function md51(s) {
    let n = s.length;
    let state = [1732584193, -271733879, -1732584194, 271733878];
    let i;
    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    let tail = new Array(16).fill(0);
    for (i = 0; i < s.length; i++) {
      tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    }
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      tail = new Array(16).fill(0);
    }
    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  function hex(x) {
    for (let i = 0; i < x.length; i++) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }

  return hex(md51(input));
}

async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hash));
    return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
}
