import useAsync from "../useAsync";
import useToken from '../useToken';

import * as ticketTypesApi from "../../services/ticketsTypesApi"

export default function useTicketTypes() {
    const token = useToken();

    const {
        data: ticketsType,
        loading: ticketTypeLoading,
        error: ticketTypeError,
        act: getTicketTypes
    } = useAsync(()=> ticketTypesApi.getTicketTypes(token));

    return {
        ticketsType,
        ticketTypeLoading,
        ticketTypeError,
        getTicketTypes
    };
}
