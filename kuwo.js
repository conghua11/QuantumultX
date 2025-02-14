/****************************

#!name = 酷我音乐 & 酷我畅听
#!desc = 〔 酷我音乐&酷我畅听 〕全功能破解
#!author = 影子[https://www.napi.ltd]
#!homepage = https://napi.ltd
#!openUrl = https://napi.ltd
#!tag = 会员
#!loon_version = 3.2.3(762)
#!icon = https://static.napi.ltd/Image/KuWo.png
#!date = 2025-02-14


[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY


[Rewrite]
^.*?(ad(.*)?\.tencentmusic\.com|kuwo\.cn\/((EcomResource|(Mobile)?Ad)Serv(er|ice)|(vip|(open)?api)?\/v\d\/(user\/freeMode|sysinfo\?op\=getRePayAndDoPayBox(New)?|album\/adBar|app\/(newMenuList\/menuListInfo|pasterAdvert\/config)|api\/advert\/(iListen|album)|operate\/pop\/info|online\/sign\/new\/playEntryV1)|kuwopay\/vip-tab\/page\/floatbox)) reject-200


[Script]
http-response ^(?!.*img).*?(abt-kuwo\.tencentmusic\.com|kuwo\.cn)(/vip|/(open)?api)?(/enc.*?signver|/(v\d/)?(pay/app/getConfigInfo|app/startup/config|user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|api/((pay/)?(user/info|payInfo/kwplayer/payMiniBar)|advert/myPage)|tingshu/index/radio|operate/homePage)|/kuwo/ui/info$|/kuwopay\/personal\/cells|/pay/viptab/index\.html|/kuwopay/vip-tab/(setting|page/cells)|/a\.p($|\?newver\=\d$|.*?op\=(getvip|policy_shortvideo)|.*?ptype\=vip)|/commercia/vip/(player/getStyleListByModel|hanger/wear)|/authPay|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=\d$|/basedata\.s\?type\=get_album_info|/mgxh\.s\?user) script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kuwo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://static.napi.ltd/Image/KuWo.png


[Mitm]
hostname = *.kuwo.cn, *.tencentmusic.com

****************************/


// 定义环境对象
const env = new Env("酷我音乐");

// 解密/加密相关函数
const {
    encrypt,
    decrypt,
    getVer,
    getInfo
} = setupCrypto("影子"); // 初始化加密模块

// 常量定义
const VERSION = "xxx"; // 版本号
const config = env.getjson(env.getval("酷我音乐")) || {};

// 获取请求相关信息
let reqUrl = typeof $request !== "undefined" ? $request.url : '';
let respBody = typeof $response !== "undefined" ? $response.body : null;
let respJson = env.getjson(respBody);

// 定义URL匹配规则
const urlPatterns = {
    "musicPlay": /mobi\.s\?f\=kwxs/,
    "userInfo": /vip\/enc/,
    "vipInfo": /vip\/v\d\/user\/vip/,
    "userDetail": /(a\.p|v\d\/api\/(pay\/)?user\/info)/,
    "musicInfo": /music\.pay\?newver\=\d$/,
    "vipTheme": /(commercia\/)?vip\/(v\d\/theme\?op\=gd|(player\/getStyleListByModel|hanger\/wear))/,
    "advert": /v\d\/api\/advert\/myPage/,
    "bottomTab": /kuwo\/ui\/info$/,
    "indexTopAd": /openapi\/v\d\/operate\/homePage/,
    "myPageVipBox": /kuwopay\/personal\/cells/,
    "payInfo": /api\/v\d\/pay\/app\/getConfigInfo/,
    "bookRadio": /openapi\/v\d\/tingshu\/index\/radio/,
    "vipTabAd": /kuwopay\/vip-tab\/(setting|page\/cells)/,
    "vipTabUserBox": /pay\/viptab\/index\.html/,
    "payBar": /((openapi)?v\d\/(api\/pay\/payInfo\/kwplayer\/payMiniBar|app\/startup\/config)|basedata\.s\?type\=get_album_info)/,
    "userCenter": /mgxh\.s\?user/,
    "authPay": /authPay/
};

