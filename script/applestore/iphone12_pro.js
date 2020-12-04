const SCRIPT_NAME = 'AppleStore';
const IPHONE_STOCK_KEY = 'iphone12_pro_stock';
const NOTIFY_SOLD_OUT = true;
const APPLE_STORE_DATA = {
  R705: {name:"七宝",phone:"4006139773",city:"上海"},
  R401: {name:"上海环贸iapm",phone:"400-617-1324",city:"上海"}, 
  R581: {name:"五角场",phone:"4006139771",city:"上海"},
  R359: {name:"南京东路",phone:"400-663-9988",city:"上海"}, 
  R389: {name:"浦东",phone:"400-617-1305",city:"上海"}, 
  R683: {name:"环球港",phone:"4006171335",city:"上海"},
  R390: {name:"香港广场",phone:"4006171312",city:"上海"},
  R670: {name:"昆明",phone:"400-639-3602",city:"昆明"},
  R320: {name:"三里屯",phone:"400-617-1363",city:"北京"},
  R479: {name:"华贸购物中心",phone:"4006171210",city:"北京"},
  R645: {name:"朝阳大悦城",phone:"4006171284",city:"北京"},
  R448: {name:"王府井",phone:"400-617-1205",city:"北京"},
  R388: {name:"西单大悦城",phone:"4006171204",city:"北京"},
  R502: {name:"成都万象城",phone:"4006171214",city:"成都"},
  R580: {name:"成都太古里",phone:"400-617-1275",city:"成都"},
  R638: {name:"天津万象城",phone:"4006139745",city:"天津"},
  R637: {name:"天津大悦城",phone:"4006171262",city:"天津"},
  R579: {name:"天津恒隆广场",phone:"400-613-9744",city:"天津"},
  R648: {name:"济南恒隆广场",phone:"4006139743",city:"济南"},
  R557: {name:"青岛万象城",phone:"4006171285",city:"青岛"},
  R577: {name:"天环广场",phone:"400-613-9742",city:"广州"},
  R639: {name:"珠江新城",phone:"400-639-3601",city:"广州"},
  R484: {name:"深圳益田假日广场",phone:"400-617-1254",city:"深圳"},
  R571: {name:"南宁万象城",phone:"400-617-1265",city:"南宁"},
  R493: {name:"南京艾尚天地",phone:"4006171334",city:"南京"},
  R703: {name:"南京金茂汇",phone:"4006139772",city:"南京"},
  R643: {name:"虹悦城",phone:"4006171332",city:"南京"},
  R574: {name:"无锡恒隆广场",phone:"4006171325",city:"无锡"},
  R688: {name:"苏州",phone:"4006139775",city:"苏州"},
  R572: {name:"郑州万象城",phone:"400-617-1264",city:"郑州"},
  R531: {name:"天一广场",phone:"4006139774",city:"宁波"},
  R532: {name:"杭州万象城",phone:"4006171304",city:"杭州"},
  R471: {name:"西湖",phone:"4006171302",city:"杭州"},
  R644: {name:"厦门新生活广场",phone:"400-617-1383",city:"厦门"},
  R646: {name:"泰禾广场",phone:"400-617-1354",city:"福州"},
  R609: {name:"大连恒隆广场",phone:"400-613-9741",city:"大连"},
  R478: {name:"百年城",phone:"4000560921",city:"大连"},
  R534: {name:"中街大悦城",phone:"4006171252",city:"沈阳"},
  R576: {name:"沈阳万象城",phone:"4006171274",city:"沈阳"},
  R480: {name:"解放碑",phone:"4006171224",city:"重庆"},
  R573: {name:"重庆万象城",phone:"4006171215",city:"重庆"},
  R476: {name:"重庆北城天街",phone:"400-617-1240",city:"重庆"}
};
const IPHONE_MODEL_DATA = {
  'MG803CH/A': 'iPhone 12 mini 白色 64GB',
  'MG853CH/A': 'iPhone 12 mini 白色 128GB',
  'MG8A3CH/A': 'iPhone 12 mini 白色 256GB',
  'MG7Y3CH/A': 'iPhone 12 mini 黑色 64GB',
  'MG843CH/A': 'iPhone 12 mini 黑色 128GB',
  'MG893CH/A': 'iPhone 12 mini 黑色 256GB',
  'MG823CH/A': 'iPhone 12 mini 蓝色 64GB',
  'MG873CH/A': 'iPhone 12 mini 蓝色 128GB',
  'MG8D3CH/A': 'iPhone 12 mini 蓝色 256GB',
  'MG833CH/A': 'iPhone 12 mini 绿色 64GB',
  'MG883CH/A': 'iPhone 12 mini 绿色 128GB',
  'MG8E3CH/A': 'iPhone 12 mini 绿色 256GB',
  'MG813CH/A': 'iPhone 12 mini 红色 64GB',
  'MG863CH/A': 'iPhone 12 mini 红色 128GB',
  'MG8C3CH/A': 'iPhone 12 mini 红色 256GB',
  'MGGN3CH/A': 'iPhone 12 白色 64GB',
  'MGGV3CH/A': 'iPhone 12 白色 128GB',
  'MGH23CH/A': 'iPhone 12 白色 256GB',
  'MGGM3CH/A': 'iPhone 12 黑色 64GB',
  'MGGU3CH/A': 'iPhone 12 黑色 128GB',
  'MGH13CH/A': 'iPhone 12 黑色 256GB',
  'MGGQ3CH/A': 'iPhone 12 蓝色 64GB',
  'MGGX3CH/A': 'iPhone 12 蓝色 128GB',
  'MGH43CH/A': 'iPhone 12 蓝色 256GB',
  'MGGT3CH/A': 'iPhone 12 绿色 64GB',
  'MGH53CH/A': 'iPhone 12 绿色 128GB',
  'MG8E3CH/A': 'iPhone 12 绿色 256GB',
  'MGGP3CH/A': 'iPhone 12 红色 64GB',
  'MGGW3CH/A': 'iPhone 12 红色 128GB',
  'MGH33CH/A': 'iPhone 12 红色 256GB',
  'MGL93CH/A': 'iPhone 12 Pro 石墨色 128GB',
  'MGLE3CH/A': 'iPhone 12 Pro 石墨色 256GB',
  'MGLJ3CH/A': 'iPhone 12 Pro 石墨色 521GB',
  'MGLA3CH/A': 'iPhone 12 Pro 银色 128GB',
  'MGLF3CH/A': 'iPhone 12 Pro 银色 256GB',
  'MGLK3CH/A': 'iPhone 12 Pro 银色 521GB',
  'MGLC3CH/A': 'iPhone 12 Pro 金色 128GB',
  'MGLG3CH/A': 'iPhone 12 Pro 金色 256GB',
  'MGLL3CH/A': 'iPhone 12 Pro 金色 521GB',
  'MGLD3CH/A': 'iPhone 12 Pro 海蓝色 128GB',
  'MGLH3CH/A': 'iPhone 12 Pro 海蓝色 256GB',
  'MGLM3CH/A': 'iPhone 12 Pro 海蓝色 521GB',
  'MGC03CH/A': 'iPhone 12 Pro Max 石墨色 128GB',
  'MGC43CH/A': 'iPhone 12 Pro Max 石墨色 256GB',
  'MGC93CH/A': 'iPhone 12 Pro Max 石墨色 521GB',
  'MGC13CH/A': 'iPhone 12 Pro Max 银色 128GB',
  'MGC53CH/A': 'iPhone 12 Pro Max 银色 256GB',
  'MGCA3CH/A': 'iPhone 12 Pro Max 银色 521GB',
  'MGC23CH/A': 'iPhone 12 Pro Max 金色 128GB',
  'MGC63CH/A': 'iPhone 12 Pro Max 金色 256GB',
  'MGCC3CH/A': 'iPhone 12 Pro Max 金色 521GB',
  'MGC33CH/A': 'iPhone 12 Pro Max 海蓝色 128GB',
  'MGC73CH/A': 'iPhone 12 Pro Max 海蓝色 256GB',
  'MGCE3CH/A': 'iPhone 12 Pro Max 海蓝色 521GB',
}

