'use client';

import Link from 'next/link';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from 'react';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const { data: session, status } = useSession();

    function handleSignOut(){
        sessionStorage.removeItem("sessionUser");
        signOut();
    }

    console.log({session, status});
    
    if (status === 'authenticated'){
        return(
            <div className='d-flex'>
                <AccountCircleOutlinedIcon fontSize='small'></AccountCircleOutlinedIcon>
                <p>{username}</p>
                <button onClick={handleSignOut}> Sign out</button>
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