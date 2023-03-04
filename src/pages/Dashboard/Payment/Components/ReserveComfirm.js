import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import PaymentContext from '../../../../contexts/PaymentContext';
import { toast } from 'react-toastify';
import useTicketUser from '../../../../hooks/api/useTicketUser';

export default function ReserveConfirm({ value }) {
  const { paymentSelected } = useContext(PaymentContext);
  const [paramsTicketTypeId, setParamsTicketTypeId] = useState(paymentSelected.ticket.ticketTypeId);
  const [loadingButton, setLoadingButton] = useState(false);
  const { createTicket } = useTicketUser();

  function selectParamsFromTicketApi(paymentSelected) {
    if(!paymentSelected.ticket.isRemote) {
      setParamsTicketTypeId(paymentSelected.accommodation.ticketTypeId);
    };
  };

  useEffect(() => {
    selectParamsFromTicketApi(paymentSelected);
  }, [paymentSelected]);

  async function request(paramsTicketTypeId) {
    setLoadingButton(true);
    try {
      await createTicket({ ticketTypeId: paramsTicketTypeId });
      setLoadingButton(false);
      toast('Seu ingresso foi reservado');
    } catch (error) {
      toast('Não foi possível reservar o seu ingresso!');
      setLoadingButton(false);
    }
  };

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
  margin-top: 40px!important;
  width: 100%!important;

  > button {
    width: 162px;
    height: 37px;
    margin-top: 15px !important;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #9C9C9C;
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
