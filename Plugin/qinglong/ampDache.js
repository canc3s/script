/*
高德打车获取sessionid脚本
重写地址:^https:\/\/(m5(|-zb)|dache)\.amap\.com\/(ws\/yuece\/(act|openapi\/activity\/current)\/query|common\/(alipaymini|wxmini)\?_ENCRYPT=)
触发类型:request-body
打开APP
MITM添加:dache.amap.com, m5-zb.amap.com, m5.amap.com
*/
const _key = 'GD_Val';
//************抠的算法
function s(e,t){var n,r=4-e.length%4;n=t?0==(3&e.length)?e.length>>>2:1+(e.length>>>2):e.length/4+1;for(var o=new Uint32Array(Math.floor(n)),i=(r<<24)+(r<<16)+(r<<8)+r,a=0;a<n;++a)o[a]=i;for(n=e.length,a=0;a<n;++a)o[a>>>2]&=~(255<<((3&a)<<3)),o[a>>>2]|=(255&e[a])<<((3&a)<<3);return o}function u(e,t,n,r,o,i){return(n>>>5^t<<2)+(t>>>3^n<<4)^(e^t)+(i[3&r^o]^n)}function l(e){if(e.length<16){var t=new Uint8Array(16);t.set(e),e=t}return e}function a(e,t){var n=e.length,r=n<<2;if(t){var o=e[n-1];if(o<(r-=4)-3||o>r)return null;r=o}for(var i=new Uint8Array(Math.floor(r)),a=0;a<r;++a)i[a]=e[a>>2]>>((3&a)<<3);return i}function c(e){for(var t=e.length,n=new Uint8Array(Math.floor(3*t+1)),r=0,o=0;o<t;o++){var i=e.charCodeAt(o);if(i<128)n[r++]=i;else if(i<2048)n[r++]=192|i>>6,n[r++]=128|63&i;else{if(!(i<55296||i>57343)){if(o+1<t){var a=e.charCodeAt(o+1);if(i<56320&&56320<=a&&a<=57343){var s=65536+((1023&i)<<10|1023&a);n[r++]=240|s>>18,n[r++]=128|s>>12&63,n[r++]=128|s>>6&63,n[r++]=128|63&s,o++;continue}}throw new Error("Malformed string")}n[r++]=224|i>>12,n[r++]=128|i>>6&63,n[r++]=128|63&i}}return n.subarray(0,r+1)}function d(e,t){return"string"==typeof e&&(e=new Buffer(e,"base64")),"string"==typeof t&&(t=c(t)),null==e||0===e.length?e:a(function(e,t){var n,r,o,i,a,s=e.length,l=s-1;for(n=e[0],o=2654435769*Math.floor(6+52/s);0!==o;o-=2654435769){for(i=o>>>2&3,a=l;a>0;--a)r=e[a-1],n=e[a]-=u(o,n,r,a,i,t);r=e[l],n=e[0]-=u(o,n,r,a,i,t)}return e}(s(e,!0),s(l(t),!0)),!1)}function f(e,t){return"string"==typeof e&&(e=c(e)),"string"==typeof t&&(t=c(t)),null==e||0===e.length?e:a(function(e,t){var n,r,o,i,a,s,l=e.length,c=l-1;for(r=e[c],o=0,s=0|Math.floor(6+52/l);s>0;--s){for(i=(o+=2654435769)>>>2&3,a=0;a<c;++a)n=e[a+1],r=e[a]+=u(o,n,r,a,i,t);n=e[0],r=e[c]+=u(o,n,r,a,i,t)}return e}(s(e,!1),s(l(t),!1)),!1)}var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(str){var out,i,len;var c1,c2,c3;len=str.length;i=0;out="";while(i<len){c1=str.charCodeAt(i++)&0xff;if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt((c1&0x3)<<4);out+="==";break;}c2=str.charCodeAt(i++);if(i==len){out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt((c2&0xF)<<2);out+="=";break;}c3=str.charCodeAt(i++);out+=base64EncodeChars.charAt(c1>>2);out+=base64EncodeChars.charAt(((c1&0x3)<<4)|((c2&0xF0)>>4));out+=base64EncodeChars.charAt(((c2&0xF)<<2)|((c3&0xC0)>>6));out+=base64EncodeChars.charAt(c3&0x3F);}return out;}function base64decode(str){var c1,c2,c3,c4;var i,len,out;len=str.length;i=0;out="";while(i<len){do{c1=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c1==-1);if(c1==-1)break;do{c2=base64DecodeChars[str.charCodeAt(i++)&0xff];}while(i<len&&c2==-1);if(c2==-1)break;out+=String.fromCharCode((c1<<2)|((c2&0x30)>>4));do{c3=str.charCodeAt(i++)&0xff;if(c3==61)return out;c3=base64DecodeChars[c3];}while(i<len&&c3==-1);if(c3==-1)break;out+=String.fromCharCode(((c2&0XF)<<4)|((c3&0x3C)>>2));do{c4=str.charCodeAt(i++)&0xff;if(c4==61)return out;c4=base64DecodeChars[c4];}while(i<len&&c4==-1);if(c4==-1)break;out+=String.fromCharCode(((c3&0x03)<<6)|c4);}return out;};function Encrypt_Body(n,r){return function(n){for(var r="",e=new Uint8Array(n),t=e.byteLength,o=0;o<t;o++)r+=String.fromCharCode(e[o]);return base64encode(r)}(f(n,r))}
//************抠的算法
!(async () => {
    if ($request && $request.method != 'OPTIONS' && /\/common\/(alipaymini|wxmini)\?_ENCRYPT=/.test($request.url)) { //WX、ALI
        let ENCRYPT = $request.url.split("_ENCRYPT=")[1].split("&")[0];
        ENCRYPT = base64decode(ENCRYPT);
        let obj = {}, abc = {};
        ENCRYPT.split('&').forEach(item => obj[item.split('=')[0]] = (item.split('=')[1]))
        abc.userId = obj.userId;
        abc.adiu = obj.deviceId;
        abc.sessionid = obj.sessionId;
        if (abc.sessionid.length > 30) {
            $persistentStore.write(JSON.stringify(abc), _key);
            console.log('从小程序获取签到sessionid成功🎉');
        }
    } else if ($request && $request.method != 'OPTIONS') { //WX、ALI、APP
        let abc = {};
        let obj = JSON.parse($response.body);
        abc.userId = obj.content.uid;
        abc.adiu = obj.content.adiu;
        let hed = $request.headers;
        abc.sessionid = hed['Sessionid'] || hed['sessionid'];
        if (abc.sessionid.length > 30) {
            $persistentStore.write(JSON.stringify(abc), _key);
            console.log('获取签到sessionid成功🎉');
        } else {
            let ck = hed['Cookie'] || hed['cookie'];
            if (ck.includes('sessionid=')) {
                abc.sessionid = ck.split("sessionid=")[1].split(";")[0];
                if (abc.sessionid.length > 30) {
                    $persistentStore.write(JSON.stringify(abc), _key);
                    console.log('从Cookie中获取签到sessionid成功🎉');
                }
            }
        }
    }
})().catch((e) => {
    console.log(`❌失败! 原因: ${e}!`);
}).finally(() => {
    $done({});
})
