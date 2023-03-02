import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';

const PaymentForm = (props) => {
  const { state, handleInputChange, handleInputFocus, handleSubmit } = props;

  return (
    <CardContainer id="PaymentForm">
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <Form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <h1>E.g.: 49..., 51..., 36..., 37...</h1>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <SensitiveInfoContainer>
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            pattern="\d{3,4}"
            required
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </SensitiveInfoContainer>
      </Form>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 700px;
  height: 225px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  div {
    margin: 0;
  }
`;

const Form = styled.form`
  height: 182px;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 360px;
    height: 48px;
    padding-left: 8px;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  input:focus {
    outline: none;
  }

  h1 {
    margin-top: 3px;
    font-family: 'Roboto', 'sans-serif';
    font-size: 12px;
    color: #e0e0e0;
  }
`;

const SensitiveInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;

  input {
    width: 170px;
  }
`;

export default PaymentForm;
