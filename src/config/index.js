const projectName = 'nextjs-auth0-sdk-demo';

const config = {
    projectName,
    assetPrefix: process.env.assetPrefix || '',
    auth0: {
        AUTH0_BASE_URL: `https://nextjs-auth0-sdk-demo.vercel.app/${projectName}`,
        // AUTH0_BASE_URL: `http://localhost:3000/${projectName}`,
        AUTH0_ISSUER_BASE_URL: 'https://secure-dev.reedlabs.co.uk',
        serverSideSDK: {
            profileUrl: `/${projectName}/api/auth/me`,
            loginUrl: `/${projectName}/signin`,
            logoutUrl: `/${projectName}/signout`
        }
    },
    appUrl: {
        public: 'https://nextjs-auth0-sdk-demo.vercel.app'
    },
    apiUrl: {
        base: `/${projectName}`,
        public: `https://nextjs-auth0-sdk-demo.vercel.app/${projectName}`
    }
};

export default config;
