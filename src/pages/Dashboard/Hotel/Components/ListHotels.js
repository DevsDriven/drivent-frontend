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
