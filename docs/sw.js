/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/_app.js",
    "revision": "3d96fac943d4c4c014f2d5a0fca7c426"
  },
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/_error.js",
    "revision": "ca1feb4ad114db380da34b325d1f18bf"
  },
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/index.js",
    "revision": "558a456386635bf402c21987107f16e9"
  },
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/MDMT.js",
    "revision": "558a456386635bf402c21987107f16e9"
  },
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/MDMT/_app.js",
    "revision": "3d96fac943d4c4c014f2d5a0fca7c426"
  },
  {
    "url": "/MDMT/_next/static/aWjzGVj5fH_TZZk4YR1I2/pages/MDMT/_error.js",
    "revision": "ca1feb4ad114db380da34b325d1f18bf"
  },
  {
    "url": "/MDMT/_next/static/chunks/commons.6a90072142fbaf95a784.js",
    "revision": "34b8ad8981ad0a4cb60fb4443dc56245"
  },
  {
    "url": "/MDMT/_next/static/runtime/main-38f26d1ce3769fb551b9.js",
    "revision": "81de40c8047a64f68b021df472c53620"
  },
  {
    "url": "/MDMT/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "83bc028c0a2efd8e4c3dcbd8b23289bb"
  },
  {
    "url": "/MDMT/404.html",
    "revision": "a148c5fbc4fa2e898a17eb580b2d8efd"
  },
  {
    "url": "/MDMT/index.html",
    "revision": "e36df20b9e7bf273228052760a34de0b"
  },
  {
    "url": "/MDMT/static/css/hamburgers.css",
    "revision": "2aeedfb434a3ba8aa3dc175010f1bbf6"
  },
  {
    "url": "/MDMT/static/images/favicon-180.png",
    "revision": "6083624a8ae0e68a575b6f328173c9a6"
  },
  {
    "url": "/MDMT/static/images/favicon-192.png",
    "revision": "5638a022d4528b29d9f9e92e4ca92000"
  },
  {
    "url": "/MDMT/static/images/favicon-256.png",
    "revision": "23c3185780f187e39491dad4b6d97fb9"
  },
  {
    "url": "/MDMT/static/images/favicon-512.png",
    "revision": "d00498c7a7b25f29ec43f343aa78f181"
  },
  {
    "url": "/MDMT/static/images/favicon.ico",
    "revision": "b0b4a82aed9ad5b0c0de958324c053ac"
  },
  {
    "url": "/MDMT/static/images/hashtag.png",
    "revision": "91193c45780ff1060ccaadb81e54d2ec"
  },
  {
    "url": "/MDMT/static/images/hashtag.webp",
    "revision": "b67a94418a2279fc3679f8a50bc6c356"
  },
  {
    "url": "/MDMT/static/images/i_menu.png",
    "revision": "1ee97ab836e4d5073034883702b7ca51"
  },
  {
    "url": "/MDMT/static/images/logo_white.png",
    "revision": "ee6cac2e4c4d1fe6daf29c216cee09d0"
  },
  {
    "url": "/MDMT/static/images/logo.png",
    "revision": "e9a56e79ac434368ff632af193a3e3da"
  },
  {
    "url": "/MDMT/static/images/mdmt-live-hello.gif",
    "revision": "2df4e096608b3a27bb86b4de11054fca"
  },
  {
    "url": "/MDMT/static/images/mdmt-live-title.gif",
    "revision": "9080374da1035fa255c6d03a953c9f9f"
  },
  {
    "url": "/MDMT/static/images/ogimage.png",
    "revision": "92ea39600713234443ae29a0421956d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
