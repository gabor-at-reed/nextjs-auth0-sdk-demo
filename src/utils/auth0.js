// More info: https://github.com/auth0/nextjs-auth0/blob/main/EXAMPLES.md#create-your-own-instance-of-the-sdk
import {initAuth0} from '@auth0/nextjs-auth0';

import config from '../config';

export const setEnvsFromSecretStore = async () => {
    const emulation = await Promise.resolve('got secrets').then(function(secrets) {
        // emulating the AWS secret manager call...

        process.env.AUTH0_CLIENT_ID = process.env.PRE_AUTH0_CLIENT_ID;
        process.env.AUTH0_CLIENT_SECRET = process.env.PRE_AUTH0_CLIENT_SECRET;
        process.env.AUTH0_SECRET = process.env.PRE_AUTH0_SECRET;
    });
};

// Server Side SDK
export const auth0 = async () => {
    await setEnvsFromSecretStore();

    process.env.AUTH0_BASE_URL = config.auth0.AUTH0_BASE_URL;
    process.env.AUTH0_ISSUER_BASE_URL = config.auth0.AUTH0_ISSUER_BASE_URL;
    process.env.NEXT_PUBLIC_AUTH0_PROFILE =
        config.auth0.serverSideSDK.profileUrl;
    process.env.NEXT_PUBLIC_AUTH0_LOGIN = config.auth0.serverSideSDK.loginUrl;

    const init = {
        secret: process.env.AUTH0_SECRET,
        baseURL: process.env.AUTH0_BASE_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
    };

    return initAuth0(init);
};
