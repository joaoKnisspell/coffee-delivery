//Styled-components
import { DefaultContainer } from "./styles";

//Header
import { Header } from "../components/Header";

//React-router-dom
import { Outlet } from "react-router-dom";

export function DefaultLayout(){
    return(
        <DefaultContainer>
            <Header />
            <Outlet />
        </DefaultContainer>
    )
}

