import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import RoomOption from './RoomOption';
import useRooms from '../../../../hooks/api/useRooms';
import useBooking from '../../../../hooks/api/useBooking';
import HotelContext from '../../../../contexts/HotelContext';
import { toast } from 'react-toastify';

export default function ListRooms(props) {
  const { hotelId, setIsBooking } = props;
  const { rooms } = useRooms(hotelId);
  const [roomsData, setRoomsData] = useState([]);
  const { roomSelected, setBooking } = useContext(HotelContext);
  const { postBooking } = useBooking();

  useEffect(() => {
    if (rooms) {
      setRoomsData(rooms.Rooms);
    }
  }, [rooms]);

  async function submitBooking() {
    const { roomId } = roomSelected;
    if (roomSelected.roomId === 0) {
      toast('Selecione um quarto para reserva!');
      return;
    }
    const booking = await postBooking(roomId);
    console.log(booking);
    const { bookingId } = booking;
    setBooking({
      bookingId: bookingId,
    });
    setIsBooking(true);
  }

  return (
    <>
      <Title>Ótima pedida! Agora, escolha o seu quarto:</Title>
      {roomsData?.length ? (
        <RoomsContainer>
          <Container>
            {roomsData.map((optionData, index) => {
              return <RoomOption key={index} optionData={optionData} />;
            })}
          </Container>
          <BookingButton onClick={submitBooking}>RESERVAR QUARTO</BookingButton>
        </RoomsContainer>
      ) : (
        <></>
      )}
    </>
  );
}

const Title = styled.h1`
  font-family: 'Roboto', 'sans-serif';
  margin-top: 33px;
  font-size: 20px;
  color: #8e8e8e;
`;

const RoomsContainer = styled.div``;

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-wrap: wrap;
`;

const BookingButton = styled.button`
  width: 182px;
  height: 37px;
  margin-top: 46px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: 0;
  font-family: 'Roboto', 'sans-serif',
  font-weight: 400;
  font-size: 14px;

  &:focus {
    outline: none;
  } 
`;
