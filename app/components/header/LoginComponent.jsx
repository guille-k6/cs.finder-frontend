import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

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
            <Link href={"login"} className='link-nav unlogged'>
                <AccountCircleOutlinedIcon fontSize='small'></AccountCircleOutlinedIcon>
                <p>Login</p>
            </Link>
        )
    }

};

export default LoginComponent;