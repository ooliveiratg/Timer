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

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color:${defaultTheme["gray-100"]} ;
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`

const BaseInput = styled.input`
background-color: transparent;
height: 2.5rem;
border: 0;
border-bottom: 2px solid ${defaultTheme["gray-500"]};
font-weight: bold;
font-size: 1.125rem;
padding: 0 0.5rem;
color: ${defaultTheme["gray-100"]};

&:focus{
    box-shadow: none;
    border-color: ${defaultTheme["green-500"]};
}

&::placeholder{
    color: ${defaultTheme["gray-500"]};
}
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
`
export const MinutesAmountIput = styled(BaseInput)`
    width: 4rem;

`



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
        background-color: ${defaultTheme["green-700"]};
    }
    
`

export const StopCountDownmButton = styled(BaseCountDownmButton)`
    background-color: ${defaultTheme["red-500"]};
    &:not(:disabled):hover{
        background-color: ${defaultTheme["red-700"]};
    }
`