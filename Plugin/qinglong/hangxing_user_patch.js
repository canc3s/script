/**
 * @fileoverview Patch for Hangxing user info
 * @description Removes 'Encrypt' header in request and modifies 'member' info in response.
 * @match ^https:\/\/api\.flight\.hangxing123\.top\/dronev2\/user\/infov2$
 * @author ChatGPT
 */

// 判断是请求还是响应阶段
if (typeof $request !== "undefined") {
  // 处理请求：删除 Encrypt 请求头
  let headers = $request.headers;

  delete headers["Encrypt"];
  delete headers["encrypt"];

  $done({ headers });

} else if (typeof $response !== "undefined") {
  // 处理响应：修改 info.member 与 info.memberExpire
  let body = $response.body;

  try {
    let obj = JSON.parse(body);

    if (obj.info) {
      obj.info.member = "1";
      obj.info.memberExpire = "2099-09-09 09:09:09";
    }

    $done({ body: JSON.stringify(obj) });

  } catch (e) {
    console.log("JSON parse error:", e);
    $done({});
  }
}