// 修改需要购买的iPhone型号和对应店铺，型号和店铺可以参考上面的数据
// 只能用来监控iPhone 12 Pro系列的库存，iPhone12的库存数据源不一样，不能用这个脚本
// 配置错误可能导致脚本运行不正常！
let TARGET_IPHONE = {
  "MGC73CH/A": ["R359", "R705", "R389", "R390", "R401", "R705", "R683", "R581"]
}

let magicJS = MagicJS(SCRIPT_NAME);
magicJS.unifiedPushUrl = magicJS.read('applestore_unified_push_url') || magicJS.read('magicjs_unified_push_url');


function getiPhoneProStock(){
  return new Promise(resolve=>{
    magicJS.get('https://reserve-prime.apple.com/CN/zh_CN/reserve/G/availability.json', (err, resp, data) =>{
      let obj = JSON.parse(data);
      // 生成随机数据
      // for(let store in obj.stores){
      //   for (let model in obj.stores[store]){
      //     obj.stores[store][model]['availability']['unlocked'] = Math.round(Math.random()) == 1? true: false;
      //   }
      // }
      resolve(obj);
    })
  });
}

function getiPhoneStock(){
  return new Promise(resolve=>{
    magicJS.get('https://reserve-prime.apple.com/CN/zh_CN/reserve/F/availability.json', (err, resp, data) =>{
      let obj = JSON.parse(data);
      // // 生成随机数据
      // for(let store in obj.stores){
      //   for (let model in obj.stores[store]){
      //     obj.stores[store][model]['availability']['unlocked'] = Math.round(Math.random()) == 1? true: false;
      //   }
      // }
      resolve(obj);
    })
  });
}

