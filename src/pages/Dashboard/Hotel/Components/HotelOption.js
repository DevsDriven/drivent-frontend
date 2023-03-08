import { useContext } from 'react';
import styled from 'styled-components';
import HotelContext from '../../../../contexts/HotelContext';

export default function HotelOption({ optionData }) {
  const { hotelSelected, setHotelSelected } = useContext(HotelContext);

  return(
    <Clickbox
      onClick={() => {
        setHotelSelected((existingValues) => ({
          ...existingValues,
          hotelId: optionData.id,
          image: optionData.image,
          name: optionData.name
        }));
      }}
      style={ hotelSelected?.hotelId === optionData.id ? { background: '#FFEED2' } : { background: '#EBEBEB' } }>
      <img src={optionData.image} alt={`Imagem do hotel ${optionData.name}`}/>
      <HotelName>{optionData.name}</HotelName>
      <InfoBox>
        <p>Tipos de acomodação:</p>
        <span>{hotelSelected?.accommodationTypes}</span>
        <p>Vagas disponíveis</p>
        <span>{hotelSelected?.vacancies}</span>
      </InfoBox>
    </Clickbox>
  );
};

const Clickbox = styled.div`
  width: 196px;
  height: 264px;
  border-radius: 10px;
  margin-right: 19px;
  padding: 16px 14px;

  display: flex;
  flex-direction: column;
  cursor: pointer;

  > img{
    width: 168px;
    height: 109px;
    border-radius: 5px;
    margin-botton: 10px;
  }
`;

const HotelName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  margin: 10px 0px;
  color: #343434;
`;

const InfoBox = styled.div`
  heigth: 106px;

  > p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;

    color: #3C3C3C;
  }

  > span{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #3C3C3C;
  }
`;
