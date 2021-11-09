const projectName = 'nextjs-auth0-sdk-demo';

module.exports = {
  assetPrefix: `/${projectName}`,
  env: {
    assetPrefix: `/${projectName}`
  },
  async rewrites() {
    return [
      {
          source: '/:any*/_next/webpack-hmr:path*',
          destination: '/_next/webpack-hmr:path*'
      },
      {
          source: `/${projectName}/_next/:path*`,
          destination: '/_next/:path*'
      },
      {
          source: `/${projectName}/api/:path*`,
          destination: '/api/:path*'
      },
      {
          source: `/${projectName}/signin`,
          destination: '/api/auth/login'
      },
      {
          source: `/${projectName}/signout`,
          destination: '/api/auth/logout'
      },
      {
          source: `/${projectName}/:path*`,
          destination: '/:path*'
      }
    ];
  }
};
