/****************************

#!name = spider proxy
#!desc = 解锁VIP
#!author = 小白
#!date = 2024-07-08

[Script]
http-response https://api.zhugeculture.com/api/order/products requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/spider.js

[Mitm]
hostname = api.zhugeculture.com
****************************/

const body = JSON.parse($response.body)
body.data = [
    {
      "product_id" : "com.zhuge.spider.basic",
      "rights" : [
        {
          "title" : "抓包",
          "content" : "抓取 HTTP/HTTPS流量"
        },
        {
          "title" : "重写",
          "content" : "实时修改HTTP/HTTPS的请求和响应"
        },
        {
          "title" : "数据共享",
          "content" : "多账户之间数据共享"
        }
      ],
      "days" : 9999,
      "id" : 2,
      "date_type" : "vip",
      "title" : "基础版",
      "oldprice" : "28.00",
      "marketprice" : "18.00",
      "vip_expiration_time" : "2099-12-01",
      "status" : "ok",
      "createtime" : 1695088494
    },
    {
      "product_id" : "com.zhuge.spider.professional",
      "rights" : [
        {
          "title" : "抓包",
          "content" : "抓取 HTTP/HTTPS流量"
        },
        {
          "title" : "重写",
          "content" : "实时修改HTTP/HTTPS的请求和响应"
        },
        {
          "title" : "数据共享",
          "content" : "多账户之间数据共享"
        },
        {
          "title" : "脚本",
          "content" : "支持自定义JavaScript语法进行接口的拓展编写"
        },
        {
          "title" : "重放",
          "content" : "支持接口依赖&断言的自定义HTTP(S)网络请求"
        }
      ],
      "days" : 9999,
      "id" : 3,
      "date_type" : "svip",
      "title" : "专业版",
      "oldprice" : "68.00",
      "marketprice" : "28.00",
      "vip_expiration_time" : "2099-12-01",
      "status" : "ok",
      "createtime" : 1695088494
    }
  ]
console.log('解锁成功!!!')
$done({body: JSON.stringify(body)})