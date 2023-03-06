import api from './api';

export async function getTicket(token, userId) {
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });

  console.log(response);
  return response.data;
}
