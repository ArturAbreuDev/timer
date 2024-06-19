import { Play, HandPalm } from "phosphor-react";
import { NewCircleForm } from "../components/NewCircleForm";
import { Countdown } from "../components/Countdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { useContext } from "react";
import { CyclesContext } from "../contexts/CycleContext";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const {createNewCycle, interruptedCycle, activeCycle} = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  const task = watch("task");
  const isSubmitDisable = !task;

  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data)
    reset()
  }



  return (
    <div className="w-full flex flex-col justify-center items-center my-7">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col gap-14"
      >
        <FormProvider {...newCycleForm}>
          <NewCircleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <button
            onClick={interruptedCycle}
            type="button"
            className={`disabled:opacity-85 ${
              activeCycle
                ? "bg-red-600"
                : "bg-emerald-600 enabled:hover:bg-[#015F43]"
            } transition-colors disabled:cursor-not-allowed flex px-8 py-4 gap-2  items-center w-full rounded-lg justify-center`}
          >
            <HandPalm size={24} /> Interromper{" "}
          </button>
        ) : (
          <button
            disabled={isSubmitDisable}
            type="submit"
            className={`disabled:opacity-85 ${
              activeCycle
                ? "bg-red-600"
                : "bg-emerald-600 enabled:hover:bg-[#015F43]"
            } transition-colors disabled:cursor-not-allowed flex px-8 py-4 gap-2  items-center w-full rounded-lg justify-center`}
          >
            <Play size={24} /> Começar
          </button>
        )}
      </form>
    </div>
  );
}
