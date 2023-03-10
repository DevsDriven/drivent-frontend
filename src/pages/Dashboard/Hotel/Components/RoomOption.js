import styled from 'styled-components';

export default function RoomOption({ optionData }) {
  const { name, capacity } = optionData;
  return (
    <Clickbox>
      <RoomNumber>{name}</RoomNumber>
      <RoomCapacity>{capacity}</RoomCapacity>
    </Clickbox>
  );
}

const Clickbox = styled.div`
  font-family: "Roboto", "sans-serif";
  width: 190px;
  height: 45px;
  padding: 11px 16px;
  margin-bottom: 8px;
  margin-right: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #CECECE;
  border-radius: 10px;
`;

const RoomNumber = styled.h1``;

const RoomCapacity = styled.div``;
