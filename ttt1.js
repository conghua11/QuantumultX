/**************************************
#!name = TTT
#!desc = 获取真实地址
#!author = 小白
#!date = 2024-09-01

[Script]
http-request ^https:\/\/[^\/]*\.qxoovv\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/ttt1.js
http-request ^https:\/\/[^\/]*\.shjsvkj\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/ttt1.js
http-request ^https:\/\/[^\/]*\.shoknkj\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)?$ script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/ttt1.js
http-request https:\/\/[^\/]*\..*\.cn\/\w+\/[a-z0-9]{32}\/[a-z0-9]{32}\.m3u8(\?.*)? script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/ttt1.js
[MITM]
hostname = *.shjsvkj.cn, *.qxoovv.cn, *.shoknkj.cn, *.shedbgs.cn, *.shnyigs.cn, *.sholfgs.cn, *.shjtqgs.cn, *.shjtpkj.cn, *.hfsudf.cn
**************************************/


var _0xodY = 'jsjiami.com.v7';

function _0x58e7(_0x4c1138, _0x492efc) {
    const _0x17f075 = _0x17f0();
    return _0x58e7 = function(_0x58e748, _0x325576) {
        _0x58e748 = _0x58e748 - 0x1b9;
        let _0x435139 = _0x17f075[_0x58e748];
        if (_0x58e7['pupZlN'] === undefined) {
            var _0x46db05 = function(_0xac4c3) {
                const _0x5f763a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x191e91 = '',
                    _0x8079fc = '';
                for (let _0x88e8a0 = 0x0, _0x2617f3, _0x2a8379, _0x29c36a = 0x0; _0x2a8379 = _0xac4c3['charAt'](_0x29c36a++); ~_0x2a8379 && (_0x2617f3 = _0x88e8a0 % 0x4 ? _0x2617f3 * 0x40 + _0x2a8379 : _0x2a8379, _0x88e8a0++ % 0x4) ? _0x191e91 += String['fromCharCode'](0xff & _0x2617f3 >> (-0x2 * _0x88e8a0 & 0x6)) : 0x0) {
                    _0x2a8379 = _0x5f763a['indexOf'](_0x2a8379);
                }
                for (let _0x11bfe7 = 0x0, _0x90498c = _0x191e91['length']; _0x11bfe7 < _0x90498c; _0x11bfe7++) {
                    _0x8079fc += '%' + ('00' + _0x191e91['charCodeAt'](_0x11bfe7)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x8079fc);
            };
            const _0x3488cd = function(_0x2d3a41, _0x546883) {
                let _0x5f7009 = [],
                    _0x23e2a4 = 0x0,
                    _0x1b1f7a, _0xd1eb9b = '';
                _0x2d3a41 = _0x46db05(_0x2d3a41);
                let _0x3fce17;
                for (_0x3fce17 = 0x0; _0x3fce17 < 0x100; _0x3fce17++) {
                    _0x5f7009[_0x3fce17] = _0x3fce17;
                }
                for (_0x3fce17 = 0x0; _0x3fce17 < 0x100; _0x3fce17++) {
                    _0x23e2a4 = (_0x23e2a4 + _0x5f7009[_0x3fce17] + _0x546883['charCodeAt'](_0x3fce17 % _0x546883['length'])) % 0x100, _0x1b1f7a = _0x5f7009[_0x3fce17], _0x5f7009[_0x3fce17] = _0x5f7009[_0x23e2a4], _0x5f7009[_0x23e2a4] = _0x1b1f7a;
                }
                _0x3fce17 = 0x0, _0x23e2a4 = 0x0;
                for (let _0x6a6445 = 0x0; _0x6a6445 < _0x2d3a41['length']; _0x6a6445++) {
                    _0x3fce17 = (_0x3fce17 + 0x1) % 0x100, _0x23e2a4 = (_0x23e2a4 + _0x5f7009[_0x3fce17]) % 0x100, _0x1b1f7a = _0x5f7009[_0x3fce17], _0x5f7009[_0x3fce17] = _0x5f7009[_0x23e2a4], _0x5f7009[_0x23e2a4] = _0x1b1f7a, _0xd1eb9b += String['fromCharCode'](_0x2d3a41['charCodeAt'](_0x6a6445) ^ _0x5f7009[(_0x5f7009[_0x3fce17] + _0x5f7009[_0x23e2a4]) % 0x100]);
                }
                return _0xd1eb9b;
            };
            _0x58e7['OQWEbz'] = _0x3488cd, _0x4c1138 = arguments, _0x58e7['pupZlN'] = !![];
        }
        const _0x2bf482 = _0x17f075[0x0],
            _0x46fb29 = _0x58e748 + _0x2bf482,
            _0xdb9071 = _0x4c1138[_0x46fb29];
        return !_0xdb9071 ? (_0x58e7['KQyIzv'] === undefined && (_0x58e7['KQyIzv'] = !![]), _0x435139 = _0x58e7['OQWEbz'](_0x435139, _0x325576), _0x4c1138[_0x46fb29] = _0x435139) : _0x435139 = _0xdb9071, _0x435139;
    }, _0x58e7(_0x4c1138, _0x492efc);
}
const _0xa60dc5 = _0x58e7;
(function(_0x51b0a0, _0x2e2672, _0x4b44aa, _0x31c3d2, _0x2bd7ae, _0x397bb4, _0x2167a4) {
    return _0x51b0a0 = _0x51b0a0 >> 0x8, _0x397bb4 = 'hs', _0x2167a4 = 'hs',
        function(_0x18c133, _0x3cfe59, _0x432265, _0x48b854, _0x2774ba) {
            const _0xb97f6b = _0x58e7;
            _0x48b854 = 'tfi', _0x397bb4 = _0x48b854 + _0x397bb4, _0x2774ba = 'up', _0x2167a4 += _0x2774ba, _0x397bb4 = _0x432265(_0x397bb4), _0x2167a4 = _0x432265(_0x2167a4), _0x432265 = 0x0;
            const _0x539762 = _0x18c133();
            while (!![] && --_0x31c3d2 + _0x3cfe59) {
                try {
                    _0x48b854 = parseInt(_0xb97f6b(0x1c0, 'Htfj')) / 0x1 + parseInt(_0xb97f6b(0x1d4, 'LNge')) / 0x2 + -parseInt(_0xb97f6b(0x1c9, 'ojqh')) / 0x3 * (-parseInt(_0xb97f6b(0x1de, 'N0EL')) / 0x4) + parseInt(_0xb97f6b(0x1dc, 'AJPX')) / 0x5 * (-parseInt(_0xb97f6b(0x1df, 'N(%5')) / 0x6) + parseInt(_0xb97f6b(0x1ce, 'Du*&')) / 0x7 + -parseInt(_0xb97f6b(0x1d7, 'N0EL')) / 0x8 * (parseInt(_0xb97f6b(0x1c4, 'xczW')) / 0x9) + -parseInt(_0xb97f6b(0x1d1, 'U]sj')) / 0xa * (parseInt(_0xb97f6b(0x1cd, 'CvPr')) / 0xb);
                } catch (_0x191d81) {
                    _0x48b854 = _0x432265;
                } finally {
                    _0x2774ba = _0x539762[_0x397bb4]();
                    if (_0x51b0a0 <= _0x31c3d2) _0x432265 ? _0x2bd7ae ? _0x48b854 = _0x2774ba : _0x2bd7ae = _0x2774ba : _0x432265 = _0x2774ba;
                    else {
                        if (_0x432265 === _0x2bd7ae['replace'](/[ElQMtngAuhdpLqyDGK=]/g, '')) {
                            if (_0x48b854 === _0x3cfe59) {
                                _0x539762['un' + _0x397bb4](_0x2774ba);
                                break;
                            }
                            _0x539762[_0x2167a4](_0x2774ba);
                        }
                    }
                }
            }
        }(_0x4b44aa, _0x2e2672, function(_0x5d06fc, _0x19d440, _0x3443d6, _0x5637eb, _0x294c4a, _0x144f2a, _0x18bcfd) {
            return _0x19d440 = 'split', _0x5d06fc = arguments[0x0], _0x5d06fc = _0x5d06fc[_0x19d440](''), _0x3443d6 = 'reverse', _0x5d06fc = _0x5d06fc[_0x3443d6]('v'), _0x5637eb = 'join', (0x17e3ba, _0x5d06fc[_0x5637eb](''));
        });
}(0xca00, 0x6420d, _0x17f0, 0xcc), _0x17f0) && (_0xodY = 0xcc);
const $ = new Env(_0xa60dc5(0x1b9, '[ml%'));
let url = $request['url'],
    headers = $request[_0xa60dc5(0x1bd, 't@Xy')];
url = url[_0xa60dc5(0x1d8, 'xczW')](/\/\/(?!long)[^\.]+\./, _0xa60dc5(0x1ba, 'MI2O'))[_0xa60dc5(0x1d5, 'R]tn')](/\.m3u8/, _0xa60dc5(0x1da, '%D0O'));
if (headers[_0xa60dc5(0x1dd, 'Htfj')](_0xa60dc5(0x1c1, 'AJPX')) || headers[_0xa60dc5(0x1c3, 'CvPr')](_0xa60dc5(0x1bf, 'e3Or'))) try {
    const notify = $[_0xa60dc5(0x1bb, '5Z6)')](_0xa60dc5(0x1c2, 'RwAU'));
    if (!notify || notify != url) {
        $[_0xa60dc5(0x1cb, 't@Xy')](url, _0xa60dc5(0x1db, 'ojZ#'));
        // const senPlayerUrl = _0xa60dc5(0x1c8, 'U]sj') + encodeURIComponent(url),
            const senPlayerUrl = 'sharetoys://123?url=' + encodeURIComponent(url),
            mediaUrl = _0xa60dc5(0x1d6, 'L^3i');
        $[_0xa60dc5(0x1cc, 'Cdj8')]('获取链接成功', senPlayerUrl, '点击跳转', {
            'open-url': senPlayerUrl,
            'media-url': mediaUrl
        });
    }
} catch (_0x4fb4f9) {
    console[_0xa60dc5(0x1ca, 'Pb6A')](_0xa60dc5(0x1cf, '9rcZ'), _0x4fb4f9);
}
$[_0xa60dc5(0x1c6, 'ojqh')]({});

function _0x17f0() {
    const _0x242626 = (function() {
        return [_0xodY, 'QLjKsnjqiDaGmiA.utcoMQm.tv7DyGKGdlEhgpDM==', 'W7FcIvCIW5zdmCoT', 'dCksWRz9WQb+W6ZcRCoIWRhcNmoZcq', 'W5fAzCkg', 'qMPffGPUsSkXgmkxBSkj', 'hKhcHmondSkjfw5uW75eugWQW5CJW4RdU3dcLa7cI8kBcgq', 'WOyepCovxx96W6tdGcSjWRu', 'WO3dMN4UWQe', 'WRRdJ8kiWPjkW4bO', 'uZaQ', 'dSozWOr1hCorA18', 'WRfdWRDsCWxdNGBdUwZcG8oCWPi', 'WOJdTSkVduNdJmo5WRtdJ8oMWPblWQ/dImkgwvXh', 'mSkPW7KpdJ/dR8oNWPZcIGuP'].concat((function() {
            return ['srJdNmkwxmoAv2rzW4nnttO', 'WQJdRUImUowoVUAiQ+wiOq', '5yY96yoZ6ysy5Q646lYO5lU36k2j5yQ45B286Ag96yg/5AYC6kgm', 'WPJdKGxcRWDkvrpcMaBdPc8', 'W7eAWOZcHYKzW7W', 'dsJdTmoeW7VdN8kkvWJdKmkLW5mZW5foW7BcISoIWQvqWQzSCv3dM04QiLynW4eyuWvzWR7dIcfmW6uRbCoWyCo6igumEKZcM25hhCkfD0uCWRJdHmk4W6xcRq', 'FmkFy8ovs8kXgmogWPFdNvFcIa', 'WRBdMM86W7rlfW', 'W6VdGqlcOc1lWQvldaXmW7r7', 'WQKQmSoFnq', 'fMechG', 'cKS9oGJcSKNdRa', 'r8oKWPhdKcG3WR/dO8kihcrIDmoN', 'CCojm8kgn8oFdq', 'WQ5gqrOCWPHAW5raWQRdKa'].concat((function() {
                return ['WO46eKVdMHG3zSokxmkxWP8', 'u1ZdICocWPJdV3BdRG', 'sepdGmogBGKP', 'WR0dW5BcS8oOaIS', 'WOFcIZqQW5ZdMCkMsq', 'WQhdJ8kDWPjoW4z6', 'vM3cTSkcWRNdLmo/frJdGmk3WOG', 'WQ8RWOpdICoRwLj0xCkGsN/cK38BW6HFbCk0W6vA', 'gCkWW5dcRM1RWPJdQ8kHoYH8', 'qvmUfadcNgJdOrjVW6G2z8knhCoEWOlcJ8kVEbe', 'lSoyWO8Q', 'v8kjWP5Og8oQyKZcImo1WQtdLJna'];
            }()));
        }()));
    }());
    _0x17f0 = function() {
        return _0x242626;
    };
    return _0x17f0();
};
var version_ = 'jsjiami.com.v7';


function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,a)=>{s.call(this,t,(t,s,r)=>{t?a(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}getEnv(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"!=typeof module&&module.exports?"Node.js":"undefined"!=typeof $task?"Quantumult X":"undefined"!=typeof $loon?"Loon":"undefined"!=typeof $rocket?"Shadowrocket":void 0}isNode(){return"Node.js"===this.getEnv()}isQuanX(){return"Quantumult X"===this.getEnv()}isSurge(){return"Surge"===this.getEnv()}isLoon(){return"Loon"===this.getEnv()}isShadowrocket(){return"Shadowrocket"===this.getEnv()}isStash(){return"Stash"===this.getEnv()}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const a=this.getdata(t);if(a)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,a)=>e(a))})}runScript(t,e){return new Promise(s=>{let a=this.getdata("@chavy_boxjs_userCfgs.httpapi");a=a?a.replace(/\n/g,"").trim():a;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[i,o]=a.split("@"),n={url:`http://${o}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":i,Accept:"*/*"},timeout:r};this.post(n,(t,e,a)=>s(a))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e);if(!s&&!a)return{};{const a=s?t:e;try{return JSON.parse(this.fs.readFileSync(a))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),a=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):a?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const a=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of a)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,a)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[a+1])>>0==+e[a+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,a]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,a,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,a,r]=/^@(.*?)\.(.*?)$/.exec(e),i=this.getval(a),o=a?"null"===i?null:i||"{}":"{}";try{const e=JSON.parse(o);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),a)}catch(e){const i={};this.lodash_set(i,r,t),s=this.setval(JSON.stringify(i),a)}}else s=this.setval(t,e);return s}getval(t){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.read(t);case"Quantumult X":return $prefs.valueForKey(t);case"Node.js":return this.data=this.loaddata(),this.data[t];default:return this.data&&this.data[t]||null}}setval(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":return $persistentStore.write(t,e);case"Quantumult X":return $prefs.setValueForKey(t,e);case"Node.js":return this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0;default:return this.data&&this.data[e]||null}}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){switch(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"],delete t.headers["content-type"],delete t.headers["content-length"]),t.params&&(t.url+="?"+this.queryStr(t.params)),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:a,statusCode:r,headers:i,rawBody:o}=t,n=s.decode(o,this.encoding);e(null,{status:a,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:a,response:r}=t;e(a,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";switch(t.body&&t.headers&&!t.headers["Content-Type"]&&!t.headers["content-type"]&&(t.headers["content-type"]="application/x-www-form-urlencoded"),t.headers&&(delete t.headers["Content-Length"],delete t.headers["content-length"]),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,a)=>{!t&&s&&(s.body=a,s.statusCode=s.status?s.status:s.statusCode,s.status=s.statusCode),e(t,s,a)});break;case"Quantumult X":t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:a,headers:r,body:i,bodyBytes:o}=t;e(null,{status:s,statusCode:a,headers:r,body:i,bodyBytes:o},i,o)},t=>e(t&&t.error||"UndefinedError"));break;case"Node.js":let a=require("iconv-lite");this.initGotEnv(t);const{url:r,...i}=t;this.got[s](r,i).then(t=>{const{statusCode:s,statusCode:r,headers:i,rawBody:o}=t,n=a.decode(o,this.encoding);e(null,{status:s,statusCode:r,headers:i,rawBody:o,body:n},n)},t=>{const{message:s,response:r}=t;e(s,r,r&&a.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let a={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in a)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[e]:("00"+a[e]).substr((""+a[e]).length)));return t}queryStr(t){let e="";for(const s in t){let a=t[s];null!=a&&""!==a&&("object"==typeof a&&(a=JSON.stringify(a)),e+=`${s}=${a}&`)}return e=e.substring(0,e.length-1),e}msg(e=t,s="",a="",r){const i=t=>{switch(typeof t){case void 0:return t;case"string":switch(this.getEnv()){case"Surge":case"Stash":default:return{url:t};case"Loon":case"Shadowrocket":return t;case"Quantumult X":return{"open-url":t};case"Node.js":return}case"object":switch(this.getEnv()){case"Surge":case"Stash":case"Shadowrocket":default:{let e=t.url||t.openUrl||t["open-url"];return{url:e}}case"Loon":{let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}case"Quantumult X":{let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,a=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":a}}case"Node.js":return}default:return}};if(!this.isMute)switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(e,s,a,i(r));break;case"Quantumult X":$notify(e,s,a,i(r));break;case"Node.js":}if(!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),a&&t.push(a),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){switch(this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,t);break;case"Node.js":this.log("",`❗️${this.name}, 错误!`,t.stack)}}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),this.getEnv()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":case"Quantumult X":default:$done(t);break;case"Node.js":process.exit(1)}}}(t,e)}
