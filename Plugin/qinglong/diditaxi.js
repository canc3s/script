/*

滴滴领券获取ticket脚本
重写地址:^https?:\/\/epassport\.diditaxi\.com\.cn\/passport\/login\/v5\/signInByOpenid
触发类型:response-body
打开APP
MITM添加:epassport.diditaxi.com.cn

*/
!(async () => {
    let body = $response.body;
    if (body.indexOf('ticket') > -1 && body.indexOf('uid') > -1) {
        let data = JSON.parse(body);
        let ticket = data.ticket;
        console.log(`✅滴滴领券脚本获取ticket成功: ${ticket}`);
        $persistentStore.write(ticket,"ddlqticket")
    }
})().catch((e) => {
    console.log(`❌失败! 原因: ${e}!`);
}).finally(() => {
    $done({});
})
