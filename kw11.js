
/***********************************

// ==UserScript==
// @ScriptName        酷我音乐[ VIP+净化 ]
// @Author            @ddgksf2013
// @TgChannel         https://t.me/ddgksf2021
// @Contribute        https://t.me/ddgksf2013_bot
// @Feedback          📮 ddgksf2013@163.com 📮
// @UpdateTime        2024-09-13
// @Attention         使用中若有问题请发邮件！
// @Suitable          自行观看“# > ”注释内容
// @Attention         如需引用请注明出处，谢谢合作！
// @Version           V2.0.45
// @ScriptURL         https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
// ==/UserScript==


1、本重写仅限本人使用，严禁传播或售卖
2、解锁VIP歌曲，VIP听书，VIP装扮
3、全面净化去除酷我音乐广告
4、脚本工作原理为音源替换而非破解
5、若需要更高音质请付费支持歌手
6、若酷我播放发热，请关闭广告终结者Anti分流


[rewrite_local]

# > 通用广告请求@ddgksf2013
https?:\/\/vip1\.kuwo\.cn\/vip\/activity\/kwMemberDay url reject-200
# > 屏蔽热词@ddgksf2013
https?:\/\/hotword\.kuwo\.cn\/hotword\.s url reject-200
# > 通用广告请求@ddgksf2013
https?:\/\/vip1\.kuwo\.cn\/vip_adv\/ url reject-200
# > 通用广告请求@ddgksf2013
https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/app\/pasterAdvert url reject-200
# > 应用内弹窗及右下角@ddgksf2013
^https?:\/\/mobilead\.kuwo\.cn\/ url reject-200
# > 搜索框处理@ddgksf2013
https?:\/\/searchrecterm\.kuwo\.cn\/recterm\.s url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 会员页广告@ddgksf2013
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/page\/cells url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 会员页顶部广告tab@ddgksf2013
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/setting url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 开屏广告@ddgksf2013
https?:\/\/rich\.kuwo\.cn\/AdService url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 数字专辑@ddgksf2013
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 听书权限接口1@ddgksf2013
^https?:\/\/[a-z0-9A-Z]+\.(kuwo|lrts)\.(cn|me)\/a\.p url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 听书权限接口2@ddgksf2013
^https?:\/\/.*\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 新版vip接口1@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/vip\/enc\/user\/vip\?op=ui url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 新版vip接口2@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/userbase\/vip\?op=get url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 旧版vip接口@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/user\/vip\?(uid|op=ui) url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 皮肤解锁@ddgksf2013
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 下载接口@ddgksf2013
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?ui url script-request-header https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 我的页面卡片@ddgksf2013
^https?:\/\/appi.kuwo.cn/kuwopay/personal/cells url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js
# > 音乐播放接口@ddgksf2013
^https:\/\/[a-z0-9A-Z]+\.kuwo\.cn\/mobi\.s\?f=kwxs url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/refs/heads/main/kw11.js


[mitm]

hostname = *.kuwo.cn, *.lrts.me

***********************************/


const version = 'V1.0.14';

const $ = new Env('kuwo')

let method = $request['method'];

function showMonthlyPopup() {
    const cuttlefishMsg = 'Cuttlefishの自留地';
    const alertMsg = '脚本免费使用，收费请举报！';
    const link = 'https://t.me/ddgksf2021';

    const currentMonth = new Date().getMonth();
    const lastPopupMonth = $['getval']('lastPopupMonth');

    if (lastPopupMonth === null || lastPopupMonth !== currentMonth) {
        $.msg(cuttlefishMsg, '', alertMsg, {'open-url': link});
        $['setval'](currentMonth.toString(), 'lastPopupMonth');
    }
}

