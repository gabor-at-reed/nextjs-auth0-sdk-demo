import {useUser} from '@auth0/nextjs-auth0';
import Head from 'next/head'
import {useRouter} from 'next/router';
import config from '../../config';
import Header from '../../components/header';
import {auth0} from '../../utils/auth0';

import styles from '../../styles/Home.module.css'

const Home = props => {
  const {auth0} = config;
  const {user, isLoading} = useUser();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Auth0 @auth0/nextjs-auth0 SDK demo app - Reed.co.uk</title>
        <meta name="description" content="Reed.co.uk - Auth0 @auth0/nextjs-auth0 SDK demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header
          login={`${auth0.serverSideSDK.loginUrl}?returnTo=${router.asPath}`}
          logout={`${auth0.serverSideSDK.logoutUrl}`}
          user={!isLoading ? user : null}
        ></Header>
        <p>Reed.co.uk - Auth0 @auth0/nextjs-auth0 SDK demo app</p>
      </main>
    </div>
  )
};

export async function getServerSideProps(context) {
  const instance = await auth0();

  const session = instance.getSession(context.req, context.res);
  console.log('session: ', session?.user.name);

  return {
      props: {
          //
      }
  };
}

export default Home;
