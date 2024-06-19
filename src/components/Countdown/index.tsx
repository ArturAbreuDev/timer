import { differenceInSeconds } from "date-fns";
import { useContext, useEffect } from "react";
import { CyclesContext } from "../../contexts/CycleContext";

export function Countdown() {
  const {
    activeCycle,
    markCycleAsFinished,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number;

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        );
        if (secondsDifference >= totalSeconds) {
          markCycleAsFinished();
          setSecondsPassed(totalSeconds);

          clearInterval(interval);
        } else {
          setSecondsPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCycleAsFinished,
    setSecondsPassed,
  ]);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes[0]}${minutes[1]}:${seconds[0]}${seconds[1]}`;
    }
  }, [activeCycle, minutes, seconds]);

  return (
    <div className="flex justify-center items-center gap-4 text-9xl font-bold font-RobotoMono">
      <span className="px-2 py-4 bg-slate-1000 shadow-md shadow-black">
        {minutes[0]}
      </span>
      <span className="px-2 py-4 bg-slate-1000 shadow-md shadow-black">
        {minutes[1]}
      </span>
      <span className="text-emerald-500 px-2 py-4">:</span>
      <span className="px-2 py-4 bg-slate-1000 shadow-md shadow-black">
        {seconds[0]}
      </span>
      <span className="px-2 py-4 bg-slate-1000 shadow-md shadow-black">
        {seconds[1]}
      </span>
    </div>
  );
}
