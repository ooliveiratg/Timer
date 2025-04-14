import { Play } from "phosphor-react";
import { CountDownmContainer, FormContainer, HomeContainer, MinutesAmountIput, Separator, StartCountDownmButton, TaskInput } from "./styled";

export function Home() {
  return (
    <HomeContainer>
      <form action={''}>
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput placeholder="Dê um nome para seu projeto" id="text" />

        <datalist id="task-suggestions" >
            <option value="">Projetoadadadasa</option>
        </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountIput 
            type="number" 
            id="minutesAmount"  
            placeholder="00"
            step={5}
            min={5}
            max={60}
            />

            <span>minutos. </span>
        </FormContainer>

        <CountDownmContainer>
            <span>0</span>
            <span>0</span>
        <Separator>:</Separator>
            <span>0</span>
            <span>0</span>
        </CountDownmContainer>
        
        <StartCountDownmButton disabled type="submit"> 
        <Play size={24}/>
        Começar

        </StartCountDownmButton>

        </form>
    </HomeContainer>
  );
}
