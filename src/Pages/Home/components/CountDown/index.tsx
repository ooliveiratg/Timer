import { CountDownmContainer, Separator } from "./styled";
import {differenceInSeconds} from 'date-fns'


export function CountDown() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const totalSeconds =activeCycle? activeCycle.minutesAmount *60 : 0

  useEffect(()=> {
    let interval:number;
    if(activeCycle){
     interval = setInterval(()=>{
     const secondDifference = differenceInSeconds(
      new Date(),
      activeCycle.startDate
     )
    
    if(secondDifference >=totalSeconds ){
      setCycles(state => state.map((cycle)=> {
        if(cycle.id === activeCycleId){
          return { ...cycle, finished: new Date()}
        }else{
          return cycle
        }
      }),
    )
    setAmountSecondsPassed(totalSeconds)
    clearInterval(interval)
    }else{
      setAmountSecondsPassed(secondDifference)
    }
  },1000)
}
    return () => {
      clearInterval(interval)
    }

   
  },[activeCycle,totalSeconds,activeCycleId])
  return (
    <CountDownmContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownmContainer>
  );
}
