export default function Home() {

    useEffect(() => {
        console.log(sessionStorage.getItem('jwt'));
        // Aca yo haría una llamada a mi api pero a algun endpoint ya segurizado :P.
        const url = 'http://localhost:8080/api/v1/demo-controller';

        fetch(url, {
            headers: {
            'Authorization': `${sessionStorage.getItem('jwt')}`
            }
        })
            .then(response => {
            if (response.ok) {
                // Acá significa que se pudo logear bien con el token.
                console.log('esta bien que estes aquí!');
                return response.json();
            } else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            })
            .then(data => {
            console.log('Response:', data);
            })
            .catch(error => {
            console.error('Request failed:', error);
            console.log(error);
            });
    }, []);

  return (  
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h3>Hi from secured pagee!</h3>
   </main>
  )
}
