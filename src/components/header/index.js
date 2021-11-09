const Header = props => {
    const {user} = props;
    const menuUrl = !user ? props.login : props.logout;
    const menuText = !user ? 'login' : 'logout';

    const userDetail = () => {

        if (user) {
            return (
                <p>
                    You are logged in [<strong>{user.name}</strong>]
                </p>
            );
        }

        return (<></>);
    }

    return (
        <>
            {userDetail()}
            <a href={menuUrl}>{menuText}</a>
        </>
    );
};

export default Header;