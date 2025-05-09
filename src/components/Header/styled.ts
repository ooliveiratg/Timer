import styled from "styled-components";
import { defaultTheme } from "../../Themes/default";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav{
        display: flex;
        gap: 0.5rem;

        a{
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content:center;

            color: ${defaultTheme["gray-100"]};

            border-top:3px solid transparent ;
            border-bottom: 3px solid transparent;

            &:hover{
                border-bottom: 3px solid ${defaultTheme["green-500"]};
            }

            &:active{
                color: ${defaultTheme["green-500"]};
            }
        }
    }
`

