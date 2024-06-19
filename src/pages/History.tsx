import { useContext } from "react";
import { CyclesContext } from "../contexts/CycleContext";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { ptBR } from "date-fns/locale";

export function History() {
  const { cycles } = useContext(CyclesContext);
  return (
    <main className="flex-1 flex-col px-12">
      <h1 className="text-white text-2xl my-5">Meu histórico</h1>
      <div className="overflow-auto h-96">
        <table className="table-auto w-full text-left border-separate border-spacing-y-1 min-w-[600px]">
          <thead className="bg-[#323238]">
            <tr>
              <th className="py-4 px-6 rounded-tl-lg">Tarefa</th>
              <th className="">Duração</th>
              <th className="">Início</th>
              <th className="rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody className="bg-[#29292E]">
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td className="py-4 px-6 my-6">{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.interruptedDate && (
                      <span className="before:content-[''] before:block before:size-2 before:bg-green-600 before:rounded-full flex items-center justify-start gap-2">
                        Concluido
                      </span>
                    )}
                    {cycle.finishedDate && (
                      <span className="before:content-[''] before:block before:size-2 before:bg-red-600 before:rounded-full flex items-center justify-start gap-2">
                        Interrompido
                      </span>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <span className="before:content-[''] before:block before:size-2 before:bg-yellow-600 before:rounded-full flex items-center justify-start gap-2">
                        Em andamento
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
