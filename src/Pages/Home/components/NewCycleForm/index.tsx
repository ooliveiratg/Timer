import { FormContainer, TaskInput, MinutesAmountIput } from "./styled"
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";

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
            <option value="">Projeto</option>
        </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountIput 
            type="number" 
            id="minutesAmount"  
            placeholder="00"
            disabled={!!activeCycle}
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount',{valueAsNumber:true})}
            />

            <span>minutos. </span>
        </FormContainer>
    )
}