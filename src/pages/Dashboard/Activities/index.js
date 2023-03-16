import { useEffect, useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import RenderNotValidTicket from './Components/TicketInvalid';

export default function Activities() {
  const [ticketInvalid, setTicketInvalid] = useState({ invalid: true });
  const { ticket } = useTicket();

  useEffect(() => {
    function VerifyTicketIsInvalid(ticket) {
      if (ticket === null) {
        setTicketInvalid({ invalid: true, because: 'notPaid' });
      } else if (ticket.status !== 'PAID') {
        setTicketInvalid({ invalid: true, because: 'notPaid' });
      } else if (ticket.TicketType.includesHotel === false || ticket.TicketType.isRemote) {
        setTicketInvalid({ invalid: true, because: 'hotelNotInclude' });
      } else {
        setTicketInvalid({ invalid: false });
      }
    }
    VerifyTicketIsInvalid(ticket);
  }, [ticket]);

  return (
    <>
      <Title>Escolha de Atividades</Title>
      {ticketInvalid.invalid ? (
        <RenderNotValidTicket because={ticketInvalid.because} />
      ) : (
        <>
          <p>Em construção...</p>
        </>
      )}
    </>
  );
}

const Title = styled.div`
  & {
    font-size: 34px;
    line-height: 40px;

    margin-bottom: 30px;
  }
`;
