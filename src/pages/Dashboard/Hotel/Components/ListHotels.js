import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotels from '../../../../hooks/api/useHotels';
import HotelOption from './HotelOption';

export default function ListHotels() {
  const { hotels } = useHotels();
  const [hotelsData, setHotelsData] = useState([]);

  useEffect(() => {
    setHotelsData(hotels);
  }, [hotels]);

  return (
    <>
      <Title>Primeiro, escolha seu hotel</Title>
      {hotelsData?.length ? (
        <OptionsContainer>
          {hotelsData.map((optionData, index) => {
            return <HotelOption key={index} optionData={optionData} />;
          })}
        </OptionsContainer>
      ) : (
        <>
          <p>Não foi possivel carregar a lista de hotéis</p>
        </>
      )}
    </>
  );
};

const OptionsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

const Title = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-top: 36px;
  margin-bottom:18px;

  color: #8E8E8E;
`;
