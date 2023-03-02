import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentForm from '../../../../components/Dashboard/Payment/CreditCard';

export default function PaymentGateway() {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
    formData: null
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});
    setState({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
      formData: null
    });
    console.log(state);
  };

  return (
    <PaymentContainer>
      <PaymentLabel>Pagamento</PaymentLabel>
      <InformationContainer>
        <PaymentForm state={state} handleInputChange={handleInputChange} handleInputFocus={handleInputFocus} handleSubmit={handleSubmit} />
      </InformationContainer>
      <ConfirmButton>Finalizar Pagamento</ConfirmButton>
    </PaymentContainer>
  );
}

const PaymentContainer = styled.div``;

const PaymentLabel = styled.h1``;

const InformationContainer = styled.div``;

const ConfirmButton = styled.button``;
