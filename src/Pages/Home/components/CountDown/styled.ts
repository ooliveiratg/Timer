import styled from "styled-components"
import { defaultTheme } from "../../../../Themes/default"

export const CountDownmContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${defaultTheme["gray-100"]};
    display: flex;
    gap: 1rem;

    span{
        background-color:${defaultTheme["gray-700"]} ;
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    overflow: hidden;
    width: 4rem;
    display: flex;
    justify-content: center;

`