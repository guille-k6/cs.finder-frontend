import BACKEND_ROUTE from "../utils/backendUrl"

async function getJwt() {
    //const res = await fetch(`${BACKEND_ROUTE}/api/v1/auth`);
    //const data = res.json();
    //return data;
}

async function someComponent() {

  const holiwis = await getJwt()

  return (
    // <div>{holiwis.response}</div>
    <p>xd</p> // despues cambiar...
  )
}

export default someComponent