// 处理函数映射
const handlers = {
    "musicPlay": handleMusicPlay,
    "userInfo": handleUserInfo,
    "vipInfo": handleVipInfo,
    "userDetail": handleUserDetail,
    "musicInfo": handleMusicInfo,
    "vipTheme": handleVipTheme,
    "advert": handleAdvert,
    "bottomTab": handleBottomTab,
    "myPageVipBox": handleMyPageVipBox,
    "payInfo": handlePayInfo,
    "bookRadio": handleBookRadio,
    "vipTabAd": handleVipTabAd,
    "vipTabUserBox": handleVipTabUserBox,
    "payBar": handlePayBar,
    "userCenter": handleUserCenter,
    "authPay": handleAuthPay
};

// 根据URL匹配对应的处理函数
for (const [key, pattern] of Object.entries(urlPatterns)) {
    if (pattern.test(reqUrl)) {
        (async () => {
            await handlers[key]();
        })().catch(err => {
            env.log("‼️‼️‼️‼️‼️‼️‼️‼发生错误", err.message);
        });
        break;
    }
}

// 音乐播放处理
async function handleMusicPlay() {
    const {user, isVip, endTime, keys, PlayID, Song, ver} = config;
    
    await getInfo('238581279', "kuwo");
    await getVer();
    
    if (isVip && new Date().getTime() < endTime && VERSION == ver && respJson.code == 200) {
        // VIP用户处理逻辑
        const key = keys[Math.floor(Math.random() * keys.length)];
        const decryptedKey = decrypt(key);
        
        // 音质选项
        const qualities = [
            {br: 4000, url: "4000kflac"},
            {br: 2000, url: "2000kflac"},
            {br: 320, url: "320kmp3"},
            {br: 128, url: "128kmp3"},
            {br: 100, url: "kwfree"},
            {br: 96, url: "48kaac"},
            {br: 48, url: "book"}
        ];
        
        // 选择合适的音质
        let qualityIndex = 0;
        if (Song == "book") {
            qualityIndex = 2;
        }
        
        while (qualities[qualityIndex]) {
            const reqUrl = `https://mobi.kuwo.cn/mobi.s?f=kuwo&q=${decryptedKey}&quality=${qualities[qualityIndex].url}&rid=${PlayID}`;
            
            await env.http.get(reqUrl).then(resp => {
                respBody = resp.body;
                respJson = env.getjson(respBody);
            });
            
            if (respJson.data.bitrate == qualities[qualityIndex].br) {
                break;
            }
            qualityIndex++;
        }
    }
    
    env.done({body: respBody});
}

// 用户信息处理
async function handleUserInfo() {
    const params = new URL(reqUrl).searchParams;
    let uid = params.get("uid");
    if (typeof uid === "undefined") {
        uid = reqUrl.replace(/.*?uid=(\d+).*/, "$1");
    }
    
    await getInfo(uid, "kuwo");
    respBody = await env.http.get(reqUrl.replace(/uid=\d+/g, "uid=238581279"))
        .then(resp => resp.body);
    
    env.done({body: respBody});
}

