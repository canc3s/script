/*

滴滴果园获取token脚本
重写地址:^https?:\/\/game\.xiaojukeji\.com\/api\/game\/plant\/watering
触发类型:request-body
进果园浇一次水
MITM添加:game.xiaojukeji.com

*/
!(async () => {
    let body = $request.body;
    if (body.indexOf('token') > -1 && body.indexOf('platform') > -1) {
        let data = JSON.parse(body);
        let tk = data.token;
        console.log(`✅滴滴果园脚本获取token成功: ${tk}`);
        $persistentStore.write(tk,"ddgytoken")
    }
})().catch((e) => {
    console.log('', `❌失败! 原因: ${e}!`, '');
}).finally(() => {
    $done({});
})
