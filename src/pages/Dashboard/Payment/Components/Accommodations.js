import styled from 'styled-components';
import { useContext } from 'react';
import PaymentContext from '../../../../contexts/PaymentContext';
import ReserveConfirm from './ReserveComfirm';
import Clickbox from '../clickbox';

export default function RenderAccommodation({ value, data }) {
  const { paymentSelected } = useContext(PaymentContext);

  function RenderOptionsAccommodation({ data, paymentSelected }) {
    return (
      <Container>
        {data.options ?
          data.options.map((optionData, index) => {
            return <Clickbox type={data.type} optionData={{ ...optionData, price: (optionData.price - paymentSelected.ticket.price), ticketTypeId: optionData.id, id: index }} key={index}/>;
          }):
          <></>
        }
      </Container>
    );
  }

  return (
    <>
      {!paymentSelected?.ticket?.isRemote ? (
        <>
          <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
          <RenderOptionsAccommodation data={ data }  paymentSelected ={ paymentSelected } />
          {paymentSelected?.accommodation?.price >= 0 ?(
            <ReserveConfirm value={paymentSelected.accommodation.price + paymentSelected.ticket.price}/>
          ):(
            <></>
          )}
        </>
      ) : (
        <ReserveConfirm value={value}/>
      )}
    </>
  );
}

export const Container = styled.div`
     {
      display: flex;
      gap: 22px;
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
