import { createContext, useState } from 'react';

const PaymentContext = createContext();
export default PaymentContext;

export function PaymentProvider({ children }) {
  const [paymentSelected, setPaymentSelected] = useState({});

  return (
    <PaymentContext.Provider value={{ paymentSelected, setPaymentSelected }}>
      {children}
    </PaymentContext.Provider>
  );
}

