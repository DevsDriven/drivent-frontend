import useAsync from '../useAsync';
import useToken from '../useToken';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const token = useToken();
  const { userData } = useContext(UserContext);
  const userId = userData.user.id;

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket,
  } = useAsync(() => ticketApi.getTicket(token, userId));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket,
  };
}
