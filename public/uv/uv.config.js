/*global Ultraviolet*/

const blocked = [
  "trk.pinterest.com",
  "widgets.pinterest.com",
  "events.reddit.com",
  "events.redditmedia.com",
  "ads.youtube.com",
  "ads-api.tiktok.com",
  "analytics.tiktok.com",
  "ads-sg.tiktok.com",
  "analytics-sg.tiktok.com",
  "business-api.tiktok.com",
  "ads.tiktok.com",
  "log.byteoversea.com",
  "ads.yahoo.com",
  "analytics.yahoo.com",
  "geo.yahoo.com",
  "udc.yahoo.com",
  "udcm.yahoo.com",
  "advertising.yahoo.com",
  "analytics.query.yahoo.com",
  "partnerads.ysm.yahoo.com",
  "log.fc.yahoo.com",
  "gemini.yahoo.com",
  "adtech.yahooinc.com",
  "extmaps-api.yandex.net",
  "appmetrica.yandex.ru",
  "adfstat.yandex.ru",
  "metrika.yandex.ru",
  "advertising.yandex.ru",
  "offerwall.yandex.net",
  "adfox.yandex.ru",
  "auction.unityads.unity3d.com",
  "webview.unityads.unity3d.com",
  "config.unityads.unity3d.com",
  "adserver.unityads.unity3d.com",
  "iot-eu-logser.realme.com",
  "iot-logser.realme.com",
  "bdapi-ads.realmemobile.com",
  "bdapi-in-ads.realmemobile.com",
  "api.ad.xiaomi.com",
  "data.mistat.xiaomi.com",
  "data.mistat.india.xiaomi.com",
  "data.mistat.rus.xiaomi.com",
  "sdkconfig.ad.xiaomi.com",
  "sdkconfig.ad.intl.xiaomi.com",
  "globalapi.ad.xiaomi.com",
  "tracking.rus.miui.com",
  "adsfs.oppomobile.com",
  "adx.ads.oppomobile.com",
  "ck.ads.oppomobile.com",
  "data.ads.oppomobile.com",
  "metrics.data.hicloud.com",
  "metrics2.data.hicloud.com",
  "grs.hicloud.com",
  "logservice.hicloud.com",
  "logservice1.hicloud.com",
  "logbak.hicloud.com",
  "click.oneplus.cn",
  "open.oneplus.net",
  "samsungads.com",
  "smetrics.samsung.com",
  "nmetrics.samsung.com",
  "samsung-com.112.2o7.net",
  "analytics-api.samsunghealthcn.com",
  "advertising.apple.com",
  "tr.iadsdk.apple.com",
  "iadsdk.apple.com",
  "metrics.icloud.com",
  "metrics.apple.com",
  "metrics.mzstatic.com",
  "api-adservices.apple.com",
  "books-analytics-events.apple.com",
  "weather-analytics-events.apple.com",
  "notes-analytics-events.apple.com",
  "fwtracks.freshmarketer.com",
  "adtago.s3.amazonaws.com",
  "analytics.s3.amazonaws.com",
  "advice-ads.s3.amazonaws.com",
  "advertising-api-eu.amazon.com",
  "pagead2.googlesyndication.com",
  "adservice.google.com",
  "afs.googlesyndication.com",
  "mediavisor.doubleclick.net",
  "ads30.adcolony.com",
  "adc3-launch.adcolony.com",
  "events3alt.adcolony.com",
  "wd.adcolony.com",
  "adservetx.media.net",
  "app-measurement.com",
  "analytics.google.com",
  "click.googleanalytics.com",
  "identify.hotjar.com",
  "events.hotjar.io",
  "o2.mouseflow.com",
  "gtm.mouseflow.com",
  "api.mouseflow.com",
  "realtime.luckyorange.com",
  "upload.luckyorange.net",
  "cs.luckyorange.net",
  "an.facebook.com",
  "static.ads-twitter.com",
  "ads-api.twitter.com",
  "offerimage.com",
  "veepteero.com",
  "analyticsengine.s3.amazonaws.com",
  "pagead2.googleadservices.com",
  "stats.g.doubleclick.net",
  "ad.doubleclick.net",
  "static.doubleclick.net",
  "m.doubleclick.net",
  "static.media.net",
  "media.net",
  "google-analytics.com", 
  "ssl.google-analytics.com",
  "adm.hotjar.com",
  "script.hotjar.com",
  "mouseflow.com",
  "cdn.mouseflow.com",
  "cdn-test.mouseflow.com",
  "freshmarketer.com",
  "claritybt.freshmarketer.com",
  "stats.wp.com",
  "luckyorange.com",
  "api.luckyorange.com",
  "cdn.luckyorange.com",
  "w1.luckyorange.com",
  "settings.luckyorange.net",
  "notify.bugsnag.com",
  "sessions.bugsnag.com",
  "api.bugsnag.com",
  "browser.sentry-cdn.com",
  "ads.pinterest.com",
  "analytics.pinterest.com",
  "tools.mouseflow.com",

];

