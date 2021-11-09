import {useUser} from '@auth0/nextjs-auth0';
import {auth0} from '../../utils/auth0';

import styles from '../../styles/Home.module.css'

const Protected = props => {
  const {user} = useUser();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>Reed.co.uk - Auth0 @auth0/nextjs-auth0 SDK demo app</p>
        <p>Protected page with SSR withPageAuthRequired()</p>
        <p>User: {user?.name}</p>
      </main>
    </div>
  )
};

export const getServerSideProps = async context => {
  const instance = await auth0();

  const sessionOutside = instance.getSession(context.req, context.res);
  console.log('session outside: ', sessionOutside?.user.name);

  return instance.withPageAuthRequired({
      getServerSideProps: async () => {
          const session = instance.getSession(context.req, context.res);
          console.log('session inside: ', session?.user.name);

          return {
              props: {
                  //
              }
          };
      }
  })(context);
};

export default Protected;
