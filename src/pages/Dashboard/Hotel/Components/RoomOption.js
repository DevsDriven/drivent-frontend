import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../../contexts/HotelContext';

export default function RoomOption({ optionData }) {
  const { name, capacity, Booking } = optionData;
  const { roomSelected, setRoomSelected } = useContext(HotelContext);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (roomSelected.roomId === optionData.id) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [roomSelected]);

  function RoomCapacity() {
    let bookings = Booking.length;
    let arr = [];
    let selectCount = 0;
    if (selected === true) {
      selectCount = 1;
    }
    for (let i = 0; i < capacity; i++) {
      if (i < bookings) {
        arr.push('booked');
      } else if (selectCount === 1) {
        arr.push('selected');
        selectCount = 0;
      } else {
        arr.push('free');
      }
    }
    arr.reverse();
    const roomCount = arr;

    return (
      <IconContainer selected={selected}>
        {roomCount.map((count) => (
          <IconBox color={count}>
            {count === 'booked' && <ion-icon name="person"></ion-icon>}
            {count === 'free' && <ion-icon name="person-outline"></ion-icon>}
            {count === 'selected' && <ion-icon name="person"></ion-icon>}
          </IconBox>
        ))}
      </IconContainer>
    );
  }

  function selectRoom() {
    setRoomSelected((existingValues) => ({
      ...existingValues,
      roomId: optionData.id,
      name,
    }));
  }

  return (
    <Clickbox onClick={selectRoom} color={optionData.id}>
      <RoomNumber>{name}</RoomNumber>
      <RoomCapacity key={optionData.id} />
    </Clickbox>
  );
}

const Clickbox = styled.div`
  font-family: 'Roboto', 'sans-serif';
  width: 190px;
  height: 45px;
  padding: 11px 16px;
  margin-bottom: 8px;
  margin-right: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cecece;
  border-radius: 10px;
  background-color: $(props => props.color === roomSelected.roomId ? '#FFEED2': '#FFFFFF');
`;

const RoomNumber = styled.h1``;

const IconContainer = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  color: ${(props) => (props.color === 'selected' ? '#FF4791' : '#000000')};
`;
