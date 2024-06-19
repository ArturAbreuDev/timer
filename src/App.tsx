import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CycleContextProvider } from "./contexts/CycleContext";

export function App() {
  return (
    <BrowserRouter>
      <CycleContextProvider>
        <Router />
      </CycleContextProvider>
    </BrowserRouter>
  );
}
