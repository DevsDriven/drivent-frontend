import api from './api';

export async function paymentProcess(token, state, paymentSelected) {
  const ticketId = paymentSelected.ticketId;
  const cardData = {
    issuer: state.issuer,
    number: state.number,
  };
  const body = {
    ticketId,
    cardData
  };
  console.log(ticketId);
  console.log(body);
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(response.data);
  return response.data;
}
