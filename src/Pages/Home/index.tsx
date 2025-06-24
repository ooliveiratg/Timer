import { HandPalm, Play } from "phosphor-react";

import {
  HomeContainer,
  StartCountDownmButton,
  StopCountDownmButton,
} from "./styled";
import { createContext, useState } from "react";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finished?: Date;
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSeccondsPassed: (seconds: number) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "informe a tarefa"),
    MinutesAmount: zod.number().min(1).max(60),
  });

  function setSeccondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    //aqui eu passo o valor inicial de cada campo
    defaultValues: {
      task: "",
      MinutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finished: new Date() };
        } else {
          return cycle;
        }
      })
    );
  }

  function handleInterriptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );
    setActiveCycleId(null);
  }

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());
    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.MinutesAmount,
      startDate: new Date(),
    };

    setCycles(() => [...cycles, newCycle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  console.log(cycles);
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action={""}>
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSeccondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountDownmButton onClick={handleInterriptCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountDownmButton>
        ) : (
          <StartCountDownmButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountDownmButton>
        )}
      </form>
    </HomeContainer>
  );
}
