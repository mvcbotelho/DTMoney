import { useEffect } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((responde) => console.log(responde.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>13/02/2021</td>
          </tr>
          <tr>
            <td>Pagamento da casa</td>
            <td className="withdraw">- R$1.000,00</td>
            <td>Aluguel</td>
            <td>08/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
