import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentSelected, setPaymentSelected] = useState({
    ticketStatus: 'none',
    ticketId: null
  });
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    issuer: '',
    focus: '',
    formData: null,
  });

  return (
    <PaymentContext.Provider value={{ paymentSelected, setPaymentSelected, state, setState }}>
      {children}
    </PaymentContext.Provider>
  );
}