async function Main(){
  let title = SCRIPT_NAME;
  let subTitle = '';
  let content = '';
  stock_check_result = true;
  model_check_result = true;
  let availability = await getiPhoneProStock();
  if (!availability.hasOwnProperty('stores')){    
    content =  '预约系统已关闭，请暂停脚本执行。';
    magicJS.notify(title, subTitle, content, 'applestore://');
  }
  else{
    let stock = magicJS.read(IPHONE_STOCK_KEY);
    stock = !!stock? stock : {};
    for (let model in TARGET_IPHONE){
      // 检查库存情况
      for (let store of TARGET_IPHONE[model]){
        // 初始化数据
        if (!stock.hasOwnProperty(model)){
          stock[model] = {name: IPHONE_MODEL_DATA[model], stores: {}};
        }
        if (!stock[model]['stores'].hasOwnProperty(store)){
          stock[model]['stores'][store] = {stock: false, notify: false, store: APPLE_STORE_DATA[store]['name'], phone:APPLE_STORE_DATA[store]['phone'], city: APPLE_STORE_DATA[store]['city']};
        }
        if (stock[model]['stores'][store]['stock'] != availability['stores'][store][model]['availability']['unlocked']){
          // 更新库存情况
          stock[model]['stores'][store]['stock'] = availability['stores'][store][model]['availability']['unlocked'];
          // 库存变化推送通知
          stock[model]['stores'][store]['notify'] = true;
        }
        else{
          stock[model]['stores'][store]['notify'] = false;
        }
      }
    }
          
    // 存储本次库存检查结果
    magicJS.write(IPHONE_STOCK_KEY, stock);

    // 整理通知内容
    for (let model in stock){
      let now = new Date();
      // 日志输出内容
      let logStr = `${IPHONE_MODEL_DATA[model]}\n`;
      title = `${IPHONE_MODEL_DATA[model]} - ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
      let subObj = {'watch': 0, 'instock': 0, 'soldout': 0, 'change': 0};
      let watchResult = '全部售罄';
      let stockInContent = ''; // 有库存的型号与店铺 
      let soldOutContent = ''; // 售罄的型号与店铺
      let unchangContent = ''; // 没有变化的型号与店铺
      let content = ''
      for (let key in stock[model]['stores']){
        subObj['watch'] += 1;
        // 有货
        if (stock[model]['stores'][key]['stock']){
          subObj['instock'] += 1;
          if (watchResult == '全部售罄') watchResult = `${stock[model]['stores'][key]['city']}|${stock[model]['stores'][key]['store']}`;
          if (stock[model]['stores'][key]['notify']){
            subObj['change'] += 1;
            if (!!stockInContent) stockInContent += '\n';
            stockInContent += `🔆 ${stock[model]['stores'][key]['city']} - ${stock[model]['stores'][key]['store']} - 有货↑`;
          }
          else{
            if (!!unchangContent) unchangContent += '\n';
            unchangContent += `🔆 ${stock[model]['stores'][key]['city']} - ${stock[model]['stores'][key]['store']} - 有货● `;
          }
          logStr += `${stock[model]['stores'][key]['store']} - 有货\n`;
        }
        // 售罄
        else{
          subObj['soldout'] += 1;
          if (stock[model]['stores'][key]['notify']){
            subObj['change'] += 1;
            if (!!soldOutContent) soldOutContent += '\n';
            soldOutContent += `🚫 ${stock[model]['stores'][key]['city']} - ${stock[model]['stores'][key]['store']} - 售罄↓`;
          }
          else{
            if (!!unchangContent) unchangContent += '\n';
            unchangContent += `🚫 ${stock[model]['stores'][key]['city']} - ${stock[model]['stores'][key]['store']} - 售罄○`;
          }
          logStr += `${stock[model]['stores'][key]['store']} - 售罄\n`;
        }
      }
      if (!!stockInContent){
        content = stockInContent;
      } 
      // 配置为无货通知且存在无货情况时
      if (NOTIFY_SOLD_OUT && !!soldOutContent){
        content = !!stockInContent ? stockInContent + `\n${soldOutContent}` : soldOutContent;
      }
      if (!!content){
        if (!!unchangContent) content += `\n${unchangContent}`;
        subTitle = `监控: ${subObj.watch} 售罄: ${subObj.soldout} 有货: ${subObj.instock}   ${watchResult != '全部售罄'? '●': '○'}${watchResult}`;
        magicJS.notify(title, subTitle, content, 'applestore://');
      }
      magicJS.logInfo(logStr);
    }

  }
  magicJS.done();
}

Main();

function MagicJS(e="MagicJS",t="INFO"){const s={accept:"Accept","accept-ch":"Accept-CH","accept-charset":"Accept-Charset","accept-features":"Accept-Features","accept-encoding":"Accept-Encoding","accept-language":"Accept-Language","accept-ranges":"Accept-Ranges","access-control-allow-credentials":"Access-Control-Allow-Credentials","access-control-allow-origin":"Access-Control-Allow-Origin","access-control-allow-methods":"Access-Control-Allow-Methods","access-control-allow-headers":"Access-Control-Allow-Headers","access-control-max-age":"Access-Control-Max-Age","access-control-expose-headers":"Access-Control-Expose-Headers","access-control-request-method":"Access-Control-Request-Method","access-control-request-headers":"Access-Control-Request-Headers",age:"Age",allow:"Allow",alternates:"Alternates",authorization:"Authorization","cache-control":"Cache-Control",connection:"Connection","content-encoding":"Content-Encoding","content-language":"Content-Language","content-length":"Content-Length","content-location":"Content-Location","content-md5":"Content-MD5","content-range":"Content-Range","content-security-policy":"Content-Security-Policy","content-type":"Content-Type",cookie:"Cookie",dnt:"DNT",date:"Date",etag:"ETag",expect:"Expect",expires:"Expires",from:"From",host:"Host","if-match":"If-Match","if-modified-since":"If-Modified-Since","if-none-match":"If-None-Match","if-range":"If-Range","if-unmodified-since":"If-Unmodified-Since","last-event-id":"Last-Event-ID","last-modified":"Last-Modified",link:"Link",location:"Location","max-forwards":"Max-Forwards",negotiate:"Negotiate",origin:"Origin",pragma:"Pragma","proxy-authenticate":"Proxy-Authenticate","proxy-authorization":"Proxy-Authorization",range:"Range",referer:"Referer","retry-after":"Retry-After","sec-websocket-extensions":"Sec-Websocket-Extensions","sec-websocket-key":"Sec-Websocket-Key","sec-websocket-origin":"Sec-Websocket-Origin","sec-websocket-protocol":"Sec-Websocket-Protocol","sec-websocket-version":"Sec-Websocket-Version",server:"Server","set-cookie":"Set-Cookie","set-cookie2":"Set-Cookie2","strict-transport-security":"Strict-Transport-Security",tcn:"TCN",te:"TE",trailer:"Trailer","transfer-encoding":"Transfer-Encoding",upgrade:"Upgrade","user-agent":"User-Agent","variant-vary":"Variant-Vary",vary:"Vary",via:"Via",warning:"Warning","www-authenticate":"WWW-Authenticate","x-content-duration":"X-Content-Duration","x-content-security-policy":"X-Content-Security-Policy","x-dnsprefetch-control":"X-DNSPrefetch-Control","x-frame-options":"X-Frame-Options","x-requested-with":"X-Requested-With","x-surge-skip-scripting":"X-Surge-Skip-Scripting"};return new class{constructor(){this.version="2.2.3.3";this.scriptName=e;this.logLevels={DEBUG:5,INFO:4,NOTIFY:3,WARNING:2,ERROR:1,CRITICAL:0,NONE:-1};this.isLoon=typeof $loon!=="undefined";this.isQuanX=typeof $task!=="undefined";this.isJSBox=typeof $drive!=="undefined";this.isNode=typeof module!=="undefined"&&!this.isJSBox;this.isSurge=typeof $httpClient!=="undefined"&&!this.isLoon;this.platform=this.getPlatform();this.node={request:undefined,fs:undefined,data:{}};this.iOSUserAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1";this.pcUserAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36 Edg/84.0.522.59";this.logLevel=t;this._unifiedPushUrl="";if(this.isNode){this.node.fs=require("fs");this.node.request=require("request");try{this.node.fs.accessSync("./magic.json",this.node.fs.constants.R_OK|this.node.fs.constants.W_OK)}catch(e){this.node.fs.writeFileSync("./magic.json","{}",{encoding:"utf8"})}this.node.data=require("./magic.json")}else if(this.isJSBox){if(!$file.exists("drive://MagicJS")){$file.mkdir("drive://MagicJS")}if(!$file.exists("drive://MagicJS/magic.json")){$file.write({data:$data({string:"{}"}),path:"drive://MagicJS/magic.json"})}}}set unifiedPushUrl(e){this._unifiedPushUrl=!!e?e.replace(/\/+$/g,""):""}set logLevel(e){this._logLevel=typeof e==="string"?e.toUpperCase():"DEBUG"}get logLevel(){return this._logLevel}get isRequest(){return typeof $request!=="undefined"&&typeof $response==="undefined"}get isResponse(){return typeof $response!=="undefined"}get request(){return typeof $request!=="undefined"?$request:undefined}get response(){if(typeof $response!=="undefined"){if($response.hasOwnProperty("status"))$response["statusCode"]=$response["status"];if($response.hasOwnProperty("statusCode"))$response["status"]=$response["statusCode"];return $response}else{return undefined}}getPlatform(){if(this.isSurge)return"Surge";else if(this.isQuanX)return"QuantumultX";else if(this.isLoon)return"Loon";else if(this.isJSBox)return"JSBox";else if(this.isNode)return"Node.js";else return"unknown"}read(e,t=""){let s="";if(this.isSurge||this.isLoon){s=$persistentStore.read(e)}else if(this.isQuanX){s=$prefs.valueForKey(e)}else if(this.isNode){s=this.node.data}else if(this.isJSBox){s=$file.read("drive://MagicJS/magic.json").string}try{if(this.isNode)s=s[e];if(this.isJSBox)s=JSON.parse(s)[e];if(!!t){if(typeof s==="string")s=JSON.parse(s);s=!!s&&typeof s==="object"?s[t]:null}}catch(i){this.logError(i);s=!!t?{}:null;this.del(e)}if(typeof s==="undefined")s=null;try{if(!!s&&typeof s==="string")s=JSON.parse(s)}catch(e){}this.logDebug(`READ DATA [${e}]${!!t?`[${t}]`:""}(${typeof s})\n${JSON.stringify(s)}`);return s}write(e,t,s=""){let i=!!s?{}:"";if(!!s&&(this.isSurge||this.isLoon)){i=$persistentStore.read(e)}else if(!!s&&this.isQuanX){i=$prefs.valueForKey(e)}else if(this.isNode){i=this.node.data}else if(this.isJSBox){i=JSON.parse($file.read("drive://MagicJS/magic.json").string)}if(!!s){try{if(typeof i==="string")i=JSON.parse(i);i=typeof i==="object"&&!!i?i:{}}catch(t){this.logError(t);this.del(e);i={}}if(this.isJSBox||this.isNode){if(!i.hasOwnProperty(e)||typeof i[e]!=="object"||i[e]===null){i[e]={}}if(!i[e].hasOwnProperty(s)){i[e][s]=null}if(typeof t==="undefined"){delete i[e][s]}else{i[e][s]=t}}else{if(typeof t==="undefined"){delete i[s]}else{i[s]=t}}}else{if(this.isNode||this.isJSBox){if(typeof t==="undefined"){delete i[e]}else{i[e]=t}}else{if(typeof t==="undefined"){i=null}else{i=t}}}if(typeof i==="object")i=JSON.stringify(i);if(this.isSurge||this.isLoon){$persistentStore.write(i,e)}else if(this.isQuanX){$prefs.setValueForKey(i,e)}else if(this.isNode){this.node.fs.writeFileSync("./magic.json",i)}else if(this.isJSBox){$file.write({data:$data({string:i}),path:"drive://MagicJS/magic.json"})}this.logDebug(`WRITE DATA [${e}]${!!s?`[${s}]`:""}(${typeof t})\n${JSON.stringify(t)}`)}del(e,t=""){this.logDebug(`DELETE KEY [${e}]${!!t?`[${t}]`:""}`);this.write(e,null,t)}notify(e=this.scriptName,t="",s="",i=""){let o=e=>{let t={};if(this.isSurge||this.isQuanX||this.isLoon){if(typeof e==="string"){if(this.isLoon)t={openUrl:e};else if(this.isQuanX)t={"open-url":e};else if(this.isSurge)t={url:e}}else if(typeof e==="object"){let s={Surge:{openUrl:"url","open-url":"url"},Loon:{url:"openUrl","open-url":"openUrl","media-url":"mediaUrl"},QuantumultX:{url:"open-url",openUrl:"open-url",mediaUrl:"media-url"}};let i=Object.keys(e);for(let o=0;o<i.length;o++){if(!!s[this.platform][i[o]]){t[s[this.platform][i[o]]]=e[i[o]]}else{t[i[o]]=e[i[o]]}}}}return t};i=o(i);this.logNotify(`title:${e}\nsubTitle:${t}\nbody:${s}\noptions:${typeof i==="object"?JSON.stringify(i):i}`);if(arguments.length==1){e=this.scriptName;t="",s=arguments[0]}if(!!this._unifiedPushUrl){let i=encodeURI(`${e}/${t}${!!t?"\n":""}${s}`);this.get(`${this._unifiedPushUrl}/${i}`,()=>{})}if(this.isSurge||this.isLoon){$notification.post(e,t,s,i)}else if(this.isQuanX){$notify(e,t,s,i)}else if(this.isJSBox){let i={title:e,body:!!t?`${t}\n${s}`:s};$push.schedule(i)}}log(e,t="INFO"){if(!(this.logLevels[this._logLevel]<this.logLevels[t.toUpperCase()]))console.log(`[${t}] [${this.scriptName}]\n${e}\n`)}logDebug(e){this.log(e,"DEBUG")}logInfo(e){this.log(e,"INFO")}logNotify(e){this.log(e,"NOTIFY")}logWarning(e){this.log(e,"WARNING")}logError(e){this.log(e,"ERROR")}adapterHttpOptions(e,t){let i=typeof e==="object"?Object.assign({},e):{url:e,headers:{}};if(i.hasOwnProperty("header")&&!i.hasOwnProperty("headers")){i["headers"]=i["header"];delete i["header"]}if(typeof i.headers==="object"&&!!s){for(let e in i.headers){if(s[e]){i.headers[s[e]]=i.headers[e];delete i.headers[e]}}}if(!!!i.headers||typeof i.headers!=="object"||!!!i.headers["User-Agent"]){if(!!!i.headers||typeof i.headers!=="object")i.headers={};if(this.isNode)i.headers["User-Agent"]=this.pcUserAgent;else i.headers["User-Agent"]=this.iOSUserAgent}let o=false;if(typeof i["opts"]==="object"&&(i["opts"]["hints"]===true||i["opts"]["Skip-Scripting"]===true)||typeof i["headers"]==="object"&&i["headers"]["X-Surge-Skip-Scripting"]===true){o=true}if(!o){if(this.isSurge)i.headers["X-Surge-Skip-Scripting"]=false;else if(this.isLoon)i.headers["X-Requested-With"]="XMLHttpRequest";else if(this.isQuanX){if(typeof i["opts"]!=="object")i.opts={};i.opts["hints"]=false}}if(!this.isSurge||o)delete i.headers["X-Surge-Skip-Scripting"];if(!this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"];if(this.isQuanX&&i.hasOwnProperty("opts"))delete i["opts"]["Skip-Scripting"];if(t==="GET"&&!this.isNode&&!!i.body){let e=Object.keys(i.body).map(e=>{if(typeof i.body==="undefined")return"";return`${encodeURIComponent(e)}=${encodeURIComponent(i.body[e])}`}).join("&");if(i.url.indexOf("?")<0)i.url+="?";if(i.url.lastIndexOf("&")+1!=i.url.length&&i.url.lastIndexOf("?")+1!=i.url.length)i.url+="&";i.url+=e;delete i.body}if(this.isQuanX){if(i.hasOwnProperty("body")&&typeof i["body"]!=="string")i["body"]=JSON.stringify(i["body"]);i["method"]=t}else if(this.isNode){delete i.headers["Accept-Encoding"];if(typeof i.body==="object"){if(t==="GET"){i.qs=i.body;delete i.body}else if(t==="POST"){i["json"]=true;i.body=i.body}}}else if(this.isJSBox){i["header"]=i["headers"];delete i["headers"]}return i}get(e,t){let s=this.adapterHttpOptions(e,"GET");this.logDebug(`HTTP GET: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.get(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>t(e.error,null,null))}else if(this.isNode){return this.node.request.get(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.get(s)}}post(e,t){let s=this.adapterHttpOptions(e,"POST");this.logDebug(`HTTP POST: ${JSON.stringify(s)}`);if(this.isSurge||this.isLoon){$httpClient.post(s,t)}else if(this.isQuanX){$task.fetch(s).then(e=>{e["status"]=e.statusCode;t(null,e,e.body)},e=>{t(e.error,null,null)})}else if(this.isNode){return this.node.request.post(s,t)}else if(this.isJSBox){s["handler"]=(e=>{let s=e.error?JSON.stringify(e.error):undefined;let i=typeof e.data==="object"?JSON.stringify(e.data):e.data;t(s,e.response,i)});$http.post(s)}}done(e={}){if(typeof $done!=="undefined"){$done(e)}}isToday(e){if(e==null){return false}else{let t=new Date;if(typeof e=="string"){e=new Date(e)}if(t.getFullYear()==e.getFullYear()&&t.getMonth()==e.getMonth()&&t.getDay()==e.getDay()){return true}else{return false}}}isNumber(e){return parseFloat(e).toString()==="NaN"?false:true}attempt(e,t=null){return e.then(e=>{return[null,e]}).catch(e=>{this.logError(e);return[e,t]})}retry(e,t=5,s=0,i=null){return(...o)=>{return new Promise((r,n)=>{function a(...o){Promise.resolve().then(()=>e.apply(this,o)).then(e=>{if(typeof i==="function"){Promise.resolve().then(()=>i(e)).then(()=>{r(e)}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}else{r(e)}}).catch(e=>{this.logError(e);if(t>=1&&s>0){setTimeout(()=>a.apply(this,o),s)}else if(t>=1){a.apply(this,o)}else{n(e)}t--})}a.apply(this,o)})}}formatTime(e,t="yyyy-MM-dd hh:mm:ss"){var s={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};if(/(y+)/.test(t))t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length));for(let e in s)if(new RegExp("("+e+")").test(t))t=t.replace(RegExp.$1,RegExp.$1.length==1?s[e]:("00"+s[e]).substr((""+s[e]).length));return t}now(){return this.formatTime(new Date,"yyyy-MM-dd hh:mm:ss")}today(){return this.formatTime(new Date,"yyyy-MM-dd")}sleep(e){return new Promise(t=>setTimeout(t,e))}}(e)}
