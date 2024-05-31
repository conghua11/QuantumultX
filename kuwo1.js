/**************************************

#!name = VIP合集
#!desc = 解锁本地VIP，个别去广告
#!author = 小白
#!date = 2024-05-31


[Rule]
USER-AGENT,KWPlayer*,PROXY
DOMAIN-SUFFIX,kuwo.cn,PROXY

[Script]

# 酷我
http-response ^(?!.*img).*?kuwo\.cn(/vip|/openapi)?(/enc|/audi.tion|/v[\d]/(user/vip\?(vers|apiVersion|platform|op\=ui|_t)|theme\?op=gd|sysinfo\?op=getRePayAndDoPayBoxNew|api(/pay)?/((user/personal/)?user/info|payInfo/kwplayer/payMiniBar|advert/(myPage|iListen|album))|album/(adBar|myRec/vipMusic))|/kuwopay/vip-tab/setting|/(audioApi/)?a\.p($|\?op\=getvip|.*?ptype\=vip)|/mobi\.s\?f\=kwxs|/music\.pay\?newver\=3$|/(EcomResource|(Mobile)?Ad)Serv(er|ice)) script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/kuwo.js, requires-body=true, timeout=60, tag=酷我音乐, img-url=https://file.napi.ltd/Static/Image/KuWo.png
[Mitm]
hostname = *.kuwo.cn

**************************************/

const $ = Env("酷我音乐")

const Play_URL = '/mobi.s?f=kwxs'
const KuWo_Down = '/music.pay?newver=3'
const KuWo_Book = RegExp(/(a\.p|v2\/api\/(user\/personal\/)?user\/info)/)
const KuWo_Enc = '/vip/enc'
const KuWo_Vip = RegExp(/(vip\/)?v2\/(api(\/pay)?\/user\/info|user\/vip)/)
const KuWo_Theme = '/vip/v2/theme?op=gd'
const Book_Home = '/v2/api/advert/myPage'
const KuWo_AD = RegExp(/(v2\/api\/advert\/(iListen|album)|openapi\/v1\/album\/adBar|(\/EcomResource|\/(Mobile)?Ad)Serv(er|ice))/)
const KuWo_ListAD = '/vip/v2/sysinfo?op=getRePayAndDoPayBoxNew'
const KuWo_BookAD = '/v2/api/pay/payInfo/kwplayer/payMiniBar'
const KuWo_TabAD = '/kuwopay/vip-tab/setting'
const KuWo_HomeAD = '/openapi/v1/album/myRec/vipMusic'
const KuWo = $.toObj($.getval("KuWo")) || {}

var url = "undefined" !== typeof $request ? $request.url : ""
var body = "undefined" !== typeof $response ? $response.body : null
var obj = $.toObj(body)

if (url.indexOf(Play_URL) != -1) {
	let PlayUrl = KuWo.AuthDate > new Date().getTime() ? 'https://yingzi.ltd/API.php?rid=' : 'http://mobi.kuwo.cn/mobi.s?f=web&source=oppo&type=convert_url_with_sign&br=2000kflac&rid='
	!(async () => {
		if ( KuWo.PlayID ) {
			let PlayID = KuWo.PlayID
			await $.http
			.get({
				url: PlayUrl + PlayID
			})
			.then((response) => {
					body = response.body
			})
		}
		KuWo.PlayID = ""
		$.setval($.toStr(KuWo), 'KuWo')
		$.done({body: body})
	})()
}

