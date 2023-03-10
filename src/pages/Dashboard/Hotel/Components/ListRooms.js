import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import RoomOption from './RoomOption';
import useRooms from '../../../../hooks/api/useRooms';

export default function ListRooms(props) {
  const { hotelId } = props;
  const { rooms } = useRooms(hotelId);
  const [roomsData, setRoomsData] = useState([]);
  
  useEffect(() => {
    if (rooms) {
      setRoomsData(rooms.Rooms);
      console.log(rooms);
    }
  }, [rooms]);

  return (
    <>
      <Title>Ótima pedida! Agora, escolha o seu quarto:</Title>
      {roomsData?.length ? (
        <Container>
          {roomsData.map((optionData, index) => {
            return <RoomOption key={index} optionData={optionData} />;
          })}
        </Container>
      ) : <></>}
    </>
  );
}

const Title = styled.h1`
  font-family: "Roboto", "sans-serif";
  margin-top: 33px;
  font-size: 20px;
  color: #8E8E8E;
`;

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-wrap: wrap;
`;
