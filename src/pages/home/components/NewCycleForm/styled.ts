import styled from "styled-components"
import { defaultTheme } from "../../../../Themes/default"

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

