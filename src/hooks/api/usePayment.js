import useToken from '../useToken';
import * as paymentApi from '../../services/paymentApi';

export default function usePayment() {
  const token = useToken();
  console.log(token);

  function postPayment(state, paymentSelected) {
    const payment = paymentApi.paymentProcess(token, state, paymentSelected);

    return payment;
  }
  return { postPayment };
}
