/*

饿了么获取token脚本
重写地址:^https?:\/\/nt2\.ele\.me\/c\/b
触发类型:request-body
打开APP
MITM添加:nt2.ele.me

*/
!(async () => {
    let cookie = $request.headers.Cookie;
    if (cookie.indexOf('cookie2') > -1 && cookie.indexOf('SID') > -1) {
        let cookie2 = cookie.match(/(cookie2=[^;]+;)/)[1];
        cookie2 += cookie.match(/(SID=[^;]+;)/)[1];
        console.log(`✅饿了么脚本获取Cookie成功: ${cookie2}`);
        $persistentStore.write(cookie2,"elecookie")
    }
})().catch((e) => {
    console.log(`❌失败! 原因: ${e}!`);
}).finally(() => {
    $done({});
})
