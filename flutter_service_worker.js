'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "72e3359166d6bebcba728c4633084341",
".git/config": "515973be92530cec1109a3fcbba6ad04",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd825a5df8bf994ba272c3ffc8d1c939",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64b88ada6d78d9becaa118413dfdf30c",
".git/logs/refs/heads/main": "e022784b6854895205ed76163689052b",
".git/logs/refs/remotes/origin/main": "e59ca6b1ed3ae9bc8e705da1fb37ab6f",
".git/objects/06/fcbb0c2cd0b4f05bdd07b60572d582a2bba6fb": "fffb01eb18b2eb96d347303028cb0858",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/0b/597b164f9d22730e303cdfbd008c90d0bbd674": "f6a17e7775bea7162e4f9cea50b91992",
".git/objects/0e/48d0c727f2fd6552895a5418cc998831e80359": "2652d3349f5df4891385a7abffa0a4d6",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/027428f4981f2efb6f8bec441838201f30b080": "abb39933c6b67532fad693684bc5bbf8",
".git/objects/18/499d4e40ef10efa009dd6432d4dceec94c22c0": "668dd051329b1f5c2a9c6df372f8919d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/bd53be4c6a0df1e977a47b306db041b569c79c": "cc64e6666b7282f2495ec72fbc5fc44b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/2b/d4f5cf5c83e764de779c0c6a0e91b9b0c6ccd8": "bceb5a4ea647469c7ced320d5b591a62",
".git/objects/2d/9b905575619425047356f1eb2fb9d33db850ee": "e96532c846aca70fce9223a245858646",
".git/objects/36/d93afd24223aa6e42ecb490fef6240e278c8b9": "af5e45c609c0bfdacefcdec1910459db",
".git/objects/37/52554cbce20644c899ea7f32eabcfd826bf43b": "bbd9ff8e333496e82991e87df2f638f5",
".git/objects/37/e3cad1b8447c7d7a9ea9f9c8f3bb9ba4340273": "d103a69e92e835420e57d66e79f2a37a",
".git/objects/3d/ceb83bb9731480da9ec6c09a22554885066d37": "2e32e7185fcf4b876d8f25a603631c57",
".git/objects/41/af4d3c9fdaefe78e9f270b02e39e4e38c956c0": "1660ebab30afe41df67e150d0bcbc8fc",
".git/objects/41/e98f6ee65e40edc85ada901a941e1fed6ad410": "7384e7fd55ab330ccaf96c3054804a9b",
".git/objects/42/5a0f25f06b33a0daf682f57c537819e4ddbacf": "8fe6b4c1d721c9f0ed569b061b341a04",
".git/objects/43/533ffce2ae522839dc83cdeda67843d1ef2834": "6af0a0b0e153ddf806c8e7c3ff5e6ba0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4e/c07b3e006cb774f6c46a7747514a3b63d8ad2e": "3be4301cee5e5b12717fb66ce5ec984c",
".git/objects/56/fcf7f4cb5ce8bfd961c01113d385f466144fae": "4711075e2dd0f25828ff244ab76e87c6",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7e/703725da6984dfecb7037cf81dea7de0ccfd8c": "8270122729187200424ec9b6df642801",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/5ad744bbdef2d70650fc2e0af47ee167f454ed": "af22ddf93e1d24d2e119d0ab3614e060",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/f8f8e3481c34ecfa7848456f1733994e00be7c": "1b4ddef00e07d16262bf27692e0dee71",
".git/objects/9c/18db957b731fbd1b5c6cf543dde84f90e4b4aa": "6acc798370d7f8b15adf2e5c4b048c81",
".git/objects/a7/3c05b752b040f6c70cc3a0bb29e63a0f2d18e0": "865c226e952ca43e1d5c02a0dfd9f6b4",
".git/objects/b0/265b8becb26cfba938478e8c30d431477b58c5": "f3f7fee99581feb67345f5db5107c5fb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/29dd256c75dbea46a23e7786b6f9e9cdbd86b5": "95d35ec406f5bf2b555e610de9f3f5bf",
".git/objects/b6/c5de482040c83cf8bf9cfdcb9e4e14fcf01567": "eda547a6a946e83e46e0f6e62e907b07",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/9418c84db9c4ef4f772c94ce0bcd4cf8cee001": "09b2521e5b00650573cf5c617269375f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/3fc91794ebf7e7ba1b734ae56197979001f343": "fb602795f897ce4104090896996e79e2",
".git/objects/c1/f5b97455f073b7b1f443ee0f7d3dc9ee9da53b": "c1a6618f52d8dc43792b3b614e9de04f",
".git/objects/c4/b4808ba1802efb41c83ad5bd987878ebc1c888": "d58448a4bab421a74524af319c022a95",
".git/objects/c8/f7edc44dea074e48950c02a890a0122fd63a82": "5091725ba4621f3e51ffdf4cb1372c91",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/599d815eca728d0841017c4dee0e15bc16b9c3": "eb6fceb65def5704a5b58889dfdd5fe7",
".git/objects/cf/a62e55227abe76a2ca5e14d0f213b5b1f9d530": "1de42050336fcfeb669a2578b323ccc6",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/eb0cd7beb760cac3f10ad4dc7101090b03ed4e": "c2b1923d0cf423f59b42b75e8e8488b2",
".git/objects/da/abd33e179903497c4a7708dc4e861d1fa4eec3": "e7fe06504a5fcacef79553f52d8ff43f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/7a6214a361bca448d1b03c551a0c2ed059ddc7": "908126e0b5be197d700599ab2b993a87",
".git/objects/fe/21edd3ebcd1a04334916eabfd1f99a392395f4": "b8e60594e8588e3b05089d21cc2969b8",
".git/objects/ff/788b836286987fc4f80ab507d8b24f0f58dd6b": "d8306af941dac05d9f1fc5d562029b7a",
".git/refs/heads/main": "8912730087486307bd5548d24330206a",
".git/refs/remotes/origin/main": "8912730087486307bd5548d24330206a",
"assets/AssetManifest.bin": "c4bc0397ebc89a0fc13957786518ba98",
"assets/AssetManifest.bin.json": "b4ab4b7a701d104660754a3031985dfe",
"assets/AssetManifest.json": "66282f9533b207a0610f005f1c9e2a19",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "30659aad0646c2e5a0f5135b68160bd9",
"assets/NOTICES": "2bea22c914c29b7664de35f4dffe5bb1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5718995658921eeb996d2a13c84c7624",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3cec356c065f6e8ff305a23b99ff16d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "afb5e40020764eb3b3c13e3705d08067",
"/": "afb5e40020764eb3b3c13e3705d08067",
"main.dart.js": "1954f19d0e75065a5c485e813d944758",
"manifest.json": "a1684355b54326760a792b1876f5a364",
"version.json": "65e3cb27bb7720b671e5095f848a5f84"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