if (url.endsWith(KuWo_Down)) {
	if ("number" == typeof obj.songs[0].id) {
		id = obj.songs[0].id
		KuWo.PlayID = id
		$.setval($.toStr(KuWo), 'KuWo')
	}
	obj.songs[0].audio.forEach((item) => (item.st = 0))
	let tmp = obj.songs[0].audio[0].policy
	obj.user[0] = {
		pid: obj.songs[0].audio[0].pid,
		type: tmp,
		name: tmp + "_1",
		categray: tmp + "_1",
		id: obj.songs[0].id,
		order: 375787919,
		final: [],
		buy: 1657425321,
		begin: 1657425321,
		end: 4077187200,
		CurEnd: 0,
		playCnt: 0,
		playUpper: 300,
		downCnt: 0,
		downUpper: 300,
		playVideoCnt: 0,
		playVideoUpper: 3000,
		downVideoCnt: 0,
		downVideoUpper: 3000,
		price: obj.songs[0].audio[0].price,
		period: 1000,
		feetype: 0,
		info: obj.songs[0]
	}
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.match(KuWo_Book)) {
	// id = body.replace(/.*?\"id\":(\d+).*/, '$1')
	if (obj.hasOwnProperty("songs")) {
		for (let key in obj.songs) {
			id = obj.songs[key]["id"]
			if ("number" == typeof id) {
				KuWo.PlayID = id
				$.setval($.toStr(KuWo), 'KuWo')
				break;
			}
		}
	}
	body = body.replace(/(policy|policytype)\":\d/g, '$1\":0').replace(/(playright|downright|type|bought_vip|limitfree|vipType)\":\d/g, '$1\":1').replace(/(end|endtime|vipExpires)\":\d+/g, '$1\":4077187200')
	$.done({body: body})
}

if (url.indexOf(KuWo_Enc) != -1) {
	!(async () => {
		let arg = new URL(url).searchParams
		let uid = arg.get("uid")
		let auth = $.toObj(await $.http.get('https://auth.yingzi.ltd/auth.php?udid=' + uid).then(response => response.body))
		if (auth.success) {
			KuWo.AuthDate = '永久授权' == auth.msg ? '9999999999999' : new Date(auth.msg).getTime()
			console.log(JSON.stringify(auth))
			$.msg('账户 ' + uid + ' 已授权', '', '授权有效期：\n' + auth.msg)
		} else {
			auth ={
			    "success": true,
			    "msg": "2099-12-01 00:00:00",
			    "data": {
				"id": 999,
				"authkm": "9999999999999999",
				"authorizer": "999999999",
				"auth": uid,
				"key": "9999999999999999",
				"expiredate": "2099-12-01 00:00:00",
				"createdate": "2024-05-31 12:00:00",
				"status": 1,
				"api": 0,
				"remark": "来源于卡密授权"
                	}
		}
            		KuWo.AuthDate = '永久授权' == auth.msg ? '9999999999999' : new Date(auth.msg).getTime()
			$.msg('账户 ' + uid + ' 已成功授权', '', '授权有效期：\n' + auth.msg)
		}
		$.setval($.toStr(KuWo), 'KuWo')
		
		let body = await $.http.get(url.replace(/uid=\d+/g, 'uid=238581279')).then(response => response.body)
		$.done({body: body})
	})()
}

if (url.match(KuWo_Vip)) {
	obj.data["vipIcon"] = "https:\/\/image.kuwo.cn\/fe\/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png"
	delete obj.data.iconJumpUrl
	delete obj.data.adActUrl
	obj.data["growthValue"] = "9999"
	obj.data["vipTag"] = "VIP7"
	obj.data["vipmIcon"] = "https:\/\/image.kuwo.cn\/fe\/34ad47f8-da7f-43e4-abdc-e6c995666368yyb.png"
	obj.data["svipIcon"] = "https:\/\/image.kuwo.cn\/fe\/13e4f930-f8bc-4b86-8def-43cbc3c7d86c7.png"
	obj.data["openBtnText"] = "永久会员"
	obj.data["vipExpire"] = "4077187200315"
	obj.data["vipExpires"] = 4077187200315
	obj.data["luxuryIcon"] = "https:\/\/image.kuwo.cn\/fe\/2fae68ff-de2d-4473-bf28-8efc29e44968vip.png"
	obj.data["vipmExpire"] = "4077187200315"
	obj.data["vipLuxuryExpire"] = "4077187200315"
	obj.data["svipExpire"] = "4077187200315"
	obj.data["isYearUser"] = "2"
	obj.data["biedSong"] = "1"
	obj.data["svipAutoPayUser"] = "1"
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.indexOf(KuWo_Theme) != -1) {
	obj.data.vipTheme.type = "free"
	delete obj.data.needBieds
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.indexOf(Book_Home) != -1) {
	obj.data["scheme"] = null
	obj.data["title"] = "酷我畅听"
	obj.data["url"] = null
	obj.data["subTitle"] = "畅听服务由影子提供"
	body = $.toStr(obj)
	$.done({body: body})
}

if(url.match(KuWo_AD)){
	body = 'YingZi'
	$.done({body: body})
}

if (url.indexOf(KuWo_ListAD) != -1) {
	delete obj.data.songListTopContext
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.indexOf(KuWo_BookAD) != -1) {
	delete obj.data
	delete obj.dataV2
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.indexOf(KuWo_TabAD) != -1) {
	if ("undefined" !== typeof obj.data['tab']['vipTypes'][0]) {
		let i = 1;
		while (obj.data['tab']['vipTypes'][0]['topics'][i]) {
			delete obj.data['tab']['vipTypes'][0]['topics'][i];
			i += 1
		}
	}
	body = $.toStr(obj)
	$.done({body: body})
}

if (url.indexOf(KuWo_HomeAD) != -1) {
	delete obj.data["listenSomething"]
	body = $.toStr(obj)
	$.done({body: body})
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
      this.logLevels = { debug: 0, info: 1, warn: 2, error: 3 }
      this.logLevelPrefixs = {
        debug: '[DEBUG] ',
        info: '[INFO] ',
        warn: '[WARN] ',
        error: '[ERROR] '
      }
      this.logLevel = 'info'
      this.name = name
      this.http = new Http(this)
      this.data = null
      this.dataFile = 'box.dat'
      this.logs = []
      this.isMute = false
      this.isNeedRewrite = false
      this.logSeparator = '\n'
      this.encoding = 'utf-8'
      this.startTime = new Date().getTime()
      Object.assign(this, opts)
      this.log('', `🔔${this.name}, 开始!`)
    }

    getEnv() {
      if ('undefined' !== typeof $environment && $environment['surge-version'])
        return 'Surge'
      if ('undefined' !== typeof $environment && $environment['stash-version'])
        return 'Stash'
      if ('undefined' !== typeof module && !!module.exports) return 'Node.js'
      if ('undefined' !== typeof $task) return 'Quantumult X'
      if ('undefined' !== typeof $loon) return 'Loon'
      if ('undefined' !== typeof $rocket) return 'Shadowrocket'
    }

    isNode() {
      return 'Node.js' === this.getEnv()
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

    getjson(key, defaultValue) {
      let json = defaultValue
      const val = this.getdata(key)
      if (val) {
        try {
          json = JSON.parse(this.getdata(key))
        } catch {}
      }
      return json
    }

    setjson(val, key) {
      try {
        return this.setdata(JSON.stringify(val), key)
      } catch {
        return false
      }
    }

    getScript(url) {
      return new Promise((resolve) => {
        this.get({ url }, (err, resp, body) => resolve(body))
      })
    }

    runScript(script, runOpts) {
      return new Promise((resolve) => {
        let httpapi = this.getdata('@chavy_boxjs_userCfgs.httpapi')
        httpapi = httpapi ? httpapi.replace(/\n/g, '').trim() : httpapi
        let httpapi_timeout = this.getdata(
          '@chavy_boxjs_userCfgs.httpapi_timeout'
        )
        httpapi_timeout = httpapi_timeout ? httpapi_timeout * 1 : 20
        httpapi_timeout =
          runOpts && runOpts.timeout ? runOpts.timeout : httpapi_timeout
        const [key, addr] = httpapi.split('@')
        const opts = {
          url: `http://${addr}/v1/scripting/evaluate`,
          body: {
            script_text: script,
            mock_type: 'cron',
            timeout: httpapi_timeout
          },
          headers: {
            'X-Key': key,
            'Accept': '*/*'
          },
          policy: 'DIRECT',
          timeout: httpapi_timeout
        }
        this.post(opts, (err, resp, body) => resolve(body))
      }).catch((e) => this.logErr(e))
    }

    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(
          process.cwd(),
          this.dataFile
        )
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile =
          !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        if (isCurDirDataFile || isRootDirDataFile) {
          const datPath = isCurDirDataFile
            ? curDirDataFilePath
            : rootDirDataFilePath
          try {
            return JSON.parse(this.fs.readFileSync(datPath))
          } catch (e) {
            return {}
          }
        } else return {}
      } else return {}
    }

    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('fs')
        this.path = this.path ? this.path : require('path')
        const curDirDataFilePath = this.path.resolve(this.dataFile)
        const rootDirDataFilePath = this.path.resolve(
          process.cwd(),
          this.dataFile
        )
        const isCurDirDataFile = this.fs.existsSync(curDirDataFilePath)
        const isRootDirDataFile =
          !isCurDirDataFile && this.fs.existsSync(rootDirDataFilePath)
        const jsondata = JSON.stringify(this.data)
        if (isCurDirDataFile) {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        } else if (isRootDirDataFile) {
          this.fs.writeFileSync(rootDirDataFilePath, jsondata)
        } else {
          this.fs.writeFileSync(curDirDataFilePath, jsondata)
        }
      }
    }

    lodash_get(source, path, defaultValue = undefined) {
      const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.')
      let result = source
      for (const p of paths) {
        result = Object(result)[p]
        if (result === undefined) {
          return defaultValue
        }
      }
      return result
    }

    lodash_set(obj, path, value) {
      if (Object(obj) !== obj) return obj
      if (!Array.isArray(path)) path = path.toString().match(/[^.[\]]+/g) || []
      path
        .slice(0, -1)
        .reduce(
          (a, c, i) =>
            Object(a[c]) === a[c]
              ? a[c]
              : (a[c] = Math.abs(path[i + 1]) >> 0 === +path[i + 1] ? [] : {}),
          obj
        )[path[path.length - 1]] = value
      return obj
    }

    getdata(key) {
      let val = this.getval(key)
      // 如果以 @
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objval = objkey ? this.getval(objkey) : ''
        if (objval) {
          try {
            const objedval = JSON.parse(objval)
            val = objedval ? this.lodash_get(objedval, paths, '') : val
          } catch (e) {
            val = ''
          }
        }
      }
      return val
    }

    setdata(val, key) {
      let issuc = false
      if (/^@/.test(key)) {
        const [, objkey, paths] = /^@(.*?)\.(.*?)$/.exec(key)
        const objdat = this.getval(objkey)
        const objval = objkey
          ? objdat === 'null'
            ? null
            : objdat || '{}'
          : '{}'
        try {
          const objedval = JSON.parse(objval)
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        } catch (e) {
          const objedval = {}
          this.lodash_set(objedval, paths, val)
          issuc = this.setval(JSON.stringify(objedval), objkey)
        }
      } else {
        issuc = this.setval(val, key)
      }
      return issuc
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
        case 'Node.js':
          this.data = this.loaddata()
          return this.data[key]
        default:
          return (this.data && this.data[key]) || null
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
        case 'Node.js':
          this.data = this.loaddata()
          this.data[key] = val
          this.writedata()
          return true
        default:
          return (this.data && this.data[key]) || null
      }
    }

    initGotEnv(opts) {
      this.got = this.got ? this.got : require('got')
      this.cktough = this.cktough ? this.cktough : require('tough-cookie')
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()
      if (opts) {
        opts.headers = opts.headers ? opts.headers : {}
        if (opts) {
          opts.headers = opts.headers ? opts.headers : {}
          if (
            undefined === opts.headers.cookie &&
            undefined === opts.headers.Cookie &&
            undefined === opts.cookieJar
          ) {
            opts.cookieJar = this.ckjar
          }
        }
      }
    }

    get(request, callback = () => {}) {
      if (request.headers) {
        delete request.headers['Content-Type']
        delete request.headers['Content-Length']

        // HTTP/2 全是小写
        delete request.headers['content-type']
        delete request.headers['content-length']
      }
      if (request.params) {
        request.url += '?' + this.queryStr(request.params)
      }
      // followRedirect 禁止重定向
      if (
        typeof request.followRedirect !== 'undefined' &&
        !request['followRedirect']
      ) {
        if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false // Surge & Loon
        if (this.isQuanX())
          request.opts
            ? (request['opts']['redirection'] = false)
            : (request.opts = { redirection: false }) // Quantumult X
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
        case 'Node.js':
          let iconv = require('iconv-lite')
          this.initGotEnv(request)
          this.got(request)
            .on('redirect', (resp, nextOpts) => {
              try {
                if (resp.headers['set-cookie']) {
                  const ck = resp.headers['set-cookie']
                    .map(this.cktough.Cookie.parse)
                    .toString()
                  if (ck) {
                    this.ckjar.setCookieSync(ck, null)
                  }
                  nextOpts.cookieJar = this.ckjar
                }
              } catch (e) {
                this.logErr(e)
              }
              // this.ckjar.setCookieSync(resp.headers['set-cookie'].map(Cookie.parse).toString())
            })
            .then(
              (resp) => {
                const {
                  statusCode: status,
                  statusCode,
                  headers,
                  rawBody
                } = resp
                const body = iconv.decode(rawBody, this.encoding)
                callback(
                  null,
                  { status, statusCode, headers, rawBody, body },
                  body
                )
              },
              (err) => {
                const { message: error, response: resp } = err
                callback(
                  error,
                  resp,
                  resp && iconv.decode(resp.rawBody, this.encoding)
                )
              }
            )
          break
      }
    }

    post(request, callback = () => {}) {
      const method = request.method
        ? request.method.toLocaleLowerCase()
        : 'post'

      // 如果指定了请求体, 但没指定 `Content-Type`、`content-type`, 则自动生成。
      if (
        request.body &&
        request.headers &&
        !request.headers['Content-Type'] &&
        !request.headers['content-type']
      ) {
        // HTTP/1、HTTP/2 都支持小写 headers
        request.headers['content-type'] = 'application/x-www-form-urlencoded'
      }
      // 为避免指定错误 `content-length` 这里删除该属性，由工具端 (HttpClient) 负责重新计算并赋值
      if (request.headers) {
        delete request.headers['Content-Length']
        delete request.headers['content-length']
      }
      // followRedirect 禁止重定向
      if (
        typeof request.followRedirect !== 'undefined' &&
        !request['followRedirect']
      ) {
        if (this.isSurge() || this.isLoon()) request['auto-redirect'] = false // Surge & Loon
        if (this.isQuanX())
          request.opts
            ? (request['opts']['redirection'] = false)
            : (request.opts = { redirection: false }) // Quantumult X
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
        case 'Node.js':
          let iconv = require('iconv-lite')
          this.initGotEnv(request)
          const { url, ..._request } = request
          this.got[method](url, _request).then(
            (resp) => {
              const { statusCode: status, statusCode, headers, rawBody } = resp
              const body = iconv.decode(rawBody, this.encoding)
              callback(
                null,
                { status, statusCode, headers, rawBody, body },
                body
              )
            },
            (err) => {
              const { message: error, response: resp } = err
              callback(
                error,
                resp,
                resp && iconv.decode(resp.rawBody, this.encoding)
              )
            }
          )
          break
      }
    }
    /**
     *
     * 示例:$.time('yyyy-MM-dd qq HH:mm:ss.S')
     *    :$.time('yyyyMMddHHmmssS')
     *    y:年 M:月 d:日 q:季 H:时 m:分 s:秒 S:毫秒
     *    其中y可选0-4位占位符、S可选0-1位占位符，其余可选0-2位占位符
     * @param {string} fmt 格式化参数
     * @param {number} 可选: 根据指定时间戳返回格式化日期
     *
     */
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

    /**
     *
     * @param {Object} options
     * @returns {String} 将 Object 对象 转换成 queryStr: key=val&name=senku
     */
    queryStr(options) {
      let queryString = ''

      for (const key in options) {
        let value = options[key]
        if (value != null && value !== '') {
          if (typeof value === 'object') {
            value = JSON.stringify(value)
          }
          queryString += `${key}=${value}&`
        }
      }
      queryString = queryString.substring(0, queryString.length - 1)

      return queryString
    }

    /**
     * 系统通知
     *
     * > 通知参数: 同时支持 QuanX 和 Loon 两种格式, EnvJs根据运行环境自动转换, Surge 环境不支持多媒体通知
     *
     * 示例:
     * $.msg(title, subt, desc, 'twitter://')
     * $.msg(title, subt, desc, { 'open-url': 'twitter://', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     * $.msg(title, subt, desc, { 'open-url': 'https://bing.com', 'media-url': 'https://github.githubassets.com/images/modules/open_graph/github-mark.png' })
     *
     * @param {*} title 标题
     * @param {*} subt 副标题
     * @param {*} desc 通知详情
     * @param {*} opts 通知参数
     *
     */
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
              case 'Node.js':
                return undefined
            }
          case 'object':
            switch (this.getEnv()) {
              case 'Surge':
              case 'Stash':
              case 'Shadowrocket':
              default: {
                const options = {}

                // 打开URL
                let openUrl =
                  rawopts.openUrl || rawopts.url || rawopts['open-url'] || $open
                if (openUrl)
                  Object.assign(options, { action: 'open-url', url: openUrl })

                // 粘贴板
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
                  // http 开头的网络地址
                  if ($media.startsWith('http')) {
                    mediaUrl = $media
                  }
                  // 带标识的 Base64 字符串
                  // data:image/png;base64,iVBORw0KGgo...
                  else if ($media.startsWith('data:')) {
                    const [data] = $media.split(';')
                    const [, base64str] = $media.split(',')
                    media = base64str
                    mime = data.replace('data:', '')
                  }
                  // 没有标识的 Base64 字符串
                  // iVBORw0KGgo...
                  else {
                    // https://stackoverflow.com/questions/57976898/how-to-get-mime-type-from-base-64-string
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
                    'media-base64-mime': $mediaMime ?? mime
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
                if ($media?.startsWith('http')) mediaUrl = $media
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
                if ($media?.startsWith('http')) mediaUrl = $media
                if (mediaUrl) Object.assign(options, { 'media-url': mediaUrl })

                let copy =
                  rawopts['update-pasteboard'] ||
                  rawopts.updatePasteboard ||
                  $copy
                if (copy) Object.assign(options, { 'update-pasteboard': copy })

                console.log(JSON.stringify(options))
                return options
              }
              case 'Node.js':
                return undefined
            }
          default:
            return undefined
        }
      }
      if (!this.isMute) {
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
          case 'Node.js':
            break
        }
      }
      if (!this.isMuteLog) {
        let logs = ['', '==============📣系统通知📣==============']
        logs.push(title)
        subt ? logs.push(subt) : ''
        desc ? logs.push(desc) : ''
        console.log(logs.join('\n'))
        this.logs = this.logs.concat(logs)
      }
    }

    debug(...logs) {
      if (this.logLevels[this.logLevel] <= this.logLevels.debug) {
        if (logs.length > 0) {
          this.logs = [...this.logs, ...logs]
        }
        console.log(
          `${this.logLevelPrefixs.debug}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
        )
      }
    }

    info(...logs) {
      if (this.logLevels[this.logLevel] <= this.logLevels.info) {
        if (logs.length > 0) {
          this.logs = [...this.logs, ...logs]
        }
        console.log(
          `${this.logLevelPrefixs.info}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
        )
      }
    }

    warn(...logs) {
      if (this.logLevels[this.logLevel] <= this.logLevels.warn) {
        if (logs.length > 0) {
          this.logs = [...this.logs, ...logs]
        }
        console.log(
          `${this.logLevelPrefixs.warn}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
        )
      }
    }

    error(...logs) {
      if (this.logLevels[this.logLevel] <= this.logLevels.error) {
        if (logs.length > 0) {
          this.logs = [...this.logs, ...logs]
        }
        console.log(
          `${this.logLevelPrefixs.error}${logs.map((l) => l ?? String(l)).join(this.logSeparator)}`
        )
      }
    }

    log(...logs) {
      if (logs.length > 0) {
        this.logs = [...this.logs, ...logs]
      }
      console.log(logs.map((l) => l ?? String(l)).join(this.logSeparator))
    }

    logErr(err, msg) {
      switch (this.getEnv()) {
        case 'Surge':
        case 'Loon':
        case 'Stash':
        case 'Shadowrocket':
        case 'Quantumult X':
        default:
          this.log('', `❗️${this.name}, 错误!`, msg, err)
          break
        case 'Node.js':
          this.log(
            '',
            `❗️${this.name}, 错误!`,
            msg,
            typeof err.message !== 'undefined' ? err.message : err,
            err.stack
          )
          break
      }
    }

    wait(time) {
      return new Promise((resolve) => setTimeout(resolve, time))
    }

    done(val = {}) {
      const endTime = new Date().getTime()
      const costTime = (endTime - this.startTime) / 1000
      this.log('', `🔔${this.name}, 结束! 🕛 ${costTime} 秒`)
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
        case 'Node.js':
          process.exit(1)
      }
    }
  })(name, opts)
}
