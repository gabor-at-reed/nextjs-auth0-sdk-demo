import {UserProvider} from '@auth0/nextjs-auth0';
import config from '../config';
import '../styles/globals.css';

function BaseApp({Component, pageProps}) {
  return (
      <UserProvider profileUrl={pageProps.profileUrl ?? `/${config.projectName}/api/auth/me`}>
          <Component {...pageProps} />
      </UserProvider>
  );
}

export default BaseApp;
