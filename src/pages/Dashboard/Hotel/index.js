import { useEffect, useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import RenderNotValidTicket from './Components/TicketInvalid';

export default function Hotel() {
  const [ticketInvalid, setTicketInvalid] = useState({ invalid: true, because: '' });
  const { ticket } = useTicket();

  useEffect(() => {
    function VerifyTicketIsInvalid(ticket) {
      if(ticket === null) return;
      if(ticket.status !== 'PAID') {
        setTicketInvalid({ invalid: true, because: 'notPaid' });
        if(ticket.TicketType.includesHotel === false) {
          setTicketInvalid({ invalid: true, because: 'hotelNotInclude' });
        }
        return;
      }
      else{
        setTicketInvalid({ invalid: false, because: '' });
        return;
      }
    };
    VerifyTicketIsInvalid(ticket);
  }, [ticket]);

  return (
    <>
      <Title>Escolha de Hotel e quarto</Title>
      {ticketInvalid.invalid ? (
        <RenderNotValidTicket because={ticketInvalid.because}/>
      ) : (
        <Container>
          <p>Lista de Hotel em breve</p>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
   {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
  }
`;

const Title = styled.div`
  & {
    font-size: 34px;
    line-height: 40px;

    margin-bottom: 30px;
  }
`;
