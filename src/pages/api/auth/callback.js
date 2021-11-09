import {auth0} from '../../../utils/auth0';

export default async function callback(req, res) {
    try {
        const {handleCallback} = await auth0();
        await handleCallback(req, res, {});
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}
