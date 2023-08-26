'use client'
import css from './loginStyle.css';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Home() {

    const router = useRouter();

    function handleSubmit(e){
        e.preventDefault();
        const username = e.target.elements.uname.value;
        const password = e.target.elements.psw.value;
        
        const url = 'http://localhost:8080/api/v1/auth/authenticate';
        const body = {
        email: username,
        password: password
        };
        console.log(JSON.stringify(body));
        // here i fetch.
        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
            sessionStorage.setItem("jwt", `Bearer ${data.token}`);
            router.push('./news');
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
    }


  return (  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p>Hola desde el login</p>
     <form onSubmit={handleSubmit}>
        <label htmlFor="uname"><b>Username</b></label>
        <input type="email" placeholder="Enter Username" name="uname" required className='inputLogin'></input>
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required className='inputLogin'></input>
        <button type='submit' className='inputLogin'>Enviar</button>
     </form>
    </main>
  )
}
