import {auth0} from '../../../utils/auth0';

export default async function login(req, res) {
    try {
        const {handleLogin} = await auth0();
        const redirectPath = req.headers.referer;

        await handleLogin(req, res, {
            returnTo: redirectPath
        });
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}
