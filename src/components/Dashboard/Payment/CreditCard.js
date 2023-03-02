import React from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

const PaymentForm = (props) => {
  const { state, handleInputChange, handleInputFocus, handleSubmit } = props;
  
  return (
    <div id="PaymentForm">
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} focused={state.focus} />
      <form onSubmit={handleSubmit} >
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          pattern='[\d| ]{16,22}'
          required
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          required
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type='tel'
          name='expiry'
          placeholder='Valid Thru'
          pattern='\d\d/\d\d'
          required
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type='tel'
          name='cvc'
          placeholder='CVC'
          pattern='\d{3,4}'
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default PaymentForm;
