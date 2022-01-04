// module.exports = {
//   swcMinify: true,
//   productionBrowserSourceMaps: true,
//   images: {
//     domains: ['cdn.sanity.io',]
//   }
// }

// https://nextjs.org/docs/advanced-features/security-headers
// https://scotthelme.co.uk/a-new-security-header-referrer-policy/
// https://stackoverflow.com/a/61846083
// https://guydumais.digital/blog/how-to-deploy-a-strict-content-security-policy-csp-with-next-js/
// https://content-security-policy.com/examples/allow-inline-style/
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN; http://localhost:3333'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // {
  //   key: 'Content-Security-Policy',
  //   value: "default-src 'self'; img-src 'self' https://cdn.sanity.io; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; connect-src 'self' http://localhost:9001"
  // }
]

// next.config.js
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
    /* regular next.js config options here */
    swcMinify: true,
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //   config.resolve.extensions = [ '.mjs', '.js', '.jsx', '.json', '.tsx', '.ts' ];
    //   // Important: return the modified config
    //   return config
    // },
    productionBrowserSourceMaps: true,
    images: {
      domains: ['cdn.sanity.io','images.pexels.com', 'segudpyruneoudwusaud.nhost.run', 's.gravatar.com', 'localhost',  'lh3.googleusercontent.com']
    },
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/(.*)',
          headers: securityHeaders,
        },
      ]
    }
});