self.__uv$config = {
  /**
   * The prefix for UV (Ultraviolet) resources.
   * @type {string}
   */
  prefix: "/~/uv/",

  /**
   * The bare path.
   * @type {string}
   */
  bare: "/bare/",

  /**
   * Function to encode URLs using Ultraviolet's XOR codec.
   * @type {function}
   * @param {string} url - The URL to encode.
   * @returns {string} The encoded URL.
   */
  encodeUrl: Ultraviolet.codec.xor.encode,

  /**
   * Function to decode URLs using Ultraviolet's XOR codec.
   * @type {function}
   * @param {string} url - The URL to decode.
   * @returns {string} The decoded URL.
   */
  decodeUrl: Ultraviolet.codec.xor.decode,

  /**
   * The handler path.
   * @type {string}
   */
  handler: "/uv/uv.handler.js",

  /**
   * The client path.
   * @type {string}
   */
  client: "/uv/uv.client.js",

  /**
   * The bundle path.
   * @type {string}
   */
  bundle: "/uv/uv.bundle.js",

  /**
   * The config path.
   * @type {string}
   */
  config: "/uv/uv.config.js",

  /**
   * The service worker path.
   * @type {string}
   */
  sw: "/uv/uv.sw.js",

  /**
   * Function to inject scripts into the doc Head
   * @type {function}
   * @param {URL} url - The URL for the rewrite function.
   * @returns {string} - The script to inject.
   * <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js" data-q="vencord"></script>
     <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css" data-q="vencord">
     <link rel="stylesheet" href="https://raw.githubusercontent.com/T3M1N4L/T3M1N4L/main/theme.css" data-q="AMOLEDCOMFY">
   */
   
inject: async (url) => {
    if (url.host === "inv.tux.pizza") {
      return `
            
            <script src="//cdn.jsdelivr.net/npm/eruda"></script> 
            <script>
            eruda.init({
                      defaults: {
                        displaySize: 45,
                        theme: "Material Deep Ocean"
                      }
                    });
            </script>
            <script src="https://raw.githubusercontent.com/T3M1N4L/UV_modified/main/public/inject-custom-iv.js"></script>
          `;
    }
    return `
         <script src="//cdn.jsdelivr.net/npm/eruda"></script>      
         <script src="https://raw.githubusercontent.com/T3M1N4L/UV_modified/main/public/mf-adblock.js"></script>  
         <script>
            eruda.init({
                      defaults: {
                        displaySize: 45,
                        theme: "Material Deep Ocean"
                      }
                    });
            </script>
     `;
  },
  
  
  /**
   * Middleware function for handling requests.
   * @type {function}
   * @param {Request} request - The request object.
   * @returns {Request|Response} The modified request or a response.
   */
  middleware: (request) => {
    const url = new URL(request.url);

    if (blocked.includes(url.host)) {
      console.log("MATCHED BLOCKED");
      return new Response(null, {});
    }

    if (
      /^(.*\.)?phncdn\.com$/.test(url.host) ||
      /\b.*xvideos.*\b/.test(url.host) ||
      /^(.*\.)?pornhub\.com$/.test(url.host) ||
      /\b.*rule34.*\b/.test(url.host) ||
      /^(.*\.)?bestporncomix\.com$/.test(url.host)
    ) {
      console.log("MATCHED P0RN");
      return new Response("This domain has been blocked by UV_modified", {});
    }
    if (
      url.pathname.includes("ads.js") ||
      url.pathname.includes("pagead.js") ||
      url.pathname.includes("partner.ads.js ")
    )
      return new Response(null, {});
    return request;
  },
};
