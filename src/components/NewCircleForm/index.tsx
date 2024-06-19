import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../contexts/CycleContext";

export function NewCircleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const {register} = useFormContext()

  return (
    <div className="flex gap-2 font-bold text-base drop-shadow-md text-zinc-200">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        className="bg-transparent disabled:cursor-not-allowed focus:border-emerald-600 transition-colors px-1 border-b-2 text-sm w-52 border-[#7C7C8A] text-[#7C7C8A] outline-none appearance-none"
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register("task")}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Sugestao 1" />
        <option value="Sugestao 2" />
        <option value="Sugestao 3" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <input
        className="bg-transparent disabled:cursor-not-allowed focus:border-emerald-600 transition-colors border-b-2 w-16 flex justify-center px-1 outline-none items-center border-[#7C7C8A] text-[#7C7C8A]"
        type="number"
        id="minutesAmount"
        placeholder="- 00 +"
        step={5}
        max={60}
        min={5}
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />
      <span>minutos</span>
    </div>
  );
}
