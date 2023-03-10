import styled from "styled-components";

export default function PurchaseInfo({ ticketInfo }) {
  function formatCPF(cpf) {
    const cpfArray = cpf.split("");
    cpfArray.splice(9, 0, "-");
    cpfArray.splice(6, 0, ".");
    cpfArray.splice(3, 0, ".");
    return cpfArray.join("");
  }

  return (
    <>
      <TextContainer data-test="movie-info">
        <strong>
          <p>Filme e sessão</p>
        </strong>
        <p>{ticketInfo.movie.movie.title}</p>
        <p>
          {ticketInfo.movie.day.date} - {ticketInfo.movie.name}
        </p>
      </TextContainer>

      <TextContainer data-test="seats-info">
        <strong>
          <p>Ingressos</p>
        </strong>
        {ticketInfo.selected.map((seatChosen) => (
          <p key={seatChosen.name}>Assento {seatChosen.name}</p>
        ))}
      </TextContainer>

      <TextContainer data-test="client-info">
        <strong>
          <p>Comprador</p>
        </strong>
        {ticketInfo.buyerInfo.compradores.map((buyer) => (
          <div key={buyer.cpf}>
            <p>Nome: {buyer.nome}</p>
            <p>CPF: {formatCPF(buyer.cpf)}</p>
          </div>
        ))}
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  strong {
    font-weight: bold;
    margin-bottom: 10px;
  }
  div {
    margin-bottom:15px;
  }
`;
