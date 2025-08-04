'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "30812f762e249d0852244e9d3f56a5df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c788659d6b20da6c4d4244bc779bd97a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17acd0147b294318de2210995f26a59c",
".git/logs/refs/heads/main": "17acd0147b294318de2210995f26a59c",
".git/logs/refs/remotes/origin/main": "c66a8d4567c241f85479d1dce4e2fb81",
".git/objects/00/41f31e15d21a223cf33c4d94cd73a1725905e9": "91541b3016a1d9f2597c8888097becad",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0b/712bca2c67d7cb1fa151600ee1da4dc40d073a": "dcec6ad5cc87976bfb11f37b2786a38f",
".git/objects/0c/f53f633f75f0893d906a70d0aa94180f2307da": "1cb35c002089884f8c7c81c65135f146",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/664a19e024fd8610ab4d596af5bea83b1ea1a4": "de88086c57ddf4e619d5b39b870bc1b0",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/6c356bb93791851ad064befd53fd788aa637b5": "e630d37824fd75b5ea899a5bf83632ee",
".git/objects/24/cd65caa5ffb895a481ba94aa8decde441a88b9": "9a005c56922c5b2b5929959198ecb711",
".git/objects/26/596ea9a7e12135f30011b304cbbd8026b0f01a": "c218419ced4ef2c3e11a2a3e93e78dbe",
".git/objects/3d/7579e9a60b4f36e8c2fa2972a0d18d7db15f70": "f375babee4b6de4edddf52c99391a288",
".git/objects/3e/e2272e6a1812bedc109c17e4290cb55560043b": "fdcdbcf2d0ac1483844cb769dcc0b547",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/26dc527bf2b5e4a5dd94e29679a51b9e463001": "6fbcad96e4030223ddcecd92284f70d8",
".git/objects/5e/3d1dc806499120411084bcce842fd9d13f7e84": "1bb466a3d2b12e41cd361e398c3a5246",
".git/objects/5f/491ccbd7528a1753b07e2a0b47b7edeac282c4": "2fa7460caf0886dfd2e4bc905303e011",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/2346a8c656ba49802e8ad5e99390c8d2d30416": "fbd25625c1de28c0e9df532e2ab5d2be",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/f1884690b761656fe6bbc4f07fab575d3e9541": "3a080e8e7559de1d695fbf4477aadbc6",
".git/objects/72/f4d35ac6a9e7ed8a3cd78603964fadcb346852": "d105db25209eb3096604140dd3ca9b75",
".git/objects/73/6ebb9774f2b4a3b2b351ea7861917341afc527": "9df484aaee70086fd9106da1135013e2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/75/57aed247a2cd1c3356b21e2a9d4e6d53509153": "05d66a84b9f9ad0be4096f3f6e6d6be8",
".git/objects/79/1ad1f79b0e327b620f6542d849d4c892d820f3": "97652371771ab248e4345866b541a61d",
".git/objects/7c/4d5820a66a62d8d0053af46182d3df85cc2f9e": "4be335b700079a2fd03ca10f408885cf",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/87/b9c6e286fbf7816462f5940d90691ca8bb22e9": "77922ef863da5d24586265e182257602",
".git/objects/88/87fc9300cd6d34c5a02becce54ea152a34b3bf": "391f671fa60e7b7f0c76a04e965248ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5c4c1c50e0f4738e052f0aaf886f9ff131b6f9": "c41967ecc998917c72bdd69315483079",
".git/objects/89/d021f9de6df23a92cbfc0dae43e71d90ca5bdb": "c7e759eed6a021c9b26964c3db7872f4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/d4cb80a73688e1795c29b9fc9ff1d143e8466b": "2826f6ce5b8aaaeb193fe0bfb0a565fb",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/92/65ea4bcf0277e6084f888ba4071827c09e7f2b": "9b66b474c0351b9a23e2dbd9b883d16d",
".git/objects/94/8602d3828faa44612d9a0ed6a63c0d568cf321": "620d77f6579202c3a5537e9a2ef9be9c",
".git/objects/96/d39fca70c2c2dd36989eee03676dd36dd17c74": "f5f74eedb77149834efd24f4f0ce99fa",
".git/objects/98/ecec81df4f405f8190a3b04937110e1c1e00a7": "9b5284acb52ff71632b4fea646aea20b",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/58866695b738066ef3ddb67b7dbf781b9695d8": "a1b0a31eebb6905d7c4b3b7f9201ded3",
".git/objects/a9/95c5cce94c265d4f8a831e2c12c41e21d41b32": "b9d6e72ed01f05e8d44e1a4c130ddc76",
".git/objects/ad/409075cec8da6266c8beb5fd8241ad371abeb2": "608eb1cc7d4f5a0f0f19a7d384d98dc8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/76cb87f7433d0425318e52bc06046093bba1ac": "fd74f41c26d542017b76f831267543f0",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/79cfef21016fbaf4e854e7f2b13064e183cf62": "074af378a3eb913822216f4ed1abb6d8",
".git/objects/c9/e4a4b7d5b02e778635cdf6c3f2e53c5bf12f9f": "2aec54e1cb58995bf346bcf1b2ab14ff",
".git/objects/cd/6836d53eeda409dfb3284b6554791acc59b3d4": "5f53430acb763fd1bc64c67a050285be",
".git/objects/d0/4ad36dc8826b05f2ee6d54e2dd50a0f96d40ad": "1bfe3f3fca8128d010a9405a4d267091",
".git/objects/d3/f32f249b482249bb6c8bd07caad2450da1a97c": "ec731a806e06504ee7abe5242fb05312",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a9bd14871c2df05f7cb9c3667d8d33e4968804": "68311d4dc5baa127d9523a7748a469e2",
".git/objects/da/218a6047e764775f3e00e49048e1dcc2eaee10": "53933d754ad24c7d2b958f6c922fdbc2",
".git/objects/da/4b0b19c783b57d8073cda3024d772a4105cfa8": "e7b17d474e62369e9eb9116ed89b2490",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/e317ea7ab2b19d345419b0a88b5d30e266f248": "17cc02568e671211fe6e9bc35c01351a",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/d142fc4561c829e2b50659be284b0bf038dcc5": "b2eea71ea741f4b66e4707148ad324d2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/af03775a54db8de0356cc679a0843ca8b3ede3": "758638b9131ef25c547ab3b12397eaa0",
".git/objects/ed/b540138501f7739b13315194fd00572711193d": "513da74de213a4c845fe010fda93c2d0",
".git/objects/f0/fe4413049e3f36fca9672ea5106db1ac7c7c8e": "639895f55552a7f0649107c2d5dbe24f",
".git/objects/f1/e80648113005fee049324b751bc2af8286a2e4": "3ca0e188223288b5d59034d92113420f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cb8893f1317aa8a0a66e1f0d7e4a0951046878": "0a0e0fac31b67acb9782c27f7cc7108e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/5702c5aa13bb741537c14a80fada6a7fc3b794": "2bfd514c3c64368ca6016077a8f654f9",
".git/objects/f9/c2c6277e4d1827f9164b3c7118b4328aba59c8": "7401972fd5343f0b20864770be64a61d",
".git/objects/fb/091debdffbbd6257d4e643437d026cf50a3923": "598a25815834a1baec885bac687380a9",
".git/objects/fc/37ca9e8039dd52fa9b34e03db90a5bf6665f6c": "0d7620b3c22e8045c7a6ea55368942a1",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "2ce12b67d7af6531ad473283f2fec862",
".git/refs/remotes/origin/main": "2ce12b67d7af6531ad473283f2fec862",
"assets/AssetManifest.bin": "c176b9266f7ebbfcbdfca10f9e0df12e",
"assets/AssetManifest.bin.json": "982ff14f63d38a9284d4467ae4eab142",
"assets/AssetManifest.json": "5335771c76b5cce3add303579eccca9c",
"assets/assets/IMG-20250804-WA0001.jpg": "d64da45ccde22637a4fcb9cb4bd1375d",
"assets/assets/IMG-20250804-WA0002.jpg": "cac8c45be647c3a29dd55d1090fbf0c0",
"assets/assets/IMG-20250804-WA0003.jpg": "87908fe9e3bb6e954bb07d93fd395aa9",
"assets/assets/IMG-20250804-WA0004.jpg": "35c42e0ca7c9989be511d2c3c6929bca",
"assets/assets/IMG-20250804-WA0005.jpg": "3d75d6c3b6ae71b7eff6fbc62500a1d3",
"assets/assets/IMG-20250804-WA0006.jpg": "b3313c26672c9c2800f626ee5beb52eb",
"assets/assets/IMG-20250804-WA0009.jpg": "bfbc3b7384fb2ed20a3737cfb8ba8c6c",
"assets/assets/IMG-20250804-WA0010.jpg": "1f07ff0329e5deeb54fee6106e519a7f",
"assets/assets/IMG-20250804-WA0011.jpg": "b0e1c59bd06a1f293663e12853002086",
"assets/assets/IMG-20250804-WA0012.jpg": "c18f9b04f07f872be30ed98f8fb51562",
"assets/assets/IMG-20250804-WA0013.jpg": "afb82ed522435af22c5e66cd9b64b99d",
"assets/assets/IMG-20250804-WA0014.jpg": "b6d0b6ba6aa9fc74a2b162244ee91baa",
"assets/assets/IMG-20250804-WA0015.jpg": "4ac88637ee3456db06b3b3d4191bcdd3",
"assets/assets/IMG-20250804-WA0016.jpg": "ab1e6b0610a1bbc50779b8a5ceaacc28",
"assets/assets/IMG-20250804-WA0017.jpg": "9f0955524b37b415a4cdde4c8d6dad9e",
"assets/assets/IMG-20250804-WA0018.jpg": "fd289d42539a2250981716ff354cfeca",
"assets/assets/IMG-20250804-WA0019.jpg": "af6a24bbddfecb4ed3292a8f781445d1",
"assets/assets/IMG-2345890.jpg": "e61f82d5026a8ac15e9fb50983b99895",
"assets/assets/IMG-3456789.jpg": "9fc583584422ee6b9edae8e13f6f308d",
"assets/assets/sangan.jpg": "2f8811bbdbeb42271e35a7869ab7e22b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "475591eaed324db97f18c2583d8dae79",
"assets/NOTICES": "bf00f19289e150497a1a38603db1ab4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3c120a83acedf9bced3405526daac618",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "995c2e86ed74b83cfccd822efcf08ead",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "603b3e5cf8976bc17f159a071c1fb6f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "180a601d8f68e8d2eadce7ade0fc48e4",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"};
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
