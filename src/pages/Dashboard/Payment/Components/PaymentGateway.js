import React, { useState, useEffect } from 'react';
import { getCardType } from 'react-credit-cards-2/lib/utils/cardHelpers';
import styled from 'styled-components';
import PaymentForm from '../../../../components/Dashboard/Payment/CreditCard';

export default function PaymentGateway() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    issuer: '',
    focus: '',
    formData: null,
  });

  useEffect(() => {
    if (state.number !== '') {
      const number = parseInt(state.number);
      const issuerName = getCardType(number);
      if (issuerName === 'unknown') {
        return;
      } else {
        setState({ ...state, issuer: issuerName });
      }
    }
  }, [state.number]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      issuer: '',
      focus: '',
      formData: null,
    });
    console.log(state);
  };

  return (
    <>
      <TicketInfoContainer>
        <h1>Ingresso escolhido</h1>
        <TicketReceipt>
          <h1>Tipo de evento + tipo de hotel</h1>
          <h2>Valor total</h2>
        </TicketReceipt>
      </TicketInfoContainer>
      <PaymentContainer>
        <PaymentLabel>Pagamento</PaymentLabel>
        <PaymentForm
          state={state}
          handleInputChange={handleInputChange}
          handleInputFocus={handleInputFocus}
          handleSubmit={handleSubmit}
        />
        <ConfirmButton onClick={handleSubmit}>Finalizar Pagamento</ConfirmButton>
      </PaymentContainer>
      <ReceiptContainer>
        <Icon></Icon>
        <>
          <h1>Pagamento confirmado!</h1>
          <h2>Prossiga para escolha de hospedagem e atividades</h2>
        </>
      </ReceiptContainer>
    </>
  );
}

const TicketInfoContainer = styled.div``;

const TicketReceipt = styled.div``;

const PaymentContainer = styled.div`
  width: 100%;
`;

const PaymentLabel = styled.h1`
  font-size: 20px;
  color: #8e8e8e;
`;

const ConfirmButton = styled.button`
  width: 182px;
  height: 37px;
  margin-top: 40px;
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: 0;
  border-radius: 4px;
  font-weight: 400;
  font-size: 14px;
`;

const ReceiptContainer = styled.div``;

const Icon = styled.img``;
