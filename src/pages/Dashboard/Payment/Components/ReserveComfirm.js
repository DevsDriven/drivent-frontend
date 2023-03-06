import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import PaymentContext from '../../../../contexts/PaymentContext';
import { toast } from 'react-toastify';
import useTicketUser from '../../../../hooks/api/useTicketUser';
import useTicket from '../../../../hooks/api/useTicket';

export default function ReserveConfirm({ value }) {
  const { paymentSelected, setPaymentSelected } = useContext(PaymentContext);
  const [paramsTicketTypeId, setParamsTicketTypeId] = useState(paymentSelected.ticket.ticketTypeId);
  const [loadingButton, setLoadingButton] = useState(false);
  const { createTicket } = useTicketUser();
  const { getTicket } = useTicket();

  function selectParamsFromTicketApi(paymentSelected) {
    if (!paymentSelected.ticket.isRemote) {
      setParamsTicketTypeId(paymentSelected.accommodation.ticketTypeId);
    }
  }

  useEffect(() => {
    selectParamsFromTicketApi(paymentSelected);
  }, [paymentSelected]);

  async function request(paramsTicketTypeId) {
    setLoadingButton(true);
    try {
      await createTicket({ ticketTypeId: paramsTicketTypeId });
      setLoadingButton(false);
      toast('Seu ingresso foi reservado');
      const ticket = await getTicket();
      setPaymentSelected({
        ...paymentSelected,
        ticketStatus: ticket.status,
        ticketId: ticket.id
      });
    } catch (error) {
      toast('Não foi possível reservar o seu ingresso!');
      setLoadingButton(false);
    }
  }

  return (
    <div>
      <SubmitContainer>
        <SubTitle>{`Fechado! O total ficou em R$ ${value}. Agora é só confirmar: `}</SubTitle>
        <button onClick={() => request(paramsTicketTypeId)} disabled={loadingButton}>
          RESERVAR INGRESSO
        </button>
      </SubmitContainer>
    </div>
  );
}

const SubmitContainer = styled.div`
  margin-top: 40px !important;
  width: 100% !important;

  > button {
    border: none;
    width: fit-content;
    height: 40px;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #9c9c9c;
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

