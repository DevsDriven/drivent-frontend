import { useContext } from 'react';
import styled from 'styled-components';
import Options from './options';
import PaymentContext from '../../../contexts/PaymentContext';

export default function Payment() {
  const { paymentSelected } = useContext(PaymentContext);

  const ticketData = {
    type: 'ticket',
    options: [
      { name: 'Presencial', price: 250 },
      { name: 'Online', price: 100 },
    ],
  };

  /*  const accommodationData = {
    type: 'accommodation',
    options: [
      { name: 'Sem Hotel', price: 0 },
      { name: 'Com Hotel', price: 350 },
    ],
  }; */

  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
      <Options data={ticketData} />
      {paymentSelected?.ticket?.id === 0 ? (
        <>     
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

export const Container = styled.div`
   {
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
  }
`;

export const Title = styled.div`
   {
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;

export const SubTitle = styled.div`
   {
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin-bottom: 10px;
  }
`;
