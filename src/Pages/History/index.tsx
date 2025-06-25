import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styled";
import { CyclesContext } from "../../contexts/CyclesContext";
import {formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'

export function History() {
  const {cycles} = useContext(CyclesContext);
  return (
    <HistoryContainer>
      <h1>history</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => {
              return(
              <tr key={cycle.id}>
              <td>{cycle.task}</td>
              <td>{cycle.minutesAmount} minutos</td>
              <td>{formatDistanceToNow(cycle.startDate,{
                addSuffix: true,
                locale: ptBR,
              })}</td>
              <td>{cycle.finished && (
                <Status statusColor="green">Concluido</Status>)}
                
                {cycle.interruptedDate && (
                <Status statusColor="red">Interrompido</Status>)}

                {(!cycle.finished && !cycle.interruptedDate) && (
                <Status statusColor="yellow">Andamento</Status>)}
                
                </td>
            </tr>
            )})}
          </tbody>
          
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
