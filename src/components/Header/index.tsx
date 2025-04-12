import { HeaderContainer } from "./styled";
import logo from '../../Assets/Icons/Logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header () {

    return(
        <HeaderContainer>
            <img src={logo} alt="" />

            <nav>
                <NavLink to={'/'} title="Timer">
                    <Timer size={24}/>
                </NavLink>
                
                <NavLink to={'/history'} title="Historico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}