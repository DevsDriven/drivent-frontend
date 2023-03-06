import styled from 'styled-components';

export default function TicketReceipt(props) {
  const { ticket } = props;
  return (
    <TicketInfoContainer>
      <h1>Ingresso escolhido</h1>
      <TicketReceiptContainer>
        <h2>{ticket.TicketType.name}</h2>
        <h3>R$ {ticket.TicketType.price}</h3>
      </TicketReceiptContainer>
    </TicketInfoContainer>
  );
}

const TicketInfoContainer = styled.div`
  h1 {
    margin-bottom: 17px;
    font-size: 20px;
    color: #8E8E8E;
  }

  h2 {
    font-size: 16px;
    color: #454545;
  }

  h3 {
    font-size: 14px;
    color: #898989;
  }
`;

const TicketReceiptContainer = styled.div`
  width: 290px;
  height: 108px;
  margin-bottom: 30px;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFEED2;
  border-radius: 20px;
`;
