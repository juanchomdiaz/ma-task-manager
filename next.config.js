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
  }
};
