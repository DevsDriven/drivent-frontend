import React, { useEffect, useContext } from 'react';
import { getCardType } from 'react-credit-cards-2/lib/utils/cardHelpers';
import styled from 'styled-components';
import PaymentForm from '../../../../components/Dashboard/Payment/CreditCard';
import usePayment from '../../../../hooks/api/usePayment';
import PaymentContext from '../../../../contexts/PaymentContext';
import useTicket from '../../../../hooks/api/useTicket';

export default function PaymentGateway() {
  const { state, setState, paymentSelected, setPaymentSelected } = useContext(PaymentContext);
  const { postPayment } = usePayment();
  const { getTicket } = useTicket();

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
    const payment = postPayment(state, paymentSelected);
    const ticket = getTicket();
    setPaymentSelected({
      ...paymentSelected,
      ticketStatus: ticket.status,
    });
    setState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      issuer: '',
      focus: '',
      formData: null,
    });
  };

  return (
    <>
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
