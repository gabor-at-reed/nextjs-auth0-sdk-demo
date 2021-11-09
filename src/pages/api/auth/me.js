import {auth0} from '../../../utils/auth0';

export default async function me(req, res) {
    try {
        const {handleProfile, getSession} = await auth0();
        const session = await getSession(req, res);

        if (session) {
            await handleProfile(req, res, {});
        } else {
            res.status(200).end(null);
        }
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}
