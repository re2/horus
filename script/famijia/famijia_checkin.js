const scriptName = 'Fa米家';
const getCookieRegex = /^https?:\/\/fmapp\.chinafamilymart\.com\.cn\/api\/app\/market\/member\/signin\/usersign/;
const startAdRegex = /^https?:\/\/fmapp\.chinafamilymart\.com\.cn\/api\/app\/market\/start\/ad/;
const famijiaCookieKey = 'famijia_checkin_cookie';
const famijiaDeviceIdKey = 'famijia_device_id_cookie';
let magicJS = MagicJS(scriptName, "INFO");
magicJS.unifiedPushUrl = magicJS.read('famijia_unified_push_url') || magicJS.read('magicjs_unified_push_url');

// 获取SignCode
function GetSignCode(cookie, deviceId){
  return new Promise((resolve, reject)=>{
    let options = {
      url: 'https://fmapp.chinafamilymart.com.cn/api/app/market/member/sign/current',
      headers: {
        "Accept": "*/*", 
        "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "fmapp.chinafamilymart.com.cn",
        "User-Agent": "Fa",
        "deviceId": deviceId,
        "fmVersion": "1.2.3",
        "loginChannel": "app",
        "token": cookie
      },
      body: {}
    }
    magicJS.post(options, (err, resp, data)=>{
      if (err){
        magicJS.logError(`获取Code失败，请求异常：${err}`);
        reject('❌获取Code失败，请求异常，请查阅日志！');
      }
      else{
        try{
          let obj = typeof data === 'string'? JSON.parse(data) : data;
          if (obj.code === "200"){
            resolve(obj.data.code);
          }
          else if (obj.code === "1000"){
            reject(obj.message);
          }
          else{
            magicJS.logError(`获取Code失败，响应异常：${data}`);
            reject('❌获取Code失败，响应异常，请查阅日志！');
          }
        }
        catch(err){
          magicJS.logError(`获取Code失败，执行异常：${err}，接口响应：${data}`);
          reject('❌获取Code失败，执行异常，请查阅日志！');
        }
      }
    })
  })
}

// 每日签到
function CheckIn(cookie, code, deviceId){
  return new Promise((resolve, reject)=>{
    let checkinOptions = {
      url: 'https://fmapp.chinafamilymart.com.cn/api/app/market/member/sign/sign',
      headers: {
        "Accept": "*/*", 
        "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "fmapp.chinafamilymart.com.cn",
        "User-Agent": "Fa",
        "deviceId": deviceId,
        "fmVersion": "1.2.3",
        "loginChannel": "app",
        "token": cookie
      },
      body: {'code': code}
    }
    magicJS.post(checkinOptions, (err, resp, data)=>{
      if (err){
        magicJS.logError(`签到失败，请求异常：${err}`);
        reject('❌签到失败，请求异常，请查阅日志！');
      }
      else{
        try{
          magicJS.logDebug(`Fa米家签到响应结果：${data}`);
          let obj = typeof data === 'string'? JSON.parse(data) : data;
          if (obj.code === "200"){
            resolve([obj.data.todayRewardNum, obj.data.signCount, obj.data.resWordUp, obj.data.resWordDown, ""]);
          }
          else if (obj.code === "1000"){
            resolve([null, null, null, null, obj.message]);
          }
          else{
            magicJS.logError(`签到失败，响应异常：${data}`);
            reject('❌签到失败，响应异常，请查阅日志！');
          }
        }
        catch(err){
          magicJS.logError(`签到失败，执行异常：${err}，接口响应：${data}`);
          reject('❌签到失败，执行异常，请查阅日志！');
        }
      }
    })
  })
}

