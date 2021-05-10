const aws = require('aws-sdk');

let s3 = new aws.S3({
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  nextAuthUrl: process.env.NEXTAUTH_URL,
  nextAuthSecret: process.env.NEXTAUTH_SECRET
});

module.exports = {
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/variables.scss";`,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/inicio',
        permanent: false,
      },
    ];
  },
  publicRuntimeConfig: {
    apiBaseUrl: s3.apiBaseUrl || process.env.NEXT_PUBLIC_API_BASE_URL,
  },
  serverRuntimeConfig: {
    nextAuthUrl: s3.nextAuthUrl || process.env.NEXTAUTH_URL,
    nextAuthSecret: s3.nextAuthSecret || process.env.NEXTAUTH_SECRET
  }
};
