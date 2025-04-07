import styles from './Button.module.css'
import { ButtonContainer, ButtonVariant } from './Button.styles'

//aquii eu crio uma interface para passar uma propriedade opcional que cada botao pode ter 

interface ButtonsProps {
    variant?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonsProps) {
    
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}