import Link from 'next/link';

const LoginComponent = ({ text, path, isUserLoggedIn }) => {
    
    if (isUserLoggedIn){
        return(
            <div>
                <Link href={path} className='link-nav login'>{text}</Link> {/* En el text iria el nombre de usuario */}
                <div>LOGO</div>
            </div>

        )
    }else{
        return(
            <Link href={"login"} className='link-nav unlogged'>Login</Link>
        )
    }

};

export default LoginComponent;