if ($request.url.indexOf('/mobi.s') !== -1) {
    let body = $response['body'];
    const musicKey = $['getval']('Kw_MusicKey');
    $.log(musicKey)
    let PlayUrl = 'https://mobi.kuwo.cn/mobi.s?f=web&source=kwplayer_ar_5.1.0.0_B_jiakong_vh.apk&type=convert_url_with_sign&br=2000kflac&rid='
    $.log(PlayUrl)    
    !(async () => {
        if (musicKey) {
            await $.http
                .get({
                    url: PlayUrl + musicKey
                })
                .then((response) => {
                    body = response.body
                })
        } else {
            $.msg('获取歌曲ID错误,歌曲解锁失败!!!')
        }
        $.log(body)
        $['setdata']('', 'Kw_MusicKey');
        showMonthlyPopup();
        $['done']({'body': body});
    })().catch(error => console['log']('error: ' + error));
}
if (/a\.p/.test($request['url'])) {
    let body = $response['body'];
    let match = body.match(/id":(\d+)/);
    let id = match ? match[1] : null;
    if (id) {
        $['setval'](id, 'Kw_MusicKey');
    }
    body = body.replace(/"type":\d*/g, '"type":2')
        .replace(/"end":\d*/g, '"end":4811209694')
        .replace(/"period":\d*/g, '"period":111')
        .replace(/"bought_vip":\d*/g, '"bought_vip":1')
        .replace(/"bought_vip_end":\d*/g, '"bought_vip_end":4811209694')
        .replace(/"limitfree":\d*/g, '"limitfree":1')
        .replace(/"playable":\d*/g, '"playable":1')
        .replace(/"downable":\d*/g, '"downable":1')
        .replace(/"playright":\d*/g, '"playright":1')
        .replace(/"downright":\d*/g, '"downright":1')
        .replace(/"policytype":\d*/g, '"policytype":1')
        .replace(/"policy":\d*/g, '"policy":1');
    $done({'body': body});
}
if (/music\.pay/.test($request['url'])) {
    if (method === 'POST' && $response['body'].includes('audio')) {
        $.log($response['body'])
        let obj = JSON.parse($response['body']);
        obj['songs'][0]['audio'].forEach(audio => {
            audio['st'] = 0;
        });
        $.log(obj['songs'][0]['id'])
        $['setval'](obj['songs'][0]['id'].toString(), 'Kw_MusicKey');
        $done({'body': JSON.stringify(obj)});
    }
}
if ($request['url'].indexOf('mgxhtj.kuwo.cn') !== -1 || $request['url'].indexOf('mgxh.s') !== -1) {
    let body = $response['body'];
    body = body.replace(/<ad[^>]*>/g, '').replace(/(<userinfolabel)[^>]*>/g, '$1>');
    $done({'body': body});
}
if ($request['url'].indexOf('searchrecterm.kuwo.cn') !== -1) {
    let body = $response['body'];
    const modifiedData = {'content': [{'query_word': '搜索', 'desc': ''}]};
    $done({'body': JSON.stringify(modifiedData)});
}
if ($request['url'].indexOf('kuwopay/personal/cells') !== -1) {
    let body = $response['body'];
    let data = JSON.parse(body);
    data['data']['list'] = Object.values(data['data']['list']).filter(item => !item['title'].includes('卡'));
    $done({'body': JSON.stringify(data)});
}
if ($request['url'].indexOf('kuwopay/vip-tab/page/cells') !== -1) {
    let body = $response['body'];
    let data = JSON.parse(body);
    data['data'] = Object.values(data['data']).filter(item => item['type'] !== 'AdvertBanner' && item['type'] !== 'Welfare');
    if (data['data'][0]?.['type'] === 'VipCard') {
        data['data'][0]['data']['noVip'] = ['https://t.me/ddgksf2021'];
    }
    $done({'body': JSON.stringify(data)});
}
if ($request['url'].indexOf('kuwopay/vip-tab/setting') !== -1) {
    let body = $response['body'];
    let data = JSON.parse(body);
    data['data']['tab']['vipTypes'] = [{
        '_id': '63bd4b1002539ab74ca789df',
        'title': '会员',
        'type': 'svip',
        'description': '会员',
        'topics': [{
            'mainBgColor': '#3C2D08',
            'title': '精选',
            'navId': '63bd4b1002539ab74ca789df',
            'deputyBgColor': '#111111',
            'url': 'https://m.kuwo.cn/viptab/'
        }]
    }];
    $done({'body': JSON.stringify(data)});
}
if ($request['url'].indexOf('rich.kuwo.cn/AdService') !== -1) {
    let body = $response['body'];
    body = body.replace(/"url"/g, '"URL"').replace(/last_time":\d+/g, 'last_time":0');
    $done({'body': JSON.stringify(body)});
}
if (/vip\/v2\/theme/.test($request['url'])) {
    let body = $response['body'];
    let obj = JSON.parse(body);
    obj['data']['vipTheme']['type'] = 'free';
    obj['data']['needBieds'] = [];
    $done({'body': JSON.stringify(obj)});
}
if (/vip\/v2\/userbase\/vip/.test($request['url'])) {
    let body = $response['body'];
    let obj = JSON.parse(body);
    obj['data']['vipLuxuryExpire'] = 4000000000000;
    obj['data']['time'] = 1961170340993;
    $done({'body': JSON.stringify(obj)});
}
if (/v2\/api\/pay\/vip\/extraVipStatus/.test($request['url'])) {
    let body = $response['body'];
    let obj = JSON.parse(body);
    obj['data']['isbuyVip'] = 1;
    $done({'body': JSON.stringify(obj)});
}
if (/music\.pay\?uid=.*/.test($request['url'])) {
    let url = $request['url']
    url = url.replace(/uid=\d+/g, 'uid=6');
    $done({'url': url});
}
if (/vip\/enc\/user/.test($request['url'])) {
    let body = $response['body'];
    body = "Vo4m6X2hTph/vfpPmau8PTT0sFN6JCgzxSLVH/u3sbEt7VniYsVHbRFgOgN+Uvs39rAI7R3C5HVpaSj8tr8U8dLYwYdDCjMILuUorh3z0BiQToiWxudHkcASIPHNrmZHZYC/yv3DP4b89hbzfqU5UUDUqaZpEBZr76sDF2wNPmYjUEFSVCMGyTl1F6j1DBmKJ1Tik0YuG/2UBa/Ilz12a1KneXsNs5x5EE41bXDke7EygIB3I+6SoITZXOLFAFQFZujdI0GzClNglDKtclpUxpjN3uVeJxHLU40FTwNWo3ZDNv8KSdZpYZ5BDEOCyZkifmHlf1wnocX2zTr2xRAM6JhAD2WaSSNQQVJUI5lv72QNZSN43Pj/qdzatHQP4Pp/H1YxyP36rv3qBcnnJy/55YouIczRc3eJjXExRgo54qdyTYRMYoS9GzNn/edR3hSNnMn9PnElBCfZhkL0R5kZ9JBFCM3vNOy7Cnp6RVyAG0GFHv/g2q1yqkJxibyDro5nlnnvHjhZrsOvSvTXI1BBUlQjGoRqqCTDUvHLoiNwWMoKKfxtswWQiXjoQ6mL5dazxjUsbsHzC1N8YNMVtzf8gBryr3nMWS44wyUpi1/0WhGTRW1wsCllO1DB24+ibTFH/yftWN+/apM9vbQAkc/J+aFy/01plK7rsGNwWYYKG0sr6CS8dGQzy0On6aFo07hiU+wjUEFSVCOf/wKzzX5Cn/OLMKeVa1BPDxV5tm39vCrsxIG6T29VHWx8ck93S/nXCm2dHfojuLySZKJ50B1FaN5uFIY+LA1RbO/0sL+CoSJhoNOLibzt75c5dleW+lbwxLAAdBh5AFq4Z1Uj8bPjm5mHcGWQuBAyZIO+ie8wP4yvWwQFf1ENJiNQQVJUIzwCo22cpAtoAzYZWm3XFPfSlov4G15JGaaHL2X5FG5BTeUwwbBiQfwUpcb6oT8dbIKh2SsUZCeJZW43lLI0UIo9u3y1+P4GMtOKEZ7Sx0aQ3ewknthU2tpL0gnykFtiEtKBxcfHjJEen158zVXrbxxC0W35SmaYOOwgAmEMfxwHI1BBUlQjhVUHnBabnJcnmXCICcyUBglrZkXcNLwg91p4889vKFTLlzROHTt20UzjfKWsNK3U8pYgKYXPbQtSzIuRheEEQDFhLvEhIGKaB6yDoacDLJZ0jgFRIKKFBkbK0VE4nIABi1qgQOXvq1sG4QeupjfEWYqMX8EyyqPHrsDiCltAF1wjUEFSVCNybeUusnxJF2zswj8xQtfPiwfDj3TwKWxKXCmkheqHy7/0Qpyc84xWvq+YXktsU97wUZLHrgJmARudJmQNEwAweIdHMafcwreBy731z6kGLojy5TLgTN7XSm5Ar+hgOW+1ZwkWLyrVvaCdO/8/zdYl1w/PQUCs6dw0ThIeahwjpQ==";
    $done({'body': body});
}

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "", this.startTime = (new Date).getTime(), Object.assign(this, e)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/ /g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: "http://" + h + "/v1/scripting/evaluate",
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/[(d+)]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?).(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?).(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = [""];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", "❗️" + this.name + ", 错误!", t.stack) : this.log("", "❗️" + this.name + ", 错误!", t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
