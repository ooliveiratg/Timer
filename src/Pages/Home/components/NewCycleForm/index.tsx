import { FormContainer, TaskInput, MinutesAmountIput } from "./styled"
import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCycleForm () {

  const {activeCycle} = useContext(CyclesContext)
  const {register} = useFormContext()

    return(
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
            disabled={!!activeCycle}
            placeholder="Dê um nome para seu projeto" 
            id="task"
            list="task-suggetions"
            {...register('task')} 
            />

        <datalist id="task-suggestions" >
            <option value="">Projetoadadadasa</option>
        </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountIput 
            type="number" 
            id="minutesAmount"  
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={1}
            max={60}
            {...register('MinutesAmount',{valueAsNumber:true})}
            />

            <span>minutos. </span>
        </FormContainer>
    )
}