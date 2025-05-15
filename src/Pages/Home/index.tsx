import { Play } from "phosphor-react";
//biblioteca de formularios do react de forma controlled e uncontrolled 
import {useForm} from 'react-hook-form';

//bibliotecas para a validação de formulario

import {zodResolver} from '@hookform/resolvers/zod';


import * as zod from 'zod'

import {
  CountDownmContainer, 
  FormContainer,
  HomeContainer, 
  MinutesAmountIput,
  Separator, 
  StartCountDownmButton, 
  TaskInput 
} from "./styled";
import { useState } from "react";
  //esse objeto dentro do use form serve para passar as regras do formulario, o numero de caracteres minimos, espaço vazio,etc
const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  MinutesAmount: zod
  .number()
  .min(5)
  .max(60),

})

// interface NewCycleFormData {
//   task: string
//   minutesAmount: number

// }
//isso é a mesma coisa que a interface acima, mas com o zod
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string;
  task: string;
  minutesAmount:number;
}

//controlled / uncontrolled
export function Home() {

  const [cycles,setCycles] =useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


  //no useForm nos passamos um objeto de configurações e falamos que queros usar um resolver de validação e quem fara isso é o zodResolver
  const{ register , handleSubmit , watch , reset } = useForm<NewCycleFormData>({
    resolver:zodResolver(newCycleFormValidationSchema),
    //aqui eu passo o valor inicial de cada campo
    defaultValues: {
      task: '',
      MinutesAmount: 0,
    }
  })
  function handleCreateNewCycle(data:NewCycleFormData){
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id, 
      task: data.task,
      minutesAmount:data.MinutesAmount,
    }
    //sempre que uma alteração de estado depender do valor anterior , devemos usar funções
    setCycles((state) => [...cycles,newCycle])
    setActiveCycleId(id)
    reset()//limpa os campos dos formularios automaticamente

  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds =activeCycle? activeCycle.minutesAmount *60 : 0
  const currentSeconds = activeCycle ? totalSeconds -amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2,'0')
  const seconds = String(secondsAmount).padStart(2,'0')

// esse watch ele observa o task em tempo real

  //controlle: pega cada caracter digitado e e executa o codigo toda vez que um novo caracter for digitado

  //uncontrolled é o oposto disso, Você acessa o valor só quando precisa
  const task= watch('task')
  const isSubmitDisabled = !task

  //function register recebe o nome do input e alguns metodos
  
  
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action={''}>
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 

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
            step={5}
            min={5}
            // max={60}
            {...register('MinutesAmount',{valueAsNumber:true})}
            />

            <span>minutos. </span>
        </FormContainer>

        <CountDownmContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
        <Separator>:</Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountDownmContainer>
        
        <StartCountDownmButton  disabled={isSubmitDisabled} type="submit">  
        <Play size={24}/>
        Começar

        </StartCountDownmButton>

        </form>
    </HomeContainer>
  );
}
