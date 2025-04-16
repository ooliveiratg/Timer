import { HistoryContainer, HistoryList } from "./styled";

export function History() {
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
            <tr>
                <td>tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>concluido</td>
            </tr>
            <tr>
                <td>tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>concluido</td>

            </tr>
            <tr>
                <td>tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>concluido</td>

            </tr>
            <tr>
                <td>tarefa</td>
                <td>20 minutos</td>
                <td>há 2 meses</td>
                <td>concluido</td>

            </tr>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
