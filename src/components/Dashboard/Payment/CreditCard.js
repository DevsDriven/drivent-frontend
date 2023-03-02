import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

const PaymentForm = () => {
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
