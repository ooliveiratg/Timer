import styled from "styled-components";
import { defaultTheme } from "../../Themes/default";

export const HomeContainer = styled.main`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`






export const BaseCountDownmButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor:pointer;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    color: ${defaultTheme["gray-100"]};
    background-color: ${defaultTheme["green-500"]};

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${defaultTheme["green-700"]};
    }

`

export const StartCountDownmButton = styled(BaseCountDownmButton)`
    background:${defaultTheme["green-500"]};
    color: ${defaultTheme["gray-100"]};
    &:not(:disabled):hover{
        background-color: ${defaultTheme["red-700"]};
    }
    
`

export const StopCountDownmButton = styled(BaseCountDownmButton)`
    background-color: ${defaultTheme["red-500"]};
    &:not(:disabled):hover{
        background-color: ${defaultTheme["red-700"]};
    }
`