import { FormContainer, TaskInput, MinutesAmountIput } from "./styled"
import * as zod from 'zod'
//biblioteca de formularios do react de forma controlled e uncontrolled 
import {useForm} from 'react-hook-form';


//bibliotecas para a validação de formulario

import {zodResolver} from '@hookform/resolvers/zod';

export const NewCycleForm () {

    const newCycleFormValidationSchema = zod.object({
      task: zod.string().min(1, 'informe a tarefa'),
      MinutesAmount: zod
      .number()
      .min(1)
      .max(60),
    
    })
    
    // interface NewCycleFormData {
    //   task: string
    //   minutesAmount: number
    
    // }
    //isso é a mesma coisa que a interface acima, mas com o zod
    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

    //no useForm nos passamos um objeto de configurações e falamos que queros usar um resolver de validação e quem fara isso é o zodResolver
      const{ register , handleSubmit , watch , reset } = useForm<NewCycleFormData>({
        resolver:zodResolver(newCycleFormValidationSchema),
        //aqui eu passo o valor inicial de cada campo
        defaultValues: {
          task: '',
          MinutesAmount: 0,
        }
      })
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