// VIP信息处理
async function handleVipInfo() {
    const vipIcons = {
        vipIcon: "https://image.kuwo.cn/fe/f2d09ac0-b959-411c-aa94-4c997af7ffa6.png",
        vipThemeIcon: "https://image.kuwo.cn/fe/3bdc8bdc-e6c99566636-1673248093960.png",
        vipLevel: "9999",
        vipLuxuryIcon: "https://image.kuwo.cn/fe/vip/luxury-icon.png",
        vipTag: "VIP7",
        vipText: "超级会员"
    };

    Object.assign(respJson.data, {
        ...vipIcons,
        isNewUser: config.isVip && vipIcons.vipText || "普通用户",
        vipExpireTime: '' + config.endTime,
        vip3Expire: '' + config.endTime,
        experienceExpireTime: '' + config.endTime,
        isYearUser: "1",
        svipExpireTime: '' + config.endTime,
        luxury: "2",
        isVip: "1",
        isVip3: "1",
        isVipLuxury: "1"
    });

    delete respJson.data.paidStatusFlags;
    delete respJson.data.vipMessage;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 用户详情处理
async function handleUserDetail() {
    if ("userInfo" in respJson) {
        for (let key in respJson.userInfo) {
            const item = respJson.userInfo[key];
            const {id = respBody.replace(/.*?"id":(\d+).*/, "$1")} = item;
            if (typeof id === "string") {
                config.PlayID = id;
                config.Song = "music";
                env.setval(env.toStr(config), "酷我音乐");
                break;
            }
        }
    }
    
    respBody = respBody
        .replace(/(policy|policytype)\":\d/g, '$1":1')
        .replace(/(playright|downright|type|bought|bought_vip|limitfree|vipType)\":\d/g, '$1":1')
        .replace(/(end|endtime|vipExpires|bought_vip_end)\":\d+/g, '$1":4077187200');
    
    env.done({body: respBody});
}

// 音乐信息处理
async function handleMusicInfo() {
    const {user, isVip, endTime, keys, PlayID, Song, ver} = config;
    
    if (isVip && new Date().getTime() < endTime && VERSION == ver && respJson.code == 200) {
        const key = keys[Math.floor(Math.random() * keys.length)];
        const decryptedKey = decrypt(key);
        
        const reqUrl = `https://mobi.kuwo.cn/mobi.s?f=kuwo&q=${decryptedKey}&quality=320kmp3&rid=${PlayID}`;
        await env.http.get(reqUrl).then(resp => {
            respBody = resp.body;
            respJson = env.getjson(respBody);
        });
    }
    
    env.done({body: respBody});
}

// VIP主题处理
async function handleVipTheme() {
    if (respJson.data?.isVip === 0) {
        respJson.data.isVip = 1;
        respBody = env.toStr(respJson);
    }
    env.done({body: respBody});
}

// 广告处理
async function handleAdvert() {
    respJson.data = null;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 底部标签处理
async function handleBottomTab() {
    if (respBody) {
        respBody = respBody.replace(/<section.*?\/userinfolabel><\/section>/, '');
    }
    env.done({body: respBody});
}

// 首页顶部广告处理
async function handleIndexTopAd() {
    let adKeys = ["发现", "推荐", "听书"];
    let i = 0;
    while (respJson.data.child[i]) {
        if (!adKeys.includes(respJson.data.child[i].title)) {
            delete respJson.data.child[i];
        }
        i++;
    }
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 我的页面VIP盒子处理
async function handleMyPageVipBox() {
    respJson.data.vipMessage = null;
    delete respJson.data.needBieds;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 支付信息处理
async function handlePayInfo() {
    respJson.data = null;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 听书广播处理
async function handleBookRadio() {
    if (respJson.data) {
        respJson.data.isVip = 1;
        respBody = env.toStr(respJson);
    }
    env.done({body: respBody});
}

// VIP标签广告处理
async function handleVipTabAd() {
    respJson.data.adInfo = null;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// VIP标签用户盒子处理
async function handleVipTabUserBox() {
    const vipInfo = {
        userType: null,
        vipType: "VIP7",
        vipExpire: null,
        vipIcon: "超级会员"
    };
    Object.assign(respJson.data, vipInfo);
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 支付栏处理
async function handlePayBar() {
    respJson.data = null;
    respBody = env.toStr(respJson);
    env.done({body: respBody});
}

// 用户中心处理
async function handleUserCenter() {
    if (respBody) {
        respBody = respBody.replace(/<section.*?\/userinfolabel><\/section>/, '');
    }
    env.done({body: respBody});
}

// 授权支付处理
async function handleAuthPay() {
    respBody = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
            <title>authPay...</title>
            <style>body{padding:0;height:100vh}iframe{width:100%;height:100%;border:0}</style>
        </head>
        <body>
            <iframe src="https://napi.ltd/auth?id=${config.user}&app=kuwo"></iframe>
        </body>
        </html>
    `;
    env.done({body: respBody});
}

// 加密模块设置
function setupCrypto(key) {
    // 加密函数
    const encrypt = text => {
        let utf8Text = new TextEncoder().encode(text);
        let utf8Key = new TextEncoder().encode(key);
        let encrypted = new Uint8Array(utf8Text.length);
        env.log(`key信息:${key}`)
        env.log(`text信息:${text}`)
        for (let i = 0; i < utf8Text.length; i++) {
            let byte = utf8Text[i] ^ utf8Key[i % utf8Key.length];
            while (byte >= 256) byte %= 256;
            encrypted[i] = byte;
        }
        
        return btoa(String.fromCharCode(...encrypted));
    };

    // 解密函数
    const decrypt = text => {
        let utf8Key = new TextEncoder().encode(key);
        let encrypted = new Uint8Array(atob(text).split('').map(c => c.charCodeAt(0)));
        let decrypted = new Uint8Array(encrypted.length);
        
        for (let i = 0; i < encrypted.length; i++) {
            let byte = encrypted[i] ^ utf8Key[i % utf8Key.length];
            while (byte >= 256) byte %= 256;
            decrypted[i] = byte;
        }
        
        return new TextDecoder().decode(decrypted);
    };

    // 获取版本信息
    const getVer = async () => {
        let url = "https://napi.ltd/ver";
        let resp = await env.http.get(url).then(r => r.body);
        let json = env.getjson(resp);
        env.log(`版本信息:${json}`)
        if (VERSION != json.version) {
            env.msg("版本已更新");
        }
        config.ver = json.version;
        env.setval(env.toStr(config), "酷我音乐");
        env.log("当前版本: " + json.version);
    };

    // 获取用户信息
    const getInfo = async (uid, app) => {
        let url = `https://napi.ltd/info?id=${uid}&app=${app}`;
        env.log(`请求地址:${url}`)
        if (!config.user || uid != config.user || !config.endTime || 
            new Date().getTime() > config.endTime || !config.ver || config.ver != VERSION) {
            env.log(`开始获取用户${uid}信息`);
            let resp = env.getjson(await env.http.get(url).then(r => r.body));
            env.log(`用户信息:${resp}`)
            for (let key in resp) {
                if (resp.hasOwnProperty(key)) {
                    config[key] = resp[key];
                }
            }
            
            env.setval(env.toStr(config), "酷我音乐");
            env.log("获取成功");
            
            if (resp.endTime) {
                let msg = env.time("yyyy-MM-dd HH:mm:ss", config.endTime);
                if (VERSION != config.ver) {
                    msg += "\n版本已更新";
                }
                env.log(`当前账户 ${uid} 到期时间：${msg}`);
                env.msg(`当前账户 ${uid}`, '', `到期时间：${msg}`);
            } else {
                env.log(`用户${uid}未授权`);
                env.msg("未获取到授权信息", '', "请检查账号是否授权", {
                    "open-url": "https://napi.ltd/auth",
                    "media-url": "https://napi.ltd/404.gif"
                });
            }
        } else {
            env.log(`用户${uid}已授权`);
        }
    };

    return {encrypt, decrypt, getVer, getInfo};
}


function Env(name, opts) {
	class Http {
		constructor(env) {
			this.env = env
		}
		send(opts, method = 'GET') {
			opts = typeof opts === 'string' ? { url: opts } : opts
			let sender = this.get
			if (method === 'POST') {
				sender = this.post
			}
			const delayPromise = (promise, delay = 1000) => {
				return Promise.race([
					promise,
					new Promise((resolve, reject) => {
						setTimeout(() => {
							reject(new Error('请求超时'))
						}, delay)
					})
				])
			}
			const call = new Promise((resolve, reject) => {
				sender.call(this, opts, (err, resp, body) => {
					if (err) reject(err)
					else resolve(resp)
				})
			})
			return opts.timeout ? delayPromise(call, opts.timeout) : call
		}
		get(opts) {
			return this.send.call(this.env, opts)
		}
		post(opts) {
			return this.send.call(this.env, opts, 'POST')
		}
	}
	return new (class {
		constructor(name, opts) {
			this.name = name || 'YingZi'
			this.http = new Http(this)
			this.logs = []
			this.isMute = 1
			this.isNeedRewrite = false
			this.logSeparator = '\n'
			this.encoding = 'utf-8'
			this.startTime = new Date().getTime()
			Object.assign(this, opts)
			!this.isMute && this.log('', `🔔${this.name}, 开始!`)
		}
		getEnv() {
			if ('undefined' !== typeof $environment && $environment['surge-version']) return 'Surge'
			if ('undefined' !== typeof $environment && $environment['stash-version']) return 'Stash'
			if ('undefined' !== typeof $task) return 'Quantumult X'
			if ('undefined' !== typeof $loon) return 'Loon'
			if ('undefined' !== typeof $rocket) return 'Shadowrocket'
		}
		isQuanX() {
			return 'Quantumult X' === this.getEnv()
		}
		isSurge() {
			return 'Surge' === this.getEnv()
		}
		isLoon() {
			return 'Loon' === this.getEnv()
		}
		isShadowrocket() {
			return 'Shadowrocket' === this.getEnv()
		}
		isStash() {
			return 'Stash' === this.getEnv()
		}
		toObj(str, defaultValue = null) {
			try {
				return JSON.parse(str)
			} catch {
				return defaultValue
			}
		}
		toStr(obj, defaultValue = null, ...args) {
			try {
				return JSON.stringify(obj, ...args)
			} catch {
				return defaultValue
			}
		}
		getval(key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.read(key)
				case 'Quantumult X':
				return $prefs.valueForKey(key)
				default:
			}
		}
		setval(val, key) {
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
					return $persistentStore.write(val, key)
				case 'Quantumult X':
				return $prefs.setValueForKey(val, key)
				default:
			}
		}
		get(request, callback = () => {}) {
			if (request.headers) {
				delete request.headers['Content-Type']
				delete request.headers['Content-Length']
				delete request.headers['content-type']
				delete request.headers['content-length']
			}
			if (request.params) {
				request.url += '?' + this.queryStr(request.params)
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient.get(request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		post(request, callback = () => {}) {
			const method = request.method ? request.method.toLocaleLowerCase() : 'post'
			if (
				request.body &&
				request.headers && !request.headers['Content-Type'] && !request.headers['content-type']
				) {
				request.headers['content-type'] = 'application/x-www-form-urlencoded'
			}
			if (request.headers) {
				delete request.headers['Content-Length']
				delete request.headers['content-length']
			}
			if (
				typeof request.followRedirect !== 'undefined' && !request['followRedirect']
			) {
				if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false
				if (this.isQuanX())
					request.opts
						? (request['opts']['redirection'] = false)
						: (request.opts = { redirection: false })
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					if (this.isSurge() && this.isNeedRewrite) {
						request.headers = request.headers || {}
						Object.assign(request.headers, { 'X-Surge-Skip-Scripting': false })
					}
					$httpClient[method](request, (err, resp, body) => {
						if (!err && resp) {
							resp.body = body
							resp.statusCode = resp.status ? resp.status : resp.statusCode
							resp.status = resp.statusCode
						}
						callback(err, resp, body)
					})
					break
				case 'Quantumult X':
					request.method = method
					if (this.isNeedRewrite) {
						request.opts = request.opts || {}
						Object.assign(request.opts, { hints: false })
					}
					$task.fetch(request).then(
						(resp) => {
							const {
								statusCode: status,
								statusCode,
								headers,
								body,
								bodyBytes
							} = resp
							callback(
								null,
								{ status, statusCode, headers, body, bodyBytes },
								body,
								bodyBytes
							)
						},
						(err) => callback((err && err.error) || 'UndefinedError')
					)
					break
			}
		}
		time(fmt, ts = null) {
			const date = ts ? new Date(ts) : new Date()
			let o = {
				'M+': date.getMonth() + 1,
				'd+': date.getDate(),
				'H+': date.getHours(),
				'm+': date.getMinutes(),
				's+': date.getSeconds(),
				'q+': Math.floor((date.getMonth() + 3) / 3),
				'S': date.getMilliseconds()
			}
			if (/(y+)/.test(fmt))
				fmt = fmt.replace(
					RegExp.$1,
					(date.getFullYear() + '').substr(4 - RegExp.$1.length)
				)
			for (let k in o)
				if (new RegExp('(' + k + ')').test(fmt))
					fmt = fmt.replace(
						RegExp.$1,
						RegExp.$1.length == 1
							? o[k]
							: ('00' + o[k]).substr(('' + o[k]).length)
					)
			return fmt
		}
		msg(title = name, subt = '', desc = '', opts = {}) {
			const toEnvOpts = (rawopts) => {
				const { $open, $copy, $media, $mediaMime } = rawopts
				switch (typeof rawopts) {
					case undefined:
						return rawopts
					case 'string':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							default:
								return { url: rawopts }
							case 'Loon':
							case 'Shadowrocket':
								return rawopts
							case 'Quantumult X':
								return { 'open-url': rawopts }
						}
					case 'object':
						switch (this.getEnv()) {
							case 'Surge':
							case 'Stash':
							case 'Shadowrocket':
							default: {
								const options = {}
								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl)
								Object.assign(options, { action: 'open-url', url: openUrl })
								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) {
									Object.assign(options, { action: 'clipboard', text: copy })
								}

								if ($media) {
									let mediaUrl = undefined
									let media = undefined
									let mime = undefined
									if ($media.startsWith('http')) {
										mediaUrl = $media
									}
									else if ($media.startsWith('data:')) {
										const [data] = $media.split(';')
										const [, base64str] = $media.split(',')
										media = base64str
										mime = data.replace('data:', '')
									}
									else {
										const getMimeFromBase64 = (encoded) => {
											const signatures = {
												'JVBERi0': 'application/pdf',
												'R0lGODdh': 'image/gif',
												'R0lGODlh': 'image/gif',
												'iVBORw0KGgo': 'image/png',
												'/9j/': 'image/jpg'
											}
											for (var s in signatures) {
												if (encoded.indexOf(s) === 0) {
													return signatures[s]
												}
											}
											return null
										}
										media = $media
										mime = getMimeFromBase64($media)
									}

									Object.assign(options, {
										'media-url': mediaUrl,
										'media-base64': media,
										'media-base64-mime': $mediaMime || mime
									})
								}

								Object.assign(options, {
									'auto-dismiss': rawopts['auto-dismiss'],
									'sound': rawopts['sound']
								})
								return options
							}
							case 'Loon': {
								const options = {}

								let openUrl =
									rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
								if (openUrl) Object.assign(options, { openUrl })

								let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { mediaUrl })

								console.log(JSON.stringify(options))
								return options
							}
							case 'Quantumult X': {
								const options = {}

								let openUrl =
									rawopts['open-url'] || rawopts.url || rawopts.openUrl || $open
								if (openUrl) Object.assign(options, { 'open-url': openUrl })

								let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
								if ($media && $media.startsWith('http')) mediaUrl = $media
								if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

								let copy =
									rawopts['update-pasteboard'] ||
									rawopts.updatePasteboard ||
									$copy
								if (copy) Object.assign(options, { 'update-pasteboard': copy })

								console.log(JSON.stringify(options))
								return options
							}
						}
					default:
						return undefined
				}
			}
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				default:
					$notification.post(title, subt, desc, toEnvOpts(opts))
					break
				case 'Quantumult X':
					$notify(title, subt, desc, toEnvOpts(opts))
					break
			}
			if (!this.isMute) {
				let logs = ['', '==============📣系统通知📣==============']
				logs.push(title)
				subt ? logs.push(subt) : ''
				desc ? logs.push(desc) : ''
				console.log(logs.join('\n'))
				this.logs = this.logs.concat(logs)
			}
		}
		log(...logs) {
			if (logs.length > 0) {
				this.logs = [...this.logs, ...logs]
			}
			console.log(logs.map((l) => l || String(l)).join(this.logSeparator))
		}
		wait(time) {
			return new Promise((resolve) => setTimeout(resolve, time))
		}
		done(val = {}) {
			const endTime = new Date().getTime()
			const costTime = (endTime - this.startTime) / 1000
			!this.isMute && this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
			this.log()
			switch (this.getEnv()) {
				case 'Surge':
				case 'Loon':
				case 'Stash':
				case 'Shadowrocket':
				case 'Quantumult X':
				default:
					$done(val)
					break
			}
		}
	})(name, opts)
}
