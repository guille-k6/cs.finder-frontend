'use server'

import { redirect } from 'next/dist/server/api-utils';
import { cookies } from 'next/headers'

export async function loginServerAction(formData){
    const url = 'http://localhost:8080/api/v1/auth/authenticate';
    const body = { email: formData.get('nombre'), password: formData.get('contrasena') };
    const cookieStore = cookies()

    try{
        const response = await fetch(url, { method: 'POST',
                                            headers: { 'Content-Type': 'application/json'},
                                            body: JSON.stringify(body)
                                            });
        const data = await response.json();
        
        if(response.ok){
            cookieStore.set('jwt', data.token);
            redirect('/registrate');
        }

    } catch(error){
        console.log(error);
    }
}