function CheckInNewVerrsion(cookie, code, deviceId){
  return new Promise((resolve, reject)=>{
    let checkinOptions = {
      url: 'https://fmapp.chinafamilymart.com.cn/api/app/market/member/signin/sign',
      headers: {
        "Accept": "*/*", 
        "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
        "Accept-Language": "zh-Hans-CN;q=1.0",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "fmapp.chinafamilymart.com.cn",
        "User-Agent": "Fa",
        "deviceId": deviceId,
        "fmVersion": "1.2.3",
        "loginChannel": "app",
        "token": cookie
      },
      body: {}
    }
    magicJS.post(checkinOptions, (err, resp, data)=>{
      if (err){
        magicJS.logError(`签到失败，请求异常：${err}`);
        reject('❌签到失败，请求异常，请查阅日志！');
      }
      else{
        try{
          magicJS.logDebug(`Fa米家签到响应结果：${data}`);
          let obj = typeof data === 'string'? JSON.parse(data) : data;
          if (obj.code === "200"){
            resolve([obj.data, ""]);
          }
          else if (obj.code === "3004000"){
            resolve([null, obj.message]);
          }
          else{
            magicJS.logError(`签到失败，响应异常：${data}`);
            reject('❌签到失败，响应异常，请查阅日志！');
          }
        }
        catch(err){
          magicJS.logError(`签到失败，执行异常：${err}，接口响应：${data}`);
          reject('❌签到失败，执行异常，请查阅日志！');
        }
      }
    })
  })
}

// 获取账户下的米粒及到期提醒
function GetMili(cookie, deviceId){
  return new Promise((resolve, reject)=>{
    let options = {
      url: 'https://fmapp.chinafamilymart.com.cn/api/app/member/v1/mili/service/detail',
      headers: {
        "Accept": "*/*",
        "Accept-Encoding": "br;q=1.0, gzip;q=0.9, deflate;q=0.8",
        "Accept-Language": "zh-Hans-CN;q=1.0, en-CN;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "fmapp.chinafamilymart.com.cn",
        "User-Agent": "Fa",
        "deviceId": deviceId,
        "fmVersion": "1.2.3",
        "loginChannel": "app",
        "token": cookie
      },
      body: {"pageSize": 10, "pageNo": 1}
    }
    magicJS.post(options, (err, resp, data)=>{
      if (err){
        magicJS.logError(`获取米粒失败，请求异常：${err}`);
        reject('❌获取米粒失败，请求异常，请查阅日志！');
      }
      else{
        try{
          let obj = typeof data === 'string'? JSON.parse(data) : data;
          if (obj.code === "200"){
            resolve(obj.data);
          }
          else{
            magicJS.logError(`获取米粒失败，响应异常：${data}`);
            reject('❌获取米粒失败，响应异常，请查阅日志！');
          }
        }
        catch(err){
          magicJS.logError(`获取米粒失败，执行异常：${err}，接口响应：${data}`);
          reject('❌获取米粒失败，执行异常，请查阅日志！');
        }
      }
    })
  })
}

