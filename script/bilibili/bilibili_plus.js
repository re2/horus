const scriptName = 'BiliBili';
const storyAidKey = 'story_aid';
let magicJS = MagicJS(scriptName, 'INFO');
let storyId = '246834163';
;(() => {
  let body = null;
  if (magicJS.isResponse){
    switch (true){
      // 匹配story模式，用于记录Story的aid
      case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          let lastItem = obj['data']['items'].pop();
          let aid = lastItem['stat']['aid'];
          magicJS.write(storyAidKey, aid);
          magicJS.notify(`读取的aid: ${aid}`);
          let said = magicJS.read(storyAidKey);
          magicJS.notify(`存储中的aid: ${said}`);
        }
        catch (err){
          magicJS.logError(`记录Story的aid出现异常：${err}`);
        }
        break;
      // 推荐去广告，最后问号不能去掉，以免匹配到story模式
      case /^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          let items = [];
          for (let item of obj['data']['items'] ){
            if (item.hasOwnProperty('banner_item')){
              let bannerItems = [];
              for (let banner of item['banner_item']){
                if (banner['is_ad'] != true && banner['is_ad_loc'] != true){
                  bannerItems.push(banner);
                }
              }
              // 去除广告后，如果banner大于等于1个才添加到响应体
              if (bannerItems.length >= 1){
                item['banner_item'] = bannerItems;
                items.push(item);
              }
            }
            else if (!item.hasOwnProperty('ad_info') && (item['card_type'] === 'small_cover_v2' || item['card_type'] === 'large_cover_v1')){
              items.push(item);
            }
          }
          obj['data']['items'] = items;
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`推荐去广告出现异常：${err}`);
        }
        break;
      // 开屏广告处理
      case /^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          obj['data']['max_time'] = 0;
          obj['data']['min_interval'] = 31536000;
          obj['data']['pull_interval'] = 31536000;
          for(let i=0;i<obj['data']['list'].length;i++){
            obj['data']['list'][i]['duration'] = 0;
            obj['data']['list'][i]['begin_time'] = 1915027200;
            obj['data']['list'][i]['end_time'] = 1924272000;
          }
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`开屏广告处理出现异常：${err}`);
        }
        break;
      // 标签页处理，如去除会员购等等
      case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test(magicJS.request.url):
        try{
          // 442 开始为概念版id
          const tabList = new Set([39, 40, 41, 42, 151, 442, 99, 100, 101]);
          // 107 概念版游戏中心，获取修改为Story模式
          const topList = new Set([176,222,107]);
          // 102 开始为概念版id
          const bottomList = new Set([177, 178, 179, 181, 102, 103, 104, 105, 106]);
          let obj = JSON.parse(magicJS.response.body);
          if (obj['data']['tab']){
            let tab = obj['data']['tab'].filter((e) =>{return tabList.has(e.id);});
            obj['data']['tab'] = tab;
          }
          // 将 id（222 & 107）调整为Story功能按钮 
          if (obj['data']['top']){
            let top = obj['data']['top'].filter((e) =>{
              if (e.id === 222 || e.id === 107){
                e.uri = `bilibili://story/${storyId}`;
                e.icon = "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_icon.png";
                e.tab_id = "Story_Top";
                e.name = "Story";
              }
              return topList.has(e.id);
            });
            obj['data']['top'] = top;
          }
          if (obj['data']['bottom']){
            let bottom = obj['data']['bottom'].filter((e) =>{return bottomList.has(e.id);});
            obj['data']['bottom'] = bottom;
          }
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`标签页处理出现异常：${err}`);
        }
        break;
      // 我的页面处理，去除一些推广按钮
      case /^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          // 425 开始为概念版id
          const itemList = new Set([396,397,398,399,171,172,534,8,4,428,352,1,405,402,404,544,407,410,425,426,427,428,171,430,431,432]);
          obj['data']['sections_v2'].forEach((element, index) => {
            let items = element['items'].filter((e) =>{return itemList.has(e.id);});
            obj['data']['sections_v2'][index].button = {}
            delete obj['data']['sections_v2'][index].be_up_title;
            delete obj['data']['sections_v2'][index].tip_icon;
            delete obj['data']['sections_v2'][index].tip_title;
            obj['data']['sections_v2'][index]['items'] = items;
          });
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`我的页面处理出现异常：${err}`);
        }
        break;
      // 直播去广告
      case /^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          obj['data']['activity_banner_info'] = null;
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`直播去广告出现异常：${err}`);
        }
        break;
      // 追番去广告
      case /^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          for (let card of obj.data.cards){
            delete card['extra'];
          }
          delete obj['data']['attentions'];
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`追番去广告出现异常：${err}`);
        }
        break;
      // 动态去广告
      case /^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_new\?/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          let cards = [];
          obj.data.cards.forEach(element => {
            if (element.hasOwnProperty('display') && element.card.indexOf('ad_ctx') <= 0){
              // 解决number类型精度问题导致B站动态中图片无法打开的问题
              element['desc']['dynamic_id'] = element['desc']['dynamic_id_str'];
              element['desc']['pre_dy_id'] = element['desc']['pre_dy_id_str'];
              element['desc']['orig_dy_id'] = element['desc']['orig_dy_id_str'];
              element['desc']['rid'] = element['desc']['rid_str'];
              cards.push(element);
            }
          });
          obj.data.cards = cards;
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`动态去广告出现异常：${err}`);
        }
        break;
      // 去除统一设置的皮肤
      case /^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test(magicJS.request.url):
        try{
          let obj = JSON.parse(magicJS.response.body);
          if (obj && obj.hasOwnProperty('data')){
            obj['data']['common_equip'] = {};
          }
          body = JSON.stringify(obj);
        }
        catch (err){
          magicJS.logError(`去除强制设置的皮肤出现异常：${err}`);
        }
        break;
      default:
        magicJS.logWarning('触发意外的请求处理，请确认脚本或复写配置正常。');
        break;
    }
  }
  else{
    magicJS.logWarning('触发意外的请求处理，请确认脚本或复写配置正常。');
  }
  if (body){
    magicJS.done({body});
  }
  else{
    magicJS.done();
  }
})();

