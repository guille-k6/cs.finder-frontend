'use client';

import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { signIn, signOut, useSession } from "next-auth/react";

const LoginComponent = ({ text, path, isUserLoggedIn }) => {

    const { data: session, status } = useSession();

    console.log({session, status});
    
    if (status === 'authenticated'){
        return(
            <div className='d-flex'>
                <button onClick={() => signOut()}> Sign out</button>
                <AccountCircleOutlinedIcon fontSize='small'></AccountCircleOutlinedIcon>
                <p>{session.user?.username}</p>
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