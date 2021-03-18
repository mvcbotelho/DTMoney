import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface OpenModal {
  openModal: () => void;
}

export function Header({ openModal }: OpenModal) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money logo" />
        <button type="button" onClick={openModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