function MagicJS(e="MagicJS",t="INFO"){const s={accept:"Accept","accept-ch":"Accept-CH","accept-charset":"Accept-Charset","accept-features":"Accept-Features","accept-encoding":"Accept-Encoding","accept-language":"Accept-Language","accept-ranges":"Accept-Ranges","access-control-allow-credentials":"Access-Control-Allow-Credentials","access-control-allow-origin":"Access-Control-Allow-Origin","access-control-allow-methods":"Access-Control-Allow-Methods","access-control-allow-headers":"Access-Control-Allow-Headers","access-control-max-age":"Access-Control-Max-Age","access-control-expose-headers":"Access-Control-Expose-Headers","access-control-request-method":"Access-Control-Request-Method","access-control-request-headers":"Access-Control-Request-Headers",age:"Age",allow:"Allow",alternates:"Alternates",authorization:"Authorization","cache-control":"Cache-Control",connection:"Connection","content-encoding":"Content-Encoding","content-language":"Content-Language","content-length":"Content-Length","content-location":"Content-Location","content-md5":"Content-MD5","content-range":"Content-Range","content-security-policy":"Content-Security-Policy","content-type":"Content-Type",cookie:"Cookie",dnt:"DNT",date:"Date",etag:"ETag",expect:"Expect",expires:"Expires",from:"From",host:"Host","if-match":"If-Match","if-modified-since":"If-Modified-Since","if-none-match":"If-None-Match","if-range":"If-Range","if-unmodified-since":"If-Unmodified-Since","last-event-id":"Last-Event-ID","last-modified":"Last-Modified",link:"Link",location:"Location","max-forwards":"Max-Forwards",negotiate:"Negotiate",origin:"Origin",pragma:"Pragma","proxy-authenticate":"Proxy-Authenticate","proxy-authorization":"Proxy-Authorization",range:"Range",referer:"Referer","retry-after":"Retry-After","sec-websocket-extensions":"Sec-Websocket-Extensions","sec-websocket-key":"Sec-Websocket-Key","sec-websocket-origin":"Sec-Websocket-Origin","sec-websocket-protocol":"Sec-Websocket-Protocol","sec-websocket-version":"Sec-Websocket-Version",server:"Server","set-cookie":"Set-Cookie","set-cookie2":"Set-Cookie2","strict-transport-security":"Strict-Transport-Security",tcn:"TCN",te:"TE",trailer:"Trailer","transfer-encoding":"Transfer-Encoding",upgrade:"Upgrade","user-agent":"User-Agent","variant-vary":"Variant-Vary",vary:"Vary",via:"Via",warning:"Warning","www-authenticate":"WWW-Authenticate","x-content-duration":"X-Content-Duration","x-content-security-policy":"X-Content-Security-Policy","x-dnsprefetch-control":"X-DNSPrefetch-Control","x-frame-options":"X-Frame-Options","x-requested-with":"X-Requested-With","x-surge-skip-scripting":"X-Surge-Skip-Scripting"};return new class{constructor(){this.version="2.2.3.3";this.scriptName=e;this.logLevels={DEBUG:5,INFO:4,NOTIFY:3,WARNING:2,ERROR:1,CRITICAL:0,NONE:-1};this.isLoon=typeof $loon!=="undefined";this.isQuanX=typeof $task!=="undefined";this.isJSBox=typeof $drive!=="undefined";this.isNode=typeof module!=="undefined"&&!this.isJSBox;this.isSurge=typeof $httpClient!=="undefined"&&!this.isLoon;this.platform=this.getPlatform();this.node={request:undefined,fs:undefined,data:{}};this.iOSUserAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1";this.pcUserAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59";this.logLevel=t;this._unifiedPushUrl="";if(this.isNode){this.node.fs=require("fs");this.node.request=require("request");try{this.node.fs.accessSync("./magic.json",this.node.fs.constants.R_OK|this.node.fs.constants.W_OK)}catch(e){this.node.fs.writeFileSync("./magic.json","{}",{encoding:"utf8"})}this.node.data=require("./magic.json")}else if(this.isJSBox){if(!$file.exists("drive://MagicJS")){$file.mkdir("drive://MagicJS")}if(!$file.exists("drive://MagicJS/magic.json")){$file.write({data:$data({string:"{}"}),path:"drive://MagicJS/magic.json"})}}}set unifiedPushUrl(e){this._unifiedPushUrl=!!e?e.replace(/\/+$/g,""):""}set logLevel(e){this._logLevel=typeof e==="string"?e.toUpperCase():"DEBUG"}get logLevel(){return this._logLevel}get isRequest(){return typeof $request!=="undefined"&&typeof $response==="undefined"}get isResponse(){return typeof $response!=="undefined"}get request(){return typeof $request!=="undefined"?$request:undefined}get response(){if(typeof $response!=="undefined"){if($response.hasOwnProperty("status"))$response["statusCode"]=$response["status"];if($response.hasOwnProperty("statusCode"))$response["status"]=$response["statusCode"];return $response}else{return undefined}}getPlatform(){if(this.isSurge)return"Surge";else if(this.isQuanX)return"QuantumultX";else if(this.isLoon)return"Loon";else if(this.isJSBox)return"JSBox";else if(this.isNode)return"Node.js";else return"unknown"}read(e,t=""){let s="";if(this.isSurge||this.isLoon){s=$persistentStore.read(e)}else if(this.isQuanX){s=$prefs.valueForKey(e)}else if(this.isNode){s=this.node.data}else if(this.isJSBox){s=$file.read("drive://MagicJS/magic.json").string}try{if(this.isNode)s=s[e];if(this.isJSBox)s=JSON.parse(s)[e];if(!!t){if(typeof s==="string")s=JSON.parse(s);s=!!s&&typeof s==="object"?s[t]:null}}catch(i){this.logError(i);s=!!t?{}:null;this.del(e)}if(typeof s==="undefined")s=null;try{if(!!s&&typeof s==="string")s=JSON.parse(s)}catch(e){}this.logDebug(`READ DATA [${e}]${!!t?`[${t}]`:""}(${typeof s})\n${JSON.stringify(s)}`);return s}write(e,t,s=""){let i=!!s?{}:"";if(!!s&&(this.isSurge||this.isLoon)){i=$persistentStore.read(e)}else if(!!s&&this.isQuanX){i=$prefs.valueForKey(e)}else if(this.isNode){i=this.node.data}else if(this.isJSBox){i=JSON.parse($file.read("drive://MagicJS/magic.json").string)}if(!!s){try{if(typeof i==="string")i=JSON.parse(i);i=typeof i==="object"&&!!i?i:{}}catch(t){this.logError(t);this.del(e);i={}}if(this.isJSBox||this.isNode){if(!i.hasOwnProperty(e)||typeof i[e]!=="object"||i[e]===null){i[e]={}}if(!i[e].hasOwnProperty(s)){i[e][s]=null}if(typeof t==="undefined"){delete i[e][s]}else{i[e][s]=t}}else{if(typeof t==="undefined"){delete i[s]}else{i[s]=t}}}else{if(this.isNode||this.isJSBox){if(typeof t==="undefined"){delete i[e]}else{i[e]=t}}else{if(typeof t==="undefined"){i=null}else{i=t}}}if(typeof i==="object")i=JSON.stringify(i);if(this.isSurge||this.isLoon){$persistentStore.write(i,e)}else if(this.isQuanX){$prefs.setValueForKey(i,e)}else if(this.isNode){this.node.fs.writeFileSync("./magic.json",i)}else if(this.isJSBox){$file.write({data:$data({string:i}),path:"drive://MagicJS/magic.json"})}this.logDebug(`WRITE DATA [${e}]${!!s?`[${s}]`:""}(${typeof t})\n${JSON.stringify(t)}`)}del(e,t=""){this.logDebug(`DELETE KEY [${e}]${!!t?`[${t}]`:""}`);this.write(e,null,t)}notify(e=this.scriptName,t="",s="",i=""){let o=e=>{let t={};if(this.isSurge||this.isQuanX||this.isLoon){if(typeof e==="string"){if(this.isLoon)t={openUrl:e};else if(this.isQuanX)t={"open-url":e};else if(this.isSurge)t={url:e}}else if(typeof e==="object"){let s={Surge:{openUrl:"url","open-url":"url"},Loon:{url:"openUrl","open-url":"openUrl","media-url":"mediaUrl"},QuantumultX:{url:"open-url",openUrl:"open-url",mediaUrl:"media-url"}};let i=Object.keys(e);for(let o=0;o<i.length;o++){if(!!s[this.platform][i[o]]){t[s[this.platform][i[o]]]=e[i[o]]}else{t[i[o]]=e[i[o]]}}}}return t};i=o(i);this.logNotify(`title:${e}\nsubTitle:${t}\nbody:${s}\noptions:${typeof i==="object"?JSON.stringify(i):i}`);if(arguments.length==1){e=this.scriptName;t="",s=arguments[0]}if(!!this._unifiedPushUrl){let i=encodeURI(`${e}/${t}${!!t?"\n":""}${s}`);this.get(`${this._unifiedPushUrl}/${i}`,()=>{})}if(this.isSurge||this.isLoon){$notification.post(e,t,s,i)}else if(this.isQuanX){$notify(e,t,s,i)}else if(this.isJSBox){let i={title:e,body:!!t?`${t}\n${s}`:s};$push.schedule(i)}}log(e,t="INFO"){if(!(this.logLevels[this._logLevel]<this.logLevels[t.toUpperCase()]))console.log(`[${t}] [${this.scriptName}]\n${e}\n`)}logDebug(e){this.log(e,"DEBUG")}logInfo(e){this.log(e,"INFO")}logNotify(e){this.log(e,"NOTIFY")}logWarning(e){this.log(e,"WARNING")}logError(e){this.log(e,"ERROR")}adapterHttpOptions(e,t){let i=typeof e==="object"?Object.assign({},e):{url:e,headers:{}};if(i.hasOwnProperty("header")&&!i.hasOwnProperty("headers")){i["headers"]=i["header"];delete i["header"]}if(typeof i.headers==="object"&&!!s){for(let e in i.headers){if(s[e]){i.headers[s[e]]=i.headers[e];delete i.headers[e]}}}if(!!!i.headers||typeof i.headers!=="object"||!!!i.headers["User-Agent"]){if(!!!i.headers||typeof i.headers!=="object")i.headers={};if(this.isNode)i.headers["User-Agent"]=this.pcUserAgent;else i.headers["User-Agent"]=this.iOSUserAgent}let o=false;if(typeof i["opts"]==="object"&&(i["opts"]["hints"]===true||i["opts"]["Skip-Scripting"]===true)||typeof i["headers"]==="object"&&i["headers"]["X-Surge-Skip-Scripting"]===true){o=true}if(!o){if(this.isSurge)i.headers["X-Surge-Skip-Scripting"]=false;else if(this.isLoon)i.headers["X-Requested-With"]="XMLHttpRequest";else if(this.isQuanX){if(typeof i["opts"]!=="object")i.opts={};i.opts["hints"]=false}}if(!this.isSurge||o)delete i.headers["X-Surge-Skip-Scripting"];if(!this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"];if(this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"]["Skip-Scripting"];if(t==="GET"&&!this.isNode&&!!i.body){let e=Object.keys(i.body).map(e=>{if(typeof i.body==="undefined")return"";return`${encodeURIComponent(e)}=${encodeURIComponent(i.body[e])}`}).join("&");if(i.url.indexOf("?")<0)i.url+="?";if(i.url.lastIndexOf("&")+1!=i.url.length&&i.url.lastIndexOf("?")+1!=i.url.length)i.url+="&";i.url+=e;delete i.body}if(this.isQuanX){if(i.hasOwnProperty("body")&&typeof i["body"]!=="string")i["body"]=JSON.stringify(i["body"]);i["method"]=t}else if(this.isNode){delete i.headers["Accept-Encoding"];if(typeof i.body==="object"){if(t==="GET"){i.qs=i.body;delete i.body}else if(t==="POST"){i["json"]=true;i.body=i.body}}}else if(this.isJSBox){i["header"]=i["headers"];delete i["headers"]}return i}get(e,t){let s=this.adapterHttpOptions(e,"GET");this.logDebug(`HTTP GET: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.get(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>t(e.error,null,null))}else if(this.isNode){return this.node.request.get(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.get(s)}}post(e,t){let s=this.adapterHttpOptions(e,"POST");this.logDebug(`HTTP POST: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.post(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>{t(e.error,null,null)})}else if(this.isNode){return this.node.request.post(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.post(s)}}done(e={}){if(typeof $done!=="undefined"){$done(e)}}isToday(e){if(e==null){return false}else{let t=new Date;if(typeof e=="string"){e=new Date(e)}if(t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDay()==e.getDay()){return true}else{return false}}}isNumber(e){return parseFloat(e).toString()==="NaN"?false:true}attempt(e,t=null){return e.then(e=>{return[null,e]}).catch(e=>{this.logError(e);return[e,t]})}retry(e,t=5,s=0,i=null){return(...o)=>{return new Promise((r,n)=>{function a(...o){Promise.resolve().then(()=>e.apply(this,o)).then(e=>{if(typeof i==="function"){Promise.resolve().then(()=>i(e)).then(()=>{r(e)}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}else{r(e)}}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}a.apply(this,o)})}}formatTime(e,t="yyyy-MM-dd hh:mm:ss"){var s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};if(/(y+)/.test(t))t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length));for(let e in s)if(new RegExp("("+e+")").test(t))t=t.replace(RegExp.$1,RegExp.$1.length==1?s[e]:("00"+s[e]).substr((""+s[e]).length));return t}now(){return this.formatTime(new Date,"yyyy-MM-dd hh:mm:ss")}today(){return this.formatTime(new Date,"yyyy-MM-dd")}sleep(e){return new Promise(t=>setTimeout(t,e))}}(e)}
