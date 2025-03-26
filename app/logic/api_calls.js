export default async function getPublicTradePetitions(){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}trade_petitions/public`);
        const trade_petitions = await response.json();
        return trade_petitions;
    } catch(error) {
        return error;
    }
}