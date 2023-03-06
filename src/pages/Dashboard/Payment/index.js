import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Options from './options';
import PaymentContext from '../../../contexts/PaymentContext';
import useTicketTypes from '../../../hooks/api/useTicketTypes';
import RenderAccommodation from './Components/Accommodations';
import PaymentGateway from './Components/PaymentGateway';
import useTicket from '../../../hooks/api/useTicket';
import TicketReceipt from './Components/TicketReceipt';
import { BsCheckCircle } from 'react-icons/bs';
import NoEnrollment from './noenrollment';
import useEnrollment from '../../../hooks/api/useEnrollment';

export default function Payment() {
  const [ticketStatus, setTicketStatus] = useState({ ticketStatus: 'none' });
  const { paymentSelected, setPaymentSelected } = useContext(PaymentContext);
  const { ticketsType } = useTicketTypes();
  const [ticketData, setTicketData] = useState({
    type: 'ticket',
    options: [],
  });
  const [accommodationData, setAccommodationData] = useState({
    type: 'accommodation',
    options: [],
  });
  const { getTicket } = useTicket();
  const [ticketInfo, setTicketInfo] = useState({});

  function ticketsTypesFilter() {
    const ticketOptionsFilter = [];

    if (ticketsType) {
      for (let i = 0; i < ticketsType.length; i++) {
        if (!ticketsType[i].isRemote && ticketsType[i].includesHotel) {
          continue;
        } else {
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
    setTicketData((existingValues) => ({
      ...existingValues,
      options: ticketsTypesFilter(),
    }));
    setAccommodationData((existingValues) => ({
      ...existingValues,
      options: accommodationsFilter(),
    }));
  }, [ticketsType]);

  useEffect(async() => {
    const ticket = await getTicket();
    setTicketInfo(ticket);
    setTicketStatus({ ticketStatus: ticket.status });
  }, [paymentSelected]);
  const { enrollment } = useEnrollment();

  if (!enrollment) {
    return <NoEnrollment />;
  }

  return (
    <Container>
      <Title>Ingresso e pagamento</Title>
      {ticketStatus.ticketStatus === 'none' && (
        <>
          <SubTitle>Primeiro, escolha sua modalidade de ingresso</SubTitle>
          <Options data={ticketData} />
          {paymentSelected?.ticket?.price ? (
            <RenderAccommodation value={paymentSelected.ticket.price} data={accommodationData} />
          ) : (
            <></>
          )}
        </>
      )}
      {ticketStatus.ticketStatus === 'RESERVED' && (
        <>
          <TicketReceipt ticket={ticketInfo} />
          <PaymentGateway />
        </>
      )}
      {ticketStatus.ticketStatus === 'PAID' && (
        <>
          <TicketReceipt ticket={ticketInfo} />
          <PaymentTitle>Pagamento</PaymentTitle>
          <ReceiptContainer>
            <BsCheckCircle />
            <ReceiptTextConfirm>
              <h2>Pagamento confirmado!</h2>
              <h3>Prossiga para escolha de hospedagem e atividades</h3>
            </ReceiptTextConfirm>
          </ReceiptContainer>
        </>
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

const PaymentTitle = styled.h1`
  margin-bottom: 19px;
  font-size: 20px;
  color: #8E8E8E;
`;

const ReceiptContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 20px;
    color: #8E8E8E;
  }

  svg {
    fill: green;
    height: 44px;
    width: 44px;
  }
`;

const ReceiptTextConfirm = styled.div`
  margin-left: 12px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: #454545;
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    color: #454545;
  }
`;
