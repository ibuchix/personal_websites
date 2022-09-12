'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "746cec9a089b62e17d6854924d9af663",
"index.html": "78c0526cf1b9ea525f6a4191ab21fbb6",
"/": "78c0526cf1b9ea525f6a4191ab21fbb6",
"main.dart.js": "18f6b2633d844402180af03f84b61da1",
"flutter.js": "195f32f4217e034162a6697208586f44",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12806d6294bd524b901aad317a9aac32",
"assets/AssetManifest.json": "d88f26961cd2bd295bc01b5a9ac71e73",
"assets/NOTICES": "31cc39744520a0f3663c214ca07e6f08",
"assets/FontManifest.json": "d3696f03680dfac31021ac7e8935608d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP2.ttf": "56dba58d2d8093c72e03733446b2ee8b",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP3.ttf": "ab4cbfb0be90d695779ab26d52482d53",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP1.ttf": "23b73ce8aefb542ee0feaedd0386845c",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP4.ttf": "3c6ce6ca81112ece4acc134621354b1a",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP5.ttf": "6883e94fa2e1616edc835fbfa41f8993",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP7.ttf": "a27b319a179db105f2e05092d214cff1",
"assets/packages/fluentui_icons/fonts/FluentSystemIconsP6.ttf": "989fe1d7b2e0d3b11725dc8325754981",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/IMG_1031.jpg": "7cb90529d70ec1987bab3fb70794c7e9",
"assets/assets/projects/howwz.png": "eaf776da446296ed00ebd1fce31817d1",
"assets/assets/projects/lydian.jpeg": "1fe4036c6b1166d9283d130e302dafae",
"assets/assets/projects/simplesolvents.jpeg": "c271d69780fd257cb02cf6304677ca34",
"assets/assets/Fira_Sans_Extra_Condensed/FiraSansExtraCondensed-Black.ttf": "ace6ff02c0377c19ab221d2d408c5b1f",
"assets/assets/badges/unity.png": "aa2326080c6f4f49e48b41ae80fc7e3a",
"assets/assets/badges/tensorflow.png": "adebf361ef34234e82a59400451d302a",
"assets/assets/badges/bitcoin.png": "54dc188687ebbd9b11f2818f12dbb730",
"assets/assets/badges/git.png": "09061237c30553f93a559359708b6439",
"assets/assets/badges/docker.png": "d2d4515ad4f582a0b1158df06cb33788",
"assets/assets/badges/doge.png": "3f797bb5116c49b7c1eef608043944bb",
"assets/assets/badges/polymer.png": "4a7b5e721412553a5cde185038c96bbf",
"assets/assets/badges/python.png": "7e3189f356b2f9aa1e067e8d4b55e282",
"assets/assets/badges/ruby.png": "1fd4fa4916c9f3112741eeeba138ae13",
"assets/assets/badges/flutter.png": "51b6815697dac46959ac9bd51f359220",
"assets/assets/badges/scala.png": "600d881e0fd7d1a1ec0447d07787a967",
"assets/assets/badges/angular.png": "63933c3124c46133da019eb9cdc522c2",
"assets/assets/badges/cpp.png": "0c110d1797632041d5c8ccc5a964e363",
"assets/assets/badges/bash.png": "1e78ac2b1ce83842d47de985c9be4775",
"assets/assets/badges/jquery.png": "dd6d6285f794f8fb5400cca82b5a5987",
"assets/assets/badges/haskell.png": "b59e20687552fb930329725e769decde",
"assets/assets/badges/firebase.png": "d11b0b064e1fc0888932a9b13d4e45ef",
"assets/assets/badges/java.png": "496c2878045c488eeeb534d0c2dd7467",
"assets/assets/badges/sass.png": "516d8a147f99db32eb45f049cf7ab514",
"assets/assets/badges/aws.png": "9d56385b746aeb0f077c8826e13dc4c2",
"assets/assets/badges/ethereum.png": "0412e72518b5fc297127bcee17fff754",
"assets/assets/badges/vue.png": "391caa03f69b2441d1b307b51e728733",
"assets/assets/badges/google_cloud.png": "68ecd7039fb3a6654554566986cc357d",
"assets/assets/badges/javascript.png": "a555d6980073e51a97cf23c69443bcb0",
"assets/assets/badges/ripple.png": "39ef8adef7f1c0714b9c35d77a9e7233",
"assets/assets/badges/mongo.png": "0fb9eeb2c0714168380b2e69400c431e",
"assets/assets/badges/react_native.png": "90bdaa054febbc27ac55c834ed3285a3",
"assets/assets/badges/node.png": "c272716d181890edde420d9573139f9a",
"assets/assets/badges/graphql.png": "6cc69c52cc48eb31cd049076d46b4b8b",
"assets/assets/badges/go.png": "e72357b5b0b172c6fbe0b745a24a14ad",
"assets/assets/badges/csharp.png": "50dfe6219a0997a245c9a4d4201f8d1a",
"assets/assets/badges/django.png": "0e5ec5ed1b81286e589c635585977146",
"assets/assets/badges/html.png": "da2da746b8b828a25b6a1ce39133c8ce",
"assets/assets/badges/swift.png": "5ad5bd8f7ebc7912692d403234937704",
"assets/assets/badges/react.png": "805538dc0a468d395be86254c413da02",
"assets/assets/badges/c.png": "bb6affc033648e9467646d855d9b5b7b",
"assets/assets/badges/azure.png": "d54c8088ff062e64c9e3a0b357d9c9e5",
"assets/assets/badges/typescript.png": "38e67f21efeb5947d82b639face8623c",
"assets/assets/badges/php.png": "7d86e5f571a1fd6636278b029f7f73e3",
"assets/assets/badges/css.png": "f0896e8c1c35ec8fdd3f0bd9f0f32389",
"assets/assets/badges/dart.png": "e31a2e65a13e2abb01fe052c5de7fd16",
"assets/assets/badges/kotlin.png": "200deaae3bfb26c7353dd7713bee772a",
"assets/assets/badges/python2.png": "b9704f1e84cd5dc461e204021233cbc1",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
