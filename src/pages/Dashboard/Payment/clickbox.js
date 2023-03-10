import { useContext } from 'react';
import styled from 'styled-components';
import PaymentContext from '../../../contexts/PaymentContext';

export default function Clickbox({ optionData, type }) {
  const { paymentSelected, setPaymentSelected } = useContext(PaymentContext);

  return (
    <Container
      onClick={() => {
        setPaymentSelected((old) => {
          if (type === 'ticket' && optionData.id !== 1) return { ticket: optionData };

          const newer = { ...old };
          newer[type] = optionData;
          return newer;
        });
      }}
      style={paymentSelected[type]?.id === optionData.id ? { background: '#FFEED2' } : {}}
    >
      <Name>{optionData.price === 0 ? 'Sem Hotel' : `${optionData.name}`}</Name>
      <Price>{type === 'accommodation' ? `+ R$ ${optionData.price}` : `R$ ${optionData.price}`}</Price>
    </Container>
  );
}

export const Container = styled.div`
   {
    box-sizing: border-box;
    width: 145px;
    height: 145px;
    border: 1px solid #cecece;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Name = styled.div`
   {
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
`;

export const Price = styled.div`
   {
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #898989;
  }
`;
