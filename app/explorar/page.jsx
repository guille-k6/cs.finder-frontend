import { NextResponse } from "next/server";
import LoginModal from "../components/loginModal/loginModal";

// function fijarse(){
//     return NextResponse.redirect('/login')
// }


const ExplorarComponent = () => {
    // fijarse();

    return (
        <>
            <LoginModal/>
        </>
    );
}

export default ExplorarComponent;
