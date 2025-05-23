import { HandPalm, Play } from "phosphor-react";





import {
  HomeContainer, 
  StartCountDownmButton, 
  StopCountDownmButton
} from "./styled";
import { useEffect, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
  //esse objeto dentro do use form serve para passar as regras do formulario, o numero de caracteres minimos, espaço vazio,etc


interface Cycle {
  id: string;
  task: string;
  minutesAmount:number;
  startDate: Date;
  interruptedDate?: Date;
  finished?:Date;
}

//controlled / uncontrolled
export function Home() {

  const [cycles,setCycles] =useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

      function handleInterriptCycle() {
      setCycles(state => state.map((cycle)=> {
        if(cycle.id === activeCycleId){
          return { ...cycle, interruptedDate: new Date()}
        }else{
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
    }

  function handleCreateNewCycle(data:NewCycleFormData){
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id, 
      task: data.task,
      minutesAmount:data.MinutesAmount,
      startDate: new Date(),
    }
    //sempre que uma alteração de estado depender do valor anterior , devemos usar funções
    setCycles((state) => [...cycles,newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()//limpa os campos dos formularios automaticamente

  }



  
  const currentSeconds = activeCycle ? totalSeconds -amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2,'0')
  const seconds = String(secondsAmount).padStart(2,'0')

  useEffect(() => {
    if(activeCycle){
      document.title = `${minutes}:${seconds}`
    }
  },[minutes,seconds,activeCycle])

// esse watch ele observa o task em tempo real

  //controlle: pega cada caracter digitado e e executa o codigo toda vez que um novo caracter for digitado

  //uncontrolled é o oposto disso, Você acessa o valor só quando precisa
  const task= watch('task')
  const isSubmitDisabled = !task

  //function register recebe o nome do input e alguns metodos
  
  console.log(cycles)
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action={''}>
        <NewCycleForm/>
        <CountDown/>

        
       {activeCycle? (
         <StopCountDownmButton onClick={handleInterriptCycle}
          type="button">  
        <HandPalm size={24}/>
        Interromper
        </StopCountDownmButton>
       ):(
         <StartCountDownmButton  disabled={isSubmitDisabled} type="submit">  
        <Play size={24}/>
        Começar
        </StartCountDownmButton>
       )
      }

        </form>
    </HomeContainer>
  );
}
