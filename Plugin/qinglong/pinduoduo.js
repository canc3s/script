/*
多多果园获取Accesstoken脚本
重写地址:^https?:\/\/api\.pinduoduo\.com\/api\/phantom\/gbdbpdv\/text
触发类型:request-body
打开APP
MITM添加:api.pinduoduo.com
*/
!(async () => {
    let at = $request.headers.accesstoken;
    console.log(`✅多多果园脚本获取Accesstoken成功: ${at}`);
    $persistentStore.write(at,"ddgyck")
})().catch((e) => {
    console.log(`❌失败! 原因: ${e}!`);
}).finally(() => {
    $done({});
})
