#!name = 123yunpan
#!desc = 测试本地VIP
#!author = 小白
#!update = 2024-05-05 16:00

# 解锁VIP
^https:\/\/www\.123pan\.com\/api\/user\/info\?auth-key=\.*? url script-response-body https://raw.githubusercontent.com/conghua11/QuantumultX/main/123pan.js

hostname = 123pan.com


$task.fetch({
    httpRequest: $request,
    handler: function (response){
        if (response.statusCode === 200){
            var data = JSON.parse(response.body);
            if ('data' in data && 'Vip' in data.data) {
                data.data.Vip = true;
                data.data.VipExpire = '2099-12-31 23:59:59';
            }
            $done({
                body: JSON.stringify(data)
            });
        } else {
            console.log('解锁失败', response.statusCode);
            $done(response);
        }
    }
});
