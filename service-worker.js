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
    "url": "404.html",
    "revision": "5952abe215bdf22d82821692cc11fc06"
  },
  {
    "url": "about/index.html",
    "revision": "26fb1099cdca6d12dc339a041ab41bb4"
  },
  {
    "url": "assets/css/0.styles.5d034003.css",
    "revision": "d143038ee100618831dca13285b04e66"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.697e3bee.js",
    "revision": "20b0f32a13274106807c7999c66cfbe5"
  },
  {
    "url": "assets/js/10.2c99a5e7.js",
    "revision": "2d4a28ac6a008b6d87df0b93be65d0d6"
  },
  {
    "url": "assets/js/11.8404c347.js",
    "revision": "66dba6ebe8c3cb69f144a0c341aa6887"
  },
  {
    "url": "assets/js/12.822ab2e4.js",
    "revision": "f186e83bd50c6a2a26379ad601fc00b7"
  },
  {
    "url": "assets/js/13.de3110ba.js",
    "revision": "fdb59413d17ab1eb15a035953d476d9f"
  },
  {
    "url": "assets/js/14.6caaf6c9.js",
    "revision": "b6ffdbaf890122b2be0fc875f1cc6f9a"
  },
  {
    "url": "assets/js/15.9aa3b704.js",
    "revision": "fff26792007f537fee4f0af8a5ff23a0"
  },
  {
    "url": "assets/js/16.c55c9668.js",
    "revision": "9b5fb5b199342526eec8a4754059efa2"
  },
  {
    "url": "assets/js/17.d509f65e.js",
    "revision": "df010d01db385aafeb02cb20e734e2e4"
  },
  {
    "url": "assets/js/18.66d923ee.js",
    "revision": "bce86d3165d999f622e6a289c95500d6"
  },
  {
    "url": "assets/js/19.9afee852.js",
    "revision": "34c29c7e1b18ac71edb523d64f7a7900"
  },
  {
    "url": "assets/js/2.6356dc11.js",
    "revision": "a1c2a9a8e812a5010dea2d1292214edf"
  },
  {
    "url": "assets/js/20.719f53f7.js",
    "revision": "ef88b773a1301d94d27cff7f4f3429b7"
  },
  {
    "url": "assets/js/21.5b0547b0.js",
    "revision": "859a99878967427961ae2ee6023d89b6"
  },
  {
    "url": "assets/js/22.2012ed68.js",
    "revision": "345e2cbed98535120eb12136af5bfa34"
  },
  {
    "url": "assets/js/23.b0272e83.js",
    "revision": "4517218b296898e1efd5f9f33cfd729e"
  },
  {
    "url": "assets/js/24.b6b8c5e0.js",
    "revision": "e469c4a7d78916864b3634f6331c1ccb"
  },
  {
    "url": "assets/js/25.759da782.js",
    "revision": "1a9d4720884466470eaf6b4cc69b2a77"
  },
  {
    "url": "assets/js/26.df1ba916.js",
    "revision": "5740bf1a48aeb070f3ffc8faa26c0dcf"
  },
  {
    "url": "assets/js/27.aa621824.js",
    "revision": "d81a6124feaf91f9c01bb992d0820ae5"
  },
  {
    "url": "assets/js/28.5a1fc913.js",
    "revision": "21bfc34336dfd3f555693ebff9dae69e"
  },
  {
    "url": "assets/js/29.19bbac59.js",
    "revision": "c1bffc116a72dd4ac65c4c6dae66e8ed"
  },
  {
    "url": "assets/js/3.0b23843e.js",
    "revision": "11343cc7d50c1695d5684839ffd4ab48"
  },
  {
    "url": "assets/js/5.58975608.js",
    "revision": "ae43420bdffc4b846ad9d1e7cb10accb"
  },
  {
    "url": "assets/js/6.e787629a.js",
    "revision": "7cf19ccba67c3f8b1669d4b10a7e270a"
  },
  {
    "url": "assets/js/7.0c8512d0.js",
    "revision": "2de57d6163fab5b8b47b03bd4c6fb911"
  },
  {
    "url": "assets/js/8.d5a1a8de.js",
    "revision": "b7b38ad5ec5b4fdfbeb5fa0f7d48641c"
  },
  {
    "url": "assets/js/9.dee86914.js",
    "revision": "81a93560c2d396ef1f4b1d4829c52055"
  },
  {
    "url": "assets/js/app.9c388547.js",
    "revision": "dd0ed52d4146827252d27ecd4c096314"
  },
  {
    "url": "authorAvatar.png",
    "revision": "a0f444359496b1978934d0cfba647d92"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/others/收藏/bilibili/恋爱告急.html",
    "revision": "b3db2bdc23311d5c3c1fc13b75b84515"
  },
  {
    "url": "blogs/前端/2021/12/GitHub Actions自动部署【Pages + Remote Server】.html",
    "revision": "ff7bfad42a7aef2219771d9869960444"
  },
  {
    "url": "blogs/前端/2021/12/Vue隐藏滚动条.html",
    "revision": "c6fabd331e8477cd31b1f30c5d418909"
  },
  {
    "url": "blogs/前端/2021/12/webpack.html",
    "revision": "2e840ef1493a4181628f26ebc1ba753c"
  },
  {
    "url": "blogs/后端/2020/08/示例二.html",
    "revision": "b53a3bbf95c703a54ecc86ce26f4f7a0"
  },
  {
    "url": "blogs/后端/2021/04/Mysql函数.html",
    "revision": "e588e951a29ce48cdfa2ffaa23e52e19"
  },
  {
    "url": "blogs/文章/八佰.html",
    "revision": "f0898bb914ca6da2726fa30ccfef8fe0"
  },
  {
    "url": "blogs/服务端/2021/12/SSHD查询、启动、重启.html",
    "revision": "4a61ac3a97869b6991b5d63259830768"
  },
  {
    "url": "categories/index.html",
    "revision": "eb054575a3d2947fded304657c83242f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d576caaf87504716a9ed9bbf26449582"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d197b185f28e62b385d0d33989e647ad"
  },
  {
    "url": "categories/心得感悟/index.html",
    "revision": "2c7f999fbaafc202f62d95dad0e7e2b1"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "af3333d05c3c54121a7f4567c43aa296"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "82d05c89cfcab8e50f8ce2550d2227e6"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "index.html",
    "revision": "5bb89b2dcc83df20ff61d6cd43fa24cd"
  },
  {
    "url": "js/bg.js",
    "revision": "c6c7cf6c411fae7e304b715b705ec584"
  },
  {
    "url": "js/circleMagic.js",
    "revision": "0e34fe62d1e3bca6ecd563428bec97f5"
  },
  {
    "url": "js/common.js",
    "revision": "8cd550a4208c963e4cb814b605c807e0"
  },
  {
    "url": "js/daoVoice.js",
    "revision": "7c191021f39298c1f82e021f5d2fc957"
  },
  {
    "url": "js/fairyDustCursor.js",
    "revision": "fd15ee58443f3abcf34f4a7a8f12ddd1"
  },
  {
    "url": "js/mouseClick.js",
    "revision": "74c6bf2ce0173cd2f9bdb8660cda8b3c"
  },
  {
    "url": "js/noConsole.js",
    "revision": "ccf7128488aebfe25c26f3e2568feae9"
  },
  {
    "url": "js/sakura.js",
    "revision": "22531f72f4fd14e023d24650809cb14c"
  },
  {
    "url": "live2d/koharu/assets/moc/koharu.2048/texture_00.png",
    "revision": "495eea8d906c2b03abfe3fa9de2f2a8b"
  },
  {
    "url": "logo.png",
    "revision": "9677afaf7b215f54e090d7aabd93c71a"
  },
  {
    "url": "tag/CentOS7 SFTP配置/index.html",
    "revision": "43fbd5b0c45063f9508e064d1912a234"
  },
  {
    "url": "tag/Freemarker/index.html",
    "revision": "6076b72d39c712f7d29e375009222227"
  },
  {
    "url": "tag/GitHub Actions/index.html",
    "revision": "6cee7360beb3b58a50cbd7400b7c0396"
  },
  {
    "url": "tag/GitHub Pages/index.html",
    "revision": "78aefc469c4c95f23a276b2870c023cf"
  },
  {
    "url": "tag/index.html",
    "revision": "3c73cf919a09d51da80d54bb1666c604"
  },
  {
    "url": "tag/Linux/index.html",
    "revision": "1a74f068534e409e0dcdf13c31789ed9"
  },
  {
    "url": "tag/Mysql/index.html",
    "revision": "a42ae6e3e5cd9e3c1f34b35205b53704"
  },
  {
    "url": "tag/SSHD/index.html",
    "revision": "a4638a875681c7cf7397b6963e581544"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3e717526849a9e8390197e2f9a746a4a"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "2d988e29427657db05b9c2a058214a04"
  },
  {
    "url": "timeline/index.html",
    "revision": "94f3bfba42a5b9530d03eaa4949445ba"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
