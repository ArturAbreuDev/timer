import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducers";
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from "../reducers/cycles/actions";

export interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextTypes {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCycleAsFinished: () => void;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptedCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextTypes);

interface CycleContextType {
  children: ReactNode;
}

export function CycleContextProvider({ children }: CycleContextType) {
  const [cycleState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initalState) => {
      const storedStateJson = localStorage.getItem(
        "@ignite-timer:cycles-state-1.0.0"
      );

      if (storedStateJson) {
        return JSON.parse(storedStateJson);
      }

      return initalState;
    }
  );

  useEffect(() => {
    const stateJson = JSON.stringify(cycleState);

    localStorage.setItem("@ignite-timer:cycles-state-1.0.0", stateJson);
  }, [cycleState]);

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { activeCycleId, cycles } = cycleState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    dispatch(addNewCycleAction(newCycle));
    setAmountSecondsPassed(0);

    // reset();
  }

  function interruptedCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        markCycleAsFinished,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptedCycle,
        cycles,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
