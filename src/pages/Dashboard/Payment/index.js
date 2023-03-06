import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Options from './options';
import PaymentContext from '../../../contexts/PaymentContext';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import RenderAccommodation from './Components/Accommodations';
import PaymentGateway from './Components/PaymentGateway';
import NoEnrollment from './noenrollment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [getTicketUser, setTicketUser] = useState(false);
  const { paymentSelected } = useContext(PaymentContext);
  const { ticketsType } = useTicketTypes();
  const [ticketData, setTicketData] = useState({
    type: 'ticket',
    options: []
  });
  const [accommodationData, setAccommodationData] = useState({
    type: 'accommodation',
    options: []
  });

  function ticketsTypesFilter() {
    const ticketOptionsFilter = [];

    if (ticketsType) {
      for (let i = 0; i < ticketsType.length; i++) {
        if (!ticketsType[i].isRemote && ticketsType[i].includesHotel) {
          continue;
        }
        else {
          ticketOptionsFilter.push(ticketsType[i]);
        }
      }
    }

    return ticketOptionsFilter;
  }

  function accommodationsFilter() {
    const accommodationOptionsFilter = [];

    if (ticketsType) {
      for (let j = 0; j < ticketsType.length; j++) {
        if (ticketsType[j].isRemote) {
          continue;
        } else {
          accommodationOptionsFilter.push(ticketsType[j]);
        }
      }
    }
    return accommodationOptionsFilter;
  }

  useEffect(() => {
    setTicketData(existingValues => ({
      ...existingValues,
      options: ticketsTypesFilter()
    }));
    setAccommodationData(existingValues => ({
      ...existingValues,
      options: accommodationsFilter()
    }));
  }, [ticketsType]);

  const { enrollment } = useEnrollment();

  if (!enrollment) {
    return <NoEnrollment />;
  }

  return (
    <Container>
      {!getTicketUser ? (
        <>
          <Title>Ingresso e pagamento</Title>
          <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
          <Options data={ticketData} />
          {paymentSelected?.ticket?.price ? (
            <RenderAccommodation value={paymentSelected.ticket.price} data={accommodationData} />
          ) : (
            <></>
          )}
        </>
      ) : (
        <PaymentGateway />
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
