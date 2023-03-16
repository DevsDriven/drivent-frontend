import { useContext, useEffect, useState } from 'react';
import useTicket from '../../../hooks/api/useTicket';
import styled from 'styled-components';
import RenderNotValidTicket from './Components/TicketInvalid';
import ListHotels from './Components/ListHotels';
import HotelContext from '../../../contexts/HotelContext';
import ListRooms from './Components/ListRooms';
import useBooking from '../../../hooks/api/useBooking';

export default function Hotel() {
  const [ticketInvalid, setTicketInvalid] = useState({ invalid: true });
  const { ticket } = useTicket();
  const { hotelSelected, booking, setBooking } = useContext(HotelContext);
  const { hotelId } = hotelSelected;
  const [isBooking, setIsBooking] = useState(false);
  const { getBooking } = useBooking();

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

  useEffect(async() => {
    const userBooking = await getBooking();
    if (!userBooking) {
      return;
    }
    const bookingId = userBooking.id; 
    if (bookingId !== booking.bookingId) {
      setIsBooking(true);
      setBooking({ bookingId });
    }
  }, [booking]);

  if (isBooking === false) {
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
            {hotelId !== 0 && <ListRooms key={hotelId} hotelId={hotelId} setIsBooking={setIsBooking} />}
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <Title>Você já escolheu seu quarto </Title>
        <h1>Container do resumo do booking</h1>
        <button>Trocar de quarto</button>
      </>
    );
  }
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
