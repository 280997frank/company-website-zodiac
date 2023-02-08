const ContentSecurityPolicy = {
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "frame-ancestors": ["'self'"],
  "manifest-src": ["'self'"],
  "prefetch-src": ["'self'"],
  "default-src": ["'self'"],
  "object-src": ["data:"],
  "script-src": [
    "'self'",
    "https://www.google.com/recaptcha/",
    "https://www.gstatic.com/recaptcha/",
    "https://www.youtube.com/iframe_api",
    "https://www.youtube.com/s/player/df5197e2/www-widgetapi.vflset/www-widgetapi.js",
  ],
  "child-src": ["'self'"],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://fonts.googleapis.com/css2",
  ],
  "font-src": ["'self'", "https://fonts.gstatic.com/s/barlow/"],
  "img-src": [
    "'self'",
    "data:",
    "http://placehold.jp/",
    "https://picsum.photos/",
    "https://i.picsum.photos/",
    "https://firebasestorage.googleapis.com/",
  ],
  "media-src": ["'self'", "data:", "https://firebasestorage.googleapis.com/"],

  "connect-src": [
    "'self'",
    "data:",
    "https://identitytoolkit.googleapis.com/v1/",
    "https://securetoken.googleapis.com/v1/token",
    "https://companywebsite-api.zodiac.com.sg/query",

    `https://us-central1-${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.cloudfunctions.net/`,
    `https://content-firebaseappcheck.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/apps/`,
    "https://companywebsite-api.zodiac.com.sg/query",
  ],
  "worker-src": ["'self'"],
  "frame-src": [
    "'self'",
    "https://www.google.com/recaptcha/",
    "https://recaptcha.google.com/recaptcha/",
    "https://www.youtube.com/",
  ],
};

if (process.env.NODE_ENV === "production") {
  ContentSecurityPolicy["upgrade-insecure-requests"] = [];
} else {
  ContentSecurityPolicy["script-src"].push("'unsafe-eval'");
  ContentSecurityPolicy["connect-src"].push(
    `http://localhost:5001/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/us-central1/`
  );
  ContentSecurityPolicy["connect-src"].push(
    `ws://localhost:3000/_next/webpack-hmr`
  );
}

const securityHeaders = [
  // {
  //   key: "Content-Security-Policy",
  //   value: Object.entries(ContentSecurityPolicy)
  //     .map(([key, value]) => {
  //       return `${key} ${value.join(" ")};`;
  //     })
  //     .join(" ")
  //     .replace(/\s{2,}/g, " ")
  //     .trim(),
  // },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  reactStrictMode: true,
  generateEtags: false,
  poweredByHeader: false,
};
