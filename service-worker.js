"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/art.html","63053f6d878f0eabdcbf594205498736"],["/cc.html","c66c02feb9b694e5448389ce7b9bc528"],["/css/resume.min.css","247fc7fbe013b938ea3b7e433c1abec3"],["/css/styles.min.css","6386200ee9446f18caf16e7d465031e1"],["/dye.html","c7341facb857d2a57afaefdc536893a8"],["/fb.html","1f2ea6bd1381765e61ee186aa9b8e64b"],["/hcs.html","f977c7c24ca2df49800b782e5585d820"],["/images/art/feature1.png","147904e5ab0bdf7e6413aa0b8a83eeec"],["/images/art/feature2.png","e5aed00739a4012bb6216a514ce5004e"],["/images/art/feature3.png","68e86bff5a6b9490db2151d34a02e2d9"],["/images/art/feature4.png","116edaf6a2ef76a63144a23d08372121"],["/images/art/header.jpg","f59adfbccc30e217a986a8658d0f56a7"],["/images/art/problem.png","d770f49b3fd601fff5dfea2aae3fd107"],["/images/art/process1.jpg","5f5849c1b4a7e2bfd157d91407331079"],["/images/art/process2.jpg","b6f8f63ccd4e707b7357d3fc97fbe390"],["/images/art/process3.jpg","38230c1be5fb895662dfc1bfb69350c5"],["/images/art/process4.jpg","6a3ea3864db218226f3d8fbe89b9a7dd"],["/images/art/solution.png","e7a83c5819d579544687f2e1bcbd6870"],["/images/cc/feature.png","a403a2ed65a1c7a30c978423113359ef"],["/images/cc/feature1.png","874bdbee65d0ad6e424c20c34bb8c43d"],["/images/cc/feature2.png","14b737d84f7af191ad32f403a0d20861"],["/images/cc/feature3.png","da6dfeebb31b84db1645f2af099563b5"],["/images/cc/feature4.png","758aeef6ef6ab411ff68fdab05eb754b"],["/images/cc/header.svg","7007908214d85519301c144c7995adc2"],["/images/cc/problem.png","561b39b7a953b14ed2a10a551e039aae"],["/images/cc/solution.png","ea6be3e89a04c4df7674a0b1ac02b457"],["/images/dye/PathTrackEditing.png","a49c7bd0a46d22026d6cb76b51e66950"],["/images/dye/feature1.png","f32a69dd5981a0bd495af0d1f49a9988"],["/images/dye/header.jpg","0ae25f618f9ff4a60f4b690e123579f0"],["/images/dye/process1.jpg","e95f3658c027dddd653a98721de8cc6d"],["/images/dye/process2.jpg","1c68547e37c7bb974b187f69969b28c8"],["/images/dye/process3.jpg","c2ce565f686d901641718f2369f57371"],["/images/dye/process4.jpg","46e1c5af1e78b29f3aa0ec6a8f4af5a5"],["/images/dye/solution.png","ae6e6d0e2ce1c30dda78f09669d45844"],["/images/fb/feature1.png","43694b9f10d3baf8417c4a9d095a6e20"],["/images/fb/feature2.png","a42ddbbee3017945a30b4a0de7be9553"],["/images/fb/feature3.png","34a14d09a6e1a821c4f28e5927a0b6e4"],["/images/fb/header.png","81a2e241d8b1b676eed58bdfd17093a9"],["/images/fb/problem.png","cb1b310ba4faebdce187a5d1d46605d6"],["/images/fb/process1.png","3c86c8cd3bc6aa5321f65874a5476af1"],["/images/fb/process2.png","dfdbf8e5fc4c53574b22b34e4faf8815"],["/images/fb/process3.png","308d15dd7189a7c4ddb643d203796b7b"],["/images/fb/process4.png","3f08e43492159ce29a020babb0d94c82"],["/images/fb/solution.png","e736f1b7646c2ff3334eee3bb200b34a"],["/images/hcs/feature1.png","a1f142206a75b626ff4dd9a8fd274e45"],["/images/hcs/feature1a.png","e8bea386b64e64037b060aef19081db9"],["/images/hcs/feature2.jpg","7f9e8da2837e33d07ebbdb259d8cace7"],["/images/hcs/header.jpg","6ad7bf0e05328ed43b35a08ddb68e202"],["/images/hcs/problem.png","846c6c0b0a17ccc19ad16e075e377b8a"],["/images/hcs/process1.jpg","bbc70a89548bd6affeef0e73ac79c230"],["/images/hcs/process2.jpg","b6620a2b9f7e367df243cf3d549aac0a"],["/images/hcs/process3.jpg","423c58767ab003cca3a0ee7dc07f15d5"],["/images/hcs/process4.jpg","3f312d5d1b36c3db2b21fc28a5f1bc41"],["/images/hcs/process5.png","9acc659a86df213a6edf801553feed57"],["/images/hcs/process6.png","d1e7680e1414000423a644491ede0521"],["/images/hcs/solution.jpg","9f59491922301aec8e3137420da819be"],["/images/icons/adobe.svg","36102141a037351243f4709a9c57ea9b"],["/images/icons/art-120.png","b08ca7d3dc1fd6c42e5b2b1943c27e3f"],["/images/icons/art-144.png","b08ca7d3dc1fd6c42e5b2b1943c27e3f"],["/images/icons/art-192.png","beb77f2d3ad9c5d9368deae6e7a79061"],["/images/icons/art-32.png","911f800d9cb44b92a9cc7203c452e980"],["/images/icons/art.svg","f9d2cd3869c5dd48c8183b8734f55d62"],["/images/icons/behance.svg","0a4e0c9b1638dfe57cfeb8e5fd4c2cab"],["/images/icons/cc-120.png","ebf3f29b82195ff9eac328af08a05d72"],["/images/icons/cc-144.png","ccc8b8e98cd50b41b7e150c82be67777"],["/images/icons/cc-192.png","498334e049c37d44d947e4ae099a6ff2"],["/images/icons/cc-32.png","e194bf766ce80509570447c2f8df8758"],["/images/icons/cc.jpg","88415c63e90eb40802705f739b4b0732"],["/images/icons/cc.png","257a851f3fe3d60a622dce9044227c50"],["/images/icons/codepen.svg","a1b280b6a8088a5410c371fc19e6ec8e"],["/images/icons/deloitte.svg","d9b8dd04c686b316988e599429b38035"],["/images/icons/dig.svg","3dea5f3cd3f058a513ac9647aea805fd"],["/images/icons/dye-120.png","edad4e05d21bdabb9ebb039cdab3db92"],["/images/icons/dye-144.png","edad4e05d21bdabb9ebb039cdab3db92"],["/images/icons/dye-192.png","edad4e05d21bdabb9ebb039cdab3db92"],["/images/icons/dye-32.png","71966b5e491edf95be1cd3211c2bbef3"],["/images/icons/dye.svg","9195b5bedbe91283af9b5216e24270a5"],["/images/icons/email.svg","3f47fab950c8b906076bbfa5f19159b2"],["/images/icons/fb-120.png","00d8530097de52c628aef07e64d15984"],["/images/icons/fb-144.png","00d8530097de52c628aef07e64d15984"],["/images/icons/fb-192.png","00d8530097de52c628aef07e64d15984"],["/images/icons/fb-32.png","00d8530097de52c628aef07e64d15984"],["/images/icons/fb.svg","80526988c900e9b99a9f061d8feaa58f"],["/images/icons/github.svg","d731fe623ae6357da91b4b2463504060"],["/images/icons/hc.svg","e670a6d470acbcfb61df2a3863c3a367"],["/images/icons/landscape.svg","4c38f8b9495b954683c58c9f8dd0329a"],["/images/icons/linkedin.svg","cf0c9994c357122c761c412cbbc3a1b1"],["/images/icons/logo-120.png","32e513c63c4aa035bdd2308e113eeab3"],["/images/icons/logo-144.png","290b73eee4e82721cc7f361f878f00d5"],["/images/icons/logo-192.png","c737e004188f11ec92a990c9679ee069"],["/images/icons/logo-32.png","e18ed38b601f12f12974bd61bd194889"],["/images/icons/prototyper.svg","0cb9c3e9263692772f7f2e313cca730b"],["/images/icons/sc.svg","776c97f823a089121ca773ac2e2f7b92"],["/images/icons/shire-120.png","91694b7ecd76cf47c3ccaeca804275d4"],["/images/icons/shire-144.png","6ca0320bed2f6f62b995924e5fbeba54"],["/images/icons/shire-192.png","6ca0320bed2f6f62b995924e5fbeba54"],["/images/icons/shire-32.png","1d7e03370f5577a50755bbd117932dcc"],["/images/icons/shire.svg","c26cba3e3462a931d6b0a0860a772fb5"],["/images/icons/ss-120.png","b072546caecebc550b1acfae74c1fdc6"],["/images/icons/ss-144.png","b072546caecebc550b1acfae74c1fdc6"],["/images/icons/ss-192.png","b072546caecebc550b1acfae74c1fdc6"],["/images/icons/ss-32.png","b072546caecebc550b1acfae74c1fdc6"],["/images/icons/ss.svg","1fca2848a1c63320e94e0883f522e986"],["/images/icons/trekr-120.png","8f274d5c9567a2a282608c1a5efe84fa"],["/images/icons/trekr-144.png","a72334aed14b08b2d26218edc1786b38"],["/images/icons/trekr-192.png","cf1aedb0f8a886eaa2fc1d52a1705b6d"],["/images/icons/trekr-32.png","9df5c1118a6cca3a68eaa1a53aab2ab2"],["/images/icons/trekr.svg","49db22eb87b9ddcf8bbe20e7d1e9422f"],["/images/icons/ui-design.svg","996655d01a434ae5430564f60fb1e144"],["/images/icons/umsi.svg","da07485720fd8c16071a0959e3f2279c"],["/images/icons/ux-researcher.svg","d136ee19e7a44cdb0a22272c01c9d447"],["/images/icons/xd.svg","ae68e88e6eaa65681b93a8d4e795dc1d"],["/images/sc/feature1a.png","bb63ffb22ab9c4946fe1933b436bde7e"],["/images/sc/feature6.png","b7421e4433ae494a6895d3e7f652158d"],["/images/sc/header.jpg","7bcdc856af94517643bcac5d5fce78db"],["/images/sc/problem.png","2129e29d143c160b8b9cd33c751187d8"],["/images/sc/process1a.jpg","28a467e1c5323e254d92ec6fa6a0990d"],["/images/sc/process1b.jpg","4cae7ad541dc3c8e3e914d030648af76"],["/images/sc/process1c.jpg","24b49a427b697aff86847f0baae1d71a"],["/images/sc/process1d.jpg","1ac4ecd6655db7a936ccaed52180a6c9"],["/images/sc/process2a.jpg","a991092177296f4817817d171cabda78"],["/images/sc/process2b.jpg","35435a45ef3634a3f7efa7cd69c486a1"],["/images/sc/process2c.jpg","41d6c909fd73755e3b7eea0e2486c215"],["/images/sc/process3a.jpg","97389e89cb461a86925075c617f34d43"],["/images/sc/process3b.png","013f0df298d99bdb43531b7b753f900a"],["/images/sc/process4a.jpg","56df928fc4fdcfa6f6ff518d190f294d"],["/images/sc/process4b.jpg","be54d189372a878cf91dce5089daea8f"],["/images/sc/process4c.jpg","ec145bfa72f1b8b9bcd2832fe2d13e03"],["/images/sc/process4d.jpg","686b5ea5f5b9f222f4b5a64676688a44"],["/images/sc/process4e.png","19b1022f44764c33b8e605f8a9208240"],["/images/sc/solution.png","9462f86f0ee76a3504051169c7dade05"],["/images/shire/feature1.png","f6d1ca245ba899a7f5ffc8d5e7856ddd"],["/images/shire/feature2.png","31a02f143f4b2cf91fb903b9272edbe5"],["/images/shire/feature3.png","c7289fcca2ae59bb88e9f4d796014a8e"],["/images/shire/feature4.png","d9650b70f359981e02559e9c9ae0d2bf"],["/images/shire/header.jpg","3bf8d164c8a05f24683abcec57c74a35"],["/images/shire/problem.png","2084f268dfb1c913c477a11fa99067cc"],["/images/shire/process1.png","5f051bb2f54d51732ef1d42f3687877a"],["/images/shire/process2.png","4a3d9571bec5a3c511ba842a30aa1bc7"],["/images/shire/process3.png","91b2e952f2dd97a3b70e83c304c96b23"],["/images/shire/process4.png","86afe622f6fde75a55f795a3c196fd7c"],["/images/shire/solution.png","7eafbbb2af02926ba3c8b920aae8c00f"],["/images/sos/feature1.png","33170c59b6750b42e2e4b07d554c6861"],["/images/sos/feature2.png","44f9fc15e24f56b8caa0c13e9707b7ba"],["/images/sos/feature3.png","bc09959510980d412d8e118ce9595e5c"],["/images/sos/feature4.png","dbd1b239c270d14f63ad4337ca09d5b5"],["/images/sos/feature5.png","74b30d7699bd1bc0c0053f44ddbaeaf7"],["/images/sos/header.svg","a80d7f58da9cd47fe5ba0e69011dff1b"],["/images/sos/problem.png","94263bd9cdbd7fc2cbf7ad34beaf05a5"],["/images/sos/process2.png","37df9b37a6825bff6b795f7fec4e6bb1"],["/images/sos/process3.png","59c4eef0d97f013ede83fda063a7e3e9"],["/images/sos/process4.jpg","f2287132f3a43225961599ddc9189643"],["/images/sos/process5.png","47bb79ccab48435043648df0e3b56f7b"],["/images/sos/process6.png","0c3a26cfb8f1757e824f954dbe4d58bf"],["/images/sos/process7.png","ebb412aa974574fc741671aa6119fd23"],["/images/sos/solution.png","dbc8a0656d3fe7df6597392e1354c4f1"],["/images/trekr/feature1.png","19edca5193743020ee385754ca8b4eb3"],["/images/trekr/feature2.png","eeb5192bdbec7edf4997a535802b8301"],["/images/trekr/header.jpg","35e133a6c261d8a4069b8590797f8bd6"],["/images/trekr/problem.jpg","a8a0cf985ef7640ed4cb13ffe3f584a9"],["/images/trekr/process1.jpg","9daca90ee64ed8429137d031220e2dac"],["/images/trekr/process2.jpg","6042ea8453e80a7c2eda84697d54b529"],["/images/trekr/process3.jpg","cc2700fd5e5a68d3ad659efcb53052bd"],["/images/trekr/process4.jpg","0ae22be7711b88cd32f0507ea88cb51e"],["/images/trekr/process5.jpg","8501e40efcbc14edf6517aeda53aa212"],["/images/trekr/process6.jpg","d9c5d1b0e20170130e512ceaec98f1ff"],["/images/trekr/solution.png","49fad14c9f5ffe0c8e1b4bfb5f33b9c9"],["/index.html","db85a06859610a3f8bd8e58751f6f7ff"],["/js/main.min.js","6a9d9d2f7bdc10e9dbd68961f583edc0"],["/resume.html","f51791ec59626a3975a80a373c28b11d"],["/sc.html","d6b1e3e67f00d8569fadccd23bbeccac"],["/shire.html","2f1a815ced9ba410958d6315b3285a13"],["/sos.html","e60b9b6898cbae36f1dca1ba61fe6928"],["/trekr.html","682f7bb87a70fb3467f852bcc10f50f0"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);var a="body"in e?Promise.resolve(e.body):e.blob();return a.then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,s){var f=new URL(e);return s&&f.pathname.match(s)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),f=createCacheKey(s,hashParamName,c,!1);return[s.toString(),f]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e["delete"](c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(c);var s="index.html";!a&&s&&(c=addDirectoryIndex(c,s),a=urlsToCacheKeys.has(c));var f="";!a&&f&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(c=new URL(f,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})})["catch"](function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});