"use strict";var precacheConfig=[["/portfolio/index.html","965c8b7f9dcb42acc3280374234a99cf"],["/portfolio/static/css/main.05acd831.css","976f671d5dc74dabca8e2ba50248facc"],["/portfolio/static/js/main.0e75f3fd.js","0faf72ee3dc86393802410ed18612e66"],["/portfolio/static/media/ALLEGRO.3c4a5105.svg","3c4a5105747db80044131e8a5288944e"],["/portfolio/static/media/ALLEGRO.7221d8f3.woff","7221d8f30dde287de7d04e7e8b21f338"],["/portfolio/static/media/ALLEGRO.d0061a99.ttf","d0061a99f29abbbd9a05f45a6c0c766b"],["/portfolio/static/media/ALLEGRO.d1ec3cbb.eot","d1ec3cbbd1d8ffaa0933c3cc9d1ff9b2"],["/portfolio/static/media/enhance.6024734a.jpg","6024734a1fdae3e519b7f906d26e991f"],["/portfolio/static/media/ffc.285ded0d.jpg","285ded0decbbcd530b0965a8895b6acc"],["/portfolio/static/media/hearth-lounge.001a1fb9.jpg","001a1fb9908ef7ebe181b4b0dae8eeec"],["/portfolio/static/media/portfolio.a6fd1b79.woff","a6fd1b7905b9679b36fb31eca490fe2a"],["/portfolio/static/media/portfolio.f5709356.svg","f57093567b80c9407810dc609fbe2b34"],["/portfolio/static/media/portfolio.f5aaa322.ttf","f5aaa322beb18bdcd9776fe589184f8c"],["/portfolio/static/media/sky.16a069f7.jpg","16a069f7907ee3d9ab333817ff34675f"],["/portfolio/static/media/useful-links.3b7518c3.jpg","3b7518c32d9337f72fc8cd626927f783"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});