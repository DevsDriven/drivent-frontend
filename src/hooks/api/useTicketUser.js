import useAsync from '../useAsync';
import useToken from '../useToken';

import * as tickesTypesApi from '../../services/ticketsTypesApi';

export default function useTicketUser() {
  const token = useToken();

  const {
    loading: TicketLoading,
    error: TicketError,
    act: createTicket
  } = useAsync((data) => tickesTypesApi.postTicket(data, token), false);

  return {
    TicketLoading,
    TicketError,
    createTicket
  };
}
