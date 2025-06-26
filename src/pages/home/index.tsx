import { HandPalm, Play } from "phosphor-react";

import {
  HomeContainer,
  StartCountDownmButton,
  StopCountDownmButton,
} from "./styled";

import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";

export function Home() {

  const {createNewCycle,interruptCycle,activeCycle} = useContext(CyclesContext)
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(5, "informe a tarefa"),
    minutesAmount: zod.number().min(5).max(60),
  });

    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    //aqui eu passo o valor inicial de cada campo
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()

  }




  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action={""}>
       
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />

        {activeCycle ? (
          <StopCountDownmButton onClick={interruptCycle} type="button">
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