;(async()=>{
  if (magicJS.isRequest && getCookieRegex.test(magicJS.request.url)){
    let cookie = magicJS.request.headers.token;
    let hisCookie = magicJS.read(famijiaCookieKey);
    magicJS.write(famijiaDeviceIdKey, magicJS.request.headers.deviceId);
    if (cookie !== hisCookie){
      magicJS.write(famijiaCookieKey, cookie);
      magicJS.logInfo(`旧的Cookie：${hisCookie}\n新的Cookie：${cookie}\nCookie不同，写入新的Cookie成功！`);
      magicJS.notify('Cookie写入成功！！');
    }
    else{
      magicJS.logInfo('Cookie没有变化，无需更新');
    }
  }
  else if (magicJS.isResponse && startAdRegex.test(magicJS.request.url)){
    try{
      let obj = JSON.parse(magicJS.response.body);
      if (obj.code === '200'){
        obj.data.relayDisplayUrl = '';
      }
      let body = JSON.stringify(obj);
      magicJS.done({body});
    }
    catch (err){
      magicJS.logWarning(`去除开屏广告失败，异常信息：${err}`);
    }
  }
  else{
    let subTitle = "";
    let content = "";
    let cookie = magicJS.read(famijiaCookieKey);
    let deviceId = magicJS.read(famijiaDeviceIdKey) || "DA14D851-2E39-8E3D-B7FD-38710CABAC76";
    if (!!!cookie || !!!deviceId){
      magicJS.logWarning('没有读取到Cookie，请先从App中获取一次Cookie！');
      magicJS.notify('❓没有读取到有效Cookie，请先从App中获取Cookie!!');
    }
    else{
      // 2020.11.04 新版签到
      let [checkInErr,[data, message]] = await magicJS.attempt(magicJS.retry(CheckInNewVerrsion, 3, 1000)(cookie, deviceId), []);
      if (checkInErr){
        subTitle = checkInErr;
      }
      else if (data){
        subTitle = `本日签到成功`;
        if (data.currentNumber !== null){
          subTitle += `，共获得 ${data.currentNumber} 个Fa米粒。`
        }
        content = `再坚持签到 ${data.nextDay} 天可获得 ${data.nextNumber} 个Fa米粒。\n签到 ${data.lastDay} 可获得 ${data.lastNumber} 个Fa米粒。`;
      }
      else{
        subTitle = message;
      }
      // 旧版废弃
      // let [getCodeErr, signCode] =  await magicJS.attempt(magicJS.retry(GetSignCode, 3, 1000)(cookie, deviceId), "");
      // if (getCodeErr){
      //   subTitle = getCodeErr;
      // }
      // else{
      //   magicJS.log(`当前获取的SignCode：${signCode}`);
      //   let [checkInErr,[todayRewardNum, signCount, resWordUp, resWordDown, message]] = await magicJS.attempt(magicJS.retry(CheckIn, 3, 1000)(cookie, signCode, deviceId), [null, null, null, null, ""]);
      //   if (checkInErr){
      //     subTitle = checkInErr;
      //   }
      //   else if (!!message){
      //     subTitle = message;
      //   }
      //   else{
      //     subTitle = `连续签到${signCount}天，本日获得${todayRewardNum}米粒`;
      //     if (!!resWordUp) content = resWordUp;
      //     if (!!resWordDown) content = resWordDown;
      //   }
      // }

      // 获取米粒
      let [getMiliErr, getMiliResult] = await magicJS.attempt(GetMili(cookie, deviceId));
      if (!getMiliErr){
        if (content) content += '\n';
        content += `账户共有 ${getMiliResult.miliNum} Fa米粒\n${getMiliResult.expireDate}过期 ${getMiliResult.expireMiliNum} Fa米粒`;
      }

      // 通知
      magicJS.notify(scriptName, subTitle, content);
    }
  }
  magicJS.done();
})();

