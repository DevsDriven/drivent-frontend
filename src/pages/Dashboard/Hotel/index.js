import { useContext, useEffect, useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import RenderNotValidTicket from './Components/TicketInvalid';
import ListHotels from './Components/ListHotels';
import HotelContext from '../../../contexts/HotelContext';
import ListRooms from './Components/ListRooms';

export default function Hotel() {
  const [ticketInvalid, setTicketInvalid] = useState({ invalid: true });
  const { ticket } = useTicket();
  const { hotelSelected } = useContext(HotelContext);
  const { hotelId } = hotelSelected;

  useEffect(() => {
    function VerifyTicketIsInvalid(ticket) {
      if (ticket === null) return;
      if (ticket.status !== 'PAID') {
        setTicketInvalid({ invalid: true, because: 'notPaid' });
      } else if (ticket.TicketType.includesHotel === false || ticket.TicketType.isRemote) {
        setTicketInvalid({ invalid: true, because: 'hotelNotInclude' });
      } else {
        setTicketInvalid({ invalid: false });
      }
    }
    VerifyTicketIsInvalid(ticket);
  }, [ticket]);

  if (ticket === null) {
    return <>Carregando...</>;
  }

  return (
    <>
      <Title>Escolha de Hotel e quarto</Title>
      {ticketInvalid.invalid ? (
        <RenderNotValidTicket because={ticketInvalid.because} />
      ) : (
        <>
          <Container>
            <ListHotels />
          </Container>
          {hotelId !== 0 && <ListRooms key={hotelId} hotelId={hotelId} />}
        </>
      )}
    </>
  );
}

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
