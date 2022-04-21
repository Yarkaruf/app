const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  target: "serverless",

  env: {
    PROJECT_PREFIX: "medialand",
    API_URL: process.env.API_URL || "https://app.sshvps.ru",
    DCIM_API_URL: process.env.DCIM_API_URL || "https://app.sshvps.ru",
    DEDIC_API_URL: process.env.DEDIC_API_URL || "https://app.sshvps.ru",
    APP_URL: process.env.APP_URL || "https://app.sshvps.ru/",
    SENTRY_DNS: process.env.SENTRY_DSN || "https://43868230b799411089a40b21416384be@sentry.stage.sshvps.net/8",
    YANDEX_METRIKA_COUNTER: "87394306",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "G-QPX8KE2F2S"
  }

  // i18n: {
  //   locales: ["en-US", "ru-RU"],
  //   defaultLocale: "ru-RU"
  // }
});
