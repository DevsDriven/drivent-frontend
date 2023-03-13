import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../../contexts/HotelContext';

export default function RoomOption({ optionData }) {
  const { name, capacity, Booking } = optionData;
  const { roomSelected, setRoomSelected } = useContext(HotelContext);
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (roomSelected.roomId === optionData.id) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [roomSelected]);

  useEffect(() => {
    if (Booking.length === capacity) {
      setDisabled(true);
    }
  }, [disabled]);

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
          <IconBox color={count} disabled={disabled}>
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
    <Clickbox onClick={selectRoom} selected={selected} disabled={disabled}>
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
  background-color: ${(props) => (props.selected ? '#FFEED2' : props.disabled ? '#E9E9E9' : '#FFFFFF')};
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};
`;

const RoomNumber = styled.h1``;

const IconContainer = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  margin-right: 5px;
  color: ${(props) => (props.color === 'selected' ? '#FF4791' : props.disabled ? '#8C8C8C' : '#000000')};
`;
