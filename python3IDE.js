/**************************************
 #!name = python3IDE
 #!desc = 解锁永久会员
 #!author = 小白
 #!date = 2024-06-25

 [Script]
 # python3IDE
 http-response https://api.revenuecat.com/v1/receipts requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/conghua11/QuantumultX/main/python3IDE.js

 [Mitm]
 hostname = api.revenuecat.com

 **************************************/


console.log('开始运行!!!')
const body = JSON.parse($response.body)
body.original_application_version = "365"
body.subscriptions = {
    "python3ide_annual": {
        "original_purchase_date": "2024-06-25T00:42:46Z",
        "expires_date": "2099-12-01T00:42:45Z",
        "is_sandbox": true,
        "refunded_at": null,
        "store_transaction_id": "280001927741086",
        "unsubscribe_detected_at": "2024-06-25T00:45:53Z",
        "grace_period_expires_date": null,
        "period_type": "formal",
        "purchase_date": "2024-06-25T00:42:45Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
    }
}
body.entitlements = {
    "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-06-25T00:42:45Z",
        "product_identifier": "python3ide_annual",
        "expires_date": "2099-12-01T00:42:45Z"
    }
}

console.log('解锁成功!!!')
$done({body: JSON.stringify(body)})