function MagicJS(e="MagicJS",t="INFO"){const s={accept:"Accept","accept-ch":"Accept-CH","accept-charset":"Accept-Charset","accept-features":"Accept-Features","accept-encoding":"Accept-Encoding","accept-language":"Accept-Language","accept-ranges":"Accept-Ranges","access-control-allow-credentials":"Access-Control-Allow-Credentials","access-control-allow-origin":"Access-Control-Allow-Origin","access-control-allow-methods":"Access-Control-Allow-Methods","access-control-allow-headers":"Access-Control-Allow-Headers","access-control-max-age":"Access-Control-Max-Age","access-control-expose-headers":"Access-Control-Expose-Headers","access-control-request-method":"Access-Control-Request-Method","access-control-request-headers":"Access-Control-Request-Headers",age:"Age",allow:"Allow",alternates:"Alternates",authorization:"Authorization","cache-control":"Cache-Control",connection:"Connection","content-encoding":"Content-Encoding","content-language":"Content-Language","content-length":"Content-Length","content-location":"Content-Location","content-md5":"Content-MD5","content-range":"Content-Range","content-security-policy":"Content-Security-Policy","content-type":"Content-Type",cookie:"Cookie",dnt:"DNT",date:"Date",etag:"ETag",expect:"Expect",expires:"Expires",from:"From",host:"Host","if-match":"If-Match","if-modified-since":"If-Modified-Since","if-none-match":"If-None-Match","if-range":"If-Range","if-unmodified-since":"If-Unmodified-Since","last-event-id":"Last-Event-ID","last-modified":"Last-Modified",link:"Link",location:"Location","max-forwards":"Max-Forwards",negotiate:"Negotiate",origin:"Origin",pragma:"Pragma","proxy-authenticate":"Proxy-Authenticate","proxy-authorization":"Proxy-Authorization",range:"Range",referer:"Referer","retry-after":"Retry-After","sec-websocket-extensions":"Sec-Websocket-Extensions","sec-websocket-key":"Sec-Websocket-Key","sec-websocket-origin":"Sec-Websocket-Origin","sec-websocket-protocol":"Sec-Websocket-Protocol","sec-websocket-version":"Sec-Websocket-Version",server:"Server","set-cookie":"Set-Cookie","set-cookie2":"Set-Cookie2","strict-transport-security":"Strict-Transport-Security",tcn:"TCN",te:"TE",trailer:"Trailer","transfer-encoding":"Transfer-Encoding",upgrade:"Upgrade","user-agent":"User-Agent","variant-vary":"Variant-Vary",vary:"Vary",via:"Via",warning:"Warning","www-authenticate":"WWW-Authenticate","x-content-duration":"X-Content-Duration","x-content-security-policy":"X-Content-Security-Policy","x-dnsprefetch-control":"X-DNSPrefetch-Control","x-frame-options":"X-Frame-Options","x-requested-with":"X-Requested-With","x-surge-skip-scripting":"X-Surge-Skip-Scripting"};return new class{constructor(){this.version="2.2.3.3";this.scriptName=e;this.logLevels={DEBUG:5,INFO:4,NOTIFY:3,WARNING:2,ERROR:1,CRITICAL:0,NONE:-1};this.isLoon=typeof $loon!=="undefined";this.isQuanX=typeof $task!=="undefined";this.isJSBox=typeof $drive!=="undefined";this.isNode=typeof module!=="undefined"&&!this.isJSBox;this.isSurge=typeof $httpClient!=="undefined"&&!this.isLoon;this.platform=this.getPlatform();this.node={request:undefined,fs:undefined,data:{}};this.iOSUserAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1";this.pcUserAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59";this.logLevel=t;this._unifiedPushUrl="";if(this.isNode){this.node.fs=require("fs");this.node.request=require("request");try{this.node.fs.accessSync("./magic.json",this.node.fs.constants.R_OK|this.node.fs.constants.W_OK)}catch(e){this.node.fs.writeFileSync("./magic.json","{}",{encoding:"utf8"})}this.node.data=require("./magic.json")}else if(this.isJSBox){if(!$file.exists("drive://MagicJS")){$file.mkdir("drive://MagicJS")}if(!$file.exists("drive://MagicJS/magic.json")){$file.write({data:$data({string:"{}"}),path:"drive://MagicJS/magic.json"})}}}set unifiedPushUrl(e){this._unifiedPushUrl=!!e?e.replace(/\/+$/g,""):""}set logLevel(e){this._logLevel=typeof e==="string"?e.toUpperCase():"DEBUG"}get logLevel(){return this._logLevel}get isRequest(){return typeof $request!=="undefined"&&typeof $response==="undefined"}get isResponse(){return typeof $response!=="undefined"}get request(){return typeof $request!=="undefined"?$request:undefined}get response(){if(typeof $response!=="undefined"){if($response.hasOwnProperty("status"))$response["statusCode"]=$response["status"];if($response.hasOwnProperty("statusCode"))$response["status"]=$response["statusCode"];return $response}else{return undefined}}getPlatform(){if(this.isSurge)return"Surge";else if(this.isQuanX)return"QuantumultX";else if(this.isLoon)return"Loon";else if(this.isJSBox)return"JSBox";else if(this.isNode)return"Node.js";else return"unknown"}read(e,t=""){let s="";if(this.isSurge||this.isLoon){s=$persistentStore.read(e)}else if(this.isQuanX){s=$prefs.valueForKey(e)}else if(this.isNode){s=this.node.data}else if(this.isJSBox){s=$file.read("drive://MagicJS/magic.json").string}try{if(this.isNode)s=s[e];if(this.isJSBox)s=JSON.parse(s)[e];if(!!t){if(typeof s==="string")s=JSON.parse(s);s=!!s&&typeof s==="object"?s[t]:null}}catch(i){this.logError(i);s=!!t?{}:null;this.del(e)}if(typeof s==="undefined")s=null;try{if(!!s&&typeof s==="string")s=JSON.parse(s)}catch(e){}this.logDebug(`READ DATA [${e}]${!!t?`[${t}]`:""}(${typeof s})\n${JSON.stringify(s)}`);return s}write(e,t,s=""){let i=!!s?{}:"";if(!!s&&(this.isSurge||this.isLoon)){i=$persistentStore.read(e)}else if(!!s&&this.isQuanX){i=$prefs.valueForKey(e)}else if(this.isNode){i=this.node.data}else if(this.isJSBox){i=JSON.parse($file.read("drive://MagicJS/magic.json").string)}if(!!s){try{if(typeof i==="string")i=JSON.parse(i);i=typeof i==="object"&&!!i?i:{}}catch(t){this.logError(t);this.del(e);i={}}if(this.isJSBox||this.isNode){if(!i.hasOwnProperty(e)||typeof i[e]!=="object"||i[e]===null){i[e]={}}if(!i[e].hasOwnProperty(s)){i[e][s]=null}if(typeof t==="undefined"){delete i[e][s]}else{i[e][s]=t}}else{if(typeof t==="undefined"){delete i[s]}else{i[s]=t}}}else{if(this.isNode||this.isJSBox){if(typeof t==="undefined"){delete i[e]}else{i[e]=t}}else{if(typeof t==="undefined"){i=null}else{i=t}}}if(typeof i==="object")i=JSON.stringify(i);if(this.isSurge||this.isLoon){$persistentStore.write(i,e)}else if(this.isQuanX){$prefs.setValueForKey(i,e)}else if(this.isNode){this.node.fs.writeFileSync("./magic.json",i)}else if(this.isJSBox){$file.write({data:$data({string:i}),path:"drive://MagicJS/magic.json"})}this.logDebug(`WRITE DATA [${e}]${!!s?`[${s}]`:""}(${typeof t})\n${JSON.stringify(t)}`)}del(e,t=""){this.logDebug(`DELETE KEY [${e}]${!!t?`[${t}]`:""}`);this.write(e,null,t)}notify(e=this.scriptName,t="",s="",i=""){let o=e=>{let t={};if(this.isSurge||this.isQuanX||this.isLoon){if(typeof e==="string"){if(this.isLoon)t={openUrl:e};else if(this.isQuanX)t={"open-url":e};else if(this.isSurge)t={url:e}}else if(typeof e==="object"){let s={Surge:{openUrl:"url","open-url":"url"},Loon:{url:"openUrl","open-url":"openUrl","media-url":"mediaUrl"},QuantumultX:{url:"open-url",openUrl:"open-url",mediaUrl:"media-url"}};let i=Object.keys(e);for(let o=0;o<i.length;o++){if(!!s[this.platform][i[o]]){t[s[this.platform][i[o]]]=e[i[o]]}else{t[i[o]]=e[i[o]]}}}}return t};i=o(i);this.logNotify(`title:${e}\nsubTitle:${t}\nbody:${s}\noptions:${typeof i==="object"?JSON.stringify(i):i}`);if(arguments.length==1){e=this.scriptName;t="",s=arguments[0]}if(!!this._unifiedPushUrl){let i=encodeURI(`${e}/${t}${!!t?"\n":""}${s}`);this.get(`${this._unifiedPushUrl}/${i}`,()=>{})}if(this.isSurge||this.isLoon){$notification.post(e,t,s,i)}else if(this.isQuanX){$notify(e,t,s,i)}else if(this.isJSBox){let i={title:e,body:!!t?`${t}\n${s}`:s};$push.schedule(i)}}log(e,t="INFO"){if(!(this.logLevels[this._logLevel]<this.logLevels[t.toUpperCase()]))console.log(`[${t}] [${this.scriptName}]\n${e}\n`)}logDebug(e){this.log(e,"DEBUG")}logInfo(e){this.log(e,"INFO")}logNotify(e){this.log(e,"NOTIFY")}logWarning(e){this.log(e,"WARNING")}logError(e){this.log(e,"ERROR")}adapterHttpOptions(e,t){let i=typeof e==="object"?Object.assign({},e):{url:e,headers:{}};if(i.hasOwnProperty("header")&&!i.hasOwnProperty("headers")){i["headers"]=i["header"];delete i["header"]}if(typeof i.headers==="object"&&!!s){for(let e in i.headers){if(s[e]){i.headers[s[e]]=i.headers[e];delete i.headers[e]}}}if(!!!i.headers||typeof i.headers!=="object"||!!!i.headers["User-Agent"]){if(!!!i.headers||typeof i.headers!=="object")i.headers={};if(this.isNode)i.headers["User-Agent"]=this.pcUserAgent;else i.headers["User-Agent"]=this.iOSUserAgent}let o=false;if(typeof i["opts"]==="object"&&(i["opts"]["hints"]===true||i["opts"]["Skip-Scripting"]===true)||typeof i["headers"]==="object"&&i["headers"]["X-Surge-Skip-Scripting"]===true){o=true}if(!o){if(this.isSurge)i.headers["X-Surge-Skip-Scripting"]=false;else if(this.isLoon)i.headers["X-Requested-With"]="XMLHttpRequest";else if(this.isQuanX){if(typeof i["opts"]!=="object")i.opts={};i.opts["hints"]=false}}if(!this.isSurge||o)delete i.headers["X-Surge-Skip-Scripting"];if(!this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"];if(this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"]["Skip-Scripting"];if(t==="GET"&&!this.isNode&&!!i.body){let e=Object.keys(i.body).map(e=>{if(typeof i.body==="undefined")return"";return`${encodeURIComponent(e)}=${encodeURIComponent(i.body[e])}`}).join("&");if(i.url.indexOf("?")<0)i.url+="?";if(i.url.lastIndexOf("&")+1!=i.url.length&&i.url.lastIndexOf("?")+1!=i.url.length)i.url+="&";i.url+=e;delete i.body}if(this.isQuanX){if(i.hasOwnProperty("body")&&typeof i["body"]!=="string")i["body"]=JSON.stringify(i["body"]);i["method"]=t}else if(this.isNode){delete i.headers["Accept-Encoding"];if(typeof i.body==="object"){if(t==="GET"){i.qs=i.body;delete i.body}else if(t==="POST"){i["json"]=true;i.body=i.body}}}else if(this.isJSBox){i["header"]=i["headers"];delete i["headers"]}return i}get(e,t){let s=this.adapterHttpOptions(e,"GET");this.logDebug(`HTTP GET: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.get(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>t(e.error,null,null))}else if(this.isNode){return this.node.request.get(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.get(s)}}post(e,t){let s=this.adapterHttpOptions(e,"POST");this.logDebug(`HTTP POST: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.post(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>{t(e.error,null,null)})}else if(this.isNode){return this.node.request.post(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.post(s)}}done(e={}){if(typeof $done!=="undefined"){$done(e)}}isToday(e){if(e==null){return false}else{let t=new Date;if(typeof e=="string"){e=new Date(e)}if(t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDay()==e.getDay()){return true}else{return false}}}isNumber(e){return parseFloat(e).toString()==="NaN"?false:true}attempt(e,t=null){return e.then(e=>{return[null,e]}).catch(e=>{this.logError(e);return[e,t]})}retry(e,t=5,s=0,i=null){return(...o)=>{return new Promise((r,n)=>{function a(...o){Promise.resolve().then(()=>e.apply(this,o)).then(e=>{if(typeof i==="function"){Promise.resolve().then(()=>i(e)).then(()=>{r(e)}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}else{r(e)}}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}a.apply(this,o)})}}formatTime(e,t="yyyy-MM-dd hh:mm:ss"){var s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};if(/(y+)/.test(t))t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length));for(let e in s)if(new RegExp("("+e+")").test(t))t=t.replace(RegExp.$1,RegExp.$1.length==1?s[e]:("00"+s[e]).substr((""+s[e]).length));return t}now(){return this.formatTime(new Date,"yyyy-MM-dd hh:mm:ss")}today(){return this.formatTime(new Date,"yyyy-MM-dd")}sleep(e){return new Promise(t=>setTimeout(t,e))}}(e)}