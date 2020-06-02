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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404/index.html",
    "revision": "654a1af0f7e5a927b4ee88616889ceef"
  },
  {
    "url": "about/colophon/index.html",
    "revision": "9f88dd0830792ba011abc5cea7abe18d"
  },
  {
    "url": "about/devices/index.html",
    "revision": "c2a454e57a25f5e1b020cfda720f15a2"
  },
  {
    "url": "about/index.html",
    "revision": "99167acf084a900138149774ee78ea06"
  },
  {
    "url": "about/versions/abacus/index.html",
    "revision": "708ffc248ca44d9d1819f61c4e6f5490"
  },
  {
    "url": "about/versions/academia/index.html",
    "revision": "e318c8902dcc57017aeaefe94321363c"
  },
  {
    "url": "about/versions/access/index.html",
    "revision": "0e3b328b30cf5ea8b40b12dee1de66dc"
  },
  {
    "url": "about/versions/airbrush/index.html",
    "revision": "df6740efdb59e83bb3a5f8e5850b1a23"
  },
  {
    "url": "about/versions/altitude/index.html",
    "revision": "fd94500e9d12a2a78f50f6e3c3b9ad50"
  },
  {
    "url": "about/versions/amsterdam/index.html",
    "revision": "3bda65190b11b04d0d539bcd8325d02c"
  },
  {
    "url": "about/versions/arise/index.html",
    "revision": "289cd535ad1b42789b0c17ec33316f77"
  },
  {
    "url": "about/versions/artistic/index.html",
    "revision": "c9f156a4aed1e465c8d04c624d20e2d3"
  },
  {
    "url": "about/versions/assembly/index.html",
    "revision": "59780775b6e34ff2767ec38b3147183d"
  },
  {
    "url": "about/versions/asterisk/index.html",
    "revision": "27cd3677a06b62c046a07d255b7fded3"
  },
  {
    "url": "about/versions/index.html",
    "revision": "be23ecb2690d3de3677b282bd95c2a15"
  },
  {
    "url": "admin/index.html",
    "revision": "2754edb7ee25c410abfffa0bad307ef7"
  },
  {
    "url": "android-chrome-144x144.png",
    "revision": "ab44de3ca3348aa9855f39a207b0083d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "8cf205b1dfd9d3a65626a49d2533e8ad"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "e74162241e02b92af8b8caa0f6fa5ce6"
  },
  {
    "url": "android-chrome-36x36.png",
    "revision": "e6475d9635e20c83adb8c2ec0ae30de8"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "a2c7b86602691757e83b7a9fbf9e34af"
  },
  {
    "url": "android-chrome-48x48.png",
    "revision": "eb9dae6533a73cbb316df5025a3be167"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "561725a63a637608d62873aaa8ba86bd"
  },
  {
    "url": "android-chrome-72x72.png",
    "revision": "271574bd49b747911e1d96f7cf3eb289"
  },
  {
    "url": "android-chrome-96x96.png",
    "revision": "e143de91e390beed05581756c94bffda"
  },
  {
    "url": "apple-touch-icon-114x114-precomposed.png",
    "revision": "fbf35f9169ece5d509e20b10e0398d5e"
  },
  {
    "url": "apple-touch-icon-114x114.png",
    "revision": "b7929234051721bbec710b47b00c789c"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.png",
    "revision": "9a6aa18b6aa6b89eaa06629064c2dd2a"
  },
  {
    "url": "apple-touch-icon-120x120.png",
    "revision": "804dd29687296ac042da62bb6c4115ff"
  },
  {
    "url": "apple-touch-icon-144x144-precomposed.png",
    "revision": "1d1e96467473b10404e23a9f29a3289a"
  },
  {
    "url": "apple-touch-icon-144x144.png",
    "revision": "8c788db41a1ebcc3db4ef6ef51320766"
  },
  {
    "url": "apple-touch-icon-152x152-precomposed.png",
    "revision": "eba3721ee7dce6f87bb96144f1f96d65"
  },
  {
    "url": "apple-touch-icon-152x152.png",
    "revision": "411d721b9fd56f572caea68f28ac1b7b"
  },
  {
    "url": "apple-touch-icon-180x180-precomposed.png",
    "revision": "ef6654efd4d7e46f3847239d69ff7a44"
  },
  {
    "url": "apple-touch-icon-180x180.png",
    "revision": "a53bb3da01ea9e2a11af8c98e55ed010"
  },
  {
    "url": "apple-touch-icon-57x57-precomposed.png",
    "revision": "d6a56caca5becba052a82bf2bf077d28"
  },
  {
    "url": "apple-touch-icon-57x57.png",
    "revision": "aae332a98a1c5af7439f7596afba5ed2"
  },
  {
    "url": "apple-touch-icon-60x60-precomposed.png",
    "revision": "019187cea5edae8d77db82f28569de4a"
  },
  {
    "url": "apple-touch-icon-60x60.png",
    "revision": "847787a860b090b0c93694a325351232"
  },
  {
    "url": "apple-touch-icon-72x72-precomposed.png",
    "revision": "48aa4b0d5616081a14c5d23bcdda7e97"
  },
  {
    "url": "apple-touch-icon-72x72.png",
    "revision": "d5d42136aefb9949f6693bd76e65484a"
  },
  {
    "url": "apple-touch-icon-76x76-precomposed.png",
    "revision": "50f862443a5590835e1f4749e4ce12b8"
  },
  {
    "url": "apple-touch-icon-76x76.png",
    "revision": "e76c91d872862f9564f58cc00c1d9ed9"
  },
  {
    "url": "apple-touch-icon-precomposed.png",
    "revision": "971c715cf99dc84da9f7cdfc88a1c145"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "a53bb3da01ea9e2a11af8c98e55ed010"
  },
  {
    "url": "assets/scripts/app.74543f28.js",
    "revision": "98182a746bdee502bf0e1bf44b2e4149"
  },
  {
    "url": "assets/scripts/app.74543f28.js.map",
    "revision": "3b3e9ee6ff22026364cdf461d5745513"
  },
  {
    "url": "assets/styles/app.9592ba88.css",
    "revision": "010e8ab4fa80b6880ddf51caf8c30202"
  },
  {
    "url": "assets/styles/app.9592ba88.css.map",
    "revision": "3c0402afbbefb865eb39452c8728b797"
  },
  {
    "url": "blog/1/index.html",
    "revision": "6528bb5bee71c2bd5386e2dce15ca046"
  },
  {
    "url": "blog/code/index.html",
    "revision": "d255ad5d00a0f4b7dbe54308094ede7d"
  },
  {
    "url": "blog/coffee-time/google-docs-github/index.html",
    "revision": "2c7486268ef7c14347d16170c8e4b5fb"
  },
  {
    "url": "blog/coffee-time/google-play-badges/index.html",
    "revision": "50da5c1580031330b2cb04af63b673ae"
  },
  {
    "url": "blog/coffee-time/index.html",
    "revision": "b65a5016c50dfdcffde53a813b4aad5d"
  },
  {
    "url": "blog/coffee-time/package-managers/index.html",
    "revision": "72b4999dd8ccc4f2bfebd450f701451c"
  },
  {
    "url": "blog/coffee-time/twitter-subaccounts/index.html",
    "revision": "dbebe4c72cd9ea8fa84d1305e357ce3c"
  },
  {
    "url": "blog/college/index.html",
    "revision": "960e6055d4551ecc09bd68e42b6f4493"
  },
  {
    "url": "blog/design/index.html",
    "revision": "c2e4574cb6f71dcda4d5a56aff53ef9f"
  },
  {
    "url": "blog/index.html",
    "revision": "ca260dd0cbf2f3f0a04edc6d185d82fb"
  },
  {
    "url": "blog/introducing-uppload-v2/index.html",
    "revision": "ceb8768e7d799609aadf541edff9d1f3"
  },
  {
    "url": "blog/md5/index.html",
    "revision": "fb2fc2a59171cb9e19360e194b24b337"
  },
  {
    "url": "blog/open-source/index.html",
    "revision": "2cc2652d1c7fbd91fae701af46f26965"
  },
  {
    "url": "blog/quarter-of-open-source/index.html",
    "revision": "b53661db4c4fb4f0543ee935c1737c43"
  },
  {
    "url": "blog/state-of-the/dock/2018/index.html",
    "revision": "bf519797a8c55de3f17866b6e5340110"
  },
  {
    "url": "blog/state-of-the/dock/index.html",
    "revision": "5821726503068d7b9a10d02ceed05f28"
  },
  {
    "url": "blog/state-of-the/index.html",
    "revision": "a6ec89d83ebc74c6111c111fa9e1fdcb"
  },
  {
    "url": "blog/state-of-the/podcasts/2018/index.html",
    "revision": "57c6790d2b8e477625a8f7d689f187d2"
  },
  {
    "url": "blog/state-of-the/podcasts/2019/index.html",
    "revision": "754cd051504c74897ae7323a84feb7a9"
  },
  {
    "url": "blog/state-of-the/podcasts/index.html",
    "revision": "c4896538b705a57fe8c11fe0a5b06503"
  },
  {
    "url": "blog/utwente-peoplepages/index.html",
    "revision": "d677d7883d1dc0c0a424fdfbe83074a4"
  },
  {
    "url": "blog/zomato/index.html",
    "revision": "a0bd5bfddbc94720956e562d755e7672"
  },
  {
    "url": "contact/index.html",
    "revision": "0b7f4baa4ff76d280fdd7a2d86be6a46"
  },
  {
    "url": "cv/index.html",
    "revision": "bcf1c0e8646344411f65e41df8969688"
  },
  {
    "url": "events/1/index.html",
    "revision": "5b0a72e42b3d48fcbc09ef573b3388dc"
  },
  {
    "url": "events/2/index.html",
    "revision": "9792bba2b70e6b299eb2a50aef8706fa"
  },
  {
    "url": "events/bharathacks/index.html",
    "revision": "e84cfd39cb4afd3ad5f9ee71f2bfa411"
  },
  {
    "url": "events/codelhi/index.html",
    "revision": "34fb2cd97d31859e2e88c965905dc597"
  },
  {
    "url": "events/dutch-design-week/index.html",
    "revision": "dee7911fda1bd25148f26cfac29e99b9"
  },
  {
    "url": "events/esummit/index.html",
    "revision": "b007a0494c7b6f902b9a4e2b02512b2a"
  },
  {
    "url": "events/gogbot/index.html",
    "revision": "3f76fe25de42937f2442355e91864ed5"
  },
  {
    "url": "events/hackiiitd/index.html",
    "revision": "4225470830819b573f41a5e0d4188574"
  },
  {
    "url": "events/hardstart-pitch-training/index.html",
    "revision": "a6ea54e1da3d5fb330fbd7e2f9283bbc"
  },
  {
    "url": "events/hive-01-season-5/index.html",
    "revision": "575fd2026747e4d274d23fcc99caff53"
  },
  {
    "url": "events/index.html",
    "revision": "906150ae52b9995e08f3a409a9a49bf5"
  },
  {
    "url": "events/minet-x-2018/index.html",
    "revision": "1fd46a40b1aa1a563b5217bbb6ea7a3c"
  },
  {
    "url": "events/minet-x-2019/index.html",
    "revision": "5dba0df56c08955f2f2cf5f153c44d9a"
  },
  {
    "url": "events/nesst-season-3/index.html",
    "revision": "c60df0973462d400663a488482ec4f04"
  },
  {
    "url": "events/nesst/index.html",
    "revision": "b8f35741a7afcd1591d6af933c28417f"
  },
  {
    "url": "events/oneup-scu/index.html",
    "revision": "bac079b8d9b6a4a9b90d3a1f69da18b6"
  },
  {
    "url": "events/online-open-day/index.html",
    "revision": "2c239b703737f7a4c0a7b2a0212e749a"
  },
  {
    "url": "events/roles/exhibition/index.html",
    "revision": "c7a85553f4fa05a7d53c902c00eaa500"
  },
  {
    "url": "events/roles/index.html",
    "revision": "e5b100402f9d6b10932add60792b94ca"
  },
  {
    "url": "events/roles/panelist/index.html",
    "revision": "eabd2c9c2242e71779d2b309e90229c4"
  },
  {
    "url": "events/roles/speaker/index.html",
    "revision": "e7e476d3a0e349cc803b2f4cb5931ea6"
  },
  {
    "url": "events/roles/trainer/index.html",
    "revision": "4088023014fdb6150d4363fe88e2e934"
  },
  {
    "url": "events/sip-launch-dtu/index.html",
    "revision": "ab4cd547bf78dc4b656cc75fb6962d05"
  },
  {
    "url": "events/speakup/index.html",
    "revision": "5e90701a24c8a93efde36bde7125c3ef"
  },
  {
    "url": "events/startup24/index.html",
    "revision": "649c3fbce115e7b3a9f1fac1ccec065b"
  },
  {
    "url": "events/tech-charcha/index.html",
    "revision": "4ef20a322da76ac87fce28dda6ab1b49"
  },
  {
    "url": "events/tedx-hailey-road/index.html",
    "revision": "719df5a11fa78b0b4d5a14b9beefab21"
  },
  {
    "url": "events/wief-2018/index.html",
    "revision": "f5f672a13e107284606ca160f07cb8e2"
  },
  {
    "url": "events/women-who-code/index.html",
    "revision": "75fec4dd693910c23c134f47d0352792"
  },
  {
    "url": "everything/index.html",
    "revision": "c9c47b5a06188a708623c013f694ef37"
  },
  {
    "url": "external-dark.svg",
    "revision": "34da674b698f421a8f211452172d23fe"
  },
  {
    "url": "external.svg",
    "revision": "7eadb08503b0ae16e2fe2a03e68f5298"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "e535fb042e44943d8c2d0e59988b08dc"
  },
  {
    "url": "favicon-194x194.png",
    "revision": "90da97727819f27aaf3de674efacc62c"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "eed32b96cd8d5e8209f1de43ae9e42a8"
  },
  {
    "url": "favicon.ico",
    "revision": "da41296d1e1cec2ceb155af51eb68f5c"
  },
  {
    "url": "feed.json",
    "revision": "060d2091e25223ee4a29936ccf08d651"
  },
  {
    "url": "icon.svg",
    "revision": "5c94b3639619768a1e8a45804b71d1fb"
  },
  {
    "url": "images/blog/google-play-badges/badge-proposal.png",
    "revision": "5e542eeeda7408a11f3f240d3b6d73ed"
  },
  {
    "url": "images/blog/google-play-badges/official-badges.png",
    "revision": "16d73bf24f6cab78354a2d70f1e80cde"
  },
  {
    "url": "images/blog/md5-pr_wav36p.png",
    "revision": "a565625ed8905519d63b170da717bc1c"
  },
  {
    "url": "images/blog/quarter-of-open-source/2015.png",
    "revision": "b9124b3d42ae36d43ca022c1887ff6d7"
  },
  {
    "url": "images/blog/quarter-of-open-source/2016.png",
    "revision": "71f49254714f90287b60cc6f3db47f86"
  },
  {
    "url": "images/blog/quarter-of-open-source/2017.png",
    "revision": "4532c69aef068e794b32bb0c1bd5136a"
  },
  {
    "url": "images/blog/quarter-of-open-source/2018.png",
    "revision": "5f739bb0186d6b70050a194dd67e8dc5"
  },
  {
    "url": "images/blog/quarter-of-open-source/2019.png",
    "revision": "3dee42941a29cb69bc9c12b6d3fbf982"
  },
  {
    "url": "images/blog/quarter-of-open-source/contributions.png",
    "revision": "99b065c44422dd35deb5cfe8b27456fd"
  },
  {
    "url": "images/blog/Screen_Shot_2018-07-28_at_11.27.45_PM.png",
    "revision": "b0f90cf6c02ccbea579fca74458f77d3"
  },
  {
    "url": "images/blog/secure-endpoints_ddwwmr.png",
    "revision": "fe41059db12aac20369c5f5872428698"
  },
  {
    "url": "images/blog/state-of-the/dock/1password.png",
    "revision": "7488ff567fba17bfa0ede3b8129c2722"
  },
  {
    "url": "images/blog/state-of-the/dock/airmail.png",
    "revision": "2c164a50f93599bb7dbfeafba7bff61b"
  },
  {
    "url": "images/blog/state-of-the/dock/arduino.png",
    "revision": "064e68f9d87a1a1ddef8810c1727e305"
  },
  {
    "url": "images/blog/state-of-the/dock/franz.png",
    "revision": "01af79e23ae1f154dc38f6e01a02448f"
  },
  {
    "url": "images/blog/state-of-the/dock/google-chrome.png",
    "revision": "2ac4a8e6c100f9f8826c72c8368cfe73"
  },
  {
    "url": "images/blog/state-of-the/dock/iterm.png",
    "revision": "e73f64fa4af0c4d459e1a352260f527d"
  },
  {
    "url": "images/blog/state-of-the/dock/navicat.png",
    "revision": "8318f8bfc38b5534867448111431c195"
  },
  {
    "url": "images/blog/state-of-the/dock/photoshop.png",
    "revision": "ebff9637407bc3b242ba5276e09741d1"
  },
  {
    "url": "images/blog/state-of-the/dock/postman.png",
    "revision": "a27b4d90c5301b3ab98de544a59c0778"
  },
  {
    "url": "images/blog/state-of-the/dock/sketch.png",
    "revision": "7deadd89e2db21a0d0f9b71cd022ac95"
  },
  {
    "url": "images/blog/state-of-the/dock/spotify.png",
    "revision": "3d51f1d973091c47f7bee4ee139377a4"
  },
  {
    "url": "images/blog/state-of-the/dock/termius.png",
    "revision": "4158edad9a8ce7e013b9b45341c6fd5a"
  },
  {
    "url": "images/blog/state-of-the/dock/vs-code.png",
    "revision": "5ad9b52b3236fceb5d71b40503b9cbb6"
  },
  {
    "url": "images/blog/state-of-the/podcasts/2019-0.png",
    "revision": "105fbcb678bf807fbc26e48727858e3c"
  },
  {
    "url": "images/blog/state-of-the/podcasts/2019-1.png",
    "revision": "ee5bf55b7d0cdff6ae562cf8ed829187"
  },
  {
    "url": "images/blog/state-of-the/podcasts/2019-2.png",
    "revision": "2128e0be791d1ff51f9f6cfee3581f40"
  },
  {
    "url": "images/blog/state-of-the/podcasts/99-invisible_pd4gdg.png",
    "revision": "1f016763d67f85d9274ba2a0dafb802b"
  },
  {
    "url": "images/blog/state-of-the/podcasts/a16z.png",
    "revision": "2bf76e410713055c3e3ad925a1ed534e"
  },
  {
    "url": "images/blog/state-of-the/podcasts/build-your-saas_n90oca.png",
    "revision": "c944f838abebf5197dae5a8bcd29f1d1"
  },
  {
    "url": "images/blog/state-of-the/podcasts/character-count.png",
    "revision": "3f75eda75647305ac9e430d675b2f8cd"
  },
  {
    "url": "images/blog/state-of-the/podcasts/clockwise.png",
    "revision": "15ac7a784ecbb41f1a34701e63c8382a"
  },
  {
    "url": "images/blog/state-of-the/podcasts/codeish.png",
    "revision": "d5edede86022bf8764fd17f8a982cc0d"
  },
  {
    "url": "images/blog/state-of-the/podcasts/connected.png",
    "revision": "b11a06d771462b79c39c79b56ef1ff84"
  },
  {
    "url": "images/blog/state-of-the/podcasts/cortex_fv6crb.png",
    "revision": "282e1147950f2fcb3d0a010150f48a6a"
  },
  {
    "url": "images/blog/state-of-the/podcasts/embedded_c7m41c.png",
    "revision": "27bf140c446c699fa7084c8b58b25c34"
  },
  {
    "url": "images/blog/state-of-the/podcasts/heavyweight.png",
    "revision": "a13dc25a12a9d9ba4b75ddc055d3b839"
  },
  {
    "url": "images/blog/state-of-the/podcasts/hello-internet_a98ikc.png",
    "revision": "7e5829da690b290cc6978a5a39e9d648"
  },
  {
    "url": "images/blog/state-of-the/podcasts/how-i-built-this_juo5co.png",
    "revision": "1419622b464e8d94cfbc7dd09cd8603a"
  },
  {
    "url": "images/blog/state-of-the/podcasts/http-203.png",
    "revision": "9e1c947a2c4511afaa7063a3b05c3c3a"
  },
  {
    "url": "images/blog/state-of-the/podcasts/in-depth_cvhyxy.png",
    "revision": "fc022becbe860e6d4e6a16df41dad965"
  },
  {
    "url": "images/blog/state-of-the/podcasts/instant-message.png",
    "revision": "d2b7f701b7968c13ac1a2f94d6cd6cc6"
  },
  {
    "url": "images/blog/state-of-the/podcasts/newslaundry-hafta_smvs1f.png",
    "revision": "5572a527b2a6a9760952737bcfe8b19e"
  },
  {
    "url": "images/blog/state-of-the/podcasts/numberphile.png",
    "revision": "0423d8d4f14a3fdd5f782e6bba33d511"
  },
  {
    "url": "images/blog/state-of-the/podcasts/relatively-prime_ada4tg.png",
    "revision": "2f2d8800e23ae489c3f0a91699af907a"
  },
  {
    "url": "images/blog/state-of-the/podcasts/startup_hgrdxc.png",
    "revision": "27bbf04beefcd33d676601b1be855041"
  },
  {
    "url": "images/blog/state-of-the/podcasts/talkscript.png",
    "revision": "d7ad7a972dbeac48207a5e79899b3de4"
  },
  {
    "url": "images/blog/state-of-the/podcasts/ted-radio-hour_kwaymj.png",
    "revision": "aac5063661b026deba710e87957d5f67"
  },
  {
    "url": "images/blog/state-of-the/podcasts/the-daily_j51cfm.png",
    "revision": "5314c322e6a43525ff55007253adc70d"
  },
  {
    "url": "images/blog/state-of-the/podcasts/the-freecodecamp-podcast_m1bi3p.png",
    "revision": "0989b7a8972b8622494756deef74234f"
  },
  {
    "url": "images/blog/state-of-the/podcasts/the-unmade-podcast_faatpk.png",
    "revision": "5236f7dbe3859ad7b12d0ca4322f1579"
  },
  {
    "url": "images/blog/state-of-the/podcasts/travel-genius.png",
    "revision": "daafbcd51b1a3c00f8f94ed33070f9c0"
  },
  {
    "url": "images/blog/state-of-the/podcasts/unbox.png",
    "revision": "efbd1c6078ebede0014c82225542f997"
  },
  {
    "url": "images/blog/state-of-the/podcasts/where-should-we-begin_crlryb.png",
    "revision": "7a6e40dbe9ed0f5f8e884a99d8f9e012"
  },
  {
    "url": "images/blog/state-of-the/podcasts/without-fail.png",
    "revision": "18a1999fb4e8c2816fa1f9b36754dd2c"
  },
  {
    "url": "images/blog/state-of-the/podcasts/works-for-me.png",
    "revision": "0eb49ffda5cf71e7798f340c74d8957c"
  },
  {
    "url": "images/events/esummit/1.jpg",
    "revision": "e8952d2f78035da10dc1361eb1d1341d"
  },
  {
    "url": "images/events/esummit/2.jpg",
    "revision": "d937b0917b51d27af3634dc5684f815b"
  },
  {
    "url": "images/events/esummit/3.jpg",
    "revision": "8a7744975dab0bdca0dde9c91c4ede3e"
  },
  {
    "url": "images/events/esummit/4.jpg",
    "revision": "fc6ce2cc4282bb184ed92ffcb38177cf"
  },
  {
    "url": "images/events/esummit/icon.png",
    "revision": "f1e4646f816dffbe9a56401933fbf69f"
  },
  {
    "url": "images/events/hive-01/icon.png",
    "revision": "f413a4b28514ca3a442a0f7a0d97287e"
  },
  {
    "url": "images/events/minet-x-2018/icon.png",
    "revision": "87cd3ef596f28c11631d06886e2e4b63"
  },
  {
    "url": "images/events/online-open-day/icon.png",
    "revision": "39dc0b5c2198e8f8ba4bc69fbe96072c"
  },
  {
    "url": "images/events/online-open-day/screen1.png",
    "revision": "b8b6397113706c5c76d22ad2de038874"
  },
  {
    "url": "images/events/online-open-day/screen2.png",
    "revision": "1444c23ed42932df513c4fa9986258fc"
  },
  {
    "url": "images/events/speakup/5baa7959cb226_MASTERPHOTO_NL-20-09-18_042.jpg",
    "revision": "0c3ecb2f4ad2b9b7b6dbb37397b0626e"
  },
  {
    "url": "images/events/speakup/5baa795ec8ec7_MASTERPHOTO_NL-20-09-18_053.jpg",
    "revision": "253e9c8c108ef7dd9072894a11d15693"
  },
  {
    "url": "images/events/speakup/5baa79763d49f_MASTERPHOTO_NL-20-09-18_102.jpg",
    "revision": "0a9dca87f552c25af3a2d40bd0884802"
  },
  {
    "url": "images/events/speakup/5baa797ed3317_MASTERPHOTO_NL-20-09-18_121.jpg",
    "revision": "7947be1bcc06c706559fac1e18b1b3b7"
  },
  {
    "url": "images/events/speakup/icon.png",
    "revision": "41242c9296d596ea63a44b225dc205cf"
  },
  {
    "url": "images/icons/acjs.png",
    "revision": "711a974c572587a6ba5ff83021227379"
  },
  {
    "url": "images/icons/akept-wief-social-enterprise-forum.png",
    "revision": "d7f5a39f2fdd527b5ad13f8769dc9cf1"
  },
  {
    "url": "images/icons/aptitude.png",
    "revision": "6a2120dde58c5850709d3185142abd45"
  },
  {
    "url": "images/icons/bharathacks.png",
    "revision": "4d61b5f6e6604519e8afd9ae3028baac"
  },
  {
    "url": "images/icons/codelhi.png",
    "revision": "2b0a7dec118fdfeb9ec8bf842e0467f2"
  },
  {
    "url": "images/icons/dtu.png",
    "revision": "ae7af6703b17b9e66025a2a9cab87573"
  },
  {
    "url": "images/icons/dutch-design-week.png",
    "revision": "ead74e7a7aab0b9b1511f51e48fc6c05"
  },
  {
    "url": "images/icons/essential.png",
    "revision": "fa15142a4c76f404893d9ca780dc425c"
  },
  {
    "url": "images/icons/facebook.png",
    "revision": "78fb24e1fb00fcca55bbb6ed0ce29c9f"
  },
  {
    "url": "images/icons/gogbot.png",
    "revision": "39142f32f7183572c9571b23a5eea924"
  },
  {
    "url": "images/icons/hackiiitd.png",
    "revision": "239c74a126314bb6b9b8a9350329a33e"
  },
  {
    "url": "images/icons/hardstart.png",
    "revision": "d07ae68a290f6ec59c5c8203a7f7fcb7"
  },
  {
    "url": "images/icons/nesst.png",
    "revision": "77ff150067fae599ce761da677859887"
  },
  {
    "url": "images/icons/one-grid.png",
    "revision": "5b8c8e2aa5656e7c2e90c6c20c807776"
  },
  {
    "url": "images/icons/oneup.png",
    "revision": "39c772511ae31d9fe47bff073a7982ac"
  },
  {
    "url": "images/icons/precis.png",
    "revision": "3774c3d68247bf2405c410b63df07f4a"
  },
  {
    "url": "images/icons/staart.png",
    "revision": "fb036d84365ff8c1511620e6dc8c0db4"
  },
  {
    "url": "images/icons/startup24.png",
    "revision": "0b93d612b58b75e8e59caa28d96dadef"
  },
  {
    "url": "images/icons/tedx.png",
    "revision": "2a45b70dcdbf66d81fc88c3726065c6a"
  },
  {
    "url": "images/icons/uppload.png",
    "revision": "d1118680eda62149cef5ed7937db4ff2"
  },
  {
    "url": "images/icons/women-who-code.png",
    "revision": "9a08a20b4fd850eeb9c61b1f76e79ecc"
  },
  {
    "url": "images/open-source/aptitude.jpg",
    "revision": "d182ec6a42b864a9dbeca4a7300e55e9"
  },
  {
    "url": "images/open-source/essential1.png",
    "revision": "fd92a0ebb5100b05c6d9cf356a248ae8"
  },
  {
    "url": "images/open-source/essential2.png",
    "revision": "abb51cb1831da9a10567831cd002fedb"
  },
  {
    "url": "images/open-source/hello-bar/icon.svg",
    "revision": "c2ee9ddf03f9a5fa0595547e110985a8"
  },
  {
    "url": "images/open-source/hello-bar/screenshot.png",
    "revision": "de97eec9330b123f762137f0ac296c54"
  },
  {
    "url": "images/open-source/hovercard/icon.png",
    "revision": "f3289f308111531488c8e52d9f84f9c0"
  },
  {
    "url": "images/open-source/hovercard/screenshot.png",
    "revision": "8f7682ed132c354bf6a03c3df93e8fa8"
  },
  {
    "url": "images/open-source/one-grid.jpg",
    "revision": "bf7933ece22a086fe05d0a9c76b2099b"
  },
  {
    "url": "images/open-source/precis1.png",
    "revision": "563831c47aa31cda7c3e4c3f22a13488"
  },
  {
    "url": "images/open-source/precis2.png",
    "revision": "8eda9a6f08fb432ebfa1271f53d93616"
  },
  {
    "url": "images/open-source/precis3.png",
    "revision": "cacc09d98c2c3fbd281dac5c20bdb0f8"
  },
  {
    "url": "images/open-source/staart/1.png",
    "revision": "8fc7cc7f55916ac47b39eba2bff48fa0"
  },
  {
    "url": "images/open-source/staart/2.png",
    "revision": "5b39552388db7733006ce66854d07fc4"
  },
  {
    "url": "images/open-source/staart/3.png",
    "revision": "3fcbedd85fd86727febe0db1bd6aa5ca"
  },
  {
    "url": "images/open-source/staart/4.png",
    "revision": "2c743423965da981b8c69e81078d5d9c"
  },
  {
    "url": "images/open-source/staart/5.png",
    "revision": "e1de544abf6472ddd99b2bf0a9b3946b"
  },
  {
    "url": "images/open-source/staart/6.png",
    "revision": "b457d0b2a7539233a71c18f5e2b053e3"
  },
  {
    "url": "images/photos/anand-chowdhary.jpg",
    "revision": "b9da1cb751738c2c961a21d6606e3af9"
  },
  {
    "url": "images/portfolio/baymax_2x.png",
    "revision": "77460b66cda928e88019f1fa945d024c"
  },
  {
    "url": "images/portfolio/bharathacks_2x.png",
    "revision": "277e8ee79e1b5de5a349bb77faf0ea94"
  },
  {
    "url": "images/portfolio/blueboard_2x.png",
    "revision": "00d15811179acd104c09752450f4f5a5"
  },
  {
    "url": "images/portfolio/capella_2x.png",
    "revision": "cc5d7a8fb82d1095fcc848662526086d"
  },
  {
    "url": "images/portfolio/classrebels_2x.png",
    "revision": "bacd7a4f5b768f849c3b5c1de434d991"
  },
  {
    "url": "images/portfolio/claude_2x.png",
    "revision": "354479f25383858490342d2f76b933ab"
  },
  {
    "url": "images/portfolio/crink-jewel_2x.png",
    "revision": "996116c560fa5375dc61d3397539ca7b"
  },
  {
    "url": "images/portfolio/csunite_2x.png",
    "revision": "13a4ae8fc10849fd09ef3d1890c1f485"
  },
  {
    "url": "images/portfolio/cyankart_2x.png",
    "revision": "290963b8143a95e610fa071d14f2c8ba"
  },
  {
    "url": "images/portfolio/delhi-government_2x.png",
    "revision": "b25d0cdb74cd9f49a25f651e1c0628be"
  },
  {
    "url": "images/portfolio/drillmaps_2x.png",
    "revision": "8d5ab78a3fa23213d4cd1ddc79451b80"
  },
  {
    "url": "images/portfolio/facematch_2x.png",
    "revision": "28582a0ed7ad0fbf995d4d7526c15e88"
  },
  {
    "url": "images/portfolio/firangana_2x.png",
    "revision": "deb5b45542d65576fee65a8bcac48a5d"
  },
  {
    "url": "images/portfolio/ibm-iot-escape-room_2x.png",
    "revision": "e45977e47e4f71ded76d446f55d7843c"
  },
  {
    "url": "images/portfolio/internet.org_2x.png",
    "revision": "55d4a470cafa1698352c87d5056bc6a8"
  },
  {
    "url": "images/portfolio/justice-adda_2x.png",
    "revision": "7f821b3cc97a1f4d4b978264f8486183"
  },
  {
    "url": "images/portfolio/keeep_2x.png",
    "revision": "6e58e9ccbdae12062f06b553bf67c624"
  },
  {
    "url": "images/portfolio/made-with-love-in-india_2x.png",
    "revision": "0fd56c3f5da4541c4e3dfb0f124da5ee"
  },
  {
    "url": "images/portfolio/melangebox_2x.png",
    "revision": "591486f1e72ef9cead66ef41c6aa1451"
  },
  {
    "url": "images/portfolio/naari_2x.png",
    "revision": "55f3912ed2487cb35e354993bb106c3e"
  },
  {
    "url": "images/portfolio/project-blue_2x.png",
    "revision": "2fbd413aa064d622f7613307ee94d306"
  },
  {
    "url": "images/portfolio/refuserve_2x.png",
    "revision": "25d7746202b2022d8681227d07257c17"
  },
  {
    "url": "images/portfolio/saga-music_2x.png",
    "revision": "0e4bb1ef5f935bbce22472e1fcb3f99a"
  },
  {
    "url": "images/portfolio/sixteeninches_2x.png",
    "revision": "88ecf18df35740a852e625fe9915831d"
  },
  {
    "url": "images/portfolio/unifiers_2x.png",
    "revision": "540c6ba2204b72410426db5d72fc37ed"
  },
  {
    "url": "images/portfolio/wendy_2x.png",
    "revision": "115639e36820f1bf3757077ff601b545"
  },
  {
    "url": "images/projects/aristotle/1.png",
    "revision": "cbf471d951f411bf8ee672321ce340e9"
  },
  {
    "url": "images/projects/aristotle/2.png",
    "revision": "be49cec4ab3149e4e858901d1f1957ee"
  },
  {
    "url": "images/projects/aristotle/3.png",
    "revision": "4aa3542b7998b40794805c7e0f4de2a0"
  },
  {
    "url": "images/projects/aristotle/4.png",
    "revision": "9531b2b1f4374589e68565b2f044055f"
  },
  {
    "url": "images/projects/aristotle/5.png",
    "revision": "5431510ffdf48f8f1bd04aa29b98ac1f"
  },
  {
    "url": "images/projects/aristotle/6.png",
    "revision": "ab61035bb8aa0d6afb48d4770df008c9"
  },
  {
    "url": "images/projects/aristotle/7.png",
    "revision": "f0c09ac4c63b75f6b6f5c38ebf356cec"
  },
  {
    "url": "images/projects/aristotle/8.png",
    "revision": "955ffb5d7c3afbbe8d3ebdbae0ebe001"
  },
  {
    "url": "images/projects/aristotle/icon.png",
    "revision": "89933c83c6436c2442fc7207b525af96"
  },
  {
    "url": "images/projects/baymax/1.png",
    "revision": "6127024427ab239853096e96fa848ddc"
  },
  {
    "url": "images/projects/baymax/2.png",
    "revision": "4f7cde10d0796bdc254a3274ef4f9923"
  },
  {
    "url": "images/projects/baymax/3.png",
    "revision": "3dc2948bd4a7a07f56becea2ceb9a76e"
  },
  {
    "url": "images/projects/baymax/icon.png",
    "revision": "64f8ecc360fb17e87eb8ef7562dae48d"
  },
  {
    "url": "images/projects/bharathacks/1.png",
    "revision": "4b09c295665e91a01712b344c991c724"
  },
  {
    "url": "images/projects/bharathacks/icon.png",
    "revision": "4d61b5f6e6604519e8afd9ae3028baac"
  },
  {
    "url": "images/projects/blueboard/1.jpg",
    "revision": "858f036bc3a6679a99aeaf67c1a3f39b"
  },
  {
    "url": "images/projects/blueboard/2.jpg",
    "revision": "5374f13fc80b75068895b4308959f1cd"
  },
  {
    "url": "images/projects/blueboard/icon.png",
    "revision": "1b6fff33601a39d415a1bbb09251057a"
  },
  {
    "url": "images/projects/blueboard/team.png",
    "revision": "e1a945413117849d0968442b7ea6d805"
  },
  {
    "url": "images/projects/capella/1.jpg",
    "revision": "49915f9b5d70aa082a6881e68c9cc9f1"
  },
  {
    "url": "images/projects/capella/emergency.png",
    "revision": "b6aa2b628a02052ce6b2bfa086e1dddc"
  },
  {
    "url": "images/projects/capella/home.png",
    "revision": "2e6419aa5577f73a744cb47d48b81b6e"
  },
  {
    "url": "images/projects/capella/icon.png",
    "revision": "4da698fca69a95ee1bf879e4c8cf03cd"
  },
  {
    "url": "images/projects/capella/location.png",
    "revision": "f49fef8e428197c8573b14d7f45975d0"
  },
  {
    "url": "images/projects/capella/people.png",
    "revision": "cab609ea1a18c32e791e659a61381650"
  },
  {
    "url": "images/projects/capella/s1.jpg",
    "revision": "298f0b631cffab4804a601e07319e960"
  },
  {
    "url": "images/projects/capella/s2.jpg",
    "revision": "54252a66eb201a1906bbcf307c3a306c"
  },
  {
    "url": "images/projects/capella/s3.jpg",
    "revision": "7186df5539d7c9929c9739d44ef963b3"
  },
  {
    "url": "images/projects/capella/s4.jpg",
    "revision": "8dd71037100db95e4d7c5201c52f008e"
  },
  {
    "url": "images/projects/capella/settings.png",
    "revision": "f297a63ea7d25f66682e1bc9a3cca090"
  },
  {
    "url": "images/projects/capella/taste.png",
    "revision": "107bdabff44e7d2354e7a0811783ba5c"
  },
  {
    "url": "images/projects/classrebels/1.jpg",
    "revision": "eabf9749c04bd3a3befcee099223d679"
  },
  {
    "url": "images/projects/classrebels/2.png",
    "revision": "cf4e605361efbe99aeef746249c276b5"
  },
  {
    "url": "images/projects/classrebels/3.png",
    "revision": "f6d3a572081e6ce332afad9528b6e41b"
  },
  {
    "url": "images/projects/classrebels/4.png",
    "revision": "fd10e82a6673042a165a9d80a2d4f4a1"
  },
  {
    "url": "images/projects/classrebels/5.png",
    "revision": "3dd0567f924dbde60cd328ef8dbce84b"
  },
  {
    "url": "images/projects/classrebels/cover.png",
    "revision": "5b1ef70ff94daf11f2bfbbd5a412233e"
  },
  {
    "url": "images/projects/classrebels/icon.png",
    "revision": "81748ebd32dfb55fa2345b97843e06ec"
  },
  {
    "url": "images/projects/clshare/1.png",
    "revision": "543f51af39a40959631fb917e5832cc2"
  },
  {
    "url": "images/projects/clshare/2.png",
    "revision": "75dc18226f4892c3e242c4273b9afda5"
  },
  {
    "url": "images/projects/clshare/3.png",
    "revision": "0a343c8dc19244736040e3b11f61f6f7"
  },
  {
    "url": "images/projects/clshare/4.png",
    "revision": "239ba03081a3eb88d9f41983e8bcec45"
  },
  {
    "url": "images/projects/clshare/5.png",
    "revision": "9d3fdcdfd977554b30ffd5d318c62d43"
  },
  {
    "url": "images/projects/clshare/6.png",
    "revision": "f019bb1766cc72e295381ec2cdb26009"
  },
  {
    "url": "images/projects/clshare/cover.png",
    "revision": "5ec24a24a4184f39ff716d22cb83805d"
  },
  {
    "url": "images/projects/clshare/icon.png",
    "revision": "907cf6d71aa23b610e74e91f6fddd512"
  },
  {
    "url": "images/projects/clshare/IMG_1169.jpg",
    "revision": "522699f38231b192123c90f83e3ccd52"
  },
  {
    "url": "images/projects/clshare/IMG_1195.jpg",
    "revision": "9b5ce3f88ed1b5b0516e493cb5c0fafd"
  },
  {
    "url": "images/projects/crink-jewel/1.png",
    "revision": "4bdd70dd5f45185ae80a0266d84c8a1a"
  },
  {
    "url": "images/projects/crink-jewel/2.png",
    "revision": "b888b673ecbc237f3a8ff7e57189d6c5"
  },
  {
    "url": "images/projects/crink-jewel/3.png",
    "revision": "1aa08e4c8245947fe68d1dd45e03289c"
  },
  {
    "url": "images/projects/crink-jewel/4.png",
    "revision": "6a07610b8c70fe366f59bee7e958b244"
  },
  {
    "url": "images/projects/crink-jewel/5.png",
    "revision": "52b56e3d9a08c8a7d6d0fe69bd0031de"
  },
  {
    "url": "images/projects/crink-jewel/6.png",
    "revision": "cdd424d3bb0daa470d02e6e68c3c0168"
  },
  {
    "url": "images/projects/crink-jewel/7.png",
    "revision": "fdfa28ffcafeedc3d1aae178ca234c89"
  },
  {
    "url": "images/projects/crink-jewel/icon.png",
    "revision": "facdfaea9fb7aaa2bccb3ee785ad7504"
  },
  {
    "url": "images/projects/csunite/community.png",
    "revision": "38905c7d6306ea3092e1c595f9d1197f"
  },
  {
    "url": "images/projects/csunite/icon.png",
    "revision": "004b1af7c699ade6d802c998efda8feb"
  },
  {
    "url": "images/projects/csunite/learn.png",
    "revision": "fd0f158615a8e20f976fd1f442400f3a"
  },
  {
    "url": "images/projects/csunite/news.png",
    "revision": "549e4d5e9ed9fb440b6f532b85086ece"
  },
  {
    "url": "images/projects/csunite/profile.png",
    "revision": "4002ee04e7abd5ddcb3e97d18baa5ed0"
  },
  {
    "url": "images/projects/csunite/request.png",
    "revision": "f0e36a6cd1698b50c287e9b45321fd30"
  },
  {
    "url": "images/projects/csunite/requests.png",
    "revision": "bf06e50127463a87e145439929255b7a"
  },
  {
    "url": "images/projects/csunite/slide-1.png",
    "revision": "03b1b8bdf21f4b8f1e5c9d05ace671e9"
  },
  {
    "url": "images/projects/csunite/slide-2.png",
    "revision": "2fbdb9ea11a8f03fcc838bae3356adb8"
  },
  {
    "url": "images/projects/csunite/video.png",
    "revision": "5cc212124cdd6ff5667106f61ac8c7cf"
  },
  {
    "url": "images/projects/cyankart/1.png",
    "revision": "9acb0a0c80e98af3795b696ebaf55665"
  },
  {
    "url": "images/projects/cyankart/2.png",
    "revision": "ccedb5fa2c0640bf1b84026895709769"
  },
  {
    "url": "images/projects/cyankart/a.png",
    "revision": "b14ffc713692ce8e9bf9740569f12ad5"
  },
  {
    "url": "images/projects/cyankart/icon.png",
    "revision": "7aeea52911d70c536a4b280f58522f0a"
  },
  {
    "url": "images/projects/delhi-government/1.png",
    "revision": "06e8e72e2e1b02d9671e9c43a78072bb"
  },
  {
    "url": "images/projects/delhi-government/2.png",
    "revision": "6959bc1b8be0d4719eb6ddeae51f239c"
  },
  {
    "url": "images/projects/delhi-government/3.png",
    "revision": "b21a6f80b2b7d97fe0b1231977c9881a"
  },
  {
    "url": "images/projects/delhi-government/icon.png",
    "revision": "55ed45b92e6da669b5fa9871800048ef"
  },
  {
    "url": "images/projects/drillmaps/1.png",
    "revision": "0015fb2199f7a851e31049c28a9393a6"
  },
  {
    "url": "images/projects/drillmaps/2.png",
    "revision": "d19e66d0889bc8872a75128f2a5ffebc"
  },
  {
    "url": "images/projects/drillmaps/3.png",
    "revision": "f2ba6ca000fd032ed70b974d6430b9ec"
  },
  {
    "url": "images/projects/drillmaps/4.png",
    "revision": "eaee8ddd8fd4f4477e7d05fff11341a8"
  },
  {
    "url": "images/projects/drillmaps/5.png",
    "revision": "f4899826663df22f7390e4a2e36d26fc"
  },
  {
    "url": "images/projects/drillmaps/icon.png",
    "revision": "2b546e729005c089d6abcb40b91aee80"
  },
  {
    "url": "images/projects/drillmaps/logo.png",
    "revision": "82f4bb77aaa007988893b98e018dfcf1"
  },
  {
    "url": "images/projects/facematch/1.jpg",
    "revision": "41bd190f9aea24b565a40e407478dc7e"
  },
  {
    "url": "images/projects/facematch/2.jpg",
    "revision": "8c37fe28388061527fed6cbf202316bc"
  },
  {
    "url": "images/projects/facematch/icon.png",
    "revision": "66f03536b6ecb6167294d978654006e4"
  },
  {
    "url": "images/projects/firangana/1.png",
    "revision": "6569a7423e39bfa707a9536007c3a507"
  },
  {
    "url": "images/projects/firangana/2.png",
    "revision": "69fad04a361b88458372180a835fe964"
  },
  {
    "url": "images/projects/firangana/3.png",
    "revision": "c30297ef3d747a08ca0a2f51fdf00e0b"
  },
  {
    "url": "images/projects/firangana/coupon.png",
    "revision": "f3e20b5cba8244a76b364fa8a90d4f45"
  },
  {
    "url": "images/projects/firangana/icon.png",
    "revision": "c419e9fd365b20912fe4dfbc350bafbf"
  },
  {
    "url": "images/projects/firangana/insta.png",
    "revision": "855cafe71f25a09768833eb8292c8a5d"
  },
  {
    "url": "images/projects/firangana/photo.png",
    "revision": "36bec36272b81658b254fb8ddf5ae065"
  },
  {
    "url": "images/projects/firangana/tw.png",
    "revision": "06010ac507893d69508be5dd41c78479"
  },
  {
    "url": "images/projects/gsmc/1.png",
    "revision": "7c45c41f9ff5612de4c25f1684f1006d"
  },
  {
    "url": "images/projects/gsmc/cover.png",
    "revision": "7c02db1866e98ff36d7fb23ec7fa39e8"
  },
  {
    "url": "images/projects/gsmc/icon.png",
    "revision": "cfca6044024e4527d59e5620d1aea674"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/1.jpg",
    "revision": "4bf75d17a7f0ee574f3dc8df8b6fa508"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/2.jpg",
    "revision": "c7f97a09fee4d0bae93cb8c15e217286"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/3.jpg",
    "revision": "130d50274edbebfd06fc6312d00d8ebc"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/4.jpg",
    "revision": "1512d5dc7cb5f8c0f171b1ad267df9a3"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/5.jpg",
    "revision": "3d9ed8f753ee430a6a1606f3861ab19f"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/6.jpg",
    "revision": "df225dc1588b3e15c77ff7e241387ee0"
  },
  {
    "url": "images/projects/ibm-iot-escape-room/icon.png",
    "revision": "e3d6306b1eb901dcd46fb6125531f3c6"
  },
  {
    "url": "images/projects/internetorg/1.jpg",
    "revision": "b2b92c77c1518a2c7a3f4755ba4cabee"
  },
  {
    "url": "images/projects/internetorg/2.jpg",
    "revision": "acac5110492e9c1dfabf74b47e903409"
  },
  {
    "url": "images/projects/internetorg/3.png",
    "revision": "94c49cee77743f3a84c29d6f37817d9e"
  },
  {
    "url": "images/projects/internetorg/4.png",
    "revision": "7d0891254be64454eca20f8169a77932"
  },
  {
    "url": "images/projects/internetorg/icon.png",
    "revision": "6a9b8c7d9786041ea1bfc5d44e24d870"
  },
  {
    "url": "images/projects/justice-adda/0001.jpg",
    "revision": "9bc3e6383a1a2f754d3fab3c4d87e803"
  },
  {
    "url": "images/projects/justice-adda/0002.jpg",
    "revision": "1874216f43dfa2472dcb574d678c9399"
  },
  {
    "url": "images/projects/justice-adda/0003.jpg",
    "revision": "63acc7980c446960452dfa6c4582c08c"
  },
  {
    "url": "images/projects/justice-adda/0004.jpg",
    "revision": "b2c9b448cd096afdbe7b3498831982d1"
  },
  {
    "url": "images/projects/justice-adda/0005.jpg",
    "revision": "bf9a58f0382aeb88405fffb5059eb40a"
  },
  {
    "url": "images/projects/justice-adda/0006.jpg",
    "revision": "101dd6ad78e6a99c76376ea5ad929b6f"
  },
  {
    "url": "images/projects/justice-adda/0007.jpg",
    "revision": "99db4d134b162c5e37aadf35dd000909"
  },
  {
    "url": "images/projects/justice-adda/0008.jpg",
    "revision": "01e902bb7c0a3dc77c621dcfdfdad1b1"
  },
  {
    "url": "images/projects/justice-adda/0009.jpg",
    "revision": "7e84834204bc91553283f985bcaae47b"
  },
  {
    "url": "images/projects/justice-adda/0010.jpg",
    "revision": "a696e0e3845b05f89b88d673d2dece03"
  },
  {
    "url": "images/projects/justice-adda/0011.jpg",
    "revision": "9583fc3f3e985294ebd2517f8ee26bed"
  },
  {
    "url": "images/projects/justice-adda/0012.jpg",
    "revision": "19943779594e499afaa3b22a02a47f93"
  },
  {
    "url": "images/projects/justice-adda/0013.jpg",
    "revision": "863300aa76042821f8b687a1bdf9f2b7"
  },
  {
    "url": "images/projects/justice-adda/0014.jpg",
    "revision": "fc734866baad2f66160b8f9978d4fc2b"
  },
  {
    "url": "images/projects/justice-adda/0015.jpg",
    "revision": "039bdbb143a83be942998740f92c5719"
  },
  {
    "url": "images/projects/justice-adda/0016.jpg",
    "revision": "ac575aa36a91dcd46e4844c987f2871e"
  },
  {
    "url": "images/projects/justice-adda/0017.jpg",
    "revision": "dc5c10b33fd2dbadbb0b953af2318127"
  },
  {
    "url": "images/projects/justice-adda/0018.jpg",
    "revision": "02960d3b2035a01f04be89b229b4e335"
  },
  {
    "url": "images/projects/justice-adda/icon.png",
    "revision": "297afcf27abb091a012fd8f11c8b52cc"
  },
  {
    "url": "images/projects/keeep/1.jpg",
    "revision": "7499f42c9909bee886e8c4b7823ae787"
  },
  {
    "url": "images/projects/keeep/2.jpg",
    "revision": "9b3db083435b3a6901ce31751122d0e3"
  },
  {
    "url": "images/projects/keeep/3.jpg",
    "revision": "0fc2313cccfe8652008bca67f00c307d"
  },
  {
    "url": "images/projects/keeep/4.jpg",
    "revision": "47a9dee5d5f06a96c775a34c6dbfd5ef"
  },
  {
    "url": "images/projects/keeep/5.jpg",
    "revision": "6045e77e5a54ce0ea93e6fba627002ca"
  },
  {
    "url": "images/projects/keeep/6.jpg",
    "revision": "9085e2b84b41918484e1e274f0d99af3"
  },
  {
    "url": "images/projects/keeep/7.jpg",
    "revision": "c6f64497e7ed7121d098a34bff50dc35"
  },
  {
    "url": "images/projects/keeep/icon.png",
    "revision": "9e34b652196e0bbf67c93520e7326545"
  },
  {
    "url": "images/projects/melangebox/icon.png",
    "revision": "8ea9d081a97e6e1092454aa888273944"
  },
  {
    "url": "images/projects/mwlii/1.png",
    "revision": "c9b075028cec8a1a4c4c539beca7f080"
  },
  {
    "url": "images/projects/mwlii/2.png",
    "revision": "dd8825a39b16f218a149698001c52860"
  },
  {
    "url": "images/projects/mwlii/3.png",
    "revision": "12f3896ad3ce398609010a8f888d1c8a"
  },
  {
    "url": "images/projects/mwlii/4.png",
    "revision": "614984b4dcdd66b9f3e39de6a9d20f74"
  },
  {
    "url": "images/projects/mwlii/cover.png",
    "revision": "c75ac935bea7f11d4597d5b5e6a28f21"
  },
  {
    "url": "images/projects/mwlii/icon.png",
    "revision": "9137b929e75194d74864f7a6af95d8b2"
  },
  {
    "url": "images/projects/naari/1.png",
    "revision": "cdea0c4b925356829e5bfffbfc08e713"
  },
  {
    "url": "images/projects/naari/2.png",
    "revision": "bc4f8ff369ffffaafe8cd5ea7f12626c"
  },
  {
    "url": "images/projects/naari/3.png",
    "revision": "a7b425124a29ace123370c5b91ad3b3e"
  },
  {
    "url": "images/projects/naari/4.png",
    "revision": "416c9157a4960f3ce550c6a5472e03fe"
  },
  {
    "url": "images/projects/naari/5.png",
    "revision": "efe5042dacd812158a42ad5ed633fd2b"
  },
  {
    "url": "images/projects/naari/express.png",
    "revision": "5c3d4ff6ca0fdc715520093bcfe8f708"
  },
  {
    "url": "images/projects/naari/home.png",
    "revision": "36a02a3d426d09325838b19a6b07551c"
  },
  {
    "url": "images/projects/naari/icon.png",
    "revision": "339b1ed8c02032ab35c48f70a46bef73"
  },
  {
    "url": "images/projects/naari/ml.png",
    "revision": "04c623f2ab40ecb406e571366b5b1410"
  },
  {
    "url": "images/projects/open-source/staart/1.png",
    "revision": "8fc7cc7f55916ac47b39eba2bff48fa0"
  },
  {
    "url": "images/projects/open-source/staart/2.png",
    "revision": "5b39552388db7733006ce66854d07fc4"
  },
  {
    "url": "images/projects/open-source/staart/3.png",
    "revision": "3fcbedd85fd86727febe0db1bd6aa5ca"
  },
  {
    "url": "images/projects/open-source/staart/4.png",
    "revision": "2c743423965da981b8c69e81078d5d9c"
  },
  {
    "url": "images/projects/open-source/staart/5.png",
    "revision": "e1de544abf6472ddd99b2bf0a9b3946b"
  },
  {
    "url": "images/projects/open-source/staart/6.png",
    "revision": "b457d0b2a7539233a71c18f5e2b053e3"
  },
  {
    "url": "images/projects/open-source/staart/cover.png",
    "revision": "360a028e327365c9750a8f6b2025536d"
  },
  {
    "url": "images/projects/open-source/uppload/1.png",
    "revision": "0f86e4f62db1874b763c13e330d08f44"
  },
  {
    "url": "images/projects/open-source/uppload/2.png",
    "revision": "04e8b9fcc4f4f9563df7276d1faa2722"
  },
  {
    "url": "images/projects/open-source/uppload/3.png",
    "revision": "6ce8592643c49426a24aabafcc6a6b42"
  },
  {
    "url": "images/projects/open-source/uppload/4.png",
    "revision": "834d5601d762325efd488f5cb2097666"
  },
  {
    "url": "images/projects/open-source/uppload/5.png",
    "revision": "56259cc6d744a7572de07c826513f1c4"
  },
  {
    "url": "images/projects/open-source/uppload/6.png",
    "revision": "deec8a8578998c74cb7514e2bcfb7240"
  },
  {
    "url": "images/projects/open-source/uppload/cover.png",
    "revision": "61413bb50be8c4236389ef6f34d8be69"
  },
  {
    "url": "images/projects/open-source/uppload/icon.png",
    "revision": "d184f0394aa938f14224d7468eb40554"
  },
  {
    "url": "images/projects/oswald-labs/agastya/chatbot.png",
    "revision": "6f9c2a21562cfb7b1cca3b59bfcd9b36"
  },
  {
    "url": "images/projects/oswald-labs/agastya/cover.png",
    "revision": "470292ac622a214ef3487b214b69486c"
  },
  {
    "url": "images/projects/oswald-labs/agastya/customize.png",
    "revision": "7157c6c881247f6335f4086f14fe5dac"
  },
  {
    "url": "images/projects/oswald-labs/agastya/home.png",
    "revision": "760045906f809799985add4b4044104d"
  },
  {
    "url": "images/projects/oswald-labs/agastya/icon.png",
    "revision": "7c022477344accdef9cbc02005e1b053"
  },
  {
    "url": "images/projects/oswald-labs/agastya/modes.png",
    "revision": "19451d0d985bb442f8307ce8cc8bf550"
  },
  {
    "url": "images/projects/oswald-labs/agastya/settings.png",
    "revision": "60fe3ed1d42b9f6755ca822ed75175c7"
  },
  {
    "url": "images/projects/oswald-labs/agastya/whitelabelled.png",
    "revision": "68ef27c7f85d88660d04c9fdfd583d5b"
  },
  {
    "url": "images/projects/oswald-labs/shravan/cover.png",
    "revision": "314beb3937dc4032411092121c908150"
  },
  {
    "url": "images/projects/oswald-labs/shravan/icon.png",
    "revision": "24e6659a3616d385865783819aa8f891"
  },
  {
    "url": "images/projects/oswald-labs/valmiki/cover.png",
    "revision": "a41cffd3a676ca8540453042ac32ae23"
  },
  {
    "url": "images/projects/oswald-labs/valmiki/homepage.png",
    "revision": "599aaea682149f4c993a1396ef1581e3"
  },
  {
    "url": "images/projects/oswald-labs/valmiki/icon.png",
    "revision": "630064e90143fa92b2b9d7e8323dc3c3"
  },
  {
    "url": "images/projects/oswald-labs/valmiki/preferences.png",
    "revision": "accb98a2c100a0a38444ec4a516291ac"
  },
  {
    "url": "images/projects/pickquick/1.png",
    "revision": "8fd730ef2790010cbc680a960390d82b"
  },
  {
    "url": "images/projects/pickquick/2.png",
    "revision": "789f315d3b8703b441d559f781b488ea"
  },
  {
    "url": "images/projects/pickquick/cover.png",
    "revision": "f1df0340a85020dbabe22559171d159f"
  },
  {
    "url": "images/projects/pickquick/icon.png",
    "revision": "8534edeae5293c5e17636cacf61c5ad0"
  },
  {
    "url": "images/projects/project-blue/1.png",
    "revision": "d0027ee2c08a8d88474f4dda50a392d0"
  },
  {
    "url": "images/projects/project-blue/2.jpg",
    "revision": "cf30e831f7d6719481539f3e7d036b58"
  },
  {
    "url": "images/projects/project-blue/3.jpg",
    "revision": "dfb0cdcdd95b43cfdb1ea69d6a2825dc"
  },
  {
    "url": "images/projects/project-blue/4.jpg",
    "revision": "fa73c181d4b70f94357858c134261aba"
  },
  {
    "url": "images/projects/project-blue/5.jpg",
    "revision": "2cd95dc9033aec2b14ddebb7a4bb95ee"
  },
  {
    "url": "images/projects/project-blue/icon.png",
    "revision": "f46695baeda55815500900755dc5355c"
  },
  {
    "url": "images/projects/project-blue/sketch.jpg",
    "revision": "9c2c5b5d069c08d8d4158e88da2adf57"
  },
  {
    "url": "images/projects/project-blue/sketch2.jpg",
    "revision": "87995f66ea03211e361569d98f6578d0"
  },
  {
    "url": "images/projects/refuserve/1.png",
    "revision": "05a7ee1af0418b63ffcf973ee78fc940"
  },
  {
    "url": "images/projects/refuserve/2.png",
    "revision": "48e4b07e3f1a7c5e0bf0572be4a454e1"
  },
  {
    "url": "images/projects/refuserve/3.png",
    "revision": "0fcce4d3c219ec1d045962e01b9f8236"
  },
  {
    "url": "images/projects/refuserve/icon.png",
    "revision": "d67a52f3365b0f986e4e7deb82f5b094"
  },
  {
    "url": "images/projects/refuserve/slide1.jpg",
    "revision": "1e0217b47060d3a1ad95a470f1410955"
  },
  {
    "url": "images/projects/refuserve/slide2.jpg",
    "revision": "fbb6dd2f0f4c30bf16296e97d59ac4d3"
  },
  {
    "url": "images/projects/saga-music/1.jpg",
    "revision": "9b30596098f822448c7ca62aa286a4c3"
  },
  {
    "url": "images/projects/saga-music/2.jpg",
    "revision": "53fd5f6f25a5a0f12ba984e3af14ae65"
  },
  {
    "url": "images/projects/saga-music/3.jpg",
    "revision": "d1ca583c9ebc5035a2f30d9c9802bbe8"
  },
  {
    "url": "images/projects/saga-music/4.jpg",
    "revision": "39c048d1b290eabf9f42134b42c01308"
  },
  {
    "url": "images/projects/saga-music/5.jpg",
    "revision": "da6ee32ee92641c60fb6b42eeb0dbcaa"
  },
  {
    "url": "images/projects/saga-music/6.jpg",
    "revision": "2ed8c3876e21de6391ccb8876311439e"
  },
  {
    "url": "images/projects/saga-music/7.jpg",
    "revision": "0b6ab1e712ad9ea364e6a97c79d456fd"
  },
  {
    "url": "images/projects/saga-music/8.png",
    "revision": "347472654a0828ab8829a939733103d5"
  },
  {
    "url": "images/projects/saga-music/9.png",
    "revision": "e06645be2c80b50639f16f3deba03dd3"
  },
  {
    "url": "images/projects/saga-music/icon.png",
    "revision": "d45f536fdde532b7fbe8759649db5104"
  },
  {
    "url": "images/projects/scrub/1.png",
    "revision": "a39244bc95ed8dd9e2fd95611f3d6364"
  },
  {
    "url": "images/projects/scrub/2.png",
    "revision": "0a2e7e52bf256df6d8d95b45a5ab6265"
  },
  {
    "url": "images/projects/scrub/3.png",
    "revision": "af5aaf9fcf3f76be5c7886afe99cc9e0"
  },
  {
    "url": "images/projects/scrub/4.png",
    "revision": "a84f864ec6fad333db0ae6925d741429"
  },
  {
    "url": "images/projects/scrub/icon.png",
    "revision": "a5d20895fda2311a69559d6b5bc63c48"
  },
  {
    "url": "images/projects/scrub/image.png",
    "revision": "dc018520a605158f081dfd007164bce4"
  },
  {
    "url": "images/projects/sixteeninches/1.png",
    "revision": "84c940f7be27834baedfccba13351775"
  },
  {
    "url": "images/projects/sixteeninches/2.png",
    "revision": "4e6f599f871cab5a657ce4ff88a6dadd"
  },
  {
    "url": "images/projects/sixteeninches/3.png",
    "revision": "e43e94d080c21683c55b43ea6556c492"
  },
  {
    "url": "images/projects/sixteeninches/icon.png",
    "revision": "9a3e7933813888174c76512024dbf58b"
  },
  {
    "url": "images/projects/staart/icon.png",
    "revision": "633de87f477a7f9fc2846947a7117aa2"
  },
  {
    "url": "images/projects/type-with-tobias/0.png",
    "revision": "b1673557260748b20f138da93180ce1c"
  },
  {
    "url": "images/projects/type-with-tobias/1.png",
    "revision": "b63197cf2276ddf350b03dce7b6b34bf"
  },
  {
    "url": "images/projects/type-with-tobias/2.png",
    "revision": "ec0b1dd4fa2816cd08ad45ba144f0925"
  },
  {
    "url": "images/projects/type-with-tobias/3.png",
    "revision": "9c8347090f9da4731e8c4f9f92a613d9"
  },
  {
    "url": "images/projects/type-with-tobias/4.png",
    "revision": "bca47acf70a41f96f6d9543371abeb16"
  },
  {
    "url": "images/projects/type-with-tobias/5.png",
    "revision": "ca433a35c8ce85e7cac3c488bbb74491"
  },
  {
    "url": "images/projects/type-with-tobias/6.png",
    "revision": "b18df621bfce2b8d905e0043765c57ae"
  },
  {
    "url": "images/projects/type-with-tobias/7.png",
    "revision": "85531027f33263973cbeab8f7e7135b1"
  },
  {
    "url": "images/projects/type-with-tobias/ticket.png",
    "revision": "2ad9894d97f3cd3f427244892950adab"
  },
  {
    "url": "images/projects/unifiers/icon.png",
    "revision": "801228c433f038cbf2fb98936daabaf0"
  },
  {
    "url": "images/projects/wendy/1.png",
    "revision": "6d1d7fea377fcf8d734b161b75691491"
  },
  {
    "url": "images/projects/wendy/2.png",
    "revision": "c83ad08c042342cbca896f69e410df29"
  },
  {
    "url": "images/projects/wendy/3.png",
    "revision": "90bb9fe8d9d017a7c04b41220d7f8ec7"
  },
  {
    "url": "images/projects/wendy/4.png",
    "revision": "3d0910d97fe5c24b9d652f91c80b6ac8"
  },
  {
    "url": "images/projects/wendy/5.png",
    "revision": "02f0bf9beae5d2907a16625db489b62c"
  },
  {
    "url": "images/projects/wendy/6.png",
    "revision": "d5302bb9fa684ee485b12dd5d7d2f473"
  },
  {
    "url": "images/projects/wendy/icon.png",
    "revision": "65b23b8e0d33a68ae464a75f39781c23"
  },
  {
    "url": "images/projects/wendy/slide-1.png",
    "revision": "62df6d2d0eb972e5c4c25aa4270fe889"
  },
  {
    "url": "images/projects/wendy/slide-2.png",
    "revision": "e9e622e4cfe80de6af0403571c0c959f"
  },
  {
    "url": "images/projects/wendy/slide-3.png",
    "revision": "43f8f8b896e0fab0c86ea520919ef0dd"
  },
  {
    "url": "images/projects/wendy/slide-4.png",
    "revision": "252ceec73d06f923035202368d723c9c"
  },
  {
    "url": "images/versions/abacus/blog.png",
    "revision": "dde5132c129ba92038262d64a05a7af1"
  },
  {
    "url": "images/versions/abacus/home.png",
    "revision": "58494686d5cb6664df3ea061164e6287"
  },
  {
    "url": "images/versions/abacus/projects.png",
    "revision": "aa4e897524242264ecf2f6d00610dcac"
  },
  {
    "url": "images/versions/academia/about.png",
    "revision": "0be180f3973db48b0a50e25a9f10ef42"
  },
  {
    "url": "images/versions/academia/home.png",
    "revision": "08aa9e69268a7ccb6ccb8b2d20d2ee96"
  },
  {
    "url": "images/versions/academia/portfolio.png",
    "revision": "a2875db4419298d259cedc1f54c8dbae"
  },
  {
    "url": "images/versions/academia/writing.png",
    "revision": "b2aee203f95446ea9c5503e91a4c4a00"
  },
  {
    "url": "images/versions/access/about.png",
    "revision": "2c3c9eae416fc000a4d72733213f736f"
  },
  {
    "url": "images/versions/access/home-full.png",
    "revision": "38913428849003e9fd63872f9fd9473a"
  },
  {
    "url": "images/versions/access/home.png",
    "revision": "79f0cbf45c5a5b25994bca778b693bf8"
  },
  {
    "url": "images/versions/airbrush/home.png",
    "revision": "eb829da87a5ae6d959464b17a0c839b1"
  },
  {
    "url": "images/versions/altitude/home.png",
    "revision": "b7ed1a0a43d3798b8cab9b53c4c21b8e"
  },
  {
    "url": "images/versions/amsterdam/about.png",
    "revision": "29cda909861034e9fe80a2b79a679499"
  },
  {
    "url": "images/versions/amsterdam/blog.png",
    "revision": "b5d210277df3da8965fe4dd74b375107"
  },
  {
    "url": "images/versions/amsterdam/city.png",
    "revision": "c77dcfdaff58c8e1f2aab7987931a76e"
  },
  {
    "url": "images/versions/amsterdam/contact.png",
    "revision": "57b065212b28c1ec4c503a16cf67b76f"
  },
  {
    "url": "images/versions/amsterdam/events.png",
    "revision": "cd82481bf8774b55d2912c971108e642"
  },
  {
    "url": "images/versions/amsterdam/home.png",
    "revision": "38672c48ab4886e5e1d4c6ab5797a24a"
  },
  {
    "url": "images/versions/amsterdam/life.png",
    "revision": "ead5f0086afaf4abbf279414a5bcc1b5"
  },
  {
    "url": "images/versions/amsterdam/projects.png",
    "revision": "ee39120764ed6e118ea1481a5054ab58"
  },
  {
    "url": "images/versions/amsterdam/travel.png",
    "revision": "381412b6239a964f222cf58abbe8914c"
  },
  {
    "url": "images/versions/amsterdam/videos.png",
    "revision": "a11a1a7a6586b617a2096113ee1f749b"
  },
  {
    "url": "images/versions/arise/about.png",
    "revision": "d79f3a67aa4e5e5588518e40d8a5405b"
  },
  {
    "url": "images/versions/arise/home.png",
    "revision": "a6975f4086c06fc0b361c722aaf2068a"
  },
  {
    "url": "images/versions/arise/photos.png",
    "revision": "c850baff51f661ba705a3a49ee1a66e7"
  },
  {
    "url": "images/versions/arise/writing.png",
    "revision": "66613c0d26a7cc0961ef07f76b4f4ba5"
  },
  {
    "url": "images/versions/artistic/home.png",
    "revision": "185969b973331b72518e4348da518e5f"
  },
  {
    "url": "images/versions/assembly/about.png",
    "revision": "2323ba53bc80ef102dcc5ff1978955d0"
  },
  {
    "url": "images/versions/assembly/home.png",
    "revision": "e98362ffa60ae651bb197be6f6f4684e"
  },
  {
    "url": "images/versions/assembly/press.png",
    "revision": "80a7c1340dc05d26d419c53ca6e01dd9"
  },
  {
    "url": "images/versions/assembly/projects.png",
    "revision": "46d5626759ad555fe967927ceb1ebe8c"
  },
  {
    "url": "images/versions/asterisk/home.png",
    "revision": "46f3649325cba2cdf4c034ebab6ec36c"
  },
  {
    "url": "images/videos/aristotle.png",
    "revision": "ce72293f1346ecd7cfba20562edbcc13"
  },
  {
    "url": "images/videos/bharathacks.png",
    "revision": "aab9df939f0e4a09cc2a520fc9c8af66"
  },
  {
    "url": "images/videos/oneup.png",
    "revision": "98a165db0d410c36a9f3c2573b7ea223"
  },
  {
    "url": "images/videos/rtvoost.png",
    "revision": "d0efae5147f3555fff9c628c99d5535b"
  },
  {
    "url": "images/videos/startup-india-rocks.png",
    "revision": "c05e7d5789ce5ebd76b89f9c8595f6ec"
  },
  {
    "url": "images/videos/ut-india.png",
    "revision": "0248464540d7e3cc71fec20ed06583ba"
  },
  {
    "url": "images/videos/wwcode.png",
    "revision": "34ce84f29ea2c651766223bdfc43601b"
  },
  {
    "url": "index.html",
    "revision": "e26d04b8b57ec38a579f151775254b05"
  },
  {
    "url": "life/index.html",
    "revision": "e0f7fdb2f98f07063cb9f3532b094445"
  },
  {
    "url": "life/listening/index.html",
    "revision": "a21d2ac4300922369f4d32a7ee921e2e"
  },
  {
    "url": "life/listening/music/artists/1/index.html",
    "revision": "d91b3d02759105e2f54c1a3d5f7ade6c"
  },
  {
    "url": "life/listening/music/artists/index.html",
    "revision": "dbca811b51ce9d72234d647581b5c8b0"
  },
  {
    "url": "life/listening/music/index.html",
    "revision": "cd594fe8c5cd6fdcda9c5667b0c28860"
  },
  {
    "url": "life/listening/music/songs/1/index.html",
    "revision": "ae9c773ded73f34039e238eb3f544abf"
  },
  {
    "url": "life/listening/music/songs/index.html",
    "revision": "860e12189aad2330289ff69d00e03463"
  },
  {
    "url": "life/listening/podcasts/1/index.html",
    "revision": "7d3fc0ea25fd6f93c8a63150acfdaa92"
  },
  {
    "url": "life/listening/podcasts/2/index.html",
    "revision": "31ec4b6515543d89f76aeea83f724a1e"
  },
  {
    "url": "life/listening/podcasts/index.html",
    "revision": "df7ff3b6cecabf7996a47c27c395f61d"
  },
  {
    "url": "life/reading/1/index.html",
    "revision": "5bb7823d193da4fa734fa22fff88992b"
  },
  {
    "url": "life/reading/2/index.html",
    "revision": "01c38e4f0d25eec07c549444180157b1"
  },
  {
    "url": "life/reading/index.html",
    "revision": "dacab9567ad640e549e770a4bb2f4b56"
  },
  {
    "url": "life/travel/1/index.html",
    "revision": "5a9ac8d6113553e9fbfbce65b5e4adc3"
  },
  {
    "url": "life/travel/agra/index.html",
    "revision": "bab9b5b4cb2e298049b154b7459459cc"
  },
  {
    "url": "life/travel/boston/index.html",
    "revision": "279bb5bf98ebc57c25b35088f19d55b5"
  },
  {
    "url": "life/travel/bruges/index.html",
    "revision": "e2e67151ba81e02a0e1e3116fe0eabcb"
  },
  {
    "url": "life/travel/cologne/index.html",
    "revision": "5f356ac5907a1de00f63fdcd08396e1b"
  },
  {
    "url": "life/travel/eindhoven/index.html",
    "revision": "4589550acde96d5042c1b44a3ba3fa67"
  },
  {
    "url": "life/travel/enschede/index.html",
    "revision": "9c5f287ecd034c59920bb9fc80959942"
  },
  {
    "url": "life/travel/gurugram/index.html",
    "revision": "d1fde3b0d9863a77bedcf20ce5c78c6a"
  },
  {
    "url": "life/travel/hannover/index.html",
    "revision": "880006459e0adc525c23e534cec9914c"
  },
  {
    "url": "life/travel/heerlen/index.html",
    "revision": "efaaa5db58df505e99d1c1c26bbeca63"
  },
  {
    "url": "life/travel/index.html",
    "revision": "1b0fe28c7c23dd7b8fb7c2c13fc6b80b"
  },
  {
    "url": "life/travel/kanpur/index.html",
    "revision": "1b2046fbae5c8683f842acfde2bf1398"
  },
  {
    "url": "life/travel/kuala-lumpur/index.html",
    "revision": "d5837bb7a20a9adafb0b8376f3f3c5ce"
  },
  {
    "url": "life/travel/london/index.html",
    "revision": "4cbf61edf446c91dc38795b91bd23d7b"
  },
  {
    "url": "life/travel/los-angeles/index.html",
    "revision": "83ff814c19f483c94c710ea9f7f3b5b0"
  },
  {
    "url": "life/travel/new-delhi/index.html",
    "revision": "20eedde8c3f58a9b7de39662746e5bec"
  },
  {
    "url": "life/travel/new-york/index.html",
    "revision": "ebf53a5f8d2bdc650b4f62289921a9cd"
  },
  {
    "url": "life/travel/paris/index.html",
    "revision": "60543ddc293ba9dd3cf654a9e7b95c90"
  },
  {
    "url": "life/travel/sf-bay-area/index.html",
    "revision": "6480fe8064c865e52f0677921ab81a96"
  },
  {
    "url": "life/travel/the-hague/index.html",
    "revision": "5fbc015d4a96fe482cd941a9b491cbee"
  },
  {
    "url": "life/travel/toulouse/index.html",
    "revision": "9b8610942b7cb588fdf47a467895eadb"
  },
  {
    "url": "life/travel/washington-dc/index.html",
    "revision": "01a383a7f241eba2d7285eaffda5c6bf"
  },
  {
    "url": "life/work/emails/index.html",
    "revision": "13eab068d0cd6b031710b0005ac851e1"
  },
  {
    "url": "life/work/index.html",
    "revision": "e3090043f4de24737a799a7ed9779c7a"
  },
  {
    "url": "life/work/programming/index.html",
    "revision": "cb2482fb6639645604dd692ff6a67051"
  },
  {
    "url": "mailing-list/index.html",
    "revision": "6cca12df065d0da12175decb0e5db3da"
  },
  {
    "url": "mstile-144x144.png",
    "revision": "373228eff6d7a426872d59dbef215038"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "182ee8b9016187e73fdea5b2361b4ad3"
  },
  {
    "url": "mstile-310x150.png",
    "revision": "5ad0f8af9fbc44d7051f1242a94ea338"
  },
  {
    "url": "mstile-310x310.png",
    "revision": "27249a169289ceb87ed5f3b59f08c560"
  },
  {
    "url": "mstile-70x70.png",
    "revision": "a0419495184433bdbb76d3a74f02d9ef"
  },
  {
    "url": "press/index.html",
    "revision": "75743c2900d1cf371a5ef1b47fbf8d00"
  },
  {
    "url": "projects/1/index.html",
    "revision": "6a73b6eef9afeae89600ee2a3d937f7f"
  },
  {
    "url": "projects/2/index.html",
    "revision": "cd5fc42dc2da63f17b202719e19c27cd"
  },
  {
    "url": "projects/3/index.html",
    "revision": "a96a2505cffd883aabae36ff6b24821c"
  },
  {
    "url": "projects/ai/index.html",
    "revision": "3604d306f9fda7e9befd979b369f37d3"
  },
  {
    "url": "projects/app/index.html",
    "revision": "e802c1c32aa3e05c55d14b772385fb83"
  },
  {
    "url": "projects/aristotle/index.html",
    "revision": "5f5144e00e685eb58613ee4a10925d20"
  },
  {
    "url": "projects/baymax/index.html",
    "revision": "8a51e269802db56c0b5234e18fdc8f94"
  },
  {
    "url": "projects/bharathacks/index.html",
    "revision": "8791192b49f7df1a511c8a7a0930f802"
  },
  {
    "url": "projects/blueboard/index.html",
    "revision": "c78e9716a8e9f79b9e79e6e465dfff6b"
  },
  {
    "url": "projects/branding/index.html",
    "revision": "dd4b2d31b92e43729b936d96189aa465"
  },
  {
    "url": "projects/capella/index.html",
    "revision": "bd305dc0c09ec95c0258757d8ac7e3cb"
  },
  {
    "url": "projects/classrebels/index.html",
    "revision": "dd89a62a59344774c1e433faf970e588"
  },
  {
    "url": "projects/clshare/index.html",
    "revision": "37e89e323c36b4900eb8c62bd13d7eb3"
  },
  {
    "url": "projects/collaborators/akshat-srivastava/index.html",
    "revision": "08de642ed423d04d45b44f91de804503"
  },
  {
    "url": "projects/collaborators/alex-imbrea/index.html",
    "revision": "4b7f25c401df5d04741a295becc1ae03"
  },
  {
    "url": "projects/collaborators/index.html",
    "revision": "17b6625cf310d1a638bdf82f05250ede"
  },
  {
    "url": "projects/collaborators/mahendra-singh-raghuwanshi/index.html",
    "revision": "946d429eecc01d0dd7504374a43a004d"
  },
  {
    "url": "projects/collaborators/mateo-sadowski/index.html",
    "revision": "c515653ee27d150037187d8fd284060d"
  },
  {
    "url": "projects/collaborators/maurits-van-der-vijgh/index.html",
    "revision": "9bb9be6339148226ee9458cc29dedcf4"
  },
  {
    "url": "projects/collaborators/mohit-ahuja/index.html",
    "revision": "4937670161af268398a1f4ed5ea4e490"
  },
  {
    "url": "projects/collaborators/nishant-gadihoke/index.html",
    "revision": "72ba17145b1e68c81b987fad8e5a7c2d"
  },
  {
    "url": "projects/crink-jewel/index.html",
    "revision": "90c461bf5bdab1245d544866c23f6d4f"
  },
  {
    "url": "projects/csunite/index.html",
    "revision": "a938070c1aadde4dd6f10d317f7babe4"
  },
  {
    "url": "projects/cyankart/index.html",
    "revision": "a36c3ba52d4574535470231f717b1043"
  },
  {
    "url": "projects/delhi-government/index.html",
    "revision": "db5d91d321cd77e19808a2bbf3619af1"
  },
  {
    "url": "projects/drillmaps/index.html",
    "revision": "779326f2b6ae0d838dc6fe66667c941c"
  },
  {
    "url": "projects/event/index.html",
    "revision": "7c7f79bea162db0735f19580b0c82438"
  },
  {
    "url": "projects/facematch/index.html",
    "revision": "339f1c1e5b2636b605a9c7cfa0a804f2"
  },
  {
    "url": "projects/firangana/index.html",
    "revision": "1c2c10063f72327c62727cd7f2292dad"
  },
  {
    "url": "projects/gsmc/index.html",
    "revision": "9b4a247811dc2f7f587d3929452187cf"
  },
  {
    "url": "projects/hardware/index.html",
    "revision": "03770a81b9cf276ba210332199dadf06"
  },
  {
    "url": "projects/ibm-iot-escape-room/index.html",
    "revision": "989fba37294f653745752e3983abccc5"
  },
  {
    "url": "projects/index.html",
    "revision": "8b04cb0cb4b8277dd1c5291ac3bfadab"
  },
  {
    "url": "projects/industrial-design/index.html",
    "revision": "456e6be7f66f8c866eec1067a5523e76"
  },
  {
    "url": "projects/internet.org/index.html",
    "revision": "b933e07c99a6c87983bd03f57ef10de5"
  },
  {
    "url": "projects/iot/index.html",
    "revision": "bdfe40dea06165e6ae1e4ecf6e867940"
  },
  {
    "url": "projects/justice-adda/index.html",
    "revision": "5763d43f3d192ae5fd5d7f8ee45fbb94"
  },
  {
    "url": "projects/keeep/index.html",
    "revision": "4002d8b4c4206699413b0c087f1e8bc1"
  },
  {
    "url": "projects/made-with-love-in-india/index.html",
    "revision": "cc41b91d5a8fc7bb7e61768276a82e42"
  },
  {
    "url": "projects/melangebox/index.html",
    "revision": "62a126ae03636e625fec8e5a80d03710"
  },
  {
    "url": "projects/naari/index.html",
    "revision": "723aa7b8e9ccebeb1f8eeb08e4432f9c"
  },
  {
    "url": "projects/open-source/index.html",
    "revision": "697b9925e5942f4d244d5210e4ee5ccd"
  },
  {
    "url": "projects/open-source/staart/index.html",
    "revision": "92e1845f04f5e0a09b2456759f31e5d1"
  },
  {
    "url": "projects/open-source/uppload/index.html",
    "revision": "248730156e0e432dd6ca2033aa872bbd"
  },
  {
    "url": "projects/oswald-labs/agastya/index.html",
    "revision": "454e62eb1cf9a267472571be02f869ad"
  },
  {
    "url": "projects/oswald-labs/index.html",
    "revision": "0d82e9e8f89954bd6c5fc4bc89e47c83"
  },
  {
    "url": "projects/oswald-labs/shravan-apps/index.html",
    "revision": "ccad5133eb50df4771aacfe3477ae80b"
  },
  {
    "url": "projects/oswald-labs/valmiki/index.html",
    "revision": "525f3d8f55d9d207da6cabc791649ec8"
  },
  {
    "url": "projects/pickquick/index.html",
    "revision": "ea547a9544ab84a8068ee4ea40e2f975"
  },
  {
    "url": "projects/print/index.html",
    "revision": "4788ba343dc2fbcc3d4fedd58ef9603c"
  },
  {
    "url": "projects/project-blue/index.html",
    "revision": "5d502ea268eefa7ea28f68b8a8476ae4"
  },
  {
    "url": "projects/refuserve/index.html",
    "revision": "9c32a507121fd04e28b5fafd81419071"
  },
  {
    "url": "projects/saga-music/index.html",
    "revision": "5ee72b7437497e080c806ea274376812"
  },
  {
    "url": "projects/scrub/index.html",
    "revision": "7f3d56ea2846fc7580154ab398fb7416"
  },
  {
    "url": "projects/sixteeninches/index.html",
    "revision": "423b1fa2a4ebb3a02e42199410598746"
  },
  {
    "url": "projects/stack/c++/index.html",
    "revision": "d4ebecf9f3a226e73292275e46955688"
  },
  {
    "url": "projects/stack/index.html",
    "revision": "bb0bebe9d5e6a44ced944fe01fd362d1"
  },
  {
    "url": "projects/stack/java/index.html",
    "revision": "ad8dac60858273874170110dbba72a8a"
  },
  {
    "url": "projects/stack/javascript/index.html",
    "revision": "bee5d1c1415e28d9836c7cc490f3d340"
  },
  {
    "url": "projects/stack/php/index.html",
    "revision": "3bd0fd6a23c0c3d9880c607cc21eeb71"
  },
  {
    "url": "projects/stack/python/index.html",
    "revision": "ecbdb6a43e64a533428855e42e586010"
  },
  {
    "url": "projects/stack/typescript/index.html",
    "revision": "73a015bb3f0c026c14e101376690e53e"
  },
  {
    "url": "projects/startup/index.html",
    "revision": "01c426a3689af73e22d9890479aa1b23"
  },
  {
    "url": "projects/tools/1/index.html",
    "revision": "52b1ab5139657e7380e966964f7d7f6f"
  },
  {
    "url": "projects/tools/android/index.html",
    "revision": "0c0dbf85c0e85b49885dda43b7fdd792"
  },
  {
    "url": "projects/tools/arduino/index.html",
    "revision": "7934bb247a7aa8a84718d1ace6dea5b9"
  },
  {
    "url": "projects/tools/firebase/index.html",
    "revision": "6ba0c19a0c0c88f5ab2e69d3a7839766"
  },
  {
    "url": "projects/tools/illustrator/index.html",
    "revision": "5477ca44ced1f97b53724c52b56454d4"
  },
  {
    "url": "projects/tools/indesign/index.html",
    "revision": "cd6bfe48f4c9c7ecc7cded02354bddc0"
  },
  {
    "url": "projects/tools/index.html",
    "revision": "fc37db4af39f45a9c3e809a0de1c3e1c"
  },
  {
    "url": "projects/tools/node.js/index.html",
    "revision": "0264c666d27eb3e2a8489cd3e9c50320"
  },
  {
    "url": "projects/tools/photoshop/index.html",
    "revision": "d9a9386a0cc7a2f581485ae08da2d79d"
  },
  {
    "url": "projects/tools/processing/index.html",
    "revision": "44099ce7f3bcc76b0faa439b7d2320cb"
  },
  {
    "url": "projects/tools/shopify/index.html",
    "revision": "18816c7d52ab21394399594ce1432ad2"
  },
  {
    "url": "projects/tools/sketch/index.html",
    "revision": "90fbe030e66a38b23908fcaba19ac8fa"
  },
  {
    "url": "projects/tools/vue.js/index.html",
    "revision": "e250e4b81b5dd378707c8bc5e705967c"
  },
  {
    "url": "projects/tools/woocommerce/index.html",
    "revision": "87b9c96ae9a3b1d652aa1dcdca9ae7fe"
  },
  {
    "url": "projects/tools/wordpress/index.html",
    "revision": "6a42a7a218c0315ac431d817e4287891"
  },
  {
    "url": "projects/type-with-tobias/index.html",
    "revision": "d21d733139a1c9abc1b6e47e6a54839a"
  },
  {
    "url": "projects/unifiers/index.html",
    "revision": "9f1a094c2242f2cab7a4cf324d42a1cd"
  },
  {
    "url": "projects/web/index.html",
    "revision": "d7c6c7b63651bfd03e2ca190e15064c9"
  },
  {
    "url": "projects/wendy/index.html",
    "revision": "2801789c6d285c92939f6113bf04fc18"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "f7e738728c38dc61de33f0a27329a003"
  },
  {
    "url": "sitemap/index.html",
    "revision": "227153482ea1fff2c6789d27da51bb65"
  },
  {
    "url": "timeless/index.html",
    "revision": "b046c42a78c6df226355ff90faf32423"
  },
  {
    "url": "videos/index.html",
    "revision": "b173dea1d76698f8b45a55296377